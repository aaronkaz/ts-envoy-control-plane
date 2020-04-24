// package: envoy.api.v2.core
// file: envoy/api/v2/core/socket_option.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class SocketOption extends jspb.Message { 
    getDescription(): string;
    setDescription(value: string): void;

    getLevel(): number;
    setLevel(value: number): void;

    getName(): number;
    setName(value: number): void;


    hasIntValue(): boolean;
    clearIntValue(): void;
    getIntValue(): number;
    setIntValue(value: number): void;


    hasBufValue(): boolean;
    clearBufValue(): void;
    getBufValue(): Uint8Array | string;
    getBufValue_asU8(): Uint8Array;
    getBufValue_asB64(): string;
    setBufValue(value: Uint8Array | string): void;

    getState(): SocketOption.SocketState;
    setState(value: SocketOption.SocketState): void;


    getValueCase(): SocketOption.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SocketOption.AsObject;
    static toObject(includeInstance: boolean, msg: SocketOption): SocketOption.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SocketOption, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SocketOption;
    static deserializeBinaryFromReader(message: SocketOption, reader: jspb.BinaryReader): SocketOption;
}

export namespace SocketOption {
    export type AsObject = {
        description: string,
        level: number,
        name: number,
        intValue: number,
        bufValue: Uint8Array | string,
        state: SocketOption.SocketState,
    }

    export enum SocketState {
    STATE_PREBIND = 0,
    STATE_BOUND = 1,
    STATE_LISTENING = 2,
    }


    export enum ValueCase {
        VALUE_NOT_SET = 0,
    
    INT_VALUE = 4,

    BUF_VALUE = 5,

    }

}
