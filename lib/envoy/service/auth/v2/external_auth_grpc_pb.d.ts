// package: envoy.service.auth.v2
// file: envoy/service/auth/v2/external_auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as envoy_service_auth_v2_external_auth_pb from "../../../../envoy/service/auth/v2/external_auth_pb";
import * as envoy_api_v2_core_base_pb from "../../../../envoy/api/v2/core/base_pb";
import * as envoy_service_auth_v2_attribute_context_pb from "../../../../envoy/service/auth/v2/attribute_context_pb";
import * as envoy_type_http_status_pb from "../../../../envoy/type/http_status_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

interface IAuthorizationService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    check: IAuthorizationService_ICheck;
}

interface IAuthorizationService_ICheck extends grpc.MethodDefinition<envoy_service_auth_v2_external_auth_pb.CheckRequest, envoy_service_auth_v2_external_auth_pb.CheckResponse> {
    path: string; // "/envoy.service.auth.v2.Authorization/Check"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<envoy_service_auth_v2_external_auth_pb.CheckRequest>;
    requestDeserialize: grpc.deserialize<envoy_service_auth_v2_external_auth_pb.CheckRequest>;
    responseSerialize: grpc.serialize<envoy_service_auth_v2_external_auth_pb.CheckResponse>;
    responseDeserialize: grpc.deserialize<envoy_service_auth_v2_external_auth_pb.CheckResponse>;
}

export const AuthorizationService: IAuthorizationService;

export interface IAuthorizationServer {
    check: grpc.handleUnaryCall<envoy_service_auth_v2_external_auth_pb.CheckRequest, envoy_service_auth_v2_external_auth_pb.CheckResponse>;
}

export interface IAuthorizationClient {
    check(request: envoy_service_auth_v2_external_auth_pb.CheckRequest, callback: (error: grpc.ServiceError | null, response: envoy_service_auth_v2_external_auth_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    check(request: envoy_service_auth_v2_external_auth_pb.CheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: envoy_service_auth_v2_external_auth_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    check(request: envoy_service_auth_v2_external_auth_pb.CheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: envoy_service_auth_v2_external_auth_pb.CheckResponse) => void): grpc.ClientUnaryCall;
}

export class AuthorizationClient extends grpc.Client implements IAuthorizationClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public check(request: envoy_service_auth_v2_external_auth_pb.CheckRequest, callback: (error: grpc.ServiceError | null, response: envoy_service_auth_v2_external_auth_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    public check(request: envoy_service_auth_v2_external_auth_pb.CheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: envoy_service_auth_v2_external_auth_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    public check(request: envoy_service_auth_v2_external_auth_pb.CheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: envoy_service_auth_v2_external_auth_pb.CheckResponse) => void): grpc.ClientUnaryCall;
}
