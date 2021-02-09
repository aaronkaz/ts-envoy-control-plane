// package: envoy.extensions.filters.http.ext_authz.v3
// file: envoy/extensions/filters/http/ext_authz/v3/ext_authz.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_config_core_v3_base_pb from "../../../../../../envoy/config/core/v3/base_pb";
import * as envoy_config_core_v3_config_source_pb from "../../../../../../envoy/config/core/v3/config_source_pb";
import * as envoy_config_core_v3_grpc_service_pb from "../../../../../../envoy/config/core/v3/grpc_service_pb";
import * as envoy_config_core_v3_http_uri_pb from "../../../../../../envoy/config/core/v3/http_uri_pb";
import * as envoy_type_matcher_v3_metadata_pb from "../../../../../../envoy/type/matcher/v3/metadata_pb";
import * as envoy_type_matcher_v3_string_pb from "../../../../../../envoy/type/matcher/v3/string_pb";
import * as envoy_type_v3_http_status_pb from "../../../../../../envoy/type/v3/http_status_pb";
import * as envoy_annotations_deprecation_pb from "../../../../../../envoy/annotations/deprecation_pb";
import * as udpa_annotations_status_pb from "../../../../../../udpa/annotations/status_pb";
import * as udpa_annotations_versioning_pb from "../../../../../../udpa/annotations/versioning_pb";
import * as validate_validate_pb from "../../../../../../validate/validate_pb";

export class ExtAuthz extends jspb.Message { 

    hasGrpcService(): boolean;
    clearGrpcService(): void;
    getGrpcService(): envoy_config_core_v3_grpc_service_pb.GrpcService | undefined;
    setGrpcService(value?: envoy_config_core_v3_grpc_service_pb.GrpcService): void;


    hasHttpService(): boolean;
    clearHttpService(): void;
    getHttpService(): HttpService | undefined;
    setHttpService(value?: HttpService): void;

    getTransportApiVersion(): envoy_config_core_v3_config_source_pb.ApiVersion;
    setTransportApiVersion(value: envoy_config_core_v3_config_source_pb.ApiVersion): void;

    getFailureModeAllow(): boolean;
    setFailureModeAllow(value: boolean): void;


    hasWithRequestBody(): boolean;
    clearWithRequestBody(): void;
    getWithRequestBody(): BufferSettings | undefined;
    setWithRequestBody(value?: BufferSettings): void;

    getClearRouteCache(): boolean;
    setClearRouteCache(value: boolean): void;


    hasStatusOnError(): boolean;
    clearStatusOnError(): void;
    getStatusOnError(): envoy_type_v3_http_status_pb.HttpStatus | undefined;
    setStatusOnError(value?: envoy_type_v3_http_status_pb.HttpStatus): void;

    clearMetadataContextNamespacesList(): void;
    getMetadataContextNamespacesList(): Array<string>;
    setMetadataContextNamespacesList(value: Array<string>): void;
    addMetadataContextNamespaces(value: string, index?: number): string;


    hasFilterEnabled(): boolean;
    clearFilterEnabled(): void;
    getFilterEnabled(): envoy_config_core_v3_base_pb.RuntimeFractionalPercent | undefined;
    setFilterEnabled(value?: envoy_config_core_v3_base_pb.RuntimeFractionalPercent): void;


    hasFilterEnabledMetadata(): boolean;
    clearFilterEnabledMetadata(): void;
    getFilterEnabledMetadata(): envoy_type_matcher_v3_metadata_pb.MetadataMatcher | undefined;
    setFilterEnabledMetadata(value?: envoy_type_matcher_v3_metadata_pb.MetadataMatcher): void;


    hasDenyAtDisable(): boolean;
    clearDenyAtDisable(): void;
    getDenyAtDisable(): envoy_config_core_v3_base_pb.RuntimeFeatureFlag | undefined;
    setDenyAtDisable(value?: envoy_config_core_v3_base_pb.RuntimeFeatureFlag): void;

    getIncludePeerCertificate(): boolean;
    setIncludePeerCertificate(value: boolean): void;

    getStatPrefix(): string;
    setStatPrefix(value: string): void;


