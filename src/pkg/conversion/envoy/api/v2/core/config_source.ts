import * as configSourcePB from '../../../../../../../lib/envoy/api/v2/core/config_source_pb'
import * as grpcServicePB from '../../../../../../../lib/envoy/api/v2/core/grpc_service_pb'
import { factory } from '../../../../factory'
import { GrpcService } from './grpc_service'

export const ApiConfigSource = factory( configSourcePB.ApiConfigSource, {
  setApiType: ( val: string ) => {
    const types = configSourcePB.ApiConfigSource.ApiType as any

    return types[val.toUpperCase()] || 0
  },
  setGrpcServicesList: ( values: any[] ): grpcServicePB.GrpcService[] => {
    return values.map( val => {
      return GrpcService( val )
    })
  }
})

export const AggregatedConfigSource = factory( configSourcePB.AggregatedConfigSource, {})

export const ConfigSource = factory( configSourcePB.ConfigSource, {
  setApiConfigSource: ( val: any ): configSourcePB.ApiConfigSource => {
    return ApiConfigSource( val )
  },
  setAds: ( val: any ) => {
    return AggregatedConfigSource( val )
  }
})
