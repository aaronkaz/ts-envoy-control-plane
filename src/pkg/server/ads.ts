import * as grpc from 'grpc'
import { AggregatedDiscoveryServiceService, IAggregatedDiscoveryServiceServer } from '../../../lib/envoy/service/discovery/v2/ads_grpc_pb'
import { Server } from './server'

const registerServices = ( grpcServer: grpc.Server, server: Server ): void => {
  grpcServer.addService<IAggregatedDiscoveryServiceServer>(
    AggregatedDiscoveryServiceService,
    {
      streamAggregatedResources: server.streamAggregatedResources,
      deltaAggregatedResources: server.deltaAggregatedResources
    }
  )
}

export const ads = {
  registerServices
}
