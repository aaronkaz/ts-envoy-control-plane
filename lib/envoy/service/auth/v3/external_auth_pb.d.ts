// package: envoy.service.auth.v3
// file: envoy/service/auth/v3/external_auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_config_core_v3_base_pb from "../../../../envoy/config/core/v3/base_pb";
import * as envoy_service_auth_v3_attribute_context_pb from "../../../../envoy/service/auth/v3/attribute_context_pb";
import * as envoy_type_v3_http_status_pb from "../../../../envoy/type/v3/http_status_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as udpa_annotations_versioning_pb from "../../../../udpa/annotations/versioning_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class CheckRequest extends jspb.Message { 

    hasAttributes(): boolean;
    clearAttributes(): void;
    getAttributes(): envoy_service_auth_v3_attribute_context_pb.AttributeContext | undefined;
    setAttributes(value?: envoy_service_auth_v3_attribute_context_pb.AttributeContext): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CheckRequest): CheckRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckRequest;
    static deserializeBinaryFromReader(message: CheckRequest, reader: jspb.BinaryReader): CheckRequest;
}

export namespace CheckRequest {
    export type AsObject = {
        attributes?: envoy_service_auth_v3_attribute_context_pb.AttributeContext.AsObject,
    }
}

export class DeniedHttpResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): envoy_type_v3_http_status_pb.HttpStatus | undefined;
    setStatus(value?: envoy_type_v3_http_status_pb.HttpStatus): void;

    clearHeadersList(): void;
    getHeadersList(): Array<envoy_config_core_v3_base_pb.HeaderValueOption>;
    setHeadersList(value: Array<envoy_config_core_v3_base_pb.HeaderValueOption>): void;
    addHeaders(value?: envoy_config_core_v3_base_pb.HeaderValueOption, index?: number): envoy_config_core_v3_base_pb.HeaderValueOption;

    getBody(): string;
    setBody(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeniedHttpResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeniedHttpResponse): DeniedHttpResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeniedHttpResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeniedHttpResponse;
    static deserializeBinaryFromReader(message: DeniedHttpResponse, reader: jspb.BinaryReader): DeniedHttpResponse;
}

export namespace DeniedHttpResponse {
    export type AsObject = {
        status?: envoy_type_v3_http_status_pb.HttpStatus.AsObject,
        headersList: Array<envoy_config_core_v3_base_pb.HeaderValueOption.AsObject>,
        body: string,
    }
}

export class OkHttpResponse extends jspb.Message { 
    clearHeadersList(): void;
    getHeadersList(): Array<envoy_config_core_v3_base_pb.HeaderValueOption>;
    setHeadersList(value: Array<envoy_config_core_v3_base_pb.HeaderValueOption>): void;
    addHeaders(value?: envoy_config_core_v3_base_pb.HeaderValueOption, index?: number): envoy_config_core_v3_base_pb.HeaderValueOption;

    clearHeadersToRemoveList(): void;
    getHeadersToRemoveList(): Array<string>;
    setHeadersToRemoveList(value: Array<string>): void;
    addHeadersToRemove(value: string, index?: number): string;


    hasDynamicMetadata(): boolean;
    clearDynamicMetadata(): void;
    getDynamicMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setDynamicMetadata(value?: google_protobuf_struct_pb.Struct): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OkHttpResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OkHttpResponse): OkHttpResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OkHttpResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OkHttpResponse;
    static deserializeBinaryFromReader(message: OkHttpResponse, reader: jspb.BinaryReader): OkHttpResponse;
}

export namespace OkHttpResponse {
    export type AsObject = {
        headersList: Array<envoy_config_core_v3_base_pb.HeaderValueOption.AsObject>,
        headersToRemoveList: Array<string>,
        dynamicMetadata?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class CheckResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): void;


    hasDeniedResponse(): boolean;
    clearDeniedResponse(): void;
    getDeniedResponse(): DeniedHttpResponse | undefined;
    setDeniedResponse(value?: DeniedHttpResponse): void;


    hasOkResponse(): boolean;
    clearOkResponse(): void;
    getOkResponse(): OkHttpResponse | undefined;
    setOkResponse(value?: OkHttpResponse): void;


    hasDynamicMetadata(): boolean;
    clearDynamicMetadata(): void;
    getDynamicMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setDynamicMetadata(value?: google_protobuf_struct_pb.Struct): void;


    getHttpResponseCase(): CheckResponse.HttpResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CheckResponse): CheckResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckResponse;
    static deserializeBinaryFromReader(message: CheckResponse, reader: jspb.BinaryReader): CheckResponse;
}

export namespace CheckResponse {
    export type AsObject = {
        status?: google_rpc_status_pb.Status.AsObject,
        deniedResponse?: DeniedHttpResponse.AsObject,
        okResponse?: OkHttpResponse.AsObject,
        dynamicMetadata?: google_protobuf_struct_pb.Struct.AsObject,
    }

    export enum HttpResponseCase {
        HTTP_RESPONSE_NOT_SET = 0,
    
    DENIED_RESPONSE = 2,

    OK_RESPONSE = 3,

    }

}
