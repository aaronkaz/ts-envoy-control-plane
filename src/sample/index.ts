import * as grpc from 'grpc'
import { Snapshot, SnapshotCache, IdHash } from '../pkg/cache'
import { Server, ads, cds, eds, lds, rds } from '../pkg/server'
import * as configs from './data'
import { envoy } from '../pkg/conversion'

const main = (): void => {
  const cache = new SnapshotCache( true, IdHash, console )

  // seed cache snapshots
  const prox1Snap = new Snapshot( '1', [ envoy.api.v2.ClusterLoadAssignment( configs._eds_bbc ), envoy.api.v2.ClusterLoadAssignment( configs._edge ) ] )
  cache.setSnapshot( 'proxy-1', prox1Snap )

  const prox2snap = new Snapshot( '1',
    [ envoy.api.v2.ClusterLoadAssignment( configs._edge ) ],
    [ envoy.api.v2.Cluster( configs._cluster1 ) ],
    [ envoy.api.v2.RouteConfiguration( configs._route1 ) ],
    [ envoy.api.v2.Listener( configs._listener1 ) ]
  )
  cache.setSnapshot( 'proxy-2', prox2snap )

  const prox3snap = new Snapshot( '1',
    [ envoy.api.v2.ClusterLoadAssignment( configs._edge ) ],
    [ envoy.api.v2.Cluster( configs._cluster2 ) ],
    [ envoy.api.v2.RouteConfiguration( configs._route2 ) ],
    [ envoy.api.v2.Listener( configs._listener2 ) ]
  )
  cache.setSnapshot( 'proxy-3', prox3snap )

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
