// package: envoy.type
// file: envoy/type/percent.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as udpa_annotations_status_pb from "../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../validate/validate_pb";

export class Percent extends jspb.Message { 
    getValue(): number;
    setValue(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Percent.AsObject;
    static toObject(includeInstance: boolean, msg: Percent): Percent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Percent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Percent;
    static deserializeBinaryFromReader(message: Percent, reader: jspb.BinaryReader): Percent;
}

export namespace Percent {
    export type AsObject = {
        value: number,
    }
}

export class FractionalPercent extends jspb.Message { 
    getNumerator(): number;
    setNumerator(value: number): void;

    getDenominator(): FractionalPercent.DenominatorType;
    setDenominator(value: FractionalPercent.DenominatorType): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FractionalPercent.AsObject;
    static toObject(includeInstance: boolean, msg: FractionalPercent): FractionalPercent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FractionalPercent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FractionalPercent;
    static deserializeBinaryFromReader(message: FractionalPercent, reader: jspb.BinaryReader): FractionalPercent;
}

export namespace FractionalPercent {
    export type AsObject = {
        numerator: number,
        denominator: FractionalPercent.DenominatorType,
    }

    export enum DenominatorType {
    HUNDRED = 0,
    TEN_THOUSAND = 1,
    MILLION = 2,
    }

}
