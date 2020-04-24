// package: envoy.config.trace.v2
// file: envoy/config/trace/v2/service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_core_grpc_service_pb from "../../../../envoy/api/v2/core/grpc_service_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class TraceServiceConfig extends jspb.Message { 

    hasGrpcService(): boolean;
    clearGrpcService(): void;
    getGrpcService(): envoy_api_v2_core_grpc_service_pb.GrpcService | undefined;
    setGrpcService(value?: envoy_api_v2_core_grpc_service_pb.GrpcService): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TraceServiceConfig.AsObject;
    static toObject(includeInstance: boolean, msg: TraceServiceConfig): TraceServiceConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TraceServiceConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TraceServiceConfig;
    static deserializeBinaryFromReader(message: TraceServiceConfig, reader: jspb.BinaryReader): TraceServiceConfig;
}

export namespace TraceServiceConfig {
    export type AsObject = {
        grpcService?: envoy_api_v2_core_grpc_service_pb.GrpcService.AsObject,
    }
}
