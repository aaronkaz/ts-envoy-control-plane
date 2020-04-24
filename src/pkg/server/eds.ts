import * as grpc from 'grpc'
import { EndpointDiscoveryServiceService, IEndpointDiscoveryServiceServer } from '../../../lib/envoy/api/v2/eds_grpc_pb'
import { Server } from './server'

const registerServices = ( grpcServer: grpc.Server, server: Server ): void => {
  grpcServer.addService<IEndpointDiscoveryServiceServer>(
    EndpointDiscoveryServiceService,
    {
      streamEndpoints: server.streamEndpoints,
      fetchEndpoints: server.fetchEndpoints,
      deltaEndpoints: server.deltaEndpoints
    }
  )
}

export const eds = {
  registerServices
}
