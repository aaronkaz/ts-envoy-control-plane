// package: envoy.config.trace.v2
// file: envoy/config/trace/v2/zipkin.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as envoy_annotations_deprecation_pb from "../../../../envoy/annotations/deprecation_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class ZipkinConfig extends jspb.Message { 
    getCollectorCluster(): string;
    setCollectorCluster(value: string): void;

    getCollectorEndpoint(): string;
    setCollectorEndpoint(value: string): void;

    getTraceId128bit(): boolean;
    setTraceId128bit(value: boolean): void;


    hasSharedSpanContext(): boolean;
    clearSharedSpanContext(): void;
    getSharedSpanContext(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setSharedSpanContext(value?: google_protobuf_wrappers_pb.BoolValue): void;

    getCollectorEndpointVersion(): ZipkinConfig.CollectorEndpointVersion;
    setCollectorEndpointVersion(value: ZipkinConfig.CollectorEndpointVersion): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZipkinConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ZipkinConfig): ZipkinConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZipkinConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZipkinConfig;
    static deserializeBinaryFromReader(message: ZipkinConfig, reader: jspb.BinaryReader): ZipkinConfig;
}

export namespace ZipkinConfig {
    export type AsObject = {
        collectorCluster: string,
        collectorEndpoint: string,
        traceId128bit: boolean,
        sharedSpanContext?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        collectorEndpointVersion: ZipkinConfig.CollectorEndpointVersion,
    }

    export enum CollectorEndpointVersion {
    HTTP_JSON_V1 = 0,
    HTTP_JSON = 1,
    HTTP_PROTO = 2,
    GRPC = 3,
    }

}
