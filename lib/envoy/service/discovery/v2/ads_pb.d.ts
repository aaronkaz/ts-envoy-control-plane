// package: envoy.service.discovery.v2
// file: envoy/service/discovery/v2/ads.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_discovery_pb from "../../../../envoy/api/v2/discovery_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";

export class AdsDummy extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AdsDummy.AsObject;
    static toObject(includeInstance: boolean, msg: AdsDummy): AdsDummy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AdsDummy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AdsDummy;
    static deserializeBinaryFromReader(message: AdsDummy, reader: jspb.BinaryReader): AdsDummy;
}

export namespace AdsDummy {
    export type AsObject = {
    }
}
