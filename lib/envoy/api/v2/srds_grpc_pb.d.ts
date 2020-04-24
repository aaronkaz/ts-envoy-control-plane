// package: envoy.api.v2
// file: envoy/api/v2/srds.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as envoy_api_v2_srds_pb from "../../../envoy/api/v2/srds_pb";
import * as envoy_api_v2_discovery_pb from "../../../envoy/api/v2/discovery_pb";
import * as envoy_annotations_resource_pb from "../../../envoy/annotations/resource_pb";
import * as udpa_annotations_migrate_pb from "../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../udpa/annotations/status_pb";
import * as envoy_api_v2_scoped_route_pb from "../../../envoy/api/v2/scoped_route_pb";

interface IScopedRoutesDiscoveryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    streamScopedRoutes: IScopedRoutesDiscoveryServiceService_IStreamScopedRoutes;
    deltaScopedRoutes: IScopedRoutesDiscoveryServiceService_IDeltaScopedRoutes;
    fetchScopedRoutes: IScopedRoutesDiscoveryServiceService_IFetchScopedRoutes;
}

interface IScopedRoutesDiscoveryServiceService_IStreamScopedRoutes extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse> {
    path: string; // "/envoy.api.v2.ScopedRoutesDiscoveryService/StreamScopedRoutes"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
}
interface IScopedRoutesDiscoveryServiceService_IDeltaScopedRoutes extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse> {
    path: string; // "/envoy.api.v2.ScopedRoutesDiscoveryService/DeltaScopedRoutes"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
}
interface IScopedRoutesDiscoveryServiceService_IFetchScopedRoutes extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse> {
    path: string; // "/envoy.api.v2.ScopedRoutesDiscoveryService/FetchScopedRoutes"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
}

export const ScopedRoutesDiscoveryServiceService: IScopedRoutesDiscoveryServiceService;

export interface IScopedRoutesDiscoveryServiceServer {
    streamScopedRoutes: grpc.handleBidiStreamingCall<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    deltaScopedRoutes: grpc.handleBidiStreamingCall<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    fetchScopedRoutes: grpc.handleUnaryCall<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
}

export interface IScopedRoutesDiscoveryServiceClient {
    streamScopedRoutes(): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    streamScopedRoutes(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    streamScopedRoutes(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    deltaScopedRoutes(): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    deltaScopedRoutes(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    deltaScopedRoutes(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    fetchScopedRoutes(request: envoy_api_v2_discovery_pb.DiscoveryRequest, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    fetchScopedRoutes(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    fetchScopedRoutes(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
}

export class ScopedRoutesDiscoveryServiceClient extends grpc.Client implements IScopedRoutesDiscoveryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public streamScopedRoutes(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    public streamScopedRoutes(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    public deltaScopedRoutes(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    public deltaScopedRoutes(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    public fetchScopedRoutes(request: envoy_api_v2_discovery_pb.DiscoveryRequest, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    public fetchScopedRoutes(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    public fetchScopedRoutes(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
}
