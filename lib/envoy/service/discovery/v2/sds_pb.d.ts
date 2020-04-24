// package: envoy.service.discovery.v2
// file: envoy/service/discovery/v2/sds.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_discovery_pb from "../../../../envoy/api/v2/discovery_pb";
import * as envoy_annotations_resource_pb from "../../../../envoy/annotations/resource_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";

export class SdsDummy extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SdsDummy.AsObject;
    static toObject(includeInstance: boolean, msg: SdsDummy): SdsDummy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SdsDummy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SdsDummy;
    static deserializeBinaryFromReader(message: SdsDummy, reader: jspb.BinaryReader): SdsDummy;
}

export namespace SdsDummy {
    export type AsObject = {
    }
}
