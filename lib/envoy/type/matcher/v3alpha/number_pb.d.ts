// package: envoy.type.matcher.v3alpha
// file: envoy/type/matcher/v3alpha/number.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_type_v3alpha_range_pb from "../../../../envoy/type/v3alpha/range_pb";
import * as udpa_annotations_versioning_pb from "../../../../udpa/annotations/versioning_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class DoubleMatcher extends jspb.Message { 

    hasRange(): boolean;
    clearRange(): void;
    getRange(): envoy_type_v3alpha_range_pb.DoubleRange | undefined;
    setRange(value?: envoy_type_v3alpha_range_pb.DoubleRange): void;


    hasExact(): boolean;
    clearExact(): void;
    getExact(): number;
    setExact(value: number): void;


    getMatchPatternCase(): DoubleMatcher.MatchPatternCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DoubleMatcher.AsObject;
    static toObject(includeInstance: boolean, msg: DoubleMatcher): DoubleMatcher.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DoubleMatcher, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DoubleMatcher;
    static deserializeBinaryFromReader(message: DoubleMatcher, reader: jspb.BinaryReader): DoubleMatcher;
}

export namespace DoubleMatcher {
    export type AsObject = {
        range?: envoy_type_v3alpha_range_pb.DoubleRange.AsObject,
        exact: number,
    }

    export enum MatchPatternCase {
        MATCHPATTERN_NOT_SET = 0,
    
    RANGE = 1,

    EXACT = 2,

    }

}
