import * as cdsPB from '../../../../../../lib/envoy/api/v2/cluster_pb'
import * as edsPB from '../../../../../../lib/envoy/api/v2/endpoint_pb'
import * as circuitBreakerPB from '../../../../../../lib/envoy/api/v2/cluster/circuit_breaker_pb'
import * as protocolPB from '../../../../../../lib/envoy/api/v2/core/protocol_pb'
import * as addressPB from '../../../../../../lib/envoy/api/v2/core/address_pb'
import * as basePb from '../../../../../../lib/envoy/api/v2/core/base_pb'
import * as configSourcePB from '../../../../../../lib/envoy/api/v2/core/config_source_pb'
import * as tlsPB from '../../../../../../lib/envoy/api/v2/auth/tls_pb'
import { factory, duration } from '../../../factory'
import { ClusterLoadAssignment } from './endpoint'
import { Http2ProtocolOptions, TcpKeepalive, ConfigSource, TransportSocket, Metadata } from './core'
import { UpstreamTlsContext } from './auth'
import { CircuitBreakers } from './cluster/circuit_breaker'

export const UpstreamConnectionOptions = factory( cdsPB.UpstreamConnectionOptions, {
  setTcpKeepalive: ( val: any ): addressPB.TcpKeepalive => {
    return TcpKeepalive( val )
  }
})

export const EdsClusterConfig = factory( cdsPB.Cluster.EdsClusterConfig, {
  setEdsConfig:( val: any ): configSourcePB.ConfigSource => {
    return ConfigSource( val )
  }
})

export const Cluster = factory( cdsPB.Cluster, {
  setConnectTimeout: duration,
  setLbPolicy: ( val: string ) => {
    const types = cdsPB.Cluster.LbPolicy as any

    return types[val.toUpperCase()]
  },
  setType: ( val: string ) => {
    const types = cdsPB.Cluster.DiscoveryType as any

    return types[val.toUpperCase()]
  },
  setDnsLookupFamily: ( val: string ) => {
    const types = cdsPB.Cluster.DnsLookupFamily as any

    return types[val.toUpperCase()]
  },
  setHttp2ProtocolOptions: ( val: any ): protocolPB.Http2ProtocolOptions => {
    return Http2ProtocolOptions( val )
  },
  setUpstreamConnectionOptions: ( val: any ): cdsPB.UpstreamConnectionOptions => {
    return UpstreamConnectionOptions( val )
  },
  setLoadAssignment: ( val: any ): edsPB.ClusterLoadAssignment => {
    return ClusterLoadAssignment( val )
  },
  setCircuitBreakers: ( val: any ): circuitBreakerPB.CircuitBreakers => {
    return CircuitBreakers( val )
  },
  setEdsClusterConfig: ( val: any ): cdsPB.Cluster.EdsClusterConfig => {
    return EdsClusterConfig( val )
  },
  setTlsContext: ( val: any ): tlsPB.UpstreamTlsContext => {
    return UpstreamTlsContext( val )
  },
  setTransportSocket: ( val: any ): basePb.TransportSocket => {
    return TransportSocket( val )
  },
  setMetadata: ( val: any ): basePb.Metadata => {
    return Metadata( val )
  }
})
