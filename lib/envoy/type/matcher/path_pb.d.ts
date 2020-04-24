// package: envoy.type.matcher
// file: envoy/type/matcher/path.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_type_matcher_string_pb from "../../../envoy/type/matcher/string_pb";
import * as udpa_annotations_status_pb from "../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class PathMatcher extends jspb.Message { 

    hasPath(): boolean;
    clearPath(): void;
    getPath(): envoy_type_matcher_string_pb.StringMatcher | undefined;
    setPath(value?: envoy_type_matcher_string_pb.StringMatcher): void;


    getRuleCase(): PathMatcher.RuleCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PathMatcher.AsObject;
    static toObject(includeInstance: boolean, msg: PathMatcher): PathMatcher.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PathMatcher, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PathMatcher;
    static deserializeBinaryFromReader(message: PathMatcher, reader: jspb.BinaryReader): PathMatcher;
}

export namespace PathMatcher {
    export type AsObject = {
        path?: envoy_type_matcher_string_pb.StringMatcher.AsObject,
    }

    export enum RuleCase {
        RULE_NOT_SET = 0,
    
    PATH = 1,

    }

}
