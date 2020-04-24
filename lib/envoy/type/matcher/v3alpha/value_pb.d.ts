// package: envoy.type.matcher.v3alpha
// file: envoy/type/matcher/v3alpha/value.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_type_matcher_v3alpha_number_pb from "../../../../envoy/type/matcher/v3alpha/number_pb";
import * as envoy_type_matcher_v3alpha_string_pb from "../../../../envoy/type/matcher/v3alpha/string_pb";
import * as udpa_annotations_versioning_pb from "../../../../udpa/annotations/versioning_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class ValueMatcher extends jspb.Message { 

    hasNullMatch(): boolean;
    clearNullMatch(): void;
    getNullMatch(): ValueMatcher.NullMatch | undefined;
    setNullMatch(value?: ValueMatcher.NullMatch): void;


    hasDoubleMatch(): boolean;
    clearDoubleMatch(): void;
    getDoubleMatch(): envoy_type_matcher_v3alpha_number_pb.DoubleMatcher | undefined;
    setDoubleMatch(value?: envoy_type_matcher_v3alpha_number_pb.DoubleMatcher): void;


    hasStringMatch(): boolean;
    clearStringMatch(): void;
    getStringMatch(): envoy_type_matcher_v3alpha_string_pb.StringMatcher | undefined;
    setStringMatch(value?: envoy_type_matcher_v3alpha_string_pb.StringMatcher): void;


    hasBoolMatch(): boolean;
    clearBoolMatch(): void;
    getBoolMatch(): boolean;
    setBoolMatch(value: boolean): void;


    hasPresentMatch(): boolean;
    clearPresentMatch(): void;
    getPresentMatch(): boolean;
    setPresentMatch(value: boolean): void;


    hasListMatch(): boolean;
    clearListMatch(): void;
    getListMatch(): ListMatcher | undefined;
    setListMatch(value?: ListMatcher): void;


    getMatchPatternCase(): ValueMatcher.MatchPatternCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueMatcher.AsObject;
    static toObject(includeInstance: boolean, msg: ValueMatcher): ValueMatcher.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueMatcher, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueMatcher;
    static deserializeBinaryFromReader(message: ValueMatcher, reader: jspb.BinaryReader): ValueMatcher;
}

export namespace ValueMatcher {
    export type AsObject = {
        nullMatch?: ValueMatcher.NullMatch.AsObject,
        doubleMatch?: envoy_type_matcher_v3alpha_number_pb.DoubleMatcher.AsObject,
        stringMatch?: envoy_type_matcher_v3alpha_string_pb.StringMatcher.AsObject,
        boolMatch: boolean,
        presentMatch: boolean,
        listMatch?: ListMatcher.AsObject,
    }


    export class NullMatch extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NullMatch.AsObject;
        static toObject(includeInstance: boolean, msg: NullMatch): NullMatch.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: NullMatch, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NullMatch;
        static deserializeBinaryFromReader(message: NullMatch, reader: jspb.BinaryReader): NullMatch;
    }

    export namespace NullMatch {
        export type AsObject = {
        }
    }


    export enum MatchPatternCase {
        MATCHPATTERN_NOT_SET = 0,
    
    NULL_MATCH = 1,

    DOUBLE_MATCH = 2,

    STRING_MATCH = 3,

    BOOL_MATCH = 4,

    PRESENT_MATCH = 5,

    LIST_MATCH = 6,

    }

}

export class ListMatcher extends jspb.Message { 

    hasOneOf(): boolean;
    clearOneOf(): void;
    getOneOf(): ValueMatcher | undefined;
    setOneOf(value?: ValueMatcher): void;


    getMatchPatternCase(): ListMatcher.MatchPatternCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMatcher.AsObject;
    static toObject(includeInstance: boolean, msg: ListMatcher): ListMatcher.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMatcher, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMatcher;
    static deserializeBinaryFromReader(message: ListMatcher, reader: jspb.BinaryReader): ListMatcher;
}

export namespace ListMatcher {
    export type AsObject = {
        oneOf?: ValueMatcher.AsObject,
    }

    export enum MatchPatternCase {
        MATCHPATTERN_NOT_SET = 0,
    
    ONE_OF = 1,

    }

}
