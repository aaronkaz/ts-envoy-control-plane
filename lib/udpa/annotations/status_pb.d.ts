// package: udpa.annotations
// file: udpa/annotations/status.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class StatusAnnotation extends jspb.Message { 
    getWorkInProgress(): boolean;
    setWorkInProgress(value: boolean): void;

    getPackageVersionStatus(): PackageVersionStatus;
    setPackageVersionStatus(value: PackageVersionStatus): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusAnnotation.AsObject;
    static toObject(includeInstance: boolean, msg: StatusAnnotation): StatusAnnotation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusAnnotation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusAnnotation;
    static deserializeBinaryFromReader(message: StatusAnnotation, reader: jspb.BinaryReader): StatusAnnotation;
}

export namespace StatusAnnotation {
    export type AsObject = {
        workInProgress: boolean,
        packageVersionStatus: PackageVersionStatus,
    }
}

export const fileStatus: jspb.ExtensionFieldInfo<StatusAnnotation>;

export enum PackageVersionStatus {
    UNKNOWN = 0,
    FROZEN = 1,
    ACTIVE = 2,
    NEXT_MAJOR_VERSION_CANDIDATE = 3,
}
