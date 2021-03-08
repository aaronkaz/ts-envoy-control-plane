import * as listenerPB from '../../../../../../../lib/envoy/api/v2/listener/listener_components_pb'
import { factory } from '../../../../factory'
import { Any } from 'google-protobuf/google/protobuf/any_pb'
import { filter } from '../../../config'
import { DownstreamTlsContext } from '../auth'
import { Struct } from 'google-protobuf/google/protobuf/struct_pb'

export const Filter = factory( listenerPB.Filter, {
  setConfig: ( val: any, obj: any ): Struct => {
    const { name } = obj
    switch ( name ) {
      case 'envoy.http_connection_manager':
        return Struct.fromJavaScript( val )
      default:
        return new Struct
    }
  },
  setTypedConfig: ( val: any ): Any => {
    const any = new Any

    switch ( val['@type'] ) {
      case 'type.googleapis.com/envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager': {
        const msg = filter.network.http_connection_manager.v2.HttpConnectionManager( val )
        const packType = val['@type'].replace( 'type.googleapis.com/', '' )
        any.pack( msg.serializeBinary(), packType )
        break
      }
      case 'type.googleapis.com/envoy.config.filter.network.tcp_proxy.v2.TcpProxy': {
        const msg = filter.network.tcp_proxy.v2.TcpProxy( val )
        const packType = val['@type'].replace( 'type.googleapis.com/', '' )
        any.pack( msg.serializeBinary(), packType )
        break
      }
      case 'type.googleapis.com/envoy.config.filter.network.mysql_proxy.v1alpha1.MySQLProxy': {
        const msg = filter.network.mysql_proxy.v1alpha1.MySQLProxy( val )
        const packType = val['@type'].replace( 'type.googleapis.com/', '' )
        any.pack( msg.serializeBinary(), packType )
        break
      }
      case 'type.googleapis.com/envoy.config.filter.network.kafka_broker.v2alpha1.KafkaBroker': {
        const msg = filter.network.kafka_broker.v2alpha1.KafkaBroker( val )
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

export const FilterChain = factory( listenerPB.FilterChain, {
  setFiltersList: ( values: any[] ): listenerPB.Filter[] => {
    return values.map( val => {
      return Filter( val )
    })
  },
  setTlsContext: ( val: any ) => {
    return DownstreamTlsContext( val )
  }
})
