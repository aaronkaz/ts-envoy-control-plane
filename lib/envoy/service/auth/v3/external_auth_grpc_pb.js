// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var envoy_service_auth_v3_external_auth_pb = require('../../../../envoy/service/auth/v3/external_auth_pb.js');
var envoy_config_core_v3_base_pb = require('../../../../envoy/config/core/v3/base_pb.js');
var envoy_service_auth_v3_attribute_context_pb = require('../../../../envoy/service/auth/v3/attribute_context_pb.js');
var envoy_type_v3_http_status_pb = require('../../../../envoy/type/v3/http_status_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');
var udpa_annotations_status_pb = require('../../../../udpa/annotations/status_pb.js');
var udpa_annotations_versioning_pb = require('../../../../udpa/annotations/versioning_pb.js');
var validate_validate_pb = require('../../../../validate/validate_pb.js');

function serialize_envoy_service_auth_v3_CheckRequest(arg) {
  if (!(arg instanceof envoy_service_auth_v3_external_auth_pb.CheckRequest)) {
    throw new Error('Expected argument of type envoy.service.auth.v3.CheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_envoy_service_auth_v3_CheckRequest(buffer_arg) {
  return envoy_service_auth_v3_external_auth_pb.CheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_envoy_service_auth_v3_CheckResponse(arg) {
  if (!(arg instanceof envoy_service_auth_v3_external_auth_pb.CheckResponse)) {
    throw new Error('Expected argument of type envoy.service.auth.v3.CheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_envoy_service_auth_v3_CheckResponse(buffer_arg) {
  return envoy_service_auth_v3_external_auth_pb.CheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// [#protodoc-title: Authorization Service ]
//
// The authorization service request messages used by external authorization :ref:`network filter
// <config_network_filters_ext_authz>` and :ref:`HTTP filter <config_http_filters_ext_authz>`.
//
// A generic interface for performing authorization check on incoming
// requests to a networked service.
var AuthorizationService = exports.AuthorizationService = {
  // Performs authorization check based on the attributes associated with the
// incoming request, and returns status `OK` or not `OK`.
check: {
    path: '/envoy.service.auth.v3.Authorization/Check',
    requestStream: false,
    responseStream: false,
    requestType: envoy_service_auth_v3_external_auth_pb.CheckRequest,
    responseType: envoy_service_auth_v3_external_auth_pb.CheckResponse,
    requestSerialize: serialize_envoy_service_auth_v3_CheckRequest,
    requestDeserialize: deserialize_envoy_service_auth_v3_CheckRequest,
    responseSerialize: serialize_envoy_service_auth_v3_CheckResponse,
    responseDeserialize: deserialize_envoy_service_auth_v3_CheckResponse,
  },
};

exports.AuthorizationClient = grpc.makeGenericClientConstructor(AuthorizationService);
