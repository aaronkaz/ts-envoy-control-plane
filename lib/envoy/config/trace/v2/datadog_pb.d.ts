// package: envoy.config.trace.v2
// file: envoy/config/trace/v2/datadog.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class DatadogConfig extends jspb.Message { 
    getCollectorCluster(): string;
    setCollectorCluster(value: string): void;

    getServiceName(): string;
    setServiceName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DatadogConfig.AsObject;
    static toObject(includeInstance: boolean, msg: DatadogConfig): DatadogConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DatadogConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DatadogConfig;
    static deserializeBinaryFromReader(message: DatadogConfig, reader: jspb.BinaryReader): DatadogConfig;
}

export namespace DatadogConfig {
    export type AsObject = {
        collectorCluster: string,
        serviceName: string,
    }
}
