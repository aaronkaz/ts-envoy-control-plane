// package: envoy.type.v3alpha
// file: envoy/type/v3alpha/http_status.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as udpa_annotations_versioning_pb from "../../../udpa/annotations/versioning_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class HttpStatus extends jspb.Message { 
    getCode(): StatusCode;
    setCode(value: StatusCode): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpStatus.AsObject;
    static toObject(includeInstance: boolean, msg: HttpStatus): HttpStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HttpStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpStatus;
    static deserializeBinaryFromReader(message: HttpStatus, reader: jspb.BinaryReader): HttpStatus;
}

export namespace HttpStatus {
    export type AsObject = {
        code: StatusCode,
    }
}

export enum StatusCode {
    EMPTY = 0,
    CONTINUE = 100,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NONAUTHORITATIVEINFORMATION = 203,
    NOCONTENT = 204,
    RESETCONTENT = 205,
    PARTIALCONTENT = 206,
    MULTISTATUS = 207,
    ALREADYREPORTED = 208,
    IMUSED = 226,
    MULTIPLECHOICES = 300,
    MOVEDPERMANENTLY = 301,
    FOUND = 302,
    SEEOTHER = 303,
    NOTMODIFIED = 304,
    USEPROXY = 305,
    TEMPORARYREDIRECT = 307,
    PERMANENTREDIRECT = 308,
    BADREQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENTREQUIRED = 402,
    FORBIDDEN = 403,
    NOTFOUND = 404,
    METHODNOTALLOWED = 405,
    NOTACCEPTABLE = 406,
    PROXYAUTHENTICATIONREQUIRED = 407,
    REQUESTTIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTHREQUIRED = 411,
    PRECONDITIONFAILED = 412,
    PAYLOADTOOLARGE = 413,
    URITOOLONG = 414,
    UNSUPPORTEDMEDIATYPE = 415,
    RANGENOTSATISFIABLE = 416,
    EXPECTATIONFAILED = 417,
    MISDIRECTEDREQUEST = 421,
    UNPROCESSABLEENTITY = 422,
    LOCKED = 423,
    FAILEDDEPENDENCY = 424,
    UPGRADEREQUIRED = 426,
    PRECONDITIONREQUIRED = 428,
    TOOMANYREQUESTS = 429,
    REQUESTHEADERFIELDSTOOLARGE = 431,
    INTERNALSERVERERROR = 500,
    NOTIMPLEMENTED = 501,
    BADGATEWAY = 502,
    SERVICEUNAVAILABLE = 503,
    GATEWAYTIMEOUT = 504,
    HTTPVERSIONNOTSUPPORTED = 505,
    VARIANTALSONEGOTIATES = 506,
    INSUFFICIENTSTORAGE = 507,
    LOOPDETECTED = 508,
    NOTEXTENDED = 510,
    NETWORKAUTHENTICATIONREQUIRED = 511,
}
