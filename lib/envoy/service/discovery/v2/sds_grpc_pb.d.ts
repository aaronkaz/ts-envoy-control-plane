// package: envoy.service.discovery.v2
// file: envoy/service/discovery/v2/sds.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as envoy_service_discovery_v2_sds_pb from "../../../../envoy/service/discovery/v2/sds_pb";
import * as envoy_api_v2_discovery_pb from "../../../../envoy/api/v2/discovery_pb";
import * as envoy_annotations_resource_pb from "../../../../envoy/annotations/resource_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";

interface ISecretDiscoveryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    deltaSecrets: ISecretDiscoveryServiceService_IDeltaSecrets;
    streamSecrets: ISecretDiscoveryServiceService_IStreamSecrets;
    fetchSecrets: ISecretDiscoveryServiceService_IFetchSecrets;
}

interface ISecretDiscoveryServiceService_IDeltaSecrets extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse> {
    path: string; // "/envoy.service.discovery.v2.SecretDiscoveryService/DeltaSecrets"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
}
interface ISecretDiscoveryServiceService_IStreamSecrets extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse> {
    path: string; // "/envoy.service.discovery.v2.SecretDiscoveryService/StreamSecrets"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
}
interface ISecretDiscoveryServiceService_IFetchSecrets extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse> {
    path: string; // "/envoy.service.discovery.v2.SecretDiscoveryService/FetchSecrets"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
}

export const SecretDiscoveryServiceService: ISecretDiscoveryServiceService;

export interface ISecretDiscoveryServiceServer {
    deltaSecrets: grpc.handleBidiStreamingCall<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    streamSecrets: grpc.handleBidiStreamingCall<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    fetchSecrets: grpc.handleUnaryCall<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
}

export interface ISecretDiscoveryServiceClient {
    deltaSecrets(): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    deltaSecrets(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    deltaSecrets(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    streamSecrets(): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    streamSecrets(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    streamSecrets(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    fetchSecrets(request: envoy_api_v2_discovery_pb.DiscoveryRequest, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    fetchSecrets(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    fetchSecrets(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
}

export class SecretDiscoveryServiceClient extends grpc.Client implements ISecretDiscoveryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public deltaSecrets(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    public deltaSecrets(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    public streamSecrets(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    public streamSecrets(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    public fetchSecrets(request: envoy_api_v2_discovery_pb.DiscoveryRequest, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    public fetchSecrets(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    public fetchSecrets(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
}
