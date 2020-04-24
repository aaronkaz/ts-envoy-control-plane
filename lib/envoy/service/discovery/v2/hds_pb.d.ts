// package: envoy.service.discovery.v2
// file: envoy/service/discovery/v2/hds.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_core_base_pb from "../../../../envoy/api/v2/core/base_pb";
import * as envoy_api_v2_core_health_check_pb from "../../../../envoy/api/v2/core/health_check_pb";
import * as envoy_api_v2_endpoint_endpoint_components_pb from "../../../../envoy/api/v2/endpoint/endpoint_components_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";

export class Capability extends jspb.Message { 
    clearHealthCheckProtocolsList(): void;
    getHealthCheckProtocolsList(): Array<Capability.Protocol>;
    setHealthCheckProtocolsList(value: Array<Capability.Protocol>): void;
    addHealthCheckProtocols(value: Capability.Protocol, index?: number): Capability.Protocol;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Capability.AsObject;
    static toObject(includeInstance: boolean, msg: Capability): Capability.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Capability, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Capability;
    static deserializeBinaryFromReader(message: Capability, reader: jspb.BinaryReader): Capability;
}

export namespace Capability {
    export type AsObject = {
        healthCheckProtocolsList: Array<Capability.Protocol>,
    }

    export enum Protocol {
    HTTP = 0,
    TCP = 1,
    REDIS = 2,
    }

}

export class HealthCheckRequest extends jspb.Message { 

    hasNode(): boolean;
    clearNode(): void;
    getNode(): envoy_api_v2_core_base_pb.Node | undefined;
    setNode(value?: envoy_api_v2_core_base_pb.Node): void;


    hasCapability(): boolean;
    clearCapability(): void;
    getCapability(): Capability | undefined;
    setCapability(value?: Capability): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthCheckRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HealthCheckRequest): HealthCheckRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthCheckRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthCheckRequest;
    static deserializeBinaryFromReader(message: HealthCheckRequest, reader: jspb.BinaryReader): HealthCheckRequest;
}

export namespace HealthCheckRequest {
    export type AsObject = {
        node?: envoy_api_v2_core_base_pb.Node.AsObject,
        capability?: Capability.AsObject,
    }
}

export class EndpointHealth extends jspb.Message { 

    hasEndpoint(): boolean;
    clearEndpoint(): void;
    getEndpoint(): envoy_api_v2_endpoint_endpoint_components_pb.Endpoint | undefined;
    setEndpoint(value?: envoy_api_v2_endpoint_endpoint_components_pb.Endpoint): void;

    getHealthStatus(): envoy_api_v2_core_health_check_pb.HealthStatus;
    setHealthStatus(value: envoy_api_v2_core_health_check_pb.HealthStatus): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndpointHealth.AsObject;
    static toObject(includeInstance: boolean, msg: EndpointHealth): EndpointHealth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EndpointHealth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndpointHealth;
    static deserializeBinaryFromReader(message: EndpointHealth, reader: jspb.BinaryReader): EndpointHealth;
}

export namespace EndpointHealth {
    export type AsObject = {
        endpoint?: envoy_api_v2_endpoint_endpoint_components_pb.Endpoint.AsObject,
        healthStatus: envoy_api_v2_core_health_check_pb.HealthStatus,
    }
}

export class EndpointHealthResponse extends jspb.Message { 
    clearEndpointsHealthList(): void;
    getEndpointsHealthList(): Array<EndpointHealth>;
    setEndpointsHealthList(value: Array<EndpointHealth>): void;
    addEndpointsHealth(value?: EndpointHealth, index?: number): EndpointHealth;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndpointHealthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EndpointHealthResponse): EndpointHealthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EndpointHealthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndpointHealthResponse;
    static deserializeBinaryFromReader(message: EndpointHealthResponse, reader: jspb.BinaryReader): EndpointHealthResponse;
}

export namespace EndpointHealthResponse {
    export type AsObject = {
        endpointsHealthList: Array<EndpointHealth.AsObject>,
    }
}

export class HealthCheckRequestOrEndpointHealthResponse extends jspb.Message { 

    hasHealthCheckRequest(): boolean;
    clearHealthCheckRequest(): void;
    getHealthCheckRequest(): HealthCheckRequest | undefined;
    setHealthCheckRequest(value?: HealthCheckRequest): void;


    hasEndpointHealthResponse(): boolean;
    clearEndpointHealthResponse(): void;
    getEndpointHealthResponse(): EndpointHealthResponse | undefined;
    setEndpointHealthResponse(value?: EndpointHealthResponse): void;


