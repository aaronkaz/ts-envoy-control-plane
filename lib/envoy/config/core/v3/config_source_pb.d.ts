// package: envoy.config.core.v3
// file: envoy/config/core/v3/config_source.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_config_core_v3_grpc_service_pb from "../../../../envoy/config/core/v3/grpc_service_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as udpa_core_v1_authority_pb from "../../../../udpa/core/v1/authority_pb";
import * as envoy_annotations_deprecation_pb from "../../../../envoy/annotations/deprecation_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as udpa_annotations_versioning_pb from "../../../../udpa/annotations/versioning_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class ApiConfigSource extends jspb.Message { 
    getApiType(): ApiConfigSource.ApiType;
    setApiType(value: ApiConfigSource.ApiType): void;

    getTransportApiVersion(): ApiVersion;
    setTransportApiVersion(value: ApiVersion): void;

    clearClusterNamesList(): void;
    getClusterNamesList(): Array<string>;
    setClusterNamesList(value: Array<string>): void;
    addClusterNames(value: string, index?: number): string;

    clearGrpcServicesList(): void;
    getGrpcServicesList(): Array<envoy_config_core_v3_grpc_service_pb.GrpcService>;
    setGrpcServicesList(value: Array<envoy_config_core_v3_grpc_service_pb.GrpcService>): void;
    addGrpcServices(value?: envoy_config_core_v3_grpc_service_pb.GrpcService, index?: number): envoy_config_core_v3_grpc_service_pb.GrpcService;


    hasRefreshDelay(): boolean;
    clearRefreshDelay(): void;
    getRefreshDelay(): google_protobuf_duration_pb.Duration | undefined;
    setRefreshDelay(value?: google_protobuf_duration_pb.Duration): void;


    hasRequestTimeout(): boolean;
    clearRequestTimeout(): void;
    getRequestTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setRequestTimeout(value?: google_protobuf_duration_pb.Duration): void;


    hasRateLimitSettings(): boolean;
    clearRateLimitSettings(): void;
    getRateLimitSettings(): RateLimitSettings | undefined;
    setRateLimitSettings(value?: RateLimitSettings): void;

    getSetNodeOnFirstMessageOnly(): boolean;
    setSetNodeOnFirstMessageOnly(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApiConfigSource.AsObject;
    static toObject(includeInstance: boolean, msg: ApiConfigSource): ApiConfigSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApiConfigSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApiConfigSource;
    static deserializeBinaryFromReader(message: ApiConfigSource, reader: jspb.BinaryReader): ApiConfigSource;
}

export namespace ApiConfigSource {
    export type AsObject = {
        apiType: ApiConfigSource.ApiType,
        transportApiVersion: ApiVersion,
        clusterNamesList: Array<string>,
        grpcServicesList: Array<envoy_config_core_v3_grpc_service_pb.GrpcService.AsObject>,
        refreshDelay?: google_protobuf_duration_pb.Duration.AsObject,
        requestTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        rateLimitSettings?: RateLimitSettings.AsObject,
        setNodeOnFirstMessageOnly: boolean,
    }

    export enum ApiType {
    DEPRECATED_AND_UNAVAILABLE_DO_NOT_USE = 0,
    REST = 1,
    GRPC = 2,
    DELTA_GRPC = 3,
    AGGREGATED_GRPC = 5,
    AGGREGATED_DELTA_GRPC = 6,
    }

}

export class AggregatedConfigSource extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AggregatedConfigSource.AsObject;
    static toObject(includeInstance: boolean, msg: AggregatedConfigSource): AggregatedConfigSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AggregatedConfigSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AggregatedConfigSource;
    static deserializeBinaryFromReader(message: AggregatedConfigSource, reader: jspb.BinaryReader): AggregatedConfigSource;
}

export namespace AggregatedConfigSource {
    export type AsObject = {
    }
}

export class SelfConfigSource extends jspb.Message { 
    getTransportApiVersion(): ApiVersion;
    setTransportApiVersion(value: ApiVersion): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelfConfigSource.AsObject;
    static toObject(includeInstance: boolean, msg: SelfConfigSource): SelfConfigSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelfConfigSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelfConfigSource;
    static deserializeBinaryFromReader(message: SelfConfigSource, reader: jspb.BinaryReader): SelfConfigSource;
}

export namespace SelfConfigSource {
    export type AsObject = {
        transportApiVersion: ApiVersion,
    }
}

export class RateLimitSettings extends jspb.Message { 

    hasMaxTokens(): boolean;
    clearMaxTokens(): void;
    getMaxTokens(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMaxTokens(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    hasFillRate(): boolean;
    clearFillRate(): void;
    getFillRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setFillRate(value?: google_protobuf_wrappers_pb.DoubleValue): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RateLimitSettings.AsObject;
    static toObject(includeInstance: boolean, msg: RateLimitSettings): RateLimitSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RateLimitSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RateLimitSettings;
    static deserializeBinaryFromReader(message: RateLimitSettings, reader: jspb.BinaryReader): RateLimitSettings;
}

export namespace RateLimitSettings {
    export type AsObject = {
        maxTokens?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        fillRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class ConfigSource extends jspb.Message { 
    clearAuthoritiesList(): void;
    getAuthoritiesList(): Array<udpa_core_v1_authority_pb.Authority>;
    setAuthoritiesList(value: Array<udpa_core_v1_authority_pb.Authority>): void;
    addAuthorities(value?: udpa_core_v1_authority_pb.Authority, index?: number): udpa_core_v1_authority_pb.Authority;


    hasPath(): boolean;
    clearPath(): void;
    getPath(): string;
    setPath(value: string): void;


    hasApiConfigSource(): boolean;
    clearApiConfigSource(): void;
    getApiConfigSource(): ApiConfigSource | undefined;
    setApiConfigSource(value?: ApiConfigSource): void;


    hasAds(): boolean;
    clearAds(): void;
    getAds(): AggregatedConfigSource | undefined;
    setAds(value?: AggregatedConfigSource): void;


    hasSelf(): boolean;
    clearSelf(): void;
    getSelf(): SelfConfigSource | undefined;
    setSelf(value?: SelfConfigSource): void;


    hasInitialFetchTimeout(): boolean;
    clearInitialFetchTimeout(): void;
    getInitialFetchTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setInitialFetchTimeout(value?: google_protobuf_duration_pb.Duration): void;

    getResourceApiVersion(): ApiVersion;
    setResourceApiVersion(value: ApiVersion): void;


    getConfigSourceSpecifierCase(): ConfigSource.ConfigSourceSpecifierCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfigSource.AsObject;
    static toObject(includeInstance: boolean, msg: ConfigSource): ConfigSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfigSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfigSource;
    static deserializeBinaryFromReader(message: ConfigSource, reader: jspb.BinaryReader): ConfigSource;
}

export namespace ConfigSource {
    export type AsObject = {
        authoritiesList: Array<udpa_core_v1_authority_pb.Authority.AsObject>,
        path: string,
        apiConfigSource?: ApiConfigSource.AsObject,
        ads?: AggregatedConfigSource.AsObject,
        self?: SelfConfigSource.AsObject,
        initialFetchTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        resourceApiVersion: ApiVersion,
    }

    export enum ConfigSourceSpecifierCase {
        CONFIG_SOURCE_SPECIFIER_NOT_SET = 0,
    
    PATH = 1,

    API_CONFIG_SOURCE = 2,

    ADS = 3,

    SELF = 5,

    }

}

export enum ApiVersion {
    AUTO = 0,
    V2 = 1,
    V3 = 2,
}
