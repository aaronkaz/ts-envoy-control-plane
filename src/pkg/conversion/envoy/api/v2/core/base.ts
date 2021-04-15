import * as basePb from '../../../../../../../lib/envoy/api/v2/core/base_pb'
import { factory } from '../../../../factory'
import { Any } from 'google-protobuf/google/protobuf/any_pb'
import { UpstreamTlsContext } from '../auth'
import * as jspb from 'google-protobuf'
import { Struct } from 'google-protobuf/google/protobuf/struct_pb'

export const TransportSocket = factory( basePb.TransportSocket, {
  setTypedConfig: ( val: any ): Any => {
    const any = new Any

    switch ( val['@type'] ) {
      case 'type.googleapis.com/envoy.api.v2.auth.UpstreamTlsContext': {
        const msg = UpstreamTlsContext( val )
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

// https://github.com/protocolbuffers/protobuf/blob/master/js/map.js#L59
class ExtendedMetadata extends basePb.Metadata {
  setFilterMetadata( value: jspb.Map<string, Struct> ): void {
    jspb.Message.setWrapperField<basePb.Metadata>( this, 1, value )
  }
}

export const Metadata = factory( ExtendedMetadata, {
  setFilterMetadata: ( val: any ) => {
    const m = new jspb.Map<string, Struct>( [], Struct )
    for ( const key in val ) {
      const s = Struct.fromJavaScript( val[key] )
      m.set( key, s )
    }

    return m
  }
})

export const DataSource = factory( basePb.DataSource, {})
