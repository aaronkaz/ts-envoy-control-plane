// package: envoy.service.auth.v2
// file: envoy/service/auth/v2/attribute_context.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_core_address_pb from "../../../../envoy/api/v2/core/address_pb";
import * as envoy_api_v2_core_base_pb from "../../../../envoy/api/v2/core/base_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";

export class AttributeContext extends jspb.Message { 

    hasSource(): boolean;
    clearSource(): void;
    getSource(): AttributeContext.Peer | undefined;
    setSource(value?: AttributeContext.Peer): void;


    hasDestination(): boolean;
    clearDestination(): void;
    getDestination(): AttributeContext.Peer | undefined;
    setDestination(value?: AttributeContext.Peer): void;


    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): AttributeContext.Request | undefined;
    setRequest(value?: AttributeContext.Request): void;


    getContextExtensionsMap(): jspb.Map<string, string>;
    clearContextExtensionsMap(): void;


    hasMetadataContext(): boolean;
    clearMetadataContext(): void;
    getMetadataContext(): envoy_api_v2_core_base_pb.Metadata | undefined;
    setMetadataContext(value?: envoy_api_v2_core_base_pb.Metadata): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttributeContext.AsObject;
    static toObject(includeInstance: boolean, msg: AttributeContext): AttributeContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttributeContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttributeContext;
    static deserializeBinaryFromReader(message: AttributeContext, reader: jspb.BinaryReader): AttributeContext;
}

export namespace AttributeContext {
    export type AsObject = {
        source?: AttributeContext.Peer.AsObject,
        destination?: AttributeContext.Peer.AsObject,
        request?: AttributeContext.Request.AsObject,

        contextExtensionsMap: Array<[string, string]>,
        metadataContext?: envoy_api_v2_core_base_pb.Metadata.AsObject,
    }


    export class Peer extends jspb.Message { 

        hasAddress(): boolean;
        clearAddress(): void;
        getAddress(): envoy_api_v2_core_address_pb.Address | undefined;
        setAddress(value?: envoy_api_v2_core_address_pb.Address): void;

        getService(): string;
        setService(value: string): void;


        getLabelsMap(): jspb.Map<string, string>;
        clearLabelsMap(): void;

        getPrincipal(): string;
        setPrincipal(value: string): void;

        getCertificate(): string;
        setCertificate(value: string): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Peer.AsObject;
        static toObject(includeInstance: boolean, msg: Peer): Peer.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Peer, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Peer;
        static deserializeBinaryFromReader(message: Peer, reader: jspb.BinaryReader): Peer;
    }

    export namespace Peer {
        export type AsObject = {
            address?: envoy_api_v2_core_address_pb.Address.AsObject,
            service: string,

            labelsMap: Array<[string, string]>,
            principal: string,
            certificate: string,
        }
    }

    export class Request extends jspb.Message { 

        hasTime(): boolean;
        clearTime(): void;
        getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


        hasHttp(): boolean;
        clearHttp(): void;
        getHttp(): AttributeContext.HttpRequest | undefined;
        setHttp(value?: AttributeContext.HttpRequest): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            http?: AttributeContext.HttpRequest.AsObject,
        }
    }

    export class HttpRequest extends jspb.Message { 
        getId(): string;
        setId(value: string): void;

        getMethod(): string;
        setMethod(value: string): void;


        getHeadersMap(): jspb.Map<string, string>;
        clearHeadersMap(): void;

        getPath(): string;
        setPath(value: string): void;

        getHost(): string;
        setHost(value: string): void;

        getScheme(): string;
        setScheme(value: string): void;

        getQuery(): string;
        setQuery(value: string): void;

        getFragment(): string;
        setFragment(value: string): void;

        getSize(): number;
        setSize(value: number): void;

        getProtocol(): string;
        setProtocol(value: string): void;

        getBody(): string;
        setBody(value: string): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): HttpRequest.AsObject;
        static toObject(includeInstance: boolean, msg: HttpRequest): HttpRequest.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: HttpRequest, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): HttpRequest;
        static deserializeBinaryFromReader(message: HttpRequest, reader: jspb.BinaryReader): HttpRequest;
    }

    export namespace HttpRequest {
        export type AsObject = {
            id: string,
            method: string,

            headersMap: Array<[string, string]>,
            path: string,
            host: string,
            scheme: string,
            query: string,
            fragment: string,
            size: number,
            protocol: string,
            body: string,
        }
    }

}
