// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var envoy_api_v2_rds_pb = require('../../../envoy/api/v2/rds_pb.js');
var envoy_api_v2_discovery_pb = require('../../../envoy/api/v2/discovery_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var envoy_annotations_resource_pb = require('../../../envoy/annotations/resource_pb.js');
var udpa_annotations_migrate_pb = require('../../../udpa/annotations/migrate_pb.js');
var udpa_annotations_status_pb = require('../../../udpa/annotations/status_pb.js');
var validate_validate_pb = require('../../../validate/validate_pb.js');
var envoy_api_v2_route_pb = require('../../../envoy/api/v2/route_pb.js');

function serialize_envoy_api_v2_DeltaDiscoveryRequest(arg) {
  if (!(arg instanceof envoy_api_v2_discovery_pb.DeltaDiscoveryRequest)) {
    throw new Error('Expected argument of type envoy.api.v2.DeltaDiscoveryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_envoy_api_v2_DeltaDiscoveryRequest(buffer_arg) {
  return envoy_api_v2_discovery_pb.DeltaDiscoveryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_envoy_api_v2_DeltaDiscoveryResponse(arg) {
  if (!(arg instanceof envoy_api_v2_discovery_pb.DeltaDiscoveryResponse)) {
    throw new Error('Expected argument of type envoy.api.v2.DeltaDiscoveryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_envoy_api_v2_DeltaDiscoveryResponse(buffer_arg) {
  return envoy_api_v2_discovery_pb.DeltaDiscoveryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_envoy_api_v2_DiscoveryRequest(arg) {
  if (!(arg instanceof envoy_api_v2_discovery_pb.DiscoveryRequest)) {
    throw new Error('Expected argument of type envoy.api.v2.DiscoveryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_envoy_api_v2_DiscoveryRequest(buffer_arg) {
  return envoy_api_v2_discovery_pb.DiscoveryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_envoy_api_v2_DiscoveryResponse(arg) {
  if (!(arg instanceof envoy_api_v2_discovery_pb.DiscoveryResponse)) {
    throw new Error('Expected argument of type envoy.api.v2.DiscoveryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_envoy_api_v2_DiscoveryResponse(buffer_arg) {
  return envoy_api_v2_discovery_pb.DiscoveryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// [#protodoc-title: RDS]
//
// The resource_names field in DiscoveryRequest specifies a route configuration.
// This allows an Envoy configuration with multiple HTTP listeners (and
// associated HTTP connection manager filters) to use different route
// configurations. Each listener will bind its HTTP connection manager filter to
// a route table via this identifier.
var RouteDiscoveryServiceService = exports.RouteDiscoveryServiceService = {
  streamRoutes: {
    path: '/envoy.api.v2.RouteDiscoveryService/StreamRoutes',
    requestStream: true,
    responseStream: true,
    requestType: envoy_api_v2_discovery_pb.DiscoveryRequest,
    responseType: envoy_api_v2_discovery_pb.DiscoveryResponse,
    requestSerialize: serialize_envoy_api_v2_DiscoveryRequest,
    requestDeserialize: deserialize_envoy_api_v2_DiscoveryRequest,
    responseSerialize: serialize_envoy_api_v2_DiscoveryResponse,
    responseDeserialize: deserialize_envoy_api_v2_DiscoveryResponse,
  },
  deltaRoutes: {
    path: '/envoy.api.v2.RouteDiscoveryService/DeltaRoutes',
    requestStream: true,
    responseStream: true,
    requestType: envoy_api_v2_discovery_pb.DeltaDiscoveryRequest,
    responseType: envoy_api_v2_discovery_pb.DeltaDiscoveryResponse,
    requestSerialize: serialize_envoy_api_v2_DeltaDiscoveryRequest,
    requestDeserialize: deserialize_envoy_api_v2_DeltaDiscoveryRequest,
    responseSerialize: serialize_envoy_api_v2_DeltaDiscoveryResponse,
    responseDeserialize: deserialize_envoy_api_v2_DeltaDiscoveryResponse,
  },
  fetchRoutes: {
    path: '/envoy.api.v2.RouteDiscoveryService/FetchRoutes',
    requestStream: false,
    responseStream: false,
    requestType: envoy_api_v2_discovery_pb.DiscoveryRequest,
    responseType: envoy_api_v2_discovery_pb.DiscoveryResponse,
    requestSerialize: serialize_envoy_api_v2_DiscoveryRequest,
    requestDeserialize: deserialize_envoy_api_v2_DiscoveryRequest,
    responseSerialize: serialize_envoy_api_v2_DiscoveryResponse,
    responseDeserialize: deserialize_envoy_api_v2_DiscoveryResponse,
  },
};

exports.RouteDiscoveryServiceClient = grpc.makeGenericClientConstructor(RouteDiscoveryServiceService);
// Virtual Host Discovery Service (VHDS) is used to dynamically update the list of virtual hosts for
// a given RouteConfiguration. If VHDS is configured a virtual host list update will be triggered
// during the processing of an HTTP request if a route for the request cannot be resolved. The
// :ref:`resource_names_subscribe <envoy_api_field_DeltaDiscoveryRequest.resource_names_subscribe>`
// field contains a list of virtual host names or aliases to track. The contents of an alias would
// be the contents of a *host* or *authority* header used to make an http request. An xDS server
// will match an alias to a virtual host based on the content of :ref:`domains'
// <envoy_api_field_route.VirtualHost.domains>` field. The *resource_names_unsubscribe* field
// contains a list of virtual host names that have been :ref:`unsubscribed
// <xds_protocol_unsubscribe>` from the routing table associated with the RouteConfiguration.
var VirtualHostDiscoveryServiceService = exports.VirtualHostDiscoveryServiceService = {
  deltaVirtualHosts: {
    path: '/envoy.api.v2.VirtualHostDiscoveryService/DeltaVirtualHosts',
    requestStream: true,
    responseStream: true,
    requestType: envoy_api_v2_discovery_pb.DeltaDiscoveryRequest,
    responseType: envoy_api_v2_discovery_pb.DeltaDiscoveryResponse,
    requestSerialize: serialize_envoy_api_v2_DeltaDiscoveryRequest,
    requestDeserialize: deserialize_envoy_api_v2_DeltaDiscoveryRequest,
    responseSerialize: serialize_envoy_api_v2_DeltaDiscoveryResponse,
    responseDeserialize: deserialize_envoy_api_v2_DeltaDiscoveryResponse,
  },
};

exports.VirtualHostDiscoveryServiceClient = grpc.makeGenericClientConstructor(VirtualHostDiscoveryServiceService);
