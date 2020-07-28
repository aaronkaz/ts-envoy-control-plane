import * as grpc from 'grpc'
import { SecretDiscoveryServiceService, ISecretDiscoveryServiceServer } from '../../../lib/envoy/service/discovery/v2/sds_grpc_pb'
import { Server } from './server'

const registerServices = ( grpcServer: grpc.Server, server: Server ): void => {
  grpcServer.addService<ISecretDiscoveryServiceServer>(
    SecretDiscoveryServiceService,
    {
      streamSecrets: server.streamSecrets,
      fetchSecrets: server.fetchSecrets,
      deltaSecrets: server.deltaSecrets
    }
  )
}

export const sds = {
  registerServices
}
