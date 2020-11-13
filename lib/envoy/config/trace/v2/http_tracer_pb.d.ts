// package: envoy.config.trace.v2
// file: envoy/config/trace/v2/http_tracer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class Tracing extends jspb.Message { 

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): Tracing.Http | undefined;
    setHttp(value?: Tracing.Http): void;


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
        http?: Tracing.Http.AsObject,
    }


    export class Http extends jspb.Message { 
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


        getConfigTypeCase(): Http.ConfigTypeCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Http.AsObject;
        static toObject(includeInstance: boolean, msg: Http): Http.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Http, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Http;
        static deserializeBinaryFromReader(message: Http, reader: jspb.BinaryReader): Http;
    }

    export namespace Http {
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

}
