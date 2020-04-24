// package: envoy.service.discovery.v2
// file: envoy/service/discovery/v2/hds.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as envoy_service_discovery_v2_hds_pb from "../../../../envoy/service/discovery/v2/hds_pb";
import * as envoy_api_v2_core_base_pb from "../../../../envoy/api/v2/core/base_pb";
import * as envoy_api_v2_core_health_check_pb from "../../../../envoy/api/v2/core/health_check_pb";
import * as envoy_api_v2_endpoint_endpoint_components_pb from "../../../../envoy/api/v2/endpoint/endpoint_components_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";

interface IHealthDiscoveryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    streamHealthCheck: IHealthDiscoveryServiceService_IStreamHealthCheck;
    fetchHealthCheck: IHealthDiscoveryServiceService_IFetchHealthCheck;
}

interface IHealthDiscoveryServiceService_IStreamHealthCheck extends grpc.MethodDefinition<envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse, envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier> {
    path: string; // "/envoy.service.discovery.v2.HealthDiscoveryService/StreamHealthCheck"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse>;
    requestDeserialize: grpc.deserialize<envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse>;
    responseSerialize: grpc.serialize<envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier>;
    responseDeserialize: grpc.deserialize<envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier>;
}
interface IHealthDiscoveryServiceService_IFetchHealthCheck extends grpc.MethodDefinition<envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse, envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier> {
    path: string; // "/envoy.service.discovery.v2.HealthDiscoveryService/FetchHealthCheck"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse>;
    requestDeserialize: grpc.deserialize<envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse>;
    responseSerialize: grpc.serialize<envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier>;
    responseDeserialize: grpc.deserialize<envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier>;
}

export const HealthDiscoveryServiceService: IHealthDiscoveryServiceService;

export interface IHealthDiscoveryServiceServer {
    streamHealthCheck: grpc.handleBidiStreamingCall<envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse, envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier>;
    fetchHealthCheck: grpc.handleUnaryCall<envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse, envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier>;
}

export interface IHealthDiscoveryServiceClient {
    streamHealthCheck(): grpc.ClientDuplexStream<envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse, envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier>;
    streamHealthCheck(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse, envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier>;
    streamHealthCheck(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse, envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier>;
    fetchHealthCheck(request: envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse, callback: (error: grpc.ServiceError | null, response: envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier) => void): grpc.ClientUnaryCall;
    fetchHealthCheck(request: envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier) => void): grpc.ClientUnaryCall;
    fetchHealthCheck(request: envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier) => void): grpc.ClientUnaryCall;
}

export class HealthDiscoveryServiceClient extends grpc.Client implements IHealthDiscoveryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public streamHealthCheck(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse, envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier>;
    public streamHealthCheck(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse, envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier>;
    public fetchHealthCheck(request: envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse, callback: (error: grpc.ServiceError | null, response: envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier) => void): grpc.ClientUnaryCall;
    public fetchHealthCheck(request: envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier) => void): grpc.ClientUnaryCall;
    public fetchHealthCheck(request: envoy_service_discovery_v2_hds_pb.HealthCheckRequestOrEndpointHealthResponse, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: envoy_service_discovery_v2_hds_pb.HealthCheckSpecifier) => void): grpc.ClientUnaryCall;
}
