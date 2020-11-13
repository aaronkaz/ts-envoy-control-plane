// package: envoy.config.filter.accesslog.v2
// file: envoy/config/filter/accesslog/v2/accesslog.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_core_base_pb from "../../../../../envoy/api/v2/core/base_pb";
import * as envoy_api_v2_route_route_components_pb from "../../../../../envoy/api/v2/route/route_components_pb";
import * as envoy_type_percent_pb from "../../../../../envoy/type/percent_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as udpa_annotations_migrate_pb from "../../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../../validate/validate_pb";

export class AccessLog extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): AccessLogFilter | undefined;
    setFilter(value?: AccessLogFilter): void;


    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): google_protobuf_struct_pb.Struct | undefined;
    setConfig(value?: google_protobuf_struct_pb.Struct): void;


    hasTypedConfig(): boolean;
    clearTypedConfig(): void;
    getTypedConfig(): google_protobuf_any_pb.Any | undefined;
    setTypedConfig(value?: google_protobuf_any_pb.Any): void;


    getConfigTypeCase(): AccessLog.ConfigTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessLog.AsObject;
    static toObject(includeInstance: boolean, msg: AccessLog): AccessLog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessLog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessLog;
    static deserializeBinaryFromReader(message: AccessLog, reader: jspb.BinaryReader): AccessLog;
}

export namespace AccessLog {
    export type AsObject = {
        name: string,
        filter?: AccessLogFilter.AsObject,
        config?: google_protobuf_struct_pb.Struct.AsObject,
        typedConfig?: google_protobuf_any_pb.Any.AsObject,
    }

    export enum ConfigTypeCase {
        CONFIG_TYPE_NOT_SET = 0,
    
    CONFIG = 3,

    TYPED_CONFIG = 4,

    }

}

export class AccessLogFilter extends jspb.Message { 

    hasStatusCodeFilter(): boolean;
    clearStatusCodeFilter(): void;
    getStatusCodeFilter(): StatusCodeFilter | undefined;
    setStatusCodeFilter(value?: StatusCodeFilter): void;


    hasDurationFilter(): boolean;
    clearDurationFilter(): void;
    getDurationFilter(): DurationFilter | undefined;
    setDurationFilter(value?: DurationFilter): void;


    hasNotHealthCheckFilter(): boolean;
    clearNotHealthCheckFilter(): void;
    getNotHealthCheckFilter(): NotHealthCheckFilter | undefined;
    setNotHealthCheckFilter(value?: NotHealthCheckFilter): void;


    hasTraceableFilter(): boolean;
    clearTraceableFilter(): void;
    getTraceableFilter(): TraceableFilter | undefined;
    setTraceableFilter(value?: TraceableFilter): void;


    hasRuntimeFilter(): boolean;
    clearRuntimeFilter(): void;
    getRuntimeFilter(): RuntimeFilter | undefined;
    setRuntimeFilter(value?: RuntimeFilter): void;


    hasAndFilter(): boolean;
    clearAndFilter(): void;
    getAndFilter(): AndFilter | undefined;
    setAndFilter(value?: AndFilter): void;


    hasOrFilter(): boolean;
    clearOrFilter(): void;
    getOrFilter(): OrFilter | undefined;
    setOrFilter(value?: OrFilter): void;


    hasHeaderFilter(): boolean;
    clearHeaderFilter(): void;
    getHeaderFilter(): HeaderFilter | undefined;
    setHeaderFilter(value?: HeaderFilter): void;


    hasResponseFlagFilter(): boolean;
    clearResponseFlagFilter(): void;
    getResponseFlagFilter(): ResponseFlagFilter | undefined;
    setResponseFlagFilter(value?: ResponseFlagFilter): void;


    hasGrpcStatusFilter(): boolean;
    clearGrpcStatusFilter(): void;
    getGrpcStatusFilter(): GrpcStatusFilter | undefined;
    setGrpcStatusFilter(value?: GrpcStatusFilter): void;


    hasExtensionFilter(): boolean;
    clearExtensionFilter(): void;
    getExtensionFilter(): ExtensionFilter | undefined;
    setExtensionFilter(value?: ExtensionFilter): void;


    getFilterSpecifierCase(): AccessLogFilter.FilterSpecifierCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessLogFilter.AsObject;
    static toObject(includeInstance: boolean, msg: AccessLogFilter): AccessLogFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessLogFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessLogFilter;
    static deserializeBinaryFromReader(message: AccessLogFilter, reader: jspb.BinaryReader): AccessLogFilter;
}

export namespace AccessLogFilter {
    export type AsObject = {
        statusCodeFilter?: StatusCodeFilter.AsObject,
        durationFilter?: DurationFilter.AsObject,
        notHealthCheckFilter?: NotHealthCheckFilter.AsObject,
        traceableFilter?: TraceableFilter.AsObject,
        runtimeFilter?: RuntimeFilter.AsObject,
        andFilter?: AndFilter.AsObject,
        orFilter?: OrFilter.AsObject,
        headerFilter?: HeaderFilter.AsObject,
        responseFlagFilter?: ResponseFlagFilter.AsObject,
        grpcStatusFilter?: GrpcStatusFilter.AsObject,
        extensionFilter?: ExtensionFilter.AsObject,
    }

