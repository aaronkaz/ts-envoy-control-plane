// package: envoy.annotations
// file: envoy/annotations/resource.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class ResourceAnnotation extends jspb.Message { 
    getType(): string;
    setType(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourceAnnotation.AsObject;
    static toObject(includeInstance: boolean, msg: ResourceAnnotation): ResourceAnnotation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResourceAnnotation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourceAnnotation;
    static deserializeBinaryFromReader(message: ResourceAnnotation, reader: jspb.BinaryReader): ResourceAnnotation;
}

export namespace ResourceAnnotation {
    export type AsObject = {
        type: string,
    }
}

export const resource: jspb.ExtensionFieldInfo<ResourceAnnotation>;
