// package: envoy.config.core.v3
// file: envoy/config/core/v3/substitution_format_string.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class SubstitutionFormatString extends jspb.Message { 

    hasTextFormat(): boolean;
    clearTextFormat(): void;
    getTextFormat(): string;
    setTextFormat(value: string): void;


    hasJsonFormat(): boolean;
    clearJsonFormat(): void;
    getJsonFormat(): google_protobuf_struct_pb.Struct | undefined;
    setJsonFormat(value?: google_protobuf_struct_pb.Struct): void;

    getOmitEmptyValues(): boolean;
    setOmitEmptyValues(value: boolean): void;

    getContentType(): string;
    setContentType(value: string): void;


    getFormatCase(): SubstitutionFormatString.FormatCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubstitutionFormatString.AsObject;
    static toObject(includeInstance: boolean, msg: SubstitutionFormatString): SubstitutionFormatString.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubstitutionFormatString, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubstitutionFormatString;
    static deserializeBinaryFromReader(message: SubstitutionFormatString, reader: jspb.BinaryReader): SubstitutionFormatString;
}

export namespace SubstitutionFormatString {
    export type AsObject = {
        textFormat: string,
        jsonFormat?: google_protobuf_struct_pb.Struct.AsObject,
        omitEmptyValues: boolean,
        contentType: string,
    }

    export enum FormatCase {
        FORMAT_NOT_SET = 0,
    
    TEXT_FORMAT = 1,

    JSON_FORMAT = 2,

    }

}
