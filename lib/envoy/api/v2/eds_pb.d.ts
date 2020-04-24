// package: envoy.api.v2
// file: envoy/api/v2/eds.proto

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
import * as envoy_api_v2_endpoint_pb from "../../../envoy/api/v2/endpoint_pb";

export class EdsDummy extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EdsDummy.AsObject;
    static toObject(includeInstance: boolean, msg: EdsDummy): EdsDummy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EdsDummy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EdsDummy;
    static deserializeBinaryFromReader(message: EdsDummy, reader: jspb.BinaryReader): EdsDummy;
}

export namespace EdsDummy {
    export type AsObject = {
    }
}
