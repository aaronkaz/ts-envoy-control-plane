// package: envoy.config.trace.v2
// file: envoy/config/trace/v2/dynamic_ot.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class DynamicOtConfig extends jspb.Message { 
    getLibrary(): string;
    setLibrary(value: string): void;


    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): google_protobuf_struct_pb.Struct | undefined;
    setConfig(value?: google_protobuf_struct_pb.Struct): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicOtConfig.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicOtConfig): DynamicOtConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicOtConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicOtConfig;
    static deserializeBinaryFromReader(message: DynamicOtConfig, reader: jspb.BinaryReader): DynamicOtConfig;
}

export namespace DynamicOtConfig {
    export type AsObject = {
        library: string,
        config?: google_protobuf_struct_pb.Struct.AsObject,
    }
}