    getServicesCase(): ExtAuthz.ServicesCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtAuthz.AsObject;
    static toObject(includeInstance: boolean, msg: ExtAuthz): ExtAuthz.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExtAuthz, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtAuthz;
    static deserializeBinaryFromReader(message: ExtAuthz, reader: jspb.BinaryReader): ExtAuthz;
}

export namespace ExtAuthz {
    export type AsObject = {
        grpcService?: envoy_config_core_v3_grpc_service_pb.GrpcService.AsObject,
        httpService?: HttpService.AsObject,
        transportApiVersion: envoy_config_core_v3_config_source_pb.ApiVersion,
        failureModeAllow: boolean,
        withRequestBody?: BufferSettings.AsObject,
        clearRouteCache: boolean,
        statusOnError?: envoy_type_v3_http_status_pb.HttpStatus.AsObject,
        metadataContextNamespacesList: Array<string>,
        filterEnabled?: envoy_config_core_v3_base_pb.RuntimeFractionalPercent.AsObject,
        filterEnabledMetadata?: envoy_type_matcher_v3_metadata_pb.MetadataMatcher.AsObject,
        denyAtDisable?: envoy_config_core_v3_base_pb.RuntimeFeatureFlag.AsObject,
        includePeerCertificate: boolean,
        statPrefix: string,
    }

    export enum ServicesCase {
        SERVICES_NOT_SET = 0,
    
    GRPC_SERVICE = 1,

    HTTP_SERVICE = 3,

    }

}

export class BufferSettings extends jspb.Message { 
    getMaxRequestBytes(): number;
    setMaxRequestBytes(value: number): void;

    getAllowPartialMessage(): boolean;
    setAllowPartialMessage(value: boolean): void;

    getPackAsBytes(): boolean;
    setPackAsBytes(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BufferSettings.AsObject;
    static toObject(includeInstance: boolean, msg: BufferSettings): BufferSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BufferSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BufferSettings;
    static deserializeBinaryFromReader(message: BufferSettings, reader: jspb.BinaryReader): BufferSettings;
}

export namespace BufferSettings {
    export type AsObject = {
        maxRequestBytes: number,
        allowPartialMessage: boolean,
        packAsBytes: boolean,
    }
}

export class HttpService extends jspb.Message { 

    hasServerUri(): boolean;
    clearServerUri(): void;
    getServerUri(): envoy_config_core_v3_http_uri_pb.HttpUri | undefined;
    setServerUri(value?: envoy_config_core_v3_http_uri_pb.HttpUri): void;

    getPathPrefix(): string;
    setPathPrefix(value: string): void;


    hasAuthorizationRequest(): boolean;
    clearAuthorizationRequest(): void;
    getAuthorizationRequest(): AuthorizationRequest | undefined;
    setAuthorizationRequest(value?: AuthorizationRequest): void;


    hasAuthorizationResponse(): boolean;
    clearAuthorizationResponse(): void;
    getAuthorizationResponse(): AuthorizationResponse | undefined;
    setAuthorizationResponse(value?: AuthorizationResponse): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpService.AsObject;
    static toObject(includeInstance: boolean, msg: HttpService): HttpService.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HttpService, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpService;
    static deserializeBinaryFromReader(message: HttpService, reader: jspb.BinaryReader): HttpService;
}

export namespace HttpService {
    export type AsObject = {
        serverUri?: envoy_config_core_v3_http_uri_pb.HttpUri.AsObject,
        pathPrefix: string,
        authorizationRequest?: AuthorizationRequest.AsObject,
        authorizationResponse?: AuthorizationResponse.AsObject,
    }
}

export class AuthorizationRequest extends jspb.Message { 

    hasAllowedHeaders(): boolean;
    clearAllowedHeaders(): void;
    getAllowedHeaders(): envoy_type_matcher_v3_string_pb.ListStringMatcher | undefined;
    setAllowedHeaders(value?: envoy_type_matcher_v3_string_pb.ListStringMatcher): void;