    getRequestTypeCase(): HealthCheckRequestOrEndpointHealthResponse.RequestTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthCheckRequestOrEndpointHealthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HealthCheckRequestOrEndpointHealthResponse): HealthCheckRequestOrEndpointHealthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthCheckRequestOrEndpointHealthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthCheckRequestOrEndpointHealthResponse;
    static deserializeBinaryFromReader(message: HealthCheckRequestOrEndpointHealthResponse, reader: jspb.BinaryReader): HealthCheckRequestOrEndpointHealthResponse;
}

export namespace HealthCheckRequestOrEndpointHealthResponse {
    export type AsObject = {
        healthCheckRequest?: HealthCheckRequest.AsObject,
        endpointHealthResponse?: EndpointHealthResponse.AsObject,
    }

    export enum RequestTypeCase {
        REQUESTTYPE_NOT_SET = 0,
    
    HEALTH_CHECK_REQUEST = 1,

    ENDPOINT_HEALTH_RESPONSE = 2,

    }

}

export class LocalityEndpoints extends jspb.Message { 

    hasLocality(): boolean;
    clearLocality(): void;
    getLocality(): envoy_api_v2_core_base_pb.Locality | undefined;
    setLocality(value?: envoy_api_v2_core_base_pb.Locality): void;

    clearEndpointsList(): void;
    getEndpointsList(): Array<envoy_api_v2_endpoint_endpoint_components_pb.Endpoint>;
    setEndpointsList(value: Array<envoy_api_v2_endpoint_endpoint_components_pb.Endpoint>): void;
    addEndpoints(value?: envoy_api_v2_endpoint_endpoint_components_pb.Endpoint, index?: number): envoy_api_v2_endpoint_endpoint_components_pb.Endpoint;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LocalityEndpoints.AsObject;
    static toObject(includeInstance: boolean, msg: LocalityEndpoints): LocalityEndpoints.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LocalityEndpoints, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LocalityEndpoints;
    static deserializeBinaryFromReader(message: LocalityEndpoints, reader: jspb.BinaryReader): LocalityEndpoints;
}

export namespace LocalityEndpoints {
    export type AsObject = {
        locality?: envoy_api_v2_core_base_pb.Locality.AsObject,
        endpointsList: Array<envoy_api_v2_endpoint_endpoint_components_pb.Endpoint.AsObject>,
    }
}

export class ClusterHealthCheck extends jspb.Message { 
    getClusterName(): string;
    setClusterName(value: string): void;

    clearHealthChecksList(): void;
    getHealthChecksList(): Array<envoy_api_v2_core_health_check_pb.HealthCheck>;
    setHealthChecksList(value: Array<envoy_api_v2_core_health_check_pb.HealthCheck>): void;
    addHealthChecks(value?: envoy_api_v2_core_health_check_pb.HealthCheck, index?: number): envoy_api_v2_core_health_check_pb.HealthCheck;

    clearLocalityEndpointsList(): void;
    getLocalityEndpointsList(): Array<LocalityEndpoints>;
    setLocalityEndpointsList(value: Array<LocalityEndpoints>): void;
    addLocalityEndpoints(value?: LocalityEndpoints, index?: number): LocalityEndpoints;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClusterHealthCheck.AsObject;
    static toObject(includeInstance: boolean, msg: ClusterHealthCheck): ClusterHealthCheck.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClusterHealthCheck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClusterHealthCheck;
    static deserializeBinaryFromReader(message: ClusterHealthCheck, reader: jspb.BinaryReader): ClusterHealthCheck;
}

export namespace ClusterHealthCheck {
    export type AsObject = {
        clusterName: string,
        healthChecksList: Array<envoy_api_v2_core_health_check_pb.HealthCheck.AsObject>,
        localityEndpointsList: Array<LocalityEndpoints.AsObject>,
    }
}

export class HealthCheckSpecifier extends jspb.Message { 
    clearClusterHealthChecksList(): void;
    getClusterHealthChecksList(): Array<ClusterHealthCheck>;
    setClusterHealthChecksList(value: Array<ClusterHealthCheck>): void;
    addClusterHealthChecks(value?: ClusterHealthCheck, index?: number): ClusterHealthCheck;


    hasInterval(): boolean;
    clearInterval(): void;
    getInterval(): google_protobuf_duration_pb.Duration | undefined;
    setInterval(value?: google_protobuf_duration_pb.Duration): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthCheckSpecifier.AsObject;
    static toObject(includeInstance: boolean, msg: HealthCheckSpecifier): HealthCheckSpecifier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthCheckSpecifier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthCheckSpecifier;
    static deserializeBinaryFromReader(message: HealthCheckSpecifier, reader: jspb.BinaryReader): HealthCheckSpecifier;
}

export namespace HealthCheckSpecifier {
    export type AsObject = {
        clusterHealthChecksList: Array<ClusterHealthCheck.AsObject>,
        interval?: google_protobuf_duration_pb.Duration.AsObject,
    }
}
