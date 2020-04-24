// package: envoy.type.matcher.v3alpha
// file: envoy/type/matcher/v3alpha/string.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_type_matcher_v3alpha_regex_pb from "../../../../envoy/type/matcher/v3alpha/regex_pb";
import * as udpa_annotations_versioning_pb from "../../../../udpa/annotations/versioning_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class StringMatcher extends jspb.Message { 

    hasExact(): boolean;
    clearExact(): void;
    getExact(): string;
    setExact(value: string): void;


    hasPrefix(): boolean;
    clearPrefix(): void;
    getPrefix(): string;
    setPrefix(value: string): void;


    hasSuffix(): boolean;
    clearSuffix(): void;
    getSuffix(): string;
    setSuffix(value: string): void;


    hasSafeRegex(): boolean;
    clearSafeRegex(): void;
    getSafeRegex(): envoy_type_matcher_v3alpha_regex_pb.RegexMatcher | undefined;
    setSafeRegex(value?: envoy_type_matcher_v3alpha_regex_pb.RegexMatcher): void;


    getMatchPatternCase(): StringMatcher.MatchPatternCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StringMatcher.AsObject;
    static toObject(includeInstance: boolean, msg: StringMatcher): StringMatcher.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StringMatcher, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StringMatcher;
    static deserializeBinaryFromReader(message: StringMatcher, reader: jspb.BinaryReader): StringMatcher;
}

export namespace StringMatcher {
    export type AsObject = {
        exact: string,
        prefix: string,
        suffix: string,
        safeRegex?: envoy_type_matcher_v3alpha_regex_pb.RegexMatcher.AsObject,
    }

    export enum MatchPatternCase {
        MATCHPATTERN_NOT_SET = 0,
    
    EXACT = 1,

    PREFIX = 2,

    SUFFIX = 3,

    SAFE_REGEX = 5,

    }

}

export class ListStringMatcher extends jspb.Message { 
    clearPatternsList(): void;
    getPatternsList(): Array<StringMatcher>;
    setPatternsList(value: Array<StringMatcher>): void;
    addPatterns(value?: StringMatcher, index?: number): StringMatcher;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStringMatcher.AsObject;
    static toObject(includeInstance: boolean, msg: ListStringMatcher): ListStringMatcher.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStringMatcher, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStringMatcher;
    static deserializeBinaryFromReader(message: ListStringMatcher, reader: jspb.BinaryReader): ListStringMatcher;
}

export namespace ListStringMatcher {
    export type AsObject = {
        patternsList: Array<StringMatcher.AsObject>,
    }
}
