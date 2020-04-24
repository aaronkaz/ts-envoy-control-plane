// package: envoy.api.v2
// file: envoy/api/v2/lds.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as envoy_api_v2_lds_pb from "../../../envoy/api/v2/lds_pb";
import * as envoy_api_v2_discovery_pb from "../../../envoy/api/v2/discovery_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as envoy_annotations_resource_pb from "../../../envoy/annotations/resource_pb";
import * as udpa_annotations_migrate_pb from "../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";
import * as envoy_api_v2_listener_pb from "../../../envoy/api/v2/listener_pb";

interface IListenerDiscoveryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    deltaListeners: IListenerDiscoveryServiceService_IDeltaListeners;
    streamListeners: IListenerDiscoveryServiceService_IStreamListeners;
    fetchListeners: IListenerDiscoveryServiceService_IFetchListeners;
}

interface IListenerDiscoveryServiceService_IDeltaListeners extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse> {
    path: string; // "/envoy.api.v2.ListenerDiscoveryService/DeltaListeners"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
}
interface IListenerDiscoveryServiceService_IStreamListeners extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse> {
    path: string; // "/envoy.api.v2.ListenerDiscoveryService/StreamListeners"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
}
interface IListenerDiscoveryServiceService_IFetchListeners extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse> {
    path: string; // "/envoy.api.v2.ListenerDiscoveryService/FetchListeners"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
}

export const ListenerDiscoveryServiceService: IListenerDiscoveryServiceService;

export interface IListenerDiscoveryServiceServer {
    deltaListeners: grpc.handleBidiStreamingCall<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    streamListeners: grpc.handleBidiStreamingCall<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    fetchListeners: grpc.handleUnaryCall<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
}

export interface IListenerDiscoveryServiceClient {
    deltaListeners(): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    deltaListeners(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    deltaListeners(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    streamListeners(): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    streamListeners(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    streamListeners(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    fetchListeners(request: envoy_api_v2_discovery_pb.DiscoveryRequest, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    fetchListeners(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    fetchListeners(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
}

export class ListenerDiscoveryServiceClient extends grpc.Client implements IListenerDiscoveryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public deltaListeners(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    public deltaListeners(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    public streamListeners(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    public streamListeners(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    public fetchListeners(request: envoy_api_v2_discovery_pb.DiscoveryRequest, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    public fetchListeners(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    public fetchListeners(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
}
