import { Subject } from 'rxjs'
import * as grpc from 'grpc'
import { Any } from 'google-protobuf/google/protobuf/any_pb'
import { DiscoveryRequest, DiscoveryResponse, DeltaDiscoveryRequest, DeltaDiscoveryResponse } from '../../../lib/envoy/api/v2/discovery_pb'
import { Cache, Logger, ServerStreamValues, CacheResponse } from '../../types'
import * as resourceTypes from '../cache/resource'

const createResponse = ( cacheResponse: CacheResponse, typeURL: string ): DiscoveryResponse => {
  const { version, resources } = cacheResponse

  // build discovery response
  const response = new DiscoveryResponse()
  response.setVersionInfo( version.toString() )
  response.setTypeUrl( typeURL )
  const packedResources = resources.map( ( msg ) => {
    // for each resource, great a google protobuf Any buffer message
    const any = new Any()
    const packType = typeURL.replace( 'type.googleapis.com/', '' )
    // pack cluster load assignment message into any
    any.pack( msg.serializeBinary(), packType )

    return any
  })
  response.setResourcesList( packedResources )

  return response
}

export class Server {
  cache: Cache;
  logger: null | Logger;

  constructor( cache: Cache, logger: null | Logger = null ) {
    this.cache = cache
    this.logger = logger
  }

  process( call: grpc.ServerDuplexStream<DiscoveryRequest, DiscoveryResponse>, defaultTypeURL: string ): void {
    const { cache, logger } = this
    // unique nonce generator for req-resp pairs per xDS stream; the server
    // ignores stale nonces. nonce is only modified within send() function.
    let streamNonce = 0

    // initialize server stream values
    const values: ServerStreamValues = {
      endpoints: new Subject(),
      clusters: new Subject(),
      routes: new Subject(),
      listeners: new Subject(),
      secrets: new Subject(),
      runtimes: new Subject(),

      endpointCancel: null,
      clusterCancel: null,
      routeCancel: null,
      listenerCancel: null,
      secretCancel: null,
      runtimeCancel: null,

      endpointNonce: 0,
      clusterNonce: 0,
      routeNonce: 0,
      listenerNonce: 0,
      secretNonce: 0,
      runtimeNonce: 0
    }

    // sends a serialized protobuf response
    const send = ( response: CacheResponse, typeURL: string ): number => {
      // create DiscoveryResponse from cache service response
      const out = createResponse( response, typeURL )
      // increment nonce
      streamNonce++
      out.setNonce( streamNonce.toString() )

      // log
      if ( logger ) {
        const { request } = response
        const node = request.getNode()
        logger.info(
          '--RESPONSE--',
          `Node=${node && node.getId()}`,
          `T=${typeURL}`,
          `V=${out.getVersionInfo()}`,
          `N=${streamNonce.toString()}`,
          request.getResourceNamesList()
        )
      }

      // write to stream
      call.write( out )

      return streamNonce
    }

    // subscribe observers to subjects
    values.endpoints.subscribe( ( response ) => {
      values.endpointNonce = send( response, resourceTypes.EndpointType )
    })
    values.clusters.subscribe( ( response ) => {
      values.clusterNonce = send( response, resourceTypes.ClusterType )
    })
    values.routes.subscribe( ( response ) => {
      values.routeNonce = send( response, resourceTypes.RouteType )
    })
    values.listeners.subscribe( ( response ) => {
      values.listenerNonce = send( response, resourceTypes.ListenerType )
    })

    // On data received on stream
    call.on( 'data', async ( request: DiscoveryRequest ) => {
      // get request type url
      let typeURL = request.getTypeUrl()
      if ( defaultTypeURL == resourceTypes.AnyType ) {
        if ( typeURL == '' ) {
          throw new Error( 'type URL is required for ADS' )
        }
      } else if ( typeURL == '' ) {
        request.setTypeUrl( defaultTypeURL )
        typeURL = defaultTypeURL
      }

      // get the current request nonce
      const nonce = request.getResponseNonce() == '' ? 0 : parseInt( request.getResponseNonce() )
      const node = request.getNode()

      // log the request
      if ( logger ) {
        logger.info(
          '--REQUEST--',
          `Node=${node && node.getId()}`,
          `T=${typeURL}`,
          `V=${request.getVersionInfo()}`,
          `N=${nonce}`,
          request.getResourceNamesList()
        )
      }

      if ( typeURL === resourceTypes.EndpointType && ( values.endpointNonce === 0 || values.endpointNonce === nonce ) ) {
        if ( values.endpointCancel ) {
          values.endpointCancel()
        }
        cache.createWatch( request, values.endpoints )
      } else if ( typeURL === resourceTypes.ClusterType && ( values.clusterNonce === 0 || values.clusterNonce === nonce ) ) {
        if ( values.clusterCancel ) {
          values.clusterCancel()
        }
        cache.createWatch( request, values.clusters )
      } else if ( typeURL === resourceTypes.RouteType && ( values.routeNonce === 0 || values.routeNonce === nonce ) ) {
        if ( values.routeCancel ) {
          values.routeCancel()
        }
        cache.createWatch( request, values.routes )
      } else if ( typeURL === resourceTypes.ListenerType && ( values.listenerNonce === 0 || values.listenerNonce === nonce ) ) {
        if ( values.listenerCancel ) {
          values.listenerCancel()
        }
        cache.createWatch( request, values.listeners )
      } else {
        throw new Error( 'type url is missing or invalid' )
      }

    })

    // On stream end
    call.on( 'end', () => {
      if ( logger ) {
        logger.info(
          `--END-STREAM(${streamNonce})--`
        )
      }
      // cancel watchers
      call.end()
    })
  }

