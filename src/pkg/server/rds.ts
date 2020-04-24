import * as grpc from 'grpc'
import { RouteDiscoveryServiceService, IRouteDiscoveryServiceServer } from '../../../lib/envoy/api/v2/rds_grpc_pb'
import { Server } from './server'

const registerServices = ( grpcServer: grpc.Server, server: Server ): void => {
  grpcServer.addService<IRouteDiscoveryServiceServer>(
    RouteDiscoveryServiceService,
    {
      streamRoutes: server.streamRoutes,
      fetchRoutes: server.fetchRoutes,
      deltaRoutes: server.deltaRoutes
    }
  )
}

export const rds = {
  registerServices
}
