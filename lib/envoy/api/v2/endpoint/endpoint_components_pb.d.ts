// package: envoy.api.v2.endpoint
// file: envoy/api/v2/endpoint/endpoint_components.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_core_address_pb from "../../../../envoy/api/v2/core/address_pb";
import * as envoy_api_v2_core_base_pb from "../../../../envoy/api/v2/core/base_pb";
import * as envoy_api_v2_core_health_check_pb from "../../../../envoy/api/v2/core/health_check_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class Endpoint extends jspb.Message { 

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): envoy_api_v2_core_address_pb.Address | undefined;
    setAddress(value?: envoy_api_v2_core_address_pb.Address): void;


    hasHealthCheckConfig(): boolean;
    clearHealthCheckConfig(): void;
    getHealthCheckConfig(): Endpoint.HealthCheckConfig | undefined;
    setHealthCheckConfig(value?: Endpoint.HealthCheckConfig): void;

    getHostname(): string;
    setHostname(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Endpoint.AsObject;
    static toObject(includeInstance: boolean, msg: Endpoint): Endpoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Endpoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Endpoint;
    static deserializeBinaryFromReader(message: Endpoint, reader: jspb.BinaryReader): Endpoint;
}

export namespace Endpoint {
    export type AsObject = {
        address?: envoy_api_v2_core_address_pb.Address.AsObject,
        healthCheckConfig?: Endpoint.HealthCheckConfig.AsObject,
        hostname: string,
    }


    export class HealthCheckConfig extends jspb.Message { 
        getPortValue(): number;
        setPortValue(value: number): void;

        getHostname(): string;
        setHostname(value: string): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): HealthCheckConfig.AsObject;
        static toObject(includeInstance: boolean, msg: HealthCheckConfig): HealthCheckConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: HealthCheckConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): HealthCheckConfig;
        static deserializeBinaryFromReader(message: HealthCheckConfig, reader: jspb.BinaryReader): HealthCheckConfig;
    }

    export namespace HealthCheckConfig {
        export type AsObject = {
            portValue: number,
            hostname: string,
        }
    }

}

export class LbEndpoint extends jspb.Message { 

    hasEndpoint(): boolean;
    clearEndpoint(): void;
    getEndpoint(): Endpoint | undefined;
    setEndpoint(value?: Endpoint): void;


    hasEndpointName(): boolean;
    clearEndpointName(): void;
    getEndpointName(): string;
    setEndpointName(value: string): void;

    getHealthStatus(): envoy_api_v2_core_health_check_pb.HealthStatus;
    setHealthStatus(value: envoy_api_v2_core_health_check_pb.HealthStatus): void;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): envoy_api_v2_core_base_pb.Metadata | undefined;
    setMetadata(value?: envoy_api_v2_core_base_pb.Metadata): void;


    hasLoadBalancingWeight(): boolean;
    clearLoadBalancingWeight(): void;
    getLoadBalancingWeight(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setLoadBalancingWeight(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    getHostIdentifierCase(): LbEndpoint.HostIdentifierCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LbEndpoint.AsObject;
    static toObject(includeInstance: boolean, msg: LbEndpoint): LbEndpoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LbEndpoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LbEndpoint;
    static deserializeBinaryFromReader(message: LbEndpoint, reader: jspb.BinaryReader): LbEndpoint;
}

export namespace LbEndpoint {
    export type AsObject = {
        endpoint?: Endpoint.AsObject,
        endpointName: string,
        healthStatus: envoy_api_v2_core_health_check_pb.HealthStatus,
        metadata?: envoy_api_v2_core_base_pb.Metadata.AsObject,
        loadBalancingWeight?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    }

    export enum HostIdentifierCase {
        HOSTIDENTIFIER_NOT_SET = 0,
    
    ENDPOINT = 1,

    ENDPOINT_NAME = 5,

    }

}

export class LocalityLbEndpoints extends jspb.Message { 

    hasLocality(): boolean;
    clearLocality(): void;
    getLocality(): envoy_api_v2_core_base_pb.Locality | undefined;
    setLocality(value?: envoy_api_v2_core_base_pb.Locality): void;

    clearLbEndpointsList(): void;
    getLbEndpointsList(): Array<LbEndpoint>;
    setLbEndpointsList(value: Array<LbEndpoint>): void;
    addLbEndpoints(value?: LbEndpoint, index?: number): LbEndpoint;


    hasLoadBalancingWeight(): boolean;
    clearLoadBalancingWeight(): void;
    getLoadBalancingWeight(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setLoadBalancingWeight(value?: google_protobuf_wrappers_pb.UInt32Value): void;

    getPriority(): number;
    setPriority(value: number): void;


    hasProximity(): boolean;
    clearProximity(): void;
    getProximity(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setProximity(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LocalityLbEndpoints.AsObject;
    static toObject(includeInstance: boolean, msg: LocalityLbEndpoints): LocalityLbEndpoints.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LocalityLbEndpoints, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LocalityLbEndpoints;
    static deserializeBinaryFromReader(message: LocalityLbEndpoints, reader: jspb.BinaryReader): LocalityLbEndpoints;
}

export namespace LocalityLbEndpoints {
    export type AsObject = {
        locality?: envoy_api_v2_core_base_pb.Locality.AsObject,
        lbEndpointsList: Array<LbEndpoint.AsObject>,
        loadBalancingWeight?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        priority: number,
        proximity?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    }
}
