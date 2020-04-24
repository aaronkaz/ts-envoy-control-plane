// package: envoy.type.matcher.v3alpha
// file: envoy/type/matcher/v3alpha/metadata.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_type_matcher_v3alpha_value_pb from "../../../../envoy/type/matcher/v3alpha/value_pb";
import * as udpa_annotations_versioning_pb from "../../../../udpa/annotations/versioning_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class MetadataMatcher extends jspb.Message { 
    getFilter(): string;
    setFilter(value: string): void;

    clearPathList(): void;
    getPathList(): Array<MetadataMatcher.PathSegment>;
    setPathList(value: Array<MetadataMatcher.PathSegment>): void;
    addPath(value?: MetadataMatcher.PathSegment, index?: number): MetadataMatcher.PathSegment;


    hasValue(): boolean;
    clearValue(): void;
    getValue(): envoy_type_matcher_v3alpha_value_pb.ValueMatcher | undefined;
    setValue(value?: envoy_type_matcher_v3alpha_value_pb.ValueMatcher): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetadataMatcher.AsObject;
    static toObject(includeInstance: boolean, msg: MetadataMatcher): MetadataMatcher.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetadataMatcher, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetadataMatcher;
    static deserializeBinaryFromReader(message: MetadataMatcher, reader: jspb.BinaryReader): MetadataMatcher;
}

export namespace MetadataMatcher {
    export type AsObject = {
        filter: string,
        pathList: Array<MetadataMatcher.PathSegment.AsObject>,
        value?: envoy_type_matcher_v3alpha_value_pb.ValueMatcher.AsObject,
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
