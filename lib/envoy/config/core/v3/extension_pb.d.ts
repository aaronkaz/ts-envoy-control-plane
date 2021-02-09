// package: envoy.config.core.v3
// file: envoy/config/core/v3/extension.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_config_core_v3_config_source_pb from "../../../../envoy/config/core/v3/config_source_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class TypedExtensionConfig extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    hasTypedConfig(): boolean;
    clearTypedConfig(): void;
    getTypedConfig(): google_protobuf_any_pb.Any | undefined;
    setTypedConfig(value?: google_protobuf_any_pb.Any): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypedExtensionConfig.AsObject;
    static toObject(includeInstance: boolean, msg: TypedExtensionConfig): TypedExtensionConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypedExtensionConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypedExtensionConfig;
    static deserializeBinaryFromReader(message: TypedExtensionConfig, reader: jspb.BinaryReader): TypedExtensionConfig;
}

export namespace TypedExtensionConfig {
    export type AsObject = {
        name: string,
        typedConfig?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class ExtensionConfigSource extends jspb.Message { 

    hasConfigSource(): boolean;
    clearConfigSource(): void;
    getConfigSource(): envoy_config_core_v3_config_source_pb.ConfigSource | undefined;
    setConfigSource(value?: envoy_config_core_v3_config_source_pb.ConfigSource): void;


    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): google_protobuf_any_pb.Any | undefined;
    setDefaultConfig(value?: google_protobuf_any_pb.Any): void;

    getApplyDefaultConfigWithoutWarming(): boolean;
    setApplyDefaultConfigWithoutWarming(value: boolean): void;

    clearTypeUrlsList(): void;
    getTypeUrlsList(): Array<string>;
    setTypeUrlsList(value: Array<string>): void;
    addTypeUrls(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtensionConfigSource.AsObject;
    static toObject(includeInstance: boolean, msg: ExtensionConfigSource): ExtensionConfigSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExtensionConfigSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtensionConfigSource;
    static deserializeBinaryFromReader(message: ExtensionConfigSource, reader: jspb.BinaryReader): ExtensionConfigSource;
}

export namespace ExtensionConfigSource {
    export type AsObject = {
        configSource?: envoy_config_core_v3_config_source_pb.ConfigSource.AsObject,
        defaultConfig?: google_protobuf_any_pb.Any.AsObject,
        applyDefaultConfigWithoutWarming: boolean,
        typeUrlsList: Array<string>,
    }
}
