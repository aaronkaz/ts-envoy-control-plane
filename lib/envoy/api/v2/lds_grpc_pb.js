// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var envoy_api_v2_lds_pb = require('../../../envoy/api/v2/lds_pb.js');
var envoy_api_v2_discovery_pb = require('../../../envoy/api/v2/discovery_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var envoy_annotations_resource_pb = require('../../../envoy/annotations/resource_pb.js');
var udpa_annotations_migrate_pb = require('../../../udpa/annotations/migrate_pb.js');
var udpa_annotations_status_pb = require('../../../udpa/annotations/status_pb.js');
var validate_validate_pb = require('../../../validate/validate_pb.js');
var envoy_api_v2_listener_pb = require('../../../envoy/api/v2/listener_pb.js');

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


// [#protodoc-title: Listener]
// Listener :ref:`configuration overview <config_listeners>`
//
// The Envoy instance initiates an RPC at startup to discover a list of
// listeners. Updates are delivered via streaming from the LDS server and
// consist of a complete update of all listeners. Existing connections will be
// allowed to drain from listeners that are no longer present.
var ListenerDiscoveryServiceService = exports.ListenerDiscoveryServiceService = {
  deltaListeners: {
    path: '/envoy.api.v2.ListenerDiscoveryService/DeltaListeners',
    requestStream: true,
    responseStream: true,
    requestType: envoy_api_v2_discovery_pb.DeltaDiscoveryRequest,
    responseType: envoy_api_v2_discovery_pb.DeltaDiscoveryResponse,
    requestSerialize: serialize_envoy_api_v2_DeltaDiscoveryRequest,
    requestDeserialize: deserialize_envoy_api_v2_DeltaDiscoveryRequest,
    responseSerialize: serialize_envoy_api_v2_DeltaDiscoveryResponse,
    responseDeserialize: deserialize_envoy_api_v2_DeltaDiscoveryResponse,
  },
  streamListeners: {
    path: '/envoy.api.v2.ListenerDiscoveryService/StreamListeners',
    requestStream: true,
    responseStream: true,
    requestType: envoy_api_v2_discovery_pb.DiscoveryRequest,
    responseType: envoy_api_v2_discovery_pb.DiscoveryResponse,
    requestSerialize: serialize_envoy_api_v2_DiscoveryRequest,
    requestDeserialize: deserialize_envoy_api_v2_DiscoveryRequest,
    responseSerialize: serialize_envoy_api_v2_DiscoveryResponse,
    responseDeserialize: deserialize_envoy_api_v2_DiscoveryResponse,
  },
  fetchListeners: {
    path: '/envoy.api.v2.ListenerDiscoveryService/FetchListeners',
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

exports.ListenerDiscoveryServiceClient = grpc.makeGenericClientConstructor(ListenerDiscoveryServiceService);
