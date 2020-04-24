import { Logger, Cache, NodeHash, Request, ResponseSubject, CancelWatch, CacheResponse, Resource } from '../../types'
import { IdHash, StatusInfo, ResponseWatch } from './status'
import Snapshot from './snapshot'

// create a map from list of resource names (provided in request)
const nameSet = ( names: string[] ): {[name: string]: boolean} => {
  const set: {[name: string]: boolean} = {}
  for ( const name of names ) {
    set[name] = true
  }

  return set
}

// checks that all resources are listed in the names set
// throws error if not matched
const superSet = ( names: {[name: string]: boolean}, resources: {[name: string]: Resource}): void => {
  for ( const name in resources ) {
    if ( !names[name] ) {
      throw new Error( `${name} not listed` )
    }
  }
}

// create cache response to request with provided resources (messages)
const createResponse = ( request: Request, resources: {[name: string]: Resource}, version: string ): CacheResponse => {
  const resourceNames = request.getResourceNamesList()
  const filtered: Resource[] = []

  // Reply only with the requested resources. Envoy may ask each resource
  // individually in a separate stream. It is ok to reply with the same version
  // on separate streams since requests do not share their response versions.
  if ( resourceNames.length > 0 ) {
    const set = nameSet( resourceNames )
    for ( const name in resources ) {
      const resource = resources[name]
      if ( set[name] ) {
        filtered.push( resource )
      }
    }
  } else {
    for ( const resource of Object.values( resources ) ) {
      filtered.push( resource )
    }
  }

  return {
    request,
    version,
    resources: filtered
  }
}


export class SnapshotCache implements Cache {
  ads: boolean
  snapshots: {[key: string]: Snapshot}
  status: {[key: string]: StatusInfo}
  hash: NodeHash
  logger: null | Logger
  watchCount: number;

  constructor( ads: boolean, hash: NodeHash = IdHash, logger: null | Logger = null ) {
    this.ads = ads
    this.snapshots = {}
    this.status = {}
    this.hash = hash
    this.logger = logger
    this.watchCount = 0
  }

  setSnapshot( node: string, snapshot: Snapshot ): void {
    // put in memory
    this.snapshots[node] = snapshot

    // trigger existing watches
    const info = this.status[node]

    if ( info ) {
      for ( const id in info.watches ) {
        const watch = info.watches[id]
        const version = snapshot.getVersion( watch.request.getTypeUrl() )
        if ( version != watch.request.getVersionInfo() ) {
          this.respond( watch.request, watch.response, snapshot.getResources( watch.request.getTypeUrl() ), version )
          // discard the watch
          delete info.watches[id]
        }
      }
    }
  }

  getSnapshot( node: string ): null | Snapshot {
    const snapshot = this.snapshots[node]

    if ( !snapshot ) {
      return null
    }

    return snapshot
  }

  clearSnapshot( node: string ): void {
    delete this.snapshots[node]
    delete this.status[node]
  }

  createWatch( request: Request, subject: ResponseSubject ): null | CancelWatch {
    const node = request.getNode()
    const nodeId = this.hash.Id( node )

    // get or set status
    let info = this.status[nodeId]
    if ( !info ) {
      info = new StatusInfo( node )
      this.status[nodeId] = info
    }

    // set last watch time
    info.touch()

    const snapshot = this.snapshots[nodeId]
    const version = snapshot ? snapshot.getVersion( request.getTypeUrl() ) : ''

    if ( !snapshot || request.getVersionInfo() == version ) {
      const watchId = this.nextWatchId()
      if ( this.logger ) {
        this.logger.info(
          `Open watch ${watchId}`,
          `Node=${node && node.getId()}`,
          `T=${request.getTypeUrl()}`,
          `V=${request.getVersionInfo()}`,
          request.getResourceNamesList()
        )
      }

      info.addWatch( watchId, new ResponseWatch( request, subject ) )

      return this.cancelWatch( nodeId, watchId )
    }

    // otherwise respond to watch (subject) immediately
    const resources = snapshot.getResources( request.getTypeUrl() )
    this.respond( request, subject, resources, version )

    return null
  }

  nextWatchId(): number {
    this.watchCount++

    return this.watchCount
  }

  cancelWatch( nodeId: string, watchId: number ): CancelWatch {
    return (): void => {
      const info = this.status[nodeId]
      info.deleteWatch( watchId )
    }
  }

  respond( request: Request, subject: ResponseSubject, resources: {[name: string]: Resource}, version: string ): void {
    const resourceNames = request.getResourceNamesList()
    // for ADS, the request names must match the snapshot names
    // if they do not, then the watch is never responded, and it is expected that envoy makes another request
    if ( resourceNames.length > 0 && this.ads ) {
      try {
        superSet( nameSet( resourceNames ), resources )
      } catch ( e ) {
        if ( this.logger ) {
          this.logger.debug( `ADS mode: not responding to request: ${e.message}` )
        }

        return
      }
    }

    // emit to subject
    subject.next( createResponse( request, resources, version ) )
  }

  fetch( request: Request ): CacheResponse {
    const node = request.getNode()
    if ( !node ) {
      throw new Error( 'Node missing in request' )
    }

    const nodeId = this.hash.Id( node )

    const snapshot = this.snapshots[nodeId]
    const version = snapshot ? snapshot.getVersion( request.getTypeUrl() ) : ''

    if ( snapshot ) {
      // Respond only if the request version is distinct from the current snapshot state.
      if ( request.getVersionInfo() == version ) {
        if ( this.logger ) {
          this.logger.warn( 'skip fetch: version up to date' )
        }
        throw new Error( 'skip fetch: version up to date' )
      }

      const resources = snapshot.getResources( request.getTypeUrl() )

      return createResponse( request, resources, version )
    }

    throw new Error( `missing snapshot for ${nodeId}` )
  }
}

export default SnapshotCache
