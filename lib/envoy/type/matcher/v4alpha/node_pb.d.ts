// package: envoy.type.matcher.v4alpha
// file: envoy/type/matcher/v4alpha/node.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_type_matcher_v4alpha_string_pb from "../../../../envoy/type/matcher/v4alpha/string_pb";
import * as envoy_type_matcher_v4alpha_struct_pb from "../../../../envoy/type/matcher/v4alpha/struct_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as udpa_annotations_versioning_pb from "../../../../udpa/annotations/versioning_pb";

export class NodeMatcher extends jspb.Message { 

    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): envoy_type_matcher_v4alpha_string_pb.StringMatcher | undefined;
    setNodeId(value?: envoy_type_matcher_v4alpha_string_pb.StringMatcher): void;

    clearNodeMetadatasList(): void;
    getNodeMetadatasList(): Array<envoy_type_matcher_v4alpha_struct_pb.StructMatcher>;
    setNodeMetadatasList(value: Array<envoy_type_matcher_v4alpha_struct_pb.StructMatcher>): void;
    addNodeMetadatas(value?: envoy_type_matcher_v4alpha_struct_pb.StructMatcher, index?: number): envoy_type_matcher_v4alpha_struct_pb.StructMatcher;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeMatcher.AsObject;
    static toObject(includeInstance: boolean, msg: NodeMatcher): NodeMatcher.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeMatcher, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeMatcher;
    static deserializeBinaryFromReader(message: NodeMatcher, reader: jspb.BinaryReader): NodeMatcher;
}

export namespace NodeMatcher {
    export type AsObject = {
        nodeId?: envoy_type_matcher_v4alpha_string_pb.StringMatcher.AsObject,
        nodeMetadatasList: Array<envoy_type_matcher_v4alpha_struct_pb.StructMatcher.AsObject>,
    }
}
