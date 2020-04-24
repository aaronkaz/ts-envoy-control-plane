// package: envoy.api.v2
// file: envoy/api/v2/lds.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_discovery_pb from "../../../envoy/api/v2/discovery_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as envoy_annotations_resource_pb from "../../../envoy/annotations/resource_pb";
import * as udpa_annotations_migrate_pb from "../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";
import * as envoy_api_v2_listener_pb from "../../../envoy/api/v2/listener_pb";

export class LdsDummy extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LdsDummy.AsObject;
    static toObject(includeInstance: boolean, msg: LdsDummy): LdsDummy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LdsDummy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LdsDummy;
    static deserializeBinaryFromReader(message: LdsDummy, reader: jspb.BinaryReader): LdsDummy;
}

export namespace LdsDummy {
    export type AsObject = {
    }
}
