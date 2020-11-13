// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var envoy_service_discovery_v2_hds_pb = require('../../../../envoy/service/discovery/v2/hds_pb.js');
var envoy_api_v2_core_base_pb = require('../../../../envoy/api/v2/core/base_pb.js');
var envoy_api_v2_core_health_check_pb = require('../../../../envoy/api/v2/core/health_check_pb.js');
var envoy_api_v2_endpoint_endpoint_components_pb = require('../../../../envoy/api/v2/endpoint/endpoint_components_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var udpa_annotations_migrate_pb = require('../../../../udpa/annotations/migrate_pb.js');
var udpa_annotations_status_pb = require('../../../../udpa/annotations/status_pb.js');

function serialize_envoy_service_discovery_v2_HealthCheckRequestOrEndpointHealthResponse(arg) {
  if (!(arg instanceof envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse)) {
    throw new Error('Expected argument of type envoy.service.discovery.v2.HealthCheckRequestOrEndpointHealthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_envoy_service_discovery_v2_HealthCheckRequestOrEndpointHealthResponse(buffer_arg) {
  return envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_envoy_service_discovery_v2_HealthCheckSpecifier(arg) {
  if (!(arg instanceof envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier)) {
    throw new Error('Expected argument of type envoy.service.discovery.v2.HealthCheckSpecifier');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_envoy_service_discovery_v2_HealthCheckSpecifier(buffer_arg) {
  return envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier.deserializeBinary(new Uint8Array(buffer_arg));
}


// [#protodoc-title: Health Discovery Service (HDS)]
//
// HDS is Health Discovery Service. It compliments Envoy’s health checking
// service by designating this Envoy to be a healthchecker for a subset of hosts
// in the cluster. The status of these health checks will be reported to the
// management server, where it can be aggregated etc and redistributed back to
// Envoy through EDS.
var HealthDiscoveryServiceService = exports.HealthDiscoveryServiceService = {
  // 1. Envoy starts up and if its can_healthcheck option in the static
//    bootstrap config is enabled, sends HealthCheckRequest to the management
//    server. It supplies its capabilities (which protocol it can health check
//    with, what zone it resides in, etc.).
// 2. In response to (1), the management server designates this Envoy as a
//    healthchecker to health check a subset of all upstream hosts for a given
//    cluster (for example upstream Host 1 and Host 2). It streams
//    HealthCheckSpecifier messages with cluster related configuration for all
//    clusters this Envoy is designated to health check. Subsequent
//    HealthCheckSpecifier message will be sent on changes to:
//    a. Endpoints to health checks
//    b. Per cluster configuration change
// 3. Envoy creates a health probe based on the HealthCheck config and sends
//    it to endpoint(ip:port) of Host 1 and 2. Based on the HealthCheck
//    configuration Envoy waits upon the arrival of the probe response and
//    looks at the content of the response to decide whether the endpoint is
//    healthy or not. If a response hasn't been received within the timeout
//    interval, the endpoint health status is considered TIMEOUT.
// 4. Envoy reports results back in an EndpointHealthResponse message.
//    Envoy streams responses as often as the interval configured by the
//    management server in HealthCheckSpecifier.
// 5. The management Server collects health statuses for all endpoints in the
//    cluster (for all clusters) and uses this information to construct
//    EndpointDiscoveryResponse messages.
// 6. Once Envoy has a list of upstream endpoints to send traffic to, it load
//    balances traffic to them without additional health checking. It may
//    use inline healthcheck (i.e. consider endpoint UNHEALTHY if connection
//    failed to a particular endpoint to account for health status propagation
//    delay between HDS and EDS).
// By default, can_healthcheck is true. If can_healthcheck is false, Cluster
// configuration may not contain HealthCheck message.
// TODO(htuch): How is can_healthcheck communicated to CDS to ensure the above
// invariant?
// TODO(htuch): Add @amb67's diagram.
streamHealthCheck: {
    path: '/envoy.service.discovery.v2.HealthDiscoveryService/StreamHealthCheck',
    requestStream: true,
    responseStream: true,
    requestType: envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse,
    responseType: envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier,
    requestSerialize: serialize_envoy_service_discovery_v2_HealthCheckRequestOrEndpointHealthResponse,
    requestDeserialize: deserialize_envoy_service_discovery_v2_HealthCheckRequestOrEndpointHealthResponse,
    responseSerialize: serialize_envoy_service_discovery_v2_HealthCheckSpecifier,
    responseDeserialize: deserialize_envoy_service_discovery_v2_HealthCheckSpecifier,
  },
  // TODO(htuch): Unlike the gRPC version, there is no stream-based binding of
// request/response. Should we add an identifier to the HealthCheckSpecifier
// to bind with the response?
fetchHealthCheck: {
    path: '/envoy.service.discovery.v2.HealthDiscoveryService/FetchHealthCheck',
    requestStream: false,
    responseStream: false,
    requestType: envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse,
    responseType: envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier,
    requestSerialize: serialize_envoy_service_discovery_v2_HealthCheckRequestOrEndpointHealthResponse,
    requestDeserialize: deserialize_envoy_service_discovery_v2_HealthCheckRequestOrEndpointHealthResponse,
    responseSerialize: serialize_envoy_service_discovery_v2_HealthCheckSpecifier,
    responseDeserialize: deserialize_envoy_service_discovery_v2_HealthCheckSpecifier,
  },
};

exports.HealthDiscoveryServiceClient = grpc.makeGenericClientConstructor(HealthDiscoveryServiceService);
