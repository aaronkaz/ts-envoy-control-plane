// package: envoy.config.filter.network.kafka_broker.v2alpha1
// file: envoy/config/filter/network/kafka_broker/v2alpha1/kafka_broker.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as udpa_annotations_migrate_pb from "../../../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../../../validate/validate_pb";

export class KafkaBroker extends jspb.Message { 
    getStatPrefix(): string;
    setStatPrefix(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KafkaBroker.AsObject;
    static toObject(includeInstance: boolean, msg: KafkaBroker): KafkaBroker.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KafkaBroker, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KafkaBroker;
    static deserializeBinaryFromReader(message: KafkaBroker, reader: jspb.BinaryReader): KafkaBroker;
}

export namespace KafkaBroker {
    export type AsObject = {
        statPrefix: string,
    }
}
