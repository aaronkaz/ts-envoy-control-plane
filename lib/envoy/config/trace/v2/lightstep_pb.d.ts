// package: envoy.config.trace.v2
// file: envoy/config/trace/v2/lightstep.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class LightstepConfig extends jspb.Message { 
    getCollectorCluster(): string;
    setCollectorCluster(value: string): void;

    getAccessTokenFile(): string;
    setAccessTokenFile(value: string): void;

    clearPropagationModesList(): void;
    getPropagationModesList(): Array<LightstepConfig.PropagationMode>;
    setPropagationModesList(value: Array<LightstepConfig.PropagationMode>): void;
    addPropagationModes(value: LightstepConfig.PropagationMode, index?: number): LightstepConfig.PropagationMode;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LightstepConfig.AsObject;
    static toObject(includeInstance: boolean, msg: LightstepConfig): LightstepConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LightstepConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LightstepConfig;
    static deserializeBinaryFromReader(message: LightstepConfig, reader: jspb.BinaryReader): LightstepConfig;
}

export namespace LightstepConfig {
    export type AsObject = {
        collectorCluster: string,
        accessTokenFile: string,
        propagationModesList: Array<LightstepConfig.PropagationMode>,
    }

    export enum PropagationMode {
    ENVOY = 0,
    LIGHTSTEP = 1,
    B3 = 2,
    TRACE_CONTEXT = 3,
    }

}
