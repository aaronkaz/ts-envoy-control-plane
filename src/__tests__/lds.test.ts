import { Server } from '../pkg/server'
import { Listener } from '../../lib/envoy/api/v2/listener_pb'
import * as discoveryMessages from '../../lib/envoy/api/v2/discovery_pb'
import * as envoyCore from '../../lib/envoy/api/v2/core/base_pb'
import { createListener } from './fixtures'

describe( 'Listener Discovery Service', () => {

  const c = createListener()

  describe( 'streamListeners', () => {
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
          const listener = resource.unpack(
            Listener.deserializeBinary,
            resource.getTypeName()
          )
          expect( listener ).not.toBeNull()
          if ( listener ) {
            expect( listener.getName() ).toEqual( 'test-listener' )
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
      request.setTypeUrl( 'type.googleapis.com/envoy.api.v2.Listener' )
      request.setResponseNonce( '' )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      const server = new Server( cache, console )
      server.streamListeners( call )

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

