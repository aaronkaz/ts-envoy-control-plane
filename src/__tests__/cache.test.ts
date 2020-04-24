import { SnapshotCache, Snapshot, IdHash, EndpointType } from '../pkg/cache'
import { createClusterLoadAssignment } from './fixtures'
import * as discoveryMessages from '../../lib/envoy/api/v2/discovery_pb'
import * as envoyCore from '../../lib/envoy/api/v2/core/base_pb'
import { Subject } from 'rxjs'
import { CacheResponse } from '../types'
import { ClusterLoadAssignment } from '../../lib/envoy/api/v2/endpoint_pb'

describe( 'SnapshotCache', () => {
  describe( 'createWatch', () => {
    test( 'it responds to watch', () => {
      const cache = new SnapshotCache( false, IdHash, console )
      const snap = new Snapshot( '1', [ createClusterLoadAssignment() ] )
      cache.snapshots['test-node'] = snap

      const request = new discoveryMessages.DiscoveryRequest()
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setTypeUrl( EndpointType )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      const subj = new Subject<CacheResponse>()
      subj.subscribe( response => {
        expect( response.version ).toEqual( '1' )
        expect( response.resources ).toHaveLength( 1 )
        expect( response.resources[0] instanceof ClusterLoadAssignment ).toBe( true )
      })

      // test
      const cancel = cache.createWatch( request, subj )
      expect( cancel ).toBeNull()

    })
    test( 'it responds to watch ads', () => {
      const cache = new SnapshotCache( true, IdHash, console )
      const snap = new Snapshot( '1', [ createClusterLoadAssignment() ] )
      cache.snapshots['test-node'] = snap

      const request = new discoveryMessages.DiscoveryRequest()
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setTypeUrl( EndpointType )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      const subj = new Subject<CacheResponse>()
      const observer = jest.fn()
      subj.subscribe( observer )

      // test
      const cancel = cache.createWatch( request, subj )
      expect( cancel ).toBeNull()
      expect( observer ).toHaveBeenCalled()
    })

    test( 'it doesnt respond to watch ads if mismatch', () => {
      const cache = new SnapshotCache( true, IdHash, console )
      const snap = new Snapshot( '1', [ createClusterLoadAssignment() ] )
      cache.snapshots['test-node'] = snap

      const request = new discoveryMessages.DiscoveryRequest()
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setTypeUrl( EndpointType )
      request.setResourceNamesList( [ 'different_cluster' ] )

      const subj = new Subject<CacheResponse>()
      const observer = jest.fn()
      subj.subscribe( observer )

      // test
      const cancel = cache.createWatch( request, subj )
      expect( cancel ).toBeNull()
      expect( observer ).not.toHaveBeenCalled()
    })

    test( 'it creates watch if no snapshot', () => {
      const cache = new SnapshotCache( false, IdHash, console )

      const request = new discoveryMessages.DiscoveryRequest()
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setTypeUrl( EndpointType )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      const subj = new Subject<CacheResponse>()
      const observer = jest.fn()
      subj.subscribe( observer )

      // test
      const cancel = cache.createWatch( request, subj )
      expect( cancel ).not.toBeNull()
      expect( typeof cancel ).toEqual( 'function' )
      expect( observer ).not.toHaveBeenCalled()
      expect( cache.status['test-node'] ).not.toBeNull()
      expect( cache.status['test-node'].getNumWatches() ).toEqual( 1 )
    })

    test( 'it creates watch if snapshot of same version', () => {
      const cache = new SnapshotCache( false, IdHash, console )
      const snap = new Snapshot( '1', [ createClusterLoadAssignment() ] )
      cache.snapshots['test-node'] = snap

      const request = new discoveryMessages.DiscoveryRequest()
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setVersionInfo( '1' )
      request.setTypeUrl( EndpointType )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      const subj = new Subject<CacheResponse>()
      const observer = jest.fn()
      subj.subscribe( observer )

      // test
      const cancel = cache.createWatch( request, subj )
      expect( cancel ).not.toBeNull()
      expect( typeof cancel ).toEqual( 'function' )
      expect( observer ).not.toHaveBeenCalled()
      expect( cache.status['test-node'] ).not.toBeNull()
      expect( cache.status['test-node'].getNumWatches() ).toEqual( 1 )

    })
  }) // end createWatch

  describe( 'fetch', () => {
    test( 'it should fail if no node set', () => {
      const cache = new SnapshotCache( false, IdHash, console )
      const request = new discoveryMessages.DiscoveryRequest()

      // test
      try {
        cache.fetch( request )
        expect( true ).toBe( false )
      } catch ( e ) {
        expect( e.message ).toEqual( 'Node missing in request' )
      }
    })
    test( 'it responds with snapshot', () => {
      const cache = new SnapshotCache( false, IdHash, console )
      const snap = new Snapshot( '1', [ createClusterLoadAssignment() ] )
      cache.snapshots['test-node'] = snap

      const request = new discoveryMessages.DiscoveryRequest()
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setTypeUrl( EndpointType )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      // test
      const response = cache.fetch( request )
      expect( response.version ).toEqual( '1' )
      expect( response.resources ).toHaveLength( 1 )
      expect( response.resources[0] instanceof ClusterLoadAssignment ).toBe( true )

    })

    test( 'it throws error if version up to date', () => {
      const cache = new SnapshotCache( false, IdHash, console )
      const snap = new Snapshot( '1', [ createClusterLoadAssignment() ] )
      cache.snapshots['test-node'] = snap

      const request = new discoveryMessages.DiscoveryRequest()
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setTypeUrl( EndpointType )
      request.setResourceNamesList( [ 'remote_cluster' ] )
      request.setVersionInfo( '1' )

      // test
      try {
        cache.fetch( request )
        expect( true ).toBe( false )
      } catch ( e ) {
        expect( e.message ).toEqual( 'skip fetch: version up to date' )
      }

    })
    test( 'it throws error if no snapshot', () => {
      const cache = new SnapshotCache( false, IdHash, console )

      const request = new discoveryMessages.DiscoveryRequest()
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setTypeUrl( EndpointType )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      // test
      try {
        cache.fetch( request )
        expect( true ).toBe( false )
      } catch ( e ) {
        expect( e.message ).toEqual( 'missing snapshot for test-node' )
      }

    })
  }) // fetch

  describe( 'setSnapshot', () => {
    test( 'it responds to watch', () => {
      const cache = new SnapshotCache( false, IdHash, console )

      const request = new discoveryMessages.DiscoveryRequest()
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setTypeUrl( EndpointType )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      const subj = new Subject<CacheResponse>()
      subj.subscribe( response => {
        expect( response.version ).toEqual( '1' )
        expect( response.resources ).toHaveLength( 1 )
        expect( response.resources[0] instanceof ClusterLoadAssignment ).toBe( true )
      })

      const cancel = cache.createWatch( request, subj )
      expect( cancel ).not.toBeNull()
      expect( cache.status['test-node'] ).not.toBeNull()
      expect( cache.status['test-node'].getNumWatches() ).toEqual( 1 )

      // set snapshot
      const snap = new Snapshot( '1', [ createClusterLoadAssignment() ] )
      cache.setSnapshot( 'test-node', snap )
      expect( cache.snapshots['test-node'] ).not.toBeNull()
      expect( cache.status['test-node'].getNumWatches() ).toEqual( 0 )
    })
  }) // setSnapshot

})
