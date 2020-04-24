// package: envoy.api.v2
// file: envoy/api/v2/route.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_core_base_pb from "../../../envoy/api/v2/core/base_pb";
import * as envoy_api_v2_core_config_source_pb from "../../../envoy/api/v2/core/config_source_pb";
import * as envoy_api_v2_route_route_components_pb from "../../../envoy/api/v2/route/route_components_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as udpa_annotations_migrate_pb from "../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class RouteConfiguration extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    clearVirtualHostsList(): void;
    getVirtualHostsList(): Array<envoy_api_v2_route_route_components_pb.VirtualHost>;
    setVirtualHostsList(value: Array<envoy_api_v2_route_route_components_pb.VirtualHost>): void;
    addVirtualHosts(value?: envoy_api_v2_route_route_components_pb.VirtualHost, index?: number): envoy_api_v2_route_route_components_pb.VirtualHost;


    hasVhds(): boolean;
    clearVhds(): void;
    getVhds(): Vhds | undefined;
    setVhds(value?: Vhds): void;

    clearInternalOnlyHeadersList(): void;
    getInternalOnlyHeadersList(): Array<string>;
    setInternalOnlyHeadersList(value: Array<string>): void;
    addInternalOnlyHeaders(value: string, index?: number): string;

    clearResponseHeadersToAddList(): void;
    getResponseHeadersToAddList(): Array<envoy_api_v2_core_base_pb.HeaderValueOption>;
    setResponseHeadersToAddList(value: Array<envoy_api_v2_core_base_pb.HeaderValueOption>): void;
    addResponseHeadersToAdd(value?: envoy_api_v2_core_base_pb.HeaderValueOption, index?: number): envoy_api_v2_core_base_pb.HeaderValueOption;

    clearResponseHeadersToRemoveList(): void;
    getResponseHeadersToRemoveList(): Array<string>;
    setResponseHeadersToRemoveList(value: Array<string>): void;
    addResponseHeadersToRemove(value: string, index?: number): string;

    clearRequestHeadersToAddList(): void;
    getRequestHeadersToAddList(): Array<envoy_api_v2_core_base_pb.HeaderValueOption>;
    setRequestHeadersToAddList(value: Array<envoy_api_v2_core_base_pb.HeaderValueOption>): void;
    addRequestHeadersToAdd(value?: envoy_api_v2_core_base_pb.HeaderValueOption, index?: number): envoy_api_v2_core_base_pb.HeaderValueOption;

    clearRequestHeadersToRemoveList(): void;
    getRequestHeadersToRemoveList(): Array<string>;
    setRequestHeadersToRemoveList(value: Array<string>): void;
    addRequestHeadersToRemove(value: string, index?: number): string;

    getMostSpecificHeaderMutationsWins(): boolean;
    setMostSpecificHeaderMutationsWins(value: boolean): void;


    hasValidateClusters(): boolean;
    clearValidateClusters(): void;
    getValidateClusters(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setValidateClusters(value?: google_protobuf_wrappers_pb.BoolValue): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: RouteConfiguration): RouteConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteConfiguration;
    static deserializeBinaryFromReader(message: RouteConfiguration, reader: jspb.BinaryReader): RouteConfiguration;
}

export namespace RouteConfiguration {
    export type AsObject = {
        name: string,
        virtualHostsList: Array<envoy_api_v2_route_route_components_pb.VirtualHost.AsObject>,
        vhds?: Vhds.AsObject,
        internalOnlyHeadersList: Array<string>,
        responseHeadersToAddList: Array<envoy_api_v2_core_base_pb.HeaderValueOption.AsObject>,
        responseHeadersToRemoveList: Array<string>,
        requestHeadersToAddList: Array<envoy_api_v2_core_base_pb.HeaderValueOption.AsObject>,
        requestHeadersToRemoveList: Array<string>,
        mostSpecificHeaderMutationsWins: boolean,
        validateClusters?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class Vhds extends jspb.Message { 

    hasConfigSource(): boolean;
    clearConfigSource(): void;
    getConfigSource(): envoy_api_v2_core_config_source_pb.ConfigSource | undefined;
    setConfigSource(value?: envoy_api_v2_core_config_source_pb.ConfigSource): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vhds.AsObject;
    static toObject(includeInstance: boolean, msg: Vhds): Vhds.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Vhds, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vhds;
    static deserializeBinaryFromReader(message: Vhds, reader: jspb.BinaryReader): Vhds;
}

export namespace Vhds {
    export type AsObject = {
        configSource?: envoy_api_v2_core_config_source_pb.ConfigSource.AsObject,
    }
}
