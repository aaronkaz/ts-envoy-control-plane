// package: envoy.config.filter.network.http_connection_manager.v2
// file: envoy/config/filter/network/http_connection_manager/v2/http_connection_manager.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_core_config_source_pb from "../../../../../../envoy/api/v2/core/config_source_pb";
import * as envoy_api_v2_core_protocol_pb from "../../../../../../envoy/api/v2/core/protocol_pb";
import * as envoy_api_v2_route_pb from "../../../../../../envoy/api/v2/route_pb";
import * as envoy_api_v2_scoped_route_pb from "../../../../../../envoy/api/v2/scoped_route_pb";
import * as envoy_config_filter_accesslog_v2_accesslog_pb from "../../../../../../envoy/config/filter/accesslog/v2/accesslog_pb";
import * as envoy_config_trace_v2_http_tracer_pb from "../../../../../../envoy/config/trace/v2/http_tracer_pb";
import * as envoy_type_percent_pb from "../../../../../../envoy/type/percent_pb";
import * as envoy_type_tracing_v2_custom_tag_pb from "../../../../../../envoy/type/tracing/v2/custom_tag_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as envoy_annotations_deprecation_pb from "../../../../../../envoy/annotations/deprecation_pb";
import * as udpa_annotations_migrate_pb from "../../../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../../../validate/validate_pb";

export class HttpConnectionManager extends jspb.Message { 
    getCodecType(): HttpConnectionManager.CodecType;
    setCodecType(value: HttpConnectionManager.CodecType): void;

    getStatPrefix(): string;
    setStatPrefix(value: string): void;


    hasRds(): boolean;
    clearRds(): void;
    getRds(): Rds | undefined;
    setRds(value?: Rds): void;


    hasRouteConfig(): boolean;
    clearRouteConfig(): void;
    getRouteConfig(): envoy_api_v2_route_pb.RouteConfiguration | undefined;
    setRouteConfig(value?: envoy_api_v2_route_pb.RouteConfiguration): void;


    hasScopedRoutes(): boolean;
    clearScopedRoutes(): void;
    getScopedRoutes(): ScopedRoutes | undefined;
    setScopedRoutes(value?: ScopedRoutes): void;

    clearHttpFiltersList(): void;
    getHttpFiltersList(): Array<HttpFilter>;
    setHttpFiltersList(value: Array<HttpFilter>): void;
    addHttpFilters(value?: HttpFilter, index?: number): HttpFilter;


