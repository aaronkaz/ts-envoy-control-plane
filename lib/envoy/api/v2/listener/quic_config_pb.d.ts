// package: envoy.api.v2.listener
// file: envoy/api/v2/listener/quic_config.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";

export class QuicProtocolOptions extends jspb.Message { 

    hasMaxConcurrentStreams(): boolean;
    clearMaxConcurrentStreams(): void;
    getMaxConcurrentStreams(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMaxConcurrentStreams(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    hasIdleTimeout(): boolean;
    clearIdleTimeout(): void;
    getIdleTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setIdleTimeout(value?: google_protobuf_duration_pb.Duration): void;


    hasCryptoHandshakeTimeout(): boolean;
    clearCryptoHandshakeTimeout(): void;
    getCryptoHandshakeTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setCryptoHandshakeTimeout(value?: google_protobuf_duration_pb.Duration): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuicProtocolOptions.AsObject;
    static toObject(includeInstance: boolean, msg: QuicProtocolOptions): QuicProtocolOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuicProtocolOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuicProtocolOptions;
    static deserializeBinaryFromReader(message: QuicProtocolOptions, reader: jspb.BinaryReader): QuicProtocolOptions;
}

export namespace QuicProtocolOptions {
    export type AsObject = {
        maxConcurrentStreams?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        idleTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        cryptoHandshakeTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    }
}
