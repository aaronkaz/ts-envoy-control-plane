// package: udpa.annotations
// file: udpa/annotations/security.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as udpa_annotations_status_pb from "../../udpa/annotations/status_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as validate_validate_pb from "../../validate/validate_pb";

export class FieldSecurityAnnotation extends jspb.Message { 
    getConfigureForUntrustedDownstream(): boolean;
    setConfigureForUntrustedDownstream(value: boolean): void;

    getConfigureForUntrustedUpstream(): boolean;
    setConfigureForUntrustedUpstream(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldSecurityAnnotation.AsObject;
    static toObject(includeInstance: boolean, msg: FieldSecurityAnnotation): FieldSecurityAnnotation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FieldSecurityAnnotation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldSecurityAnnotation;
    static deserializeBinaryFromReader(message: FieldSecurityAnnotation, reader: jspb.BinaryReader): FieldSecurityAnnotation;
}

export namespace FieldSecurityAnnotation {
    export type AsObject = {
        configureForUntrustedDownstream: boolean,
        configureForUntrustedUpstream: boolean,
    }
}

export const security: jspb.ExtensionFieldInfo<FieldSecurityAnnotation>;
