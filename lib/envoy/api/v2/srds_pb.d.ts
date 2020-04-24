// package: envoy.api.v2
// file: envoy/api/v2/srds.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_discovery_pb from "../../../envoy/api/v2/discovery_pb";
import * as envoy_annotations_resource_pb from "../../../envoy/annotations/resource_pb";
import * as udpa_annotations_migrate_pb from "../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../udpa/annotations/status_pb";
import * as envoy_api_v2_scoped_route_pb from "../../../envoy/api/v2/scoped_route_pb";

export class SrdsDummy extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SrdsDummy.AsObject;
    static toObject(includeInstance: boolean, msg: SrdsDummy): SrdsDummy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SrdsDummy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SrdsDummy;
    static deserializeBinaryFromReader(message: SrdsDummy, reader: jspb.BinaryReader): SrdsDummy;
}

export namespace SrdsDummy {
    export type AsObject = {
    }
}