    hasAddUserAgent(): boolean;
    clearAddUserAgent(): void;
    getAddUserAgent(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAddUserAgent(value?: google_protobuf_wrappers_pb.BoolValue): void;


    hasTracing(): boolean;
    clearTracing(): void;
    getTracing(): HttpConnectionManager.Tracing | undefined;
    setTracing(value?: HttpConnectionManager.Tracing): void;


    hasCommonHttpProtocolOptions(): boolean;
    clearCommonHttpProtocolOptions(): void;
    getCommonHttpProtocolOptions(): envoy_api_v2_core_protocol_pb.HttpProtocolOptions | undefined;
    setCommonHttpProtocolOptions(value?: envoy_api_v2_core_protocol_pb.HttpProtocolOptions): void;


    hasHttpProtocolOptions(): boolean;
    clearHttpProtocolOptions(): void;
    getHttpProtocolOptions(): envoy_api_v2_core_protocol_pb.Http1ProtocolOptions | undefined;
    setHttpProtocolOptions(value?: envoy_api_v2_core_protocol_pb.Http1ProtocolOptions): void;


    hasHttp2ProtocolOptions(): boolean;
    clearHttp2ProtocolOptions(): void;
    getHttp2ProtocolOptions(): envoy_api_v2_core_protocol_pb.Http2ProtocolOptions | undefined;
    setHttp2ProtocolOptions(value?: envoy_api_v2_core_protocol_pb.Http2ProtocolOptions): void;

    getServerName(): string;
    setServerName(value: string): void;

    getServerHeaderTransformation(): HttpConnectionManager.ServerHeaderTransformation;
    setServerHeaderTransformation(value: HttpConnectionManager.ServerHeaderTransformation): void;


    hasMaxRequestHeadersKb(): boolean;
    clearMaxRequestHeadersKb(): void;
    getMaxRequestHeadersKb(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMaxRequestHeadersKb(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    hasIdleTimeout(): boolean;
    clearIdleTimeout(): void;
    getIdleTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setIdleTimeout(value?: google_protobuf_duration_pb.Duration): void;


    hasStreamIdleTimeout(): boolean;
    clearStreamIdleTimeout(): void;
    getStreamIdleTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setStreamIdleTimeout(value?: google_protobuf_duration_pb.Duration): void;


    hasRequestTimeout(): boolean;
    clearRequestTimeout(): void;
    getRequestTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setRequestTimeout(value?: google_protobuf_duration_pb.Duration): void;


    hasDrainTimeout(): boolean;
    clearDrainTimeout(): void;
    getDrainTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setDrainTimeout(value?: google_protobuf_duration_pb.Duration): void;


    hasDelayedCloseTimeout(): boolean;
    clearDelayedCloseTimeout(): void;
    getDelayedCloseTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setDelayedCloseTimeout(value?: google_protobuf_duration_pb.Duration): void;

    clearAccessLogList(): void;
    getAccessLogList(): Array<envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog>;
    setAccessLogList(value: Array<envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog>): void;
    addAccessLog(value?: envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog, index?: number): envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog;


    hasUseRemoteAddress(): boolean;
    clearUseRemoteAddress(): void;
    getUseRemoteAddress(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setUseRemoteAddress(value?: google_protobuf_wrappers_pb.BoolValue): void;

    getXffNumTrustedHops(): number;
    setXffNumTrustedHops(value: number): void;


    hasInternalAddressConfig(): boolean;
    clearInternalAddressConfig(): void;
    getInternalAddressConfig(): HttpConnectionManager.InternalAddressConfig | undefined;
    setInternalAddressConfig(value?: HttpConnectionManager.InternalAddressConfig): void;

    getSkipXffAppend(): boolean;
    setSkipXffAppend(value: boolean): void;

    getVia(): string;
    setVia(value: string): void;


    hasGenerateRequestId(): boolean;
    clearGenerateRequestId(): void;
    getGenerateRequestId(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setGenerateRequestId(value?: google_protobuf_wrappers_pb.BoolValue): void;

    getPreserveExternalRequestId(): boolean;
    setPreserveExternalRequestId(value: boolean): void;

    getForwardClientCertDetails(): HttpConnectionManager.ForwardClientCertDetails;
    setForwardClientCertDetails(value: HttpConnectionManager.ForwardClientCertDetails): void;


    hasSetCurrentClientCertDetails(): boolean;
    clearSetCurrentClientCertDetails(): void;
    getSetCurrentClientCertDetails(): HttpConnectionManager.SetCurrentClientCertDetails | undefined;
    setSetCurrentClientCertDetails(value?: HttpConnectionManager.SetCurrentClientCertDetails): void;

    getProxy100Continue(): boolean;
    setProxy100Continue(value: boolean): void;

    getRepresentIpv4RemoteAddressAsIpv4MappedIpv6(): boolean;
    setRepresentIpv4RemoteAddressAsIpv4MappedIpv6(value: boolean): void;

    clearUpgradeConfigsList(): void;
    getUpgradeConfigsList(): Array<HttpConnectionManager.UpgradeConfig>;
    setUpgradeConfigsList(value: Array<HttpConnectionManager.UpgradeConfig>): void;
    addUpgradeConfigs(value?: HttpConnectionManager.UpgradeConfig, index?: number): HttpConnectionManager.UpgradeConfig;


    hasNormalizePath(): boolean;
    clearNormalizePath(): void;
    getNormalizePath(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setNormalizePath(value?: google_protobuf_wrappers_pb.BoolValue): void;

    getMergeSlashes(): boolean;
    setMergeSlashes(value: boolean): void;


    hasRequestIdExtension(): boolean;
    clearRequestIdExtension(): void;
    getRequestIdExtension(): RequestIDExtension | undefined;
    setRequestIdExtension(value?: RequestIDExtension): void;


    getRouteSpecifierCase(): HttpConnectionManager.RouteSpecifierCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpConnectionManager.AsObject;
    static toObject(includeInstance: boolean, msg: HttpConnectionManager): HttpConnectionManager.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HttpConnectionManager, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpConnectionManager;
    static deserializeBinaryFromReader(message: HttpConnectionManager, reader: jspb.BinaryReader): HttpConnectionManager;
}

export namespace HttpConnectionManager {
    export type AsObject = {
        codecType: HttpConnectionManager.CodecType,
        statPrefix: string,
        rds?: Rds.AsObject,
        routeConfig?: envoy_api_v2_route_pb.RouteConfiguration.AsObject,
        scopedRoutes?: ScopedRoutes.AsObject,
        httpFiltersList: Array<HttpFilter.AsObject>,
        addUserAgent?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        tracing?: HttpConnectionManager.Tracing.AsObject,
        commonHttpProtocolOptions?: envoy_api_v2_core_protocol_pb.HttpProtocolOptions.AsObject,
        httpProtocolOptions?: envoy_api_v2_core_protocol_pb.Http1ProtocolOptions.AsObject,
        http2ProtocolOptions?: envoy_api_v2_core_protocol_pb.Http2ProtocolOptions.AsObject,
        serverName: string,
        serverHeaderTransformation: HttpConnectionManager.ServerHeaderTransformation,
        maxRequestHeadersKb?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        idleTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        streamIdleTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        requestTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        drainTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        delayedCloseTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        accessLogList: Array<envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog.AsObject>,
        useRemoteAddress?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        xffNumTrustedHops: number,
        internalAddressConfig?: HttpConnectionManager.InternalAddressConfig.AsObject,
        skipXffAppend: boolean,
        via: string,
        generateRequestId?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        preserveExternalRequestId: boolean,
        forwardClientCertDetails: HttpConnectionManager.ForwardClientCertDetails,
        setCurrentClientCertDetails?: HttpConnectionManager.SetCurrentClientCertDetails.AsObject,
        proxy100Continue: boolean,
        representIpv4RemoteAddressAsIpv4MappedIpv6: boolean,
        upgradeConfigsList: Array<HttpConnectionManager.UpgradeConfig.AsObject>,
        normalizePath?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        mergeSlashes: boolean,
        requestIdExtension?: RequestIDExtension.AsObject,
    }


    export class Tracing extends jspb.Message { 
        getOperationName(): HttpConnectionManager.Tracing.OperationName;
        setOperationName(value: HttpConnectionManager.Tracing.OperationName): void;

        clearRequestHeadersForTagsList(): void;
        getRequestHeadersForTagsList(): Array<string>;
        setRequestHeadersForTagsList(value: Array<string>): void;
        addRequestHeadersForTags(value: string, index?: number): string;


        hasClientSampling(): boolean;
        clearClientSampling(): void;
        getClientSampling(): envoy_type_percent_pb.Percent | undefined;
        setClientSampling(value?: envoy_type_percent_pb.Percent): void;


        hasRandomSampling(): boolean;
        clearRandomSampling(): void;
        getRandomSampling(): envoy_type_percent_pb.Percent | undefined;
        setRandomSampling(value?: envoy_type_percent_pb.Percent): void;


        hasOverallSampling(): boolean;
        clearOverallSampling(): void;
        getOverallSampling(): envoy_type_percent_pb.Percent | undefined;
        setOverallSampling(value?: envoy_type_percent_pb.Percent): void;

        getVerbose(): boolean;
        setVerbose(value: boolean): void;


        hasMaxPathTagLength(): boolean;
        clearMaxPathTagLength(): void;
        getMaxPathTagLength(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setMaxPathTagLength(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        clearCustomTagsList(): void;
        getCustomTagsList(): Array<envoy_type_tracing_v2_custom_tag_pb.CustomTag>;
        setCustomTagsList(value: Array<envoy_type_tracing_v2_custom_tag_pb.CustomTag>): void;
        addCustomTags(value?: envoy_type_tracing_v2_custom_tag_pb.CustomTag, index?: number): envoy_type_tracing_v2_custom_tag_pb.CustomTag;


        hasProvider(): boolean;
        clearProvider(): void;
        getProvider(): envoy_config_trace_v2_http_tracer_pb.Tracing.Http | undefined;
        setProvider(value?: envoy_config_trace_v2_http_tracer_pb.Tracing.Http): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Tracing.AsObject;
        static toObject(includeInstance: boolean, msg: Tracing): Tracing.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Tracing, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Tracing;
        static deserializeBinaryFromReader(message: Tracing, reader: jspb.BinaryReader): Tracing;
    }

    export namespace Tracing {
        export type AsObject = {
            operationName: HttpConnectionManager.Tracing.OperationName,
            requestHeadersForTagsList: Array<string>,
            clientSampling?: envoy_type_percent_pb.Percent.AsObject,
            randomSampling?: envoy_type_percent_pb.Percent.AsObject,
            overallSampling?: envoy_type_percent_pb.Percent.AsObject,
            verbose: boolean,
            maxPathTagLength?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
            customTagsList: Array<envoy_type_tracing_v2_custom_tag_pb.CustomTag.AsObject>,
            provider?: envoy_config_trace_v2_http_tracer_pb.Tracing.Http.AsObject,
        }

        export enum OperationName {
    INGRESS = 0,
    EGRESS = 1,
        }

    }

    export class InternalAddressConfig extends jspb.Message { 
        getUnixSockets(): boolean;
        setUnixSockets(value: boolean): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): InternalAddressConfig.AsObject;
        static toObject(includeInstance: boolean, msg: InternalAddressConfig): InternalAddressConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: InternalAddressConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): InternalAddressConfig;
        static deserializeBinaryFromReader(message: InternalAddressConfig, reader: jspb.BinaryReader): InternalAddressConfig;
    }

    export namespace InternalAddressConfig {
        export type AsObject = {
            unixSockets: boolean,
        }
    }

    export class SetCurrentClientCertDetails extends jspb.Message { 

        hasSubject(): boolean;
        clearSubject(): void;
        getSubject(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setSubject(value?: google_protobuf_wrappers_pb.BoolValue): void;

        getCert(): boolean;
        setCert(value: boolean): void;

        getChain(): boolean;
        setChain(value: boolean): void;

        getDns(): boolean;
        setDns(value: boolean): void;

        getUri(): boolean;
        setUri(value: boolean): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SetCurrentClientCertDetails.AsObject;
        static toObject(includeInstance: boolean, msg: SetCurrentClientCertDetails): SetCurrentClientCertDetails.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SetCurrentClientCertDetails, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SetCurrentClientCertDetails;
        static deserializeBinaryFromReader(message: SetCurrentClientCertDetails, reader: jspb.BinaryReader): SetCurrentClientCertDetails;
    }

    export namespace SetCurrentClientCertDetails {
        export type AsObject = {
            subject?: google_protobuf_wrappers_pb.BoolValue.AsObject,
            cert: boolean,
            chain: boolean,
            dns: boolean,
            uri: boolean,
        }
    }

    export class UpgradeConfig extends jspb.Message { 
        getUpgradeType(): string;
        setUpgradeType(value: string): void;

        clearFiltersList(): void;
        getFiltersList(): Array<HttpFilter>;
        setFiltersList(value: Array<HttpFilter>): void;
        addFilters(value?: HttpFilter, index?: number): HttpFilter;


        hasEnabled(): boolean;
        clearEnabled(): void;
        getEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setEnabled(value?: google_protobuf_wrappers_pb.BoolValue): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UpgradeConfig.AsObject;
        static toObject(includeInstance: boolean, msg: UpgradeConfig): UpgradeConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UpgradeConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UpgradeConfig;
        static deserializeBinaryFromReader(message: UpgradeConfig, reader: jspb.BinaryReader): UpgradeConfig;
    }

    export namespace UpgradeConfig {
        export type AsObject = {
            upgradeType: string,
            filtersList: Array<HttpFilter.AsObject>,
            enabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        }
    }


    export enum CodecType {
    AUTO = 0,
    HTTP1 = 1,
    HTTP2 = 2,
    HTTP3 = 3,
    }

    export enum ServerHeaderTransformation {
    OVERWRITE = 0,
    APPEND_IF_ABSENT = 1,
    PASS_THROUGH = 2,
    }

    export enum ForwardClientCertDetails {
    SANITIZE = 0,
    FORWARD_ONLY = 1,
    APPEND_FORWARD = 2,
    SANITIZE_SET = 3,
    ALWAYS_FORWARD_ONLY = 4,
    }


    export enum RouteSpecifierCase {
        ROUTE_SPECIFIER_NOT_SET = 0,
    
    RDS = 3,

    ROUTE_CONFIG = 4,

    SCOPED_ROUTES = 31,

    }

}

export class Rds extends jspb.Message { 

    hasConfigSource(): boolean;
    clearConfigSource(): void;
    getConfigSource(): envoy_api_v2_core_config_source_pb.ConfigSource | undefined;
    setConfigSource(value?: envoy_api_v2_core_config_source_pb.ConfigSource): void;

    getRouteConfigName(): string;
    setRouteConfigName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rds.AsObject;
    static toObject(includeInstance: boolean, msg: Rds): Rds.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rds, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rds;
    static deserializeBinaryFromReader(message: Rds, reader: jspb.BinaryReader): Rds;
}

export namespace Rds {
    export type AsObject = {
        configSource?: envoy_api_v2_core_config_source_pb.ConfigSource.AsObject,
        routeConfigName: string,
    }
}

export class ScopedRouteConfigurationsList extends jspb.Message { 
    clearScopedRouteConfigurationsList(): void;
    getScopedRouteConfigurationsList(): Array<envoy_api_v2_scoped_route_pb.ScopedRouteConfiguration>;
    setScopedRouteConfigurationsList(value: Array<envoy_api_v2_scoped_route_pb.ScopedRouteConfiguration>): void;
    addScopedRouteConfigurations(value?: envoy_api_v2_scoped_route_pb.ScopedRouteConfiguration, index?: number): envoy_api_v2_scoped_route_pb.ScopedRouteConfiguration;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopedRouteConfigurationsList.AsObject;
    static toObject(includeInstance: boolean, msg: ScopedRouteConfigurationsList): ScopedRouteConfigurationsList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopedRouteConfigurationsList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopedRouteConfigurationsList;
    static deserializeBinaryFromReader(message: ScopedRouteConfigurationsList, reader: jspb.BinaryReader): ScopedRouteConfigurationsList;
}

export namespace ScopedRouteConfigurationsList {
    export type AsObject = {
        scopedRouteConfigurationsList: Array<envoy_api_v2_scoped_route_pb.ScopedRouteConfiguration.AsObject>,
    }
}

export class ScopedRoutes extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    hasScopeKeyBuilder(): boolean;
    clearScopeKeyBuilder(): void;
    getScopeKeyBuilder(): ScopedRoutes.ScopeKeyBuilder | undefined;
    setScopeKeyBuilder(value?: ScopedRoutes.ScopeKeyBuilder): void;


    hasRdsConfigSource(): boolean;
    clearRdsConfigSource(): void;
    getRdsConfigSource(): envoy_api_v2_core_config_source_pb.ConfigSource | undefined;
    setRdsConfigSource(value?: envoy_api_v2_core_config_source_pb.ConfigSource): void;


    hasScopedRouteConfigurationsList(): boolean;
    clearScopedRouteConfigurationsList(): void;
    getScopedRouteConfigurationsList(): ScopedRouteConfigurationsList | undefined;
    setScopedRouteConfigurationsList(value?: ScopedRouteConfigurationsList): void;


    hasScopedRds(): boolean;
    clearScopedRds(): void;
    getScopedRds(): ScopedRds | undefined;
    setScopedRds(value?: ScopedRds): void;


    getConfigSpecifierCase(): ScopedRoutes.ConfigSpecifierCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopedRoutes.AsObject;
    static toObject(includeInstance: boolean, msg: ScopedRoutes): ScopedRoutes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopedRoutes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopedRoutes;
    static deserializeBinaryFromReader(message: ScopedRoutes, reader: jspb.BinaryReader): ScopedRoutes;
}

export namespace ScopedRoutes {
    export type AsObject = {
        name: string,
        scopeKeyBuilder?: ScopedRoutes.ScopeKeyBuilder.AsObject,
        rdsConfigSource?: envoy_api_v2_core_config_source_pb.ConfigSource.AsObject,
        scopedRouteConfigurationsList?: ScopedRouteConfigurationsList.AsObject,
        scopedRds?: ScopedRds.AsObject,
    }


    export class ScopeKeyBuilder extends jspb.Message { 
        clearFragmentsList(): void;
        getFragmentsList(): Array<ScopedRoutes.ScopeKeyBuilder.FragmentBuilder>;
        setFragmentsList(value: Array<ScopedRoutes.ScopeKeyBuilder.FragmentBuilder>): void;
        addFragments(value?: ScopedRoutes.ScopeKeyBuilder.FragmentBuilder, index?: number): ScopedRoutes.ScopeKeyBuilder.FragmentBuilder;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ScopeKeyBuilder.AsObject;
        static toObject(includeInstance: boolean, msg: ScopeKeyBuilder): ScopeKeyBuilder.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ScopeKeyBuilder, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ScopeKeyBuilder;
        static deserializeBinaryFromReader(message: ScopeKeyBuilder, reader: jspb.BinaryReader): ScopeKeyBuilder;
    }

    export namespace ScopeKeyBuilder {
        export type AsObject = {
            fragmentsList: Array<ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.AsObject>,
        }


        export class FragmentBuilder extends jspb.Message { 

            hasHeaderValueExtractor(): boolean;
            clearHeaderValueExtractor(): void;
            getHeaderValueExtractor(): ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor | undefined;
            setHeaderValueExtractor(value?: ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor): void;


            getTypeCase(): FragmentBuilder.TypeCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): FragmentBuilder.AsObject;
            static toObject(includeInstance: boolean, msg: FragmentBuilder): FragmentBuilder.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: FragmentBuilder, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): FragmentBuilder;
            static deserializeBinaryFromReader(message: FragmentBuilder, reader: jspb.BinaryReader): FragmentBuilder;
        }

        export namespace FragmentBuilder {
            export type AsObject = {
                headerValueExtractor?: ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.AsObject,
            }


            export class HeaderValueExtractor extends jspb.Message { 
                getName(): string;
                setName(value: string): void;

                getElementSeparator(): string;
                setElementSeparator(value: string): void;


                hasIndex(): boolean;
                clearIndex(): void;
                getIndex(): number;
                setIndex(value: number): void;


                hasElement(): boolean;
                clearElement(): void;
                getElement(): ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement | undefined;
                setElement(value?: ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement): void;


                getExtractTypeCase(): HeaderValueExtractor.ExtractTypeCase;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): HeaderValueExtractor.AsObject;
                static toObject(includeInstance: boolean, msg: HeaderValueExtractor): HeaderValueExtractor.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: HeaderValueExtractor, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): HeaderValueExtractor;
                static deserializeBinaryFromReader(message: HeaderValueExtractor, reader: jspb.BinaryReader): HeaderValueExtractor;
            }

            export namespace HeaderValueExtractor {
                export type AsObject = {
                    name: string,
                    elementSeparator: string,
                    index: number,
                    element?: ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.AsObject,
                }


                export class KvElement extends jspb.Message { 
                    getSeparator(): string;
                    setSeparator(value: string): void;

                    getKey(): string;
                    setKey(value: string): void;


                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): KvElement.AsObject;
                    static toObject(includeInstance: boolean, msg: KvElement): KvElement.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: KvElement, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): KvElement;
                    static deserializeBinaryFromReader(message: KvElement, reader: jspb.BinaryReader): KvElement;
                }

                export namespace KvElement {
                    export type AsObject = {
                        separator: string,
                        key: string,
                    }
                }


                export enum ExtractTypeCase {
                    EXTRACT_TYPE_NOT_SET = 0,
                
    INDEX = 3,

    ELEMENT = 4,

                }

            }


            export enum TypeCase {
                TYPE_NOT_SET = 0,
            
    HEADER_VALUE_EXTRACTOR = 1,

            }

        }

    }


