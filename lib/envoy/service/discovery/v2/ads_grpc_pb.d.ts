// package: envoy.service.discovery.v2
// file: envoy/service/discovery/v2/ads.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as envoy_service_discovery_v2_ads_pb from "../../../../envoy/service/discovery/v2/ads_pb";
import * as envoy_api_v2_discovery_pb from "../../../../envoy/api/v2/discovery_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";

interface IAggregatedDiscoveryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    streamAggregatedResources: IAggregatedDiscoveryServiceService_IStreamAggregatedResources;
    deltaAggregatedResources: IAggregatedDiscoveryServiceService_IDeltaAggregatedResources;
}

interface IAggregatedDiscoveryServiceService_IStreamAggregatedResources extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse> {
    path: string; // "/envoy.service.discovery.v2.AggregatedDiscoveryService/StreamAggregatedResources"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
}
interface IAggregatedDiscoveryServiceService_IDeltaAggregatedResources extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse> {
    path: string; // "/envoy.service.discovery.v2.AggregatedDiscoveryService/DeltaAggregatedResources"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
}

export const AggregatedDiscoveryServiceService: IAggregatedDiscoveryServiceService;

export interface IAggregatedDiscoveryServiceServer {
    streamAggregatedResources: grpc.handleBidiStreamingCall<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    deltaAggregatedResources: grpc.handleBidiStreamingCall<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
}

export interface IAggregatedDiscoveryServiceClient {
    streamAggregatedResources(): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    streamAggregatedResources(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    streamAggregatedResources(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    deltaAggregatedResources(): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    deltaAggregatedResources(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    deltaAggregatedResources(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
}

export class AggregatedDiscoveryServiceClient extends grpc.Client implements IAggregatedDiscoveryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public streamAggregatedResources(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    public streamAggregatedResources(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    public deltaAggregatedResources(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    public deltaAggregatedResources(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
}
