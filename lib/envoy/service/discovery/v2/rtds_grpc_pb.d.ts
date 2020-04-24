// package: envoy.service.discovery.v2
// file: envoy/service/discovery/v2/rtds.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as envoy_service_discovery_v2_rtds_pb from "../../../../envoy/service/discovery/v2/rtds_pb";
import * as envoy_api_v2_discovery_pb from "../../../../envoy/api/v2/discovery_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as envoy_annotations_resource_pb from "../../../../envoy/annotations/resource_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

interface IRuntimeDiscoveryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    streamRuntime: IRuntimeDiscoveryServiceService_IStreamRuntime;
    deltaRuntime: IRuntimeDiscoveryServiceService_IDeltaRuntime;
    fetchRuntime: IRuntimeDiscoveryServiceService_IFetchRuntime;
}

interface IRuntimeDiscoveryServiceService_IStreamRuntime extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse> {
    path: string; // "/envoy.service.discovery.v2.RuntimeDiscoveryService/StreamRuntime"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
}
interface IRuntimeDiscoveryServiceService_IDeltaRuntime extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse> {
    path: string; // "/envoy.service.discovery.v2.RuntimeDiscoveryService/DeltaRuntime"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
}
interface IRuntimeDiscoveryServiceService_IFetchRuntime extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse> {
    path: string; // "/envoy.service.discovery.v2.RuntimeDiscoveryService/FetchRuntime"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
}

export const RuntimeDiscoveryServiceService: IRuntimeDiscoveryServiceService;

export interface IRuntimeDiscoveryServiceServer {
    streamRuntime: grpc.handleBidiStreamingCall<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    deltaRuntime: grpc.handleBidiStreamingCall<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    fetchRuntime: grpc.handleUnaryCall<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
}

export interface IRuntimeDiscoveryServiceClient {
    streamRuntime(): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    streamRuntime(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    streamRuntime(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    deltaRuntime(): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    deltaRuntime(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    deltaRuntime(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    fetchRuntime(request: envoy_api_v2_discovery_pb.DiscoveryRequest, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    fetchRuntime(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    fetchRuntime(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
}

export class RuntimeDiscoveryServiceClient extends grpc.Client implements IRuntimeDiscoveryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public streamRuntime(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    public streamRuntime(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    public deltaRuntime(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    public deltaRuntime(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    public fetchRuntime(request: envoy_api_v2_discovery_pb.DiscoveryRequest, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    public fetchRuntime(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    public fetchRuntime(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
}
