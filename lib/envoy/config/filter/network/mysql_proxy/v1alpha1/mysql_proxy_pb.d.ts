// package: envoy.config.filter.network.mysql_proxy.v1alpha1
// file: envoy/config/filter/network/mysql_proxy/v1alpha1/mysql_proxy.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as udpa_annotations_migrate_pb from "../../../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../../../validate/validate_pb";

export class MySQLProxy extends jspb.Message { 
    getStatPrefix(): string;
    setStatPrefix(value: string): void;

    getAccessLog(): string;
    setAccessLog(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MySQLProxy.AsObject;
    static toObject(includeInstance: boolean, msg: MySQLProxy): MySQLProxy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MySQLProxy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MySQLProxy;
    static deserializeBinaryFromReader(message: MySQLProxy, reader: jspb.BinaryReader): MySQLProxy;
}

export namespace MySQLProxy {
    export type AsObject = {
        statPrefix: string,
        accessLog: string,
    }
}