    export enum FilterSpecifierCase {
        FILTER_SPECIFIER_NOT_SET = 0,
    
    STATUS_CODE_FILTER = 1,

    DURATION_FILTER = 2,

    NOT_HEALTH_CHECK_FILTER = 3,

    TRACEABLE_FILTER = 4,

    RUNTIME_FILTER = 5,

    AND_FILTER = 6,

    OR_FILTER = 7,

    HEADER_FILTER = 8,

    RESPONSE_FLAG_FILTER = 9,

    GRPC_STATUS_FILTER = 10,

    EXTENSION_FILTER = 11,

    }

}

export class ComparisonFilter extends jspb.Message { 
    getOp(): ComparisonFilter.Op;
    setOp(value: ComparisonFilter.Op): void;


    hasValue(): boolean;
    clearValue(): void;
    getValue(): envoy_api_v2_core_base_pb.RuntimeUInt32 | undefined;
    setValue(value?: envoy_api_v2_core_base_pb.RuntimeUInt32): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComparisonFilter.AsObject;
    static toObject(includeInstance: boolean, msg: ComparisonFilter): ComparisonFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComparisonFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComparisonFilter;
    static deserializeBinaryFromReader(message: ComparisonFilter, reader: jspb.BinaryReader): ComparisonFilter;
}

export namespace ComparisonFilter {
    export type AsObject = {
        op: ComparisonFilter.Op,
        value?: envoy_api_v2_core_base_pb.RuntimeUInt32.AsObject,
    }

    export enum Op {
    EQ = 0,
    GE = 1,
    LE = 2,
    }

}

export class StatusCodeFilter extends jspb.Message { 

    hasComparison(): boolean;
    clearComparison(): void;
    getComparison(): ComparisonFilter | undefined;
    setComparison(value?: ComparisonFilter): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusCodeFilter.AsObject;
    static toObject(includeInstance: boolean, msg: StatusCodeFilter): StatusCodeFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusCodeFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusCodeFilter;
    static deserializeBinaryFromReader(message: StatusCodeFilter, reader: jspb.BinaryReader): StatusCodeFilter;
}

export namespace StatusCodeFilter {
    export type AsObject = {
        comparison?: ComparisonFilter.AsObject,
    }
}

export class DurationFilter extends jspb.Message { 

    hasComparison(): boolean;
    clearComparison(): void;
    getComparison(): ComparisonFilter | undefined;
    setComparison(value?: ComparisonFilter): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DurationFilter.AsObject;
    static toObject(includeInstance: boolean, msg: DurationFilter): DurationFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DurationFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DurationFilter;
    static deserializeBinaryFromReader(message: DurationFilter, reader: jspb.BinaryReader): DurationFilter;
}

export namespace DurationFilter {
    export type AsObject = {
        comparison?: ComparisonFilter.AsObject,
    }
}

export class NotHealthCheckFilter extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotHealthCheckFilter.AsObject;
    static toObject(includeInstance: boolean, msg: NotHealthCheckFilter): NotHealthCheckFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotHealthCheckFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotHealthCheckFilter;
    static deserializeBinaryFromReader(message: NotHealthCheckFilter, reader: jspb.BinaryReader): NotHealthCheckFilter;
}

export namespace NotHealthCheckFilter {
    export type AsObject = {
    }
}

export class TraceableFilter extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TraceableFilter.AsObject;
    static toObject(includeInstance: boolean, msg: TraceableFilter): TraceableFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TraceableFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TraceableFilter;
    static deserializeBinaryFromReader(message: TraceableFilter, reader: jspb.BinaryReader): TraceableFilter;
}

export namespace TraceableFilter {
    export type AsObject = {
    }
}

export class RuntimeFilter extends jspb.Message { 
    getRuntimeKey(): string;
    setRuntimeKey(value: string): void;


    hasPercentSampled(): boolean;
    clearPercentSampled(): void;
    getPercentSampled(): envoy_type_percent_pb.FractionalPercent | undefined;
    setPercentSampled(value?: envoy_type_percent_pb.FractionalPercent): void;

