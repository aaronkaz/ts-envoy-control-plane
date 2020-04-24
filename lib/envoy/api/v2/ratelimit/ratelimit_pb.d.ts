// package: envoy.api.v2.ratelimit
// file: envoy/api/v2/ratelimit/ratelimit.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class RateLimitDescriptor extends jspb.Message { 
    clearEntriesList(): void;
    getEntriesList(): Array<RateLimitDescriptor.Entry>;
    setEntriesList(value: Array<RateLimitDescriptor.Entry>): void;
    addEntries(value?: RateLimitDescriptor.Entry, index?: number): RateLimitDescriptor.Entry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RateLimitDescriptor.AsObject;
    static toObject(includeInstance: boolean, msg: RateLimitDescriptor): RateLimitDescriptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RateLimitDescriptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RateLimitDescriptor;
    static deserializeBinaryFromReader(message: RateLimitDescriptor, reader: jspb.BinaryReader): RateLimitDescriptor;
}

export namespace RateLimitDescriptor {
    export type AsObject = {
        entriesList: Array<RateLimitDescriptor.Entry.AsObject>,
    }


    export class Entry extends jspb.Message { 
        getKey(): string;
        setKey(value: string): void;

        getValue(): string;
        setValue(value: string): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Entry.AsObject;
        static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Entry;
        static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
    }

    export namespace Entry {
        export type AsObject = {
            key: string,
            value: string,
        }
    }

}
