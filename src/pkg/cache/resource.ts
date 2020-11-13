import { Resource } from '../../types'
import { ClusterLoadAssignment } from '../../../lib/envoy/api/v2/endpoint_pb'
import { Cluster } from '../../../lib/envoy/api/v2/cluster_pb'
import { RouteConfiguration } from '../../../lib/envoy/api/v2/route_pb'
import { Listener } from '../../../lib/envoy/api/v2/listener_pb'
import { Runtime } from '../../../lib/envoy/service/discovery/v2/rtds_pb'
import { Secret } from '../../../lib/envoy/api/v2/auth/secret_pb'

const apiTypePrefix = 'type.googleapis.com/envoy.api.v2.'
const discoveryTypePrefix = 'type.googleapis.com/envoy.service.discovery.v2.'

export const EndpointType = apiTypePrefix + 'ClusterLoadAssignment'
export const ClusterType = apiTypePrefix + 'Cluster'
export const RouteType = apiTypePrefix + 'RouteConfiguration'
export const ListenerType = apiTypePrefix + 'Listener'
export const SecretType = apiTypePrefix + 'auth.Secret'
export const RuntimeType = discoveryTypePrefix + 'Runtime'
// AnyType is used only by ADS
export const AnyType = ''

export enum ResponseType {
  Endpoint = 0,
  Cluster,
  Route,
  Listener,
  Secret,
  Runtime,
  UnknownType
}

export const getResourceName = ( res: Resource ): string => {
  if ( res instanceof ClusterLoadAssignment ) {
    return res.getClusterName()
  } else if (
    res instanceof Cluster ||
    res instanceof RouteConfiguration ||
    res instanceof Listener ||
    res instanceof Runtime ||
    res instanceof Secret
  ) {
    return res.getName()
  }

  return ''
}

export const getResponseType = ( typeURL: string ): number => {
  switch ( typeURL ) {
    case EndpointType:
      return ResponseType.Endpoint
    case ClusterType:
      return ResponseType.Cluster
    case RouteType:
      return ResponseType.Route
    case ListenerType:
      return ResponseType.Listener
    case SecretType:
      return ResponseType.Secret
    case RuntimeType:
      return ResponseType.Runtime
    default:
      return ResponseType.UnknownType
  }
}
