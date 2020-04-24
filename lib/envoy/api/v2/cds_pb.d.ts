// package: envoy.api.v2
// file: envoy/api/v2/cds.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_discovery_pb from "../../../envoy/api/v2/discovery_pb";
import * as envoy_annotations_resource_pb from "../../../envoy/annotations/resource_pb";
import * as udpa_annotations_migrate_pb from "../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../udpa/annotations/status_pb";
import * as envoy_api_v2_cluster_pb from "../../../envoy/api/v2/cluster_pb";

export class CdsDummy extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CdsDummy.AsObject;
    static toObject(includeInstance: boolean, msg: CdsDummy): CdsDummy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CdsDummy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CdsDummy;
    static deserializeBinaryFromReader(message: CdsDummy, reader: jspb.BinaryReader): CdsDummy;
}

export namespace CdsDummy {
    export type AsObject = {
    }
}
