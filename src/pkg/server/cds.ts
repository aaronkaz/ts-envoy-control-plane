import * as grpc from 'grpc'
import { ClusterDiscoveryServiceService, IClusterDiscoveryServiceServer } from '../../../lib/envoy/api/v2/cds_grpc_pb'
import { Server } from './server'

const registerServices = ( grpcServer: grpc.Server, server: Server ): void => {
  grpcServer.addService<IClusterDiscoveryServiceServer>(
    ClusterDiscoveryServiceService,
    {
      streamClusters: server.streamClusters,
      fetchClusters: server.fetchClusters,
      deltaClusters: server.deltaClusters
    }
  )
}

export const cds = {
  registerServices
}
