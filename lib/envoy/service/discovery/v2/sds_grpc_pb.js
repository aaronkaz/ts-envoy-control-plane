// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var envoy_service_discovery_v2_sds_pb = require('../../../../envoy/service/discovery/v2/sds_pb.js');
var envoy_api_v2_discovery_pb = require('../../../../envoy/api/v2/discovery_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var envoy_annotations_resource_pb = require('../../../../envoy/annotations/resource_pb.js');
var udpa_annotations_migrate_pb = require('../../../../udpa/annotations/migrate_pb.js');
var udpa_annotations_status_pb = require('../../../../udpa/annotations/status_pb.js');

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


// [#protodoc-title: Secret Discovery Service (SDS)]
//
var SecretDiscoveryServiceService = exports.SecretDiscoveryServiceService = {
  deltaSecrets: {
    path: '/envoy.service.discovery.v2.SecretDiscoveryService/DeltaSecrets',
    requestStream: true,
    responseStream: true,
    requestType: envoy_api_v2_discovery_pb.DeltaDiscoveryRequest,
    responseType: envoy_api_v2_discovery_pb.DeltaDiscoveryResponse,
    requestSerialize: serialize_envoy_api_v2_DeltaDiscoveryRequest,
    requestDeserialize: deserialize_envoy_api_v2_DeltaDiscoveryRequest,
    responseSerialize: serialize_envoy_api_v2_DeltaDiscoveryResponse,
    responseDeserialize: deserialize_envoy_api_v2_DeltaDiscoveryResponse,
  },
  streamSecrets: {
    path: '/envoy.service.discovery.v2.SecretDiscoveryService/StreamSecrets',
    requestStream: true,
    responseStream: true,
    requestType: envoy_api_v2_discovery_pb.DiscoveryRequest,
    responseType: envoy_api_v2_discovery_pb.DiscoveryResponse,
    requestSerialize: serialize_envoy_api_v2_DiscoveryRequest,
    requestDeserialize: deserialize_envoy_api_v2_DiscoveryRequest,
    responseSerialize: serialize_envoy_api_v2_DiscoveryResponse,
    responseDeserialize: deserialize_envoy_api_v2_DiscoveryResponse,
  },
  fetchSecrets: {
    path: '/envoy.service.discovery.v2.SecretDiscoveryService/FetchSecrets',
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

exports.SecretDiscoveryServiceClient = grpc.makeGenericClientConstructor(SecretDiscoveryServiceService);
