// package: envoy.type
// file: envoy/type/token_bucket.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as udpa_annotations_status_pb from "../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../validate/validate_pb";

export class TokenBucket extends jspb.Message { 
    getMaxTokens(): number;
    setMaxTokens(value: number): void;


    hasTokensPerFill(): boolean;
    clearTokensPerFill(): void;
    getTokensPerFill(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setTokensPerFill(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    hasFillInterval(): boolean;
    clearFillInterval(): void;
    getFillInterval(): google_protobuf_duration_pb.Duration | undefined;
    setFillInterval(value?: google_protobuf_duration_pb.Duration): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenBucket.AsObject;
    static toObject(includeInstance: boolean, msg: TokenBucket): TokenBucket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenBucket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenBucket;
    static deserializeBinaryFromReader(message: TokenBucket, reader: jspb.BinaryReader): TokenBucket;
}

export namespace TokenBucket {
    export type AsObject = {
        maxTokens: number,
        tokensPerFill?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        fillInterval?: google_protobuf_duration_pb.Duration.AsObject,
    }
}
