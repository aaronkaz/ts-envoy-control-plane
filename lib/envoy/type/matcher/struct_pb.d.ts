// package: envoy.type.matcher
// file: envoy/type/matcher/struct.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_type_matcher_value_pb from "../../../envoy/type/matcher/value_pb";
import * as udpa_annotations_status_pb from "../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class StructMatcher extends jspb.Message { 
    clearPathList(): void;
    getPathList(): Array<StructMatcher.PathSegment>;
    setPathList(value: Array<StructMatcher.PathSegment>): void;
    addPath(value?: StructMatcher.PathSegment, index?: number): StructMatcher.PathSegment;


    hasValue(): boolean;
    clearValue(): void;
    getValue(): envoy_type_matcher_value_pb.ValueMatcher | undefined;
    setValue(value?: envoy_type_matcher_value_pb.ValueMatcher): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructMatcher.AsObject;
    static toObject(includeInstance: boolean, msg: StructMatcher): StructMatcher.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructMatcher, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructMatcher;
    static deserializeBinaryFromReader(message: StructMatcher, reader: jspb.BinaryReader): StructMatcher;
}

export namespace StructMatcher {
    export type AsObject = {
        pathList: Array<StructMatcher.PathSegment.AsObject>,
        value?: envoy_type_matcher_value_pb.ValueMatcher.AsObject,
    }


    export class PathSegment extends jspb.Message { 

        hasKey(): boolean;
        clearKey(): void;
        getKey(): string;
        setKey(value: string): void;


        getSegmentCase(): PathSegment.SegmentCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PathSegment.AsObject;
        static toObject(includeInstance: boolean, msg: PathSegment): PathSegment.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PathSegment, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PathSegment;
        static deserializeBinaryFromReader(message: PathSegment, reader: jspb.BinaryReader): PathSegment;
    }

    export namespace PathSegment {
        export type AsObject = {
            key: string,
        }

        export enum SegmentCase {
            SEGMENT_NOT_SET = 0,
        
    KEY = 1,

        }

    }

}
