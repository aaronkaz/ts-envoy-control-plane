import { BoolValue } from 'google-protobuf/google/protobuf/wrappers_pb'
import * as http_connection_manager_pb from '../../../../../../../../../lib/envoy/config/filter/network/http_connection_manager/v2/http_connection_manager_pb'
import { factory, duration } from '../../../../../../factory'
import { Struct } from 'google-protobuf/google/protobuf/struct_pb'
import { Any } from 'google-protobuf/google/protobuf/any_pb'
import { ExtAuthz } from '../../ext_authz/v2/ext_authz'
import { Lua } from '../../../http/lua/v2/lua'
import { RouteConfiguration } from '../../../../../api/v2/rds'
import { ConfigSource } from '../../../../../api/v2/core/config_source'

export const Rds = factory( http_connection_manager_pb.Rds, {
  setConfigSource: ( val: any ) => {
    return ConfigSource( val )
  }
})

export const HttpFilter = factory( http_connection_manager_pb.HttpFilter, {
  setConfig: ( val: any ): Struct => {
    return Struct.fromJavaScript( val )
  },
  setTypedConfig: ( val: any ): Any => {
    const any = new Any

    switch ( val['@type'] ) {
      case 'type.googleapis.com/envoy.config.filter.network.ext_authz.v2.ExtAuthz': {
        const msg = ExtAuthz( val )
        const packType = val['@type'].replace( 'type.googleapis.com/', '' )
        any.pack( msg.serializeBinary(), packType )
        break
      }
      case 'type.googleapis.com/envoy.config.filter.http.lua.v2.Lua': {
        const msg = Lua( val )
        const packType = val['@type'].replace( 'type.googleapis.com/', '' )
        any.pack( msg.serializeBinary(), packType )
        break
      }
      default: {
        // do nothing
      }
    }

    return any
  }
})

export const HttpConnectionManager = factory( http_connection_manager_pb.HttpConnectionManager, {
  setCodecType: ( val: string ): http_connection_manager_pb.HttpConnectionManager.CodecType => {
    const codecs = http_connection_manager_pb.HttpConnectionManager.CodecType as any

    return codecs[val.toUpperCase()]
  },
  setUseRemoteAddress: ( val: boolean ): BoolValue => {
    const b = new BoolValue
    b.setValue( val )

    return b
  },
  setIdleTimeout: duration,
  setHttpFiltersList:( values: any[] ): http_connection_manager_pb.HttpFilter[] => {
    return values.map( val => {
      return HttpFilter( val )
    })
  },
  setRds: ( val: any ) => {
    return Rds( val )
  },
  setRouteConfig: ( val: any ) => {
    return RouteConfiguration( val )
  }
})