  // EDS methods
  streamEndpoints: grpc.handleBidiStreamingCall<DiscoveryRequest, DiscoveryResponse> = ( call ) => {
    return this.process( call, resourceTypes.EndpointType )
  }

  fetchEndpoints: grpc.handleUnaryCall<DiscoveryRequest, DiscoveryResponse> = () => {
    //
  }

  deltaEndpoints: grpc.handleBidiStreamingCall<DeltaDiscoveryRequest, DeltaDiscoveryResponse> = () => {
    //
  }

  // CDS methods
  streamClusters: grpc.handleBidiStreamingCall<DiscoveryRequest, DiscoveryResponse> = ( call ) => {
    return this.process( call, resourceTypes.ClusterType )
  }

  fetchClusters: grpc.handleUnaryCall<DiscoveryRequest, DiscoveryResponse> = () => {
    //
  }

  deltaClusters: grpc.handleBidiStreamingCall<DeltaDiscoveryRequest, DeltaDiscoveryResponse> = () => {
    //
  }

  // LDS methods
  streamListeners: grpc.handleBidiStreamingCall<DiscoveryRequest, DiscoveryResponse> = ( call ) => {
    return this.process( call, resourceTypes.ListenerType )
  }

  fetchListeners: grpc.handleUnaryCall<DiscoveryRequest, DiscoveryResponse> = () => {
    //
  }

  deltaListeners: grpc.handleBidiStreamingCall<DeltaDiscoveryRequest, DeltaDiscoveryResponse> = () => {
    //
  }

  // RDS methods
  streamRoutes: grpc.handleBidiStreamingCall<DiscoveryRequest, DiscoveryResponse> = ( call ) => {
    return this.process( call, resourceTypes.RouteType )
  }

  fetchRoutes: grpc.handleUnaryCall<DiscoveryRequest, DiscoveryResponse> = () => {
    //
  }

  deltaRoutes: grpc.handleBidiStreamingCall<DeltaDiscoveryRequest, DeltaDiscoveryResponse> = () => {
    //
  }

  // ADS methods
  streamAggregatedResources: grpc.handleBidiStreamingCall<DiscoveryRequest, DiscoveryResponse> = ( call ) => {
    return this.process( call, resourceTypes.AnyType )
  }

  deltaAggregatedResources: grpc.handleBidiStreamingCall<DeltaDiscoveryRequest, DeltaDiscoveryResponse> = () => {
    //
  }
}
