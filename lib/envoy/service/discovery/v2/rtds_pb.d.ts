// package: envoy.service.discovery.v2
// file: envoy/service/discovery/v2/rtds.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_discovery_pb from "../../../../envoy/api/v2/discovery_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as envoy_annotations_resource_pb from "../../../../envoy/annotations/resource_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class RtdsDummy extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RtdsDummy.AsObject;
    static toObject(includeInstance: boolean, msg: RtdsDummy): RtdsDummy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RtdsDummy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RtdsDummy;
    static deserializeBinaryFromReader(message: RtdsDummy, reader: jspb.BinaryReader): RtdsDummy;
}

export namespace RtdsDummy {
    export type AsObject = {
    }
}

export class Runtime extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    hasLayer(): boolean;
    clearLayer(): void;
    getLayer(): google_protobuf_struct_pb.Struct | undefined;
    setLayer(value?: google_protobuf_struct_pb.Struct): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Runtime.AsObject;
    static toObject(includeInstance: boolean, msg: Runtime): Runtime.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Runtime, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Runtime;
    static deserializeBinaryFromReader(message: Runtime, reader: jspb.BinaryReader): Runtime;
}

export namespace Runtime {
    export type AsObject = {
        name: string,
        layer?: google_protobuf_struct_pb.Struct.AsObject,
    }
}