    getUseIndependentRandomness(): boolean;
    setUseIndependentRandomness(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RuntimeFilter.AsObject;
    static toObject(includeInstance: boolean, msg: RuntimeFilter): RuntimeFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RuntimeFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RuntimeFilter;
    static deserializeBinaryFromReader(message: RuntimeFilter, reader: jspb.BinaryReader): RuntimeFilter;
}

export namespace RuntimeFilter {
    export type AsObject = {
        runtimeKey: string,
        percentSampled?: envoy_type_percent_pb.FractionalPercent.AsObject,
        useIndependentRandomness: boolean,
    }
}

export class AndFilter extends jspb.Message { 
    clearFiltersList(): void;
    getFiltersList(): Array<AccessLogFilter>;
    setFiltersList(value: Array<AccessLogFilter>): void;
    addFilters(value?: AccessLogFilter, index?: number): AccessLogFilter;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AndFilter.AsObject;
    static toObject(includeInstance: boolean, msg: AndFilter): AndFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AndFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AndFilter;
    static deserializeBinaryFromReader(message: AndFilter, reader: jspb.BinaryReader): AndFilter;
}

export namespace AndFilter {
    export type AsObject = {
        filtersList: Array<AccessLogFilter.AsObject>,
    }
}

export class OrFilter extends jspb.Message { 
    clearFiltersList(): void;
    getFiltersList(): Array<AccessLogFilter>;
    setFiltersList(value: Array<AccessLogFilter>): void;
    addFilters(value?: AccessLogFilter, index?: number): AccessLogFilter;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrFilter.AsObject;
    static toObject(includeInstance: boolean, msg: OrFilter): OrFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrFilter;
    static deserializeBinaryFromReader(message: OrFilter, reader: jspb.BinaryReader): OrFilter;
}

export namespace OrFilter {
    export type AsObject = {
        filtersList: Array<AccessLogFilter.AsObject>,
    }
}

export class HeaderFilter extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): envoy_api_v2_route_route_components_pb.HeaderMatcher | undefined;
    setHeader(value?: envoy_api_v2_route_route_components_pb.HeaderMatcher): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HeaderFilter.AsObject;
    static toObject(includeInstance: boolean, msg: HeaderFilter): HeaderFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HeaderFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HeaderFilter;
    static deserializeBinaryFromReader(message: HeaderFilter, reader: jspb.BinaryReader): HeaderFilter;
}

export namespace HeaderFilter {
    export type AsObject = {
        header?: envoy_api_v2_route_route_components_pb.HeaderMatcher.AsObject,
    }
}

export class ResponseFlagFilter extends jspb.Message { 
    clearFlagsList(): void;
    getFlagsList(): Array<string>;
    setFlagsList(value: Array<string>): void;
    addFlags(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseFlagFilter.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseFlagFilter): ResponseFlagFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseFlagFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseFlagFilter;
    static deserializeBinaryFromReader(message: ResponseFlagFilter, reader: jspb.BinaryReader): ResponseFlagFilter;
}

export namespace ResponseFlagFilter {
    export type AsObject = {
        flagsList: Array<string>,
    }
}

export class GrpcStatusFilter extends jspb.Message { 
    clearStatusesList(): void;
    getStatusesList(): Array<GrpcStatusFilter.Status>;
    setStatusesList(value: Array<GrpcStatusFilter.Status>): void;
    addStatuses(value: GrpcStatusFilter.Status, index?: number): GrpcStatusFilter.Status;

    getExclude(): boolean;
    setExclude(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GrpcStatusFilter.AsObject;
    static toObject(includeInstance: boolean, msg: GrpcStatusFilter): GrpcStatusFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GrpcStatusFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GrpcStatusFilter;
    static deserializeBinaryFromReader(message: GrpcStatusFilter, reader: jspb.BinaryReader): GrpcStatusFilter;
}

export namespace GrpcStatusFilter {
    export type AsObject = {
        statusesList: Array<GrpcStatusFilter.Status>,
        exclude: boolean,
    }

    export enum Status {
    OK = 0,
    CANCELED = 1,
    UNKNOWN = 2,
    INVALID_ARGUMENT = 3,
    DEADLINE_EXCEEDED = 4,
    NOT_FOUND = 5,
    ALREADY_EXISTS = 6,
    PERMISSION_DENIED = 7,
    RESOURCE_EXHAUSTED = 8,
    FAILED_PRECONDITION = 9,
    ABORTED = 10,
    OUT_OF_RANGE = 11,
    UNIMPLEMENTED = 12,
    INTERNAL = 13,
    UNAVAILABLE = 14,
    DATA_LOSS = 15,
    UNAUTHENTICATED = 16,
    }

}

export class ExtensionFilter extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): google_protobuf_struct_pb.Struct | undefined;
    setConfig(value?: google_protobuf_struct_pb.Struct): void;


    hasTypedConfig(): boolean;
    clearTypedConfig(): void;
    getTypedConfig(): google_protobuf_any_pb.Any | undefined;
    setTypedConfig(value?: google_protobuf_any_pb.Any): void;


    getConfigTypeCase(): ExtensionFilter.ConfigTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtensionFilter.AsObject;
    static toObject(includeInstance: boolean, msg: ExtensionFilter): ExtensionFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExtensionFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtensionFilter;
    static deserializeBinaryFromReader(message: ExtensionFilter, reader: jspb.BinaryReader): ExtensionFilter;
}

export namespace ExtensionFilter {
    export type AsObject = {
        name: string,
        config?: google_protobuf_struct_pb.Struct.AsObject,
        typedConfig?: google_protobuf_any_pb.Any.AsObject,
    }

    export enum ConfigTypeCase {
        CONFIG_TYPE_NOT_SET = 0,
    
    CONFIG = 2,

    TYPED_CONFIG = 3,

    }

}
