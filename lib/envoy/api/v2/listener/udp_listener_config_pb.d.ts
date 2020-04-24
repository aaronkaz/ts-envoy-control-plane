// package: envoy.api.v2.listener
// file: envoy/api/v2/listener/udp_listener_config.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";

export class UdpListenerConfig extends jspb.Message { 
    getUdpListenerName(): string;
    setUdpListenerName(value: string): void;


    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): google_protobuf_struct_pb.Struct | undefined;
    setConfig(value?: google_protobuf_struct_pb.Struct): void;


    hasTypedConfig(): boolean;
    clearTypedConfig(): void;
    getTypedConfig(): google_protobuf_any_pb.Any | undefined;
    setTypedConfig(value?: google_protobuf_any_pb.Any): void;


    getConfigTypeCase(): UdpListenerConfig.ConfigTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UdpListenerConfig.AsObject;
    static toObject(includeInstance: boolean, msg: UdpListenerConfig): UdpListenerConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UdpListenerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UdpListenerConfig;
    static deserializeBinaryFromReader(message: UdpListenerConfig, reader: jspb.BinaryReader): UdpListenerConfig;
}

export namespace UdpListenerConfig {
    export type AsObject = {
        udpListenerName: string,
        config?: google_protobuf_struct_pb.Struct.AsObject,
        typedConfig?: google_protobuf_any_pb.Any.AsObject,
    }

    export enum ConfigTypeCase {
        CONFIGTYPE_NOT_SET = 0,
    
    CONFIG = 2,

    TYPED_CONFIG = 3,

    }

}

export class ActiveRawUdpListenerConfig extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActiveRawUdpListenerConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ActiveRawUdpListenerConfig): ActiveRawUdpListenerConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActiveRawUdpListenerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActiveRawUdpListenerConfig;
    static deserializeBinaryFromReader(message: ActiveRawUdpListenerConfig, reader: jspb.BinaryReader): ActiveRawUdpListenerConfig;
}

export namespace ActiveRawUdpListenerConfig {
    export type AsObject = {
    }
}
