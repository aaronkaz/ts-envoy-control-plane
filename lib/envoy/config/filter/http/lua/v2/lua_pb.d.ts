// package: envoy.config.filter.http.lua.v2
// file: envoy/config/filter/http/lua/v2/lua.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as udpa_annotations_migrate_pb from "../../../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../../../validate/validate_pb";

export class Lua extends jspb.Message { 
    getInlineCode(): string;
    setInlineCode(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Lua.AsObject;
    static toObject(includeInstance: boolean, msg: Lua): Lua.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Lua, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Lua;
    static deserializeBinaryFromReader(message: Lua, reader: jspb.BinaryReader): Lua;
}

export namespace Lua {
    export type AsObject = {
        inlineCode: string,
    }
}
