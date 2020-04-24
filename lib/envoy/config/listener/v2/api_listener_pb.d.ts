// package: envoy.config.listener.v2
// file: envoy/config/listener/v2/api_listener.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";

export class ApiListener extends jspb.Message { 

    hasApiListener(): boolean;
    clearApiListener(): void;
    getApiListener(): google_protobuf_any_pb.Any | undefined;
    setApiListener(value?: google_protobuf_any_pb.Any): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApiListener.AsObject;
    static toObject(includeInstance: boolean, msg: ApiListener): ApiListener.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApiListener, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApiListener;
    static deserializeBinaryFromReader(message: ApiListener, reader: jspb.BinaryReader): ApiListener;
}

export namespace ApiListener {
    export type AsObject = {
        apiListener?: google_protobuf_any_pb.Any.AsObject,
    }
}
