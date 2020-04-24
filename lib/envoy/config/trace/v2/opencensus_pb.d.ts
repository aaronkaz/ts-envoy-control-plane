// package: envoy.config.trace.v2
// file: envoy/config/trace/v2/opencensus.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_core_grpc_service_pb from "../../../../envoy/api/v2/core/grpc_service_pb";
import * as opencensus_proto_trace_v1_trace_config_pb from "../../../../opencensus/proto/trace/v1/trace_config_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class OpenCensusConfig extends jspb.Message { 

    hasTraceConfig(): boolean;
    clearTraceConfig(): void;
    getTraceConfig(): opencensus_proto_trace_v1_trace_config_pb.TraceConfig | undefined;
    setTraceConfig(value?: opencensus_proto_trace_v1_trace_config_pb.TraceConfig): void;

    getStdoutExporterEnabled(): boolean;
    setStdoutExporterEnabled(value: boolean): void;

    getStackdriverExporterEnabled(): boolean;
    setStackdriverExporterEnabled(value: boolean): void;

    getStackdriverProjectId(): string;
    setStackdriverProjectId(value: string): void;

    getStackdriverAddress(): string;
    setStackdriverAddress(value: string): void;


    hasStackdriverGrpcService(): boolean;
    clearStackdriverGrpcService(): void;
    getStackdriverGrpcService(): envoy_api_v2_core_grpc_service_pb.GrpcService | undefined;
    setStackdriverGrpcService(value?: envoy_api_v2_core_grpc_service_pb.GrpcService): void;

    getZipkinExporterEnabled(): boolean;
    setZipkinExporterEnabled(value: boolean): void;

    getZipkinUrl(): string;
    setZipkinUrl(value: string): void;

    getOcagentExporterEnabled(): boolean;
    setOcagentExporterEnabled(value: boolean): void;

    getOcagentAddress(): string;
    setOcagentAddress(value: string): void;


    hasOcagentGrpcService(): boolean;
    clearOcagentGrpcService(): void;
    getOcagentGrpcService(): envoy_api_v2_core_grpc_service_pb.GrpcService | undefined;
    setOcagentGrpcService(value?: envoy_api_v2_core_grpc_service_pb.GrpcService): void;

    clearIncomingTraceContextList(): void;
    getIncomingTraceContextList(): Array<OpenCensusConfig.TraceContext>;
    setIncomingTraceContextList(value: Array<OpenCensusConfig.TraceContext>): void;
    addIncomingTraceContext(value: OpenCensusConfig.TraceContext, index?: number): OpenCensusConfig.TraceContext;

    clearOutgoingTraceContextList(): void;
    getOutgoingTraceContextList(): Array<OpenCensusConfig.TraceContext>;
    setOutgoingTraceContextList(value: Array<OpenCensusConfig.TraceContext>): void;
    addOutgoingTraceContext(value: OpenCensusConfig.TraceContext, index?: number): OpenCensusConfig.TraceContext;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenCensusConfig.AsObject;
    static toObject(includeInstance: boolean, msg: OpenCensusConfig): OpenCensusConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpenCensusConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenCensusConfig;
    static deserializeBinaryFromReader(message: OpenCensusConfig, reader: jspb.BinaryReader): OpenCensusConfig;
}

export namespace OpenCensusConfig {
    export type AsObject = {
        traceConfig?: opencensus_proto_trace_v1_trace_config_pb.TraceConfig.AsObject,
        stdoutExporterEnabled: boolean,
        stackdriverExporterEnabled: boolean,
        stackdriverProjectId: string,
        stackdriverAddress: string,
        stackdriverGrpcService?: envoy_api_v2_core_grpc_service_pb.GrpcService.AsObject,
        zipkinExporterEnabled: boolean,
        zipkinUrl: string,
        ocagentExporterEnabled: boolean,
        ocagentAddress: string,
        ocagentGrpcService?: envoy_api_v2_core_grpc_service_pb.GrpcService.AsObject,
        incomingTraceContextList: Array<OpenCensusConfig.TraceContext>,
        outgoingTraceContextList: Array<OpenCensusConfig.TraceContext>,
    }

    export enum TraceContext {
    NONE = 0,
    TRACE_CONTEXT = 1,
    GRPC_TRACE_BIN = 2,
    CLOUD_TRACE_CONTEXT = 3,
    B3 = 4,
    }

}
