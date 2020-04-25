import * as grpc from 'grpc'
import { Snapshot, SnapshotCache, IdHash } from '../src/pkg/cache'
import { Server, ads, cds, eds, lds, rds } from '../src/pkg/server'
import * as configs from './data'
import { envoy } from '../src/pkg/conversion'

const main = (): void => {
  const cache = new SnapshotCache( true, IdHash, console )

  const proxy1snap = new Snapshot( '1',
    [ envoy.api.v2.ClusterLoadAssignment( configs._service_a_endpoints ), envoy.api.v2.ClusterLoadAssignment( configs._service_b_endpoints ) ],
    [ envoy.api.v2.Cluster( configs._service_a_cluster ), envoy.api.v2.Cluster( configs._service_b_cluster ) ],
    [ envoy.api.v2.RouteConfiguration( configs._proxy_1_routes ) ],
    [ envoy.api.v2.Listener( configs._proxy_1_listener ) ]
  )
  cache.setSnapshot( 'proxy-1', proxy1snap )

  const grpcServer = new grpc.Server()
  const server = new Server( cache, console )

  eds.registerServices( grpcServer, server )
  lds.registerServices( grpcServer, server )
  rds.registerServices( grpcServer, server )
  cds.registerServices( grpcServer, server )
  ads.registerServices( grpcServer, server )

  grpcServer.bind( '0.0.0.0:5000', grpc.ServerCredentials.createInsecure() )
  grpcServer.start()
  console.log( 'grpc server started, listening on port 5000' )
}

main()
