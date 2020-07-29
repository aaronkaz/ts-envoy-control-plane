import * as route_pb from '../../../../../../../lib/envoy/api/v2/route/route_components_pb'
import { factory, duration } from '../../../../factory'
import { UInt32Value } from 'google-protobuf/google/protobuf/wrappers_pb'
import * as jspb from 'google-protobuf'
import { Struct } from 'google-protobuf/google/protobuf/struct_pb'
import { Any } from 'google-protobuf/google/protobuf/any_pb'
import * as http from '../../../config/filter/http'

// https://github.com/protocolbuffers/protobuf/blob/master/js/map.js#L59
class ExtendedRoute extends route_pb.Route {
  setPerFilterConfig( value: jspb.Map<string, Struct> ): void {
    jspb.Message.setWrapperField<route_pb.Route>( this, 8, value )
  }
  setTypedPerFilterConfig( value: jspb.Map<string, Any> ): void {
    jspb.Message.setWrapperField( this, 13, value )
  }
}

export const GrpcRouteMatchOptions = factory( route_pb.RouteMatch.GrpcRouteMatchOptions, {})

export const RouteMatch = factory( route_pb.RouteMatch, {
  setGrpc: ( val: any ) => {
    return GrpcRouteMatchOptions( val )
  }
})

export const RouteAction = factory( route_pb.RouteAction, {
  setTimeout: duration,
  setIdleTimeout: duration
})

export const RedirectAction = factory( route_pb.RedirectAction, {})

export const Route = factory( ExtendedRoute, {
  setMatch: ( val: any ) => {
    return RouteMatch( val )
  },
  setRoute: ( val: any ) => {
    return RouteAction( val )
  },
  setPerFilterConfig: ( val: any ) => {
    const m = new jspb.Map<string, Struct>( [], Struct )
    for ( const key in val ) {
      const s = Struct.fromJavaScript( val[key] )
      m.set( key, s )
    }

    return m
  },
  setTypedPerFilterConfig: ( val: any ) => {
    const m = new jspb.Map<string, Any>( [], Any )
    for ( const key in val ) {
      const mapVals = val[key]
      const a = new Any
      switch ( key ) {
        case 'envoy.ext_authz': {
          const msg = http.ext_authz.v2.ExtAuthzPerRoute( mapVals )
          const packType = mapVals['@type'].replace( 'type.googleapis.com/', '' )
          a.pack( msg.serializeBinary(), packType )
          break
        }
        case 'envoy.filters.http.aws_lambda': {
          const msg = http.aws_lambda.v2alpha.PerRouteConfig( mapVals )
          const packType = mapVals['@type'].replace( 'type.googleapis.com/', '' )
          a.pack( msg.serializeBinary(), packType )
          break
        }
        default: {
          //
        }
      }
      m.set( key, a )
    }

    return m
  },
  setRedirect: ( val: any ) => {
    return RedirectAction( val )
  }

})

export const RetryPolicy = factory( route_pb.RetryPolicy, {
  setNumRetries: ( val: number ) => {
    const i = new UInt32Value
    i.setValue( val )

    return i
  }
})

export const VirtualHost = factory( route_pb.VirtualHost, {
  setDomainsList: ( values: string[] ) => {
    return values
  },
  setRetryPolicy: ( val: any ) => {
    return RetryPolicy( val )
  },
  setRoutesList: ( values: any[] ) => {
    return values.map( val => {
      return Route( val )
    })
  }
})
