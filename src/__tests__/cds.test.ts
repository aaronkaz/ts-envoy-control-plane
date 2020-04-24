import { Server } from '../pkg/server'
import { Cluster } from '../../lib/envoy/api/v2/cluster_pb'
import * as discoveryMessages from '../../lib/envoy/api/v2/discovery_pb'
import * as envoyCore from '../../lib/envoy/api/v2/core/base_pb'
import { createCluster } from './fixtures'

describe( 'Cluster Discovery Service', () => {

  const c = createCluster()

  describe( 'streamClusters', () => {
    let requestHandler: ( request: discoveryMessages.DiscoveryRequest ) => Promise<void>
    let callResponse: discoveryMessages.DiscoveryResponse
    let call: any

    test( 'it writes response on found node', ( done ) => {
      call = {
        on: jest.fn().mockImplementation( ( event, cb ) => {
          if ( event === 'data' ) {
            requestHandler = cb
          }
        }),
        write: jest.fn().mockImplementation( response => {
          callResponse = response
          expect( callResponse.getVersionInfo() ).toEqual( '1' )
          expect( callResponse.getNonce() ).toEqual( '1' )
          const [ resource ] = callResponse.getResourcesList()
          const cluster = resource.unpack(
            Cluster.deserializeBinary,
            resource.getTypeName()
          )
          expect( cluster ).not.toBeNull()
          if ( cluster ) {
            expect( cluster.getName() ).toEqual( 'remote_cluster' )
          }
          done()
        })
      }

      const cache = {
        createWatch: jest.fn().mockImplementation( ( request, subj ) => {
          subj.next({
            version: '1',
            resources: [ c ],
            request
          })
        }),
        fetch: jest.fn()
      }

      const request = new discoveryMessages.DiscoveryRequest()
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setTypeUrl( 'type.googleapis.com/envoy.api.v2.Cluster' )
      request.setResponseNonce( '' )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      const server = new Server( cache, console )
      server.streamClusters( call )

      requestHandler( request )
        .then( () => {
          //
        })
        .catch( err => {
          done.fail( err )
        })
    })

  })

})

