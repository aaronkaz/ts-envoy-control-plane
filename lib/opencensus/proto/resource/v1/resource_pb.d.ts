// package: opencensus.proto.resource.v1
// file: opencensus/proto/resource/v1/resource.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Resource extends jspb.Message { 
    getType(): string;
    setType(value: string): void;


    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Resource.AsObject;
    static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Resource;
    static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
    export type AsObject = {
        type: string,

        labelsMap: Array<[string, string]>,
    }
}