    export enum ConfigSpecifierCase {
        CONFIG_SPECIFIER_NOT_SET = 0,
    
    SCOPED_ROUTE_CONFIGURATIONS_LIST = 4,

    SCOPED_RDS = 5,

    }

}

export class ScopedRds extends jspb.Message { 

    hasScopedRdsConfigSource(): boolean;
    clearScopedRdsConfigSource(): void;
    getScopedRdsConfigSource(): envoy_api_v2_core_config_source_pb.ConfigSource | undefined;
    setScopedRdsConfigSource(value?: envoy_api_v2_core_config_source_pb.ConfigSource): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopedRds.AsObject;
    static toObject(includeInstance: boolean, msg: ScopedRds): ScopedRds.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopedRds, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopedRds;
    static deserializeBinaryFromReader(message: ScopedRds, reader: jspb.BinaryReader): ScopedRds;
}

export namespace ScopedRds {
    export type AsObject = {
        scopedRdsConfigSource?: envoy_api_v2_core_config_source_pb.ConfigSource.AsObject,
    }
}

export class HttpFilter extends jspb.Message { 
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


    getConfigTypeCase(): HttpFilter.ConfigTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpFilter.AsObject;
    static toObject(includeInstance: boolean, msg: HttpFilter): HttpFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HttpFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpFilter;
    static deserializeBinaryFromReader(message: HttpFilter, reader: jspb.BinaryReader): HttpFilter;
}

export namespace HttpFilter {
    export type AsObject = {
        name: string,
        config?: google_protobuf_struct_pb.Struct.AsObject,
        typedConfig?: google_protobuf_any_pb.Any.AsObject,
    }

    export enum ConfigTypeCase {
        CONFIG_TYPE_NOT_SET = 0,
    
    CONFIG = 2,

    TYPED_CONFIG = 4,

    }

}

export class RequestIDExtension extends jspb.Message { 

    hasTypedConfig(): boolean;
    clearTypedConfig(): void;
    getTypedConfig(): google_protobuf_any_pb.Any | undefined;
    setTypedConfig(value?: google_protobuf_any_pb.Any): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestIDExtension.AsObject;
    static toObject(includeInstance: boolean, msg: RequestIDExtension): RequestIDExtension.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestIDExtension, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestIDExtension;
    static deserializeBinaryFromReader(message: RequestIDExtension, reader: jspb.BinaryReader): RequestIDExtension;
}

export namespace RequestIDExtension {
    export type AsObject = {
        typedConfig?: google_protobuf_any_pb.Any.AsObject,
    }
}
