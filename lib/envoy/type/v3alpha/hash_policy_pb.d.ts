// package: envoy.type.v3alpha
// file: envoy/type/v3alpha/hash_policy.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as udpa_annotations_versioning_pb from "../../../udpa/annotations/versioning_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class HashPolicy extends jspb.Message { 

    hasSourceIp(): boolean;
    clearSourceIp(): void;
    getSourceIp(): HashPolicy.SourceIp | undefined;
    setSourceIp(value?: HashPolicy.SourceIp): void;


    getPolicySpecifierCase(): HashPolicy.PolicySpecifierCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HashPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: HashPolicy): HashPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HashPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HashPolicy;
    static deserializeBinaryFromReader(message: HashPolicy, reader: jspb.BinaryReader): HashPolicy;
}

export namespace HashPolicy {
    export type AsObject = {
        sourceIp?: HashPolicy.SourceIp.AsObject,
    }


    export class SourceIp extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SourceIp.AsObject;
        static toObject(includeInstance: boolean, msg: SourceIp): SourceIp.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SourceIp, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SourceIp;
        static deserializeBinaryFromReader(message: SourceIp, reader: jspb.BinaryReader): SourceIp;
    }

    export namespace SourceIp {
        export type AsObject = {
        }
    }


    export enum PolicySpecifierCase {
        POLICYSPECIFIER_NOT_SET = 0,
    
    SOURCE_IP = 1,

    }

}
