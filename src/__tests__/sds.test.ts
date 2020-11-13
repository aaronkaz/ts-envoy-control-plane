import { Server } from '../pkg/server'
import { Secret } from '../../lib/envoy/api/v2/auth/secret_pb'
import * as discoveryMessages from '../../lib/envoy/api/v2/discovery_pb'
import * as envoyCore from '../../lib/envoy/api/v2/core/base_pb'
import { createSecret } from './fixtures'

describe( 'Secret Discovery Service', () => {

  const c = createSecret()

  describe( 'streamRoutes', () => {
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
          const secret = resource.unpack(
            Secret.deserializeBinary,
            resource.getTypeName()
          )
          expect( secret ).not.toBeNull()
          if ( secret ) {
            expect( secret.toObject() ).toEqual({
              'name': 'foobar.com',
              'tlsCertificate': {
                'certificateChain': {
                  'filename': '',
                  'inlineBytes': '',
                  'inlineString': 'cert chain string'
                },
                'privateKey': {
                  'filename': '',
                  'inlineBytes': '',
                  'inlineString': 'priv key string'
                },
                'signedCertificateTimestampList': []
              }
            })
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
      request.setTypeUrl( 'type.googleapis.com/envoy.api.v2.auth.Secret' )
      request.setResponseNonce( '' )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      const server = new Server( cache, console )
      server.streamRoutes( call )

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

