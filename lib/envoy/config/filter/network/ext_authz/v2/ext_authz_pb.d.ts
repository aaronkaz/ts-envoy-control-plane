// package: envoy.config.filter.network.ext_authz.v2
// file: envoy/config/filter/network/ext_authz/v2/ext_authz.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_core_grpc_service_pb from "../../../../../../envoy/api/v2/core/grpc_service_pb";
import * as udpa_annotations_migrate_pb from "../../../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../../../validate/validate_pb";

export class ExtAuthz extends jspb.Message { 
    getStatPrefix(): string;
    setStatPrefix(value: string): void;


    hasGrpcService(): boolean;
    clearGrpcService(): void;
    getGrpcService(): envoy_api_v2_core_grpc_service_pb.GrpcService | undefined;
    setGrpcService(value?: envoy_api_v2_core_grpc_service_pb.GrpcService): void;

    getFailureModeAllow(): boolean;
    setFailureModeAllow(value: boolean): void;

    getIncludePeerCertificate(): boolean;
    setIncludePeerCertificate(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtAuthz.AsObject;
    static toObject(includeInstance: boolean, msg: ExtAuthz): ExtAuthz.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExtAuthz, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtAuthz;
    static deserializeBinaryFromReader(message: ExtAuthz, reader: jspb.BinaryReader): ExtAuthz;
}

export namespace ExtAuthz {
    export type AsObject = {
        statPrefix: string,
        grpcService?: envoy_api_v2_core_grpc_service_pb.GrpcService.AsObject,
        failureModeAllow: boolean,
        includePeerCertificate: boolean,
    }
}
