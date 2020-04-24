import { Resource, Resources } from '../../types'
import { getResourceName, getResponseType, ResponseType } from './resource'

const indexResourcesByName = ( items: Resource[] ): {[key: string]: Resource} => {
  const indexed: {[key: string]: Resource} = {}

  for ( const item of items ) {
    indexed[ getResourceName( item ) ] = item
  }

  return indexed
}

const newResources = ( version: string, items: Resource[] ): Resources => {
  return {
    version,
    items: indexResourcesByName( items )
  }
}

export class Snapshot {
  version: string;
  resources: {
    [key: number]: Resources;
  }

  constructor(
    version: string,
    endpoints: Resource[] = [],
    clusters: Resource[] = [],
    routes: Resource[] = [],
    listeners: Resource[] = [],
    runtimes: Resource[] = []
  ) {
    this.version = version
    this.resources = {}
    this.resources[ResponseType.Endpoint] = newResources( version, endpoints )
    this.resources[ResponseType.Cluster] = newResources( version, clusters )
    this.resources[ResponseType.Route] = newResources( version, routes )
    this.resources[ResponseType.Listener] = newResources( version, listeners )
    this.resources[ResponseType.Runtime] = newResources( version, runtimes )
  }

  // get resources by type
  getResources( typeURL: string ): {[key: string]: Resource} {
    const t = getResponseType( typeURL )
    if ( t == ResponseType.UnknownType ) {
      return {}
    }

    return this.resources[t].items
  }

  // Get snapshot version for resource type
  getVersion( typeURL: string ): string {
    const t = getResponseType( typeURL )
    if ( t == ResponseType.UnknownType ) {
      return ''
    }

    return this.resources[t].version
  }
}

export default Snapshot
