// package: envoy.config.core.v3
// file: envoy/config/core/v3/http_uri.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as udpa_annotations_versioning_pb from "../../../../udpa/annotations/versioning_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class HttpUri extends jspb.Message { 
    getUri(): string;
    setUri(value: string): void;


    hasCluster(): boolean;
    clearCluster(): void;
    getCluster(): string;
    setCluster(value: string): void;


    hasTimeout(): boolean;
    clearTimeout(): void;
    getTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setTimeout(value?: google_protobuf_duration_pb.Duration): void;


    getHttpUpstreamTypeCase(): HttpUri.HttpUpstreamTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpUri.AsObject;
    static toObject(includeInstance: boolean, msg: HttpUri): HttpUri.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HttpUri, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpUri;
    static deserializeBinaryFromReader(message: HttpUri, reader: jspb.BinaryReader): HttpUri;
}

export namespace HttpUri {
    export type AsObject = {
        uri: string,
        cluster: string,
        timeout?: google_protobuf_duration_pb.Duration.AsObject,
    }

    export enum HttpUpstreamTypeCase {
        HTTP_UPSTREAM_TYPE_NOT_SET = 0,
    
    CLUSTER = 2,

    }

}