    clearHeadersToAddList(): void;
    getHeadersToAddList(): Array<envoy_config_core_v3_base_pb.HeaderValue>;
    setHeadersToAddList(value: Array<envoy_config_core_v3_base_pb.HeaderValue>): void;
    addHeadersToAdd(value?: envoy_config_core_v3_base_pb.HeaderValue, index?: number): envoy_config_core_v3_base_pb.HeaderValue;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizationRequest): AuthorizationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizationRequest;
    static deserializeBinaryFromReader(message: AuthorizationRequest, reader: jspb.BinaryReader): AuthorizationRequest;
}

export namespace AuthorizationRequest {
    export type AsObject = {
        allowedHeaders?: envoy_type_matcher_v3_string_pb.ListStringMatcher.AsObject,
        headersToAddList: Array<envoy_config_core_v3_base_pb.HeaderValue.AsObject>,
    }
}

export class AuthorizationResponse extends jspb.Message { 

    hasAllowedUpstreamHeaders(): boolean;
    clearAllowedUpstreamHeaders(): void;
    getAllowedUpstreamHeaders(): envoy_type_matcher_v3_string_pb.ListStringMatcher | undefined;
    setAllowedUpstreamHeaders(value?: envoy_type_matcher_v3_string_pb.ListStringMatcher): void;


    hasAllowedUpstreamHeadersToAppend(): boolean;
    clearAllowedUpstreamHeadersToAppend(): void;
    getAllowedUpstreamHeadersToAppend(): envoy_type_matcher_v3_string_pb.ListStringMatcher | undefined;
    setAllowedUpstreamHeadersToAppend(value?: envoy_type_matcher_v3_string_pb.ListStringMatcher): void;


    hasAllowedClientHeaders(): boolean;
    clearAllowedClientHeaders(): void;
    getAllowedClientHeaders(): envoy_type_matcher_v3_string_pb.ListStringMatcher | undefined;
    setAllowedClientHeaders(value?: envoy_type_matcher_v3_string_pb.ListStringMatcher): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizationResponse): AuthorizationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizationResponse;
    static deserializeBinaryFromReader(message: AuthorizationResponse, reader: jspb.BinaryReader): AuthorizationResponse;
}

export namespace AuthorizationResponse {
    export type AsObject = {
        allowedUpstreamHeaders?: envoy_type_matcher_v3_string_pb.ListStringMatcher.AsObject,
        allowedUpstreamHeadersToAppend?: envoy_type_matcher_v3_string_pb.ListStringMatcher.AsObject,
        allowedClientHeaders?: envoy_type_matcher_v3_string_pb.ListStringMatcher.AsObject,
    }
}

export class ExtAuthzPerRoute extends jspb.Message { 

    hasDisabled(): boolean;
    clearDisabled(): void;
    getDisabled(): boolean;
    setDisabled(value: boolean): void;


    hasCheckSettings(): boolean;
    clearCheckSettings(): void;
    getCheckSettings(): CheckSettings | undefined;
    setCheckSettings(value?: CheckSettings): void;


    getOverrideCase(): ExtAuthzPerRoute.OverrideCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtAuthzPerRoute.AsObject;
    static toObject(includeInstance: boolean, msg: ExtAuthzPerRoute): ExtAuthzPerRoute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExtAuthzPerRoute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtAuthzPerRoute;
    static deserializeBinaryFromReader(message: ExtAuthzPerRoute, reader: jspb.BinaryReader): ExtAuthzPerRoute;
}

export namespace ExtAuthzPerRoute {
    export type AsObject = {
        disabled: boolean,
        checkSettings?: CheckSettings.AsObject,
    }

    export enum OverrideCase {
        OVERRIDE_NOT_SET = 0,
    
    DISABLED = 1,

    CHECK_SETTINGS = 2,

    }

}

export class CheckSettings extends jspb.Message { 

    getContextExtensionsMap(): jspb.Map<string, string>;
    clearContextExtensionsMap(): void;

    getDisableRequestBodyBuffering(): boolean;
    setDisableRequestBodyBuffering(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckSettings.AsObject;
    static toObject(includeInstance: boolean, msg: CheckSettings): CheckSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckSettings;
    static deserializeBinaryFromReader(message: CheckSettings, reader: jspb.BinaryReader): CheckSettings;
}

export namespace CheckSettings {
    export type AsObject = {

        contextExtensionsMap: Array<[string, string]>,
        disableRequestBodyBuffering: boolean,
    }
}
