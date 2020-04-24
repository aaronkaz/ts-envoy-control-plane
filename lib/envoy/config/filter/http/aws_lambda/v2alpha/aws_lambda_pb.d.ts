// package: envoy.config.filter.http.aws_lambda.v2alpha
// file: envoy/config/filter/http/aws_lambda/v2alpha/aws_lambda.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as udpa_annotations_migrate_pb from "../../../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../../../validate/validate_pb";

export class Config extends jspb.Message { 
    getArn(): string;
    setArn(value: string): void;

    getPayloadPassthrough(): boolean;
    setPayloadPassthrough(value: boolean): void;

    getInvocationMode(): Config.InvocationMode;
    setInvocationMode(value: Config.InvocationMode): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
}

export namespace Config {
    export type AsObject = {
        arn: string,
        payloadPassthrough: boolean,
        invocationMode: Config.InvocationMode,
    }

    export enum InvocationMode {
    SYNCHRONOUS = 0,
    ASYNCHRONOUS = 1,
    }

}

export class PerRouteConfig extends jspb.Message { 

    hasInvokeConfig(): boolean;
    clearInvokeConfig(): void;
    getInvokeConfig(): Config | undefined;
    setInvokeConfig(value?: Config): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PerRouteConfig.AsObject;
    static toObject(includeInstance: boolean, msg: PerRouteConfig): PerRouteConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PerRouteConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PerRouteConfig;
    static deserializeBinaryFromReader(message: PerRouteConfig, reader: jspb.BinaryReader): PerRouteConfig;
}

export namespace PerRouteConfig {
    export type AsObject = {
        invokeConfig?: Config.AsObject,
    }
}
