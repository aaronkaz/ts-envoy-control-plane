// package: envoy.type
// file: envoy/type/semantic_version.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as udpa_annotations_status_pb from "../../udpa/annotations/status_pb";

export class SemanticVersion extends jspb.Message { 
    getMajorNumber(): number;
    setMajorNumber(value: number): void;

    getMinorNumber(): number;
    setMinorNumber(value: number): void;

    getPatch(): number;
    setPatch(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SemanticVersion.AsObject;
    static toObject(includeInstance: boolean, msg: SemanticVersion): SemanticVersion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SemanticVersion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SemanticVersion;
    static deserializeBinaryFromReader(message: SemanticVersion, reader: jspb.BinaryReader): SemanticVersion;
}

export namespace SemanticVersion {
    export type AsObject = {
        majorNumber: number,
        minorNumber: number,
        patch: number,
    }
}
