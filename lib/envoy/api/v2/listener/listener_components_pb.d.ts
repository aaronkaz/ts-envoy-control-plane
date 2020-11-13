// package: envoy.api.v2.listener
// file: envoy/api/v2/listener/listener_components.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_auth_tls_pb from "../../../../envoy/api/v2/auth/tls_pb";
import * as envoy_api_v2_core_address_pb from "../../../../envoy/api/v2/core/address_pb";
import * as envoy_api_v2_core_base_pb from "../../../../envoy/api/v2/core/base_pb";
import * as envoy_type_range_pb from "../../../../envoy/type/range_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class Filter extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): google_protobuf_struct_pb.Struct | undefined;
    setConfig(value?: google_protobuf_struct_pb.Struct): void;


    hasTypedConfig(): boolean;
    clearTypedConfig(): void;
    getTypedConfig(): google_protobuf_any_pb.Any | undefined;
    setTypedConfig(value?: google_protobuf_any_pb.Any): void;


    getConfigTypeCase(): Filter.ConfigTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
    export type AsObject = {
        name: string,
        config?: google_protobuf_struct_pb.Struct.AsObject,
        typedConfig?: google_protobuf_any_pb.Any.AsObject,
    }

    export enum ConfigTypeCase {
        CONFIG_TYPE_NOT_SET = 0,
    
    CONFIG = 2,

    TYPED_CONFIG = 4,

    }

}

export class FilterChainMatch extends jspb.Message { 

    hasDestinationPort(): boolean;
    clearDestinationPort(): void;
    getDestinationPort(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setDestinationPort(value?: google_protobuf_wrappers_pb.UInt32Value): void;

    clearPrefixRangesList(): void;
    getPrefixRangesList(): Array<envoy_api_v2_core_address_pb.CidrRange>;
    setPrefixRangesList(value: Array<envoy_api_v2_core_address_pb.CidrRange>): void;
    addPrefixRanges(value?: envoy_api_v2_core_address_pb.CidrRange, index?: number): envoy_api_v2_core_address_pb.CidrRange;

    getAddressSuffix(): string;
    setAddressSuffix(value: string): void;


    hasSuffixLen(): boolean;
    clearSuffixLen(): void;
    getSuffixLen(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setSuffixLen(value?: google_protobuf_wrappers_pb.UInt32Value): void;

    getSourceType(): FilterChainMatch.ConnectionSourceType;
    setSourceType(value: FilterChainMatch.ConnectionSourceType): void;

    clearSourcePrefixRangesList(): void;
    getSourcePrefixRangesList(): Array<envoy_api_v2_core_address_pb.CidrRange>;
    setSourcePrefixRangesList(value: Array<envoy_api_v2_core_address_pb.CidrRange>): void;
    addSourcePrefixRanges(value?: envoy_api_v2_core_address_pb.CidrRange, index?: number): envoy_api_v2_core_address_pb.CidrRange;

    clearSourcePortsList(): void;
    getSourcePortsList(): Array<number>;
    setSourcePortsList(value: Array<number>): void;
    addSourcePorts(value: number, index?: number): number;

    clearServerNamesList(): void;
    getServerNamesList(): Array<string>;
    setServerNamesList(value: Array<string>): void;
    addServerNames(value: string, index?: number): string;

    getTransportProtocol(): string;
    setTransportProtocol(value: string): void;

    clearApplicationProtocolsList(): void;
    getApplicationProtocolsList(): Array<string>;
    setApplicationProtocolsList(value: Array<string>): void;
    addApplicationProtocols(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilterChainMatch.AsObject;
    static toObject(includeInstance: boolean, msg: FilterChainMatch): FilterChainMatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilterChainMatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilterChainMatch;
    static deserializeBinaryFromReader(message: FilterChainMatch, reader: jspb.BinaryReader): FilterChainMatch;
}

export namespace FilterChainMatch {
    export type AsObject = {
        destinationPort?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        prefixRangesList: Array<envoy_api_v2_core_address_pb.CidrRange.AsObject>,
        addressSuffix: string,
        suffixLen?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        sourceType: FilterChainMatch.ConnectionSourceType,
        sourcePrefixRangesList: Array<envoy_api_v2_core_address_pb.CidrRange.AsObject>,
        sourcePortsList: Array<number>,
        serverNamesList: Array<string>,
        transportProtocol: string,
        applicationProtocolsList: Array<string>,
    }

    export enum ConnectionSourceType {
    ANY = 0,
    LOCAL = 1,
    EXTERNAL = 2,
    }

}

export class FilterChain extends jspb.Message { 

    hasFilterChainMatch(): boolean;
    clearFilterChainMatch(): void;
    getFilterChainMatch(): FilterChainMatch | undefined;
    setFilterChainMatch(value?: FilterChainMatch): void;


    hasTlsContext(): boolean;
    clearTlsContext(): void;
    getTlsContext(): envoy_api_v2_auth_tls_pb.DownstreamTlsContext | undefined;
    setTlsContext(value?: envoy_api_v2_auth_tls_pb.DownstreamTlsContext): void;

    clearFiltersList(): void;
    getFiltersList(): Array<Filter>;
    setFiltersList(value: Array<Filter>): void;
    addFilters(value?: Filter, index?: number): Filter;


    hasUseProxyProto(): boolean;
    clearUseProxyProto(): void;
    getUseProxyProto(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setUseProxyProto(value?: google_protobuf_wrappers_pb.BoolValue): void;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): envoy_api_v2_core_base_pb.Metadata | undefined;
    setMetadata(value?: envoy_api_v2_core_base_pb.Metadata): void;


    hasTransportSocket(): boolean;
    clearTransportSocket(): void;
    getTransportSocket(): envoy_api_v2_core_base_pb.TransportSocket | undefined;
    setTransportSocket(value?: envoy_api_v2_core_base_pb.TransportSocket): void;

    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilterChain.AsObject;
    static toObject(includeInstance: boolean, msg: FilterChain): FilterChain.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilterChain, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilterChain;
    static deserializeBinaryFromReader(message: FilterChain, reader: jspb.BinaryReader): FilterChain;
}

export namespace FilterChain {
    export type AsObject = {
        filterChainMatch?: FilterChainMatch.AsObject,
        tlsContext?: envoy_api_v2_auth_tls_pb.DownstreamTlsContext.AsObject,
        filtersList: Array<Filter.AsObject>,
        useProxyProto?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        metadata?: envoy_api_v2_core_base_pb.Metadata.AsObject,
        transportSocket?: envoy_api_v2_core_base_pb.TransportSocket.AsObject,
        name: string,
    }
}

export class ListenerFilterChainMatchPredicate extends jspb.Message { 

    hasOrMatch(): boolean;
    clearOrMatch(): void;
    getOrMatch(): ListenerFilterChainMatchPredicate.MatchSet | undefined;
    setOrMatch(value?: ListenerFilterChainMatchPredicate.MatchSet): void;


    hasAndMatch(): boolean;
    clearAndMatch(): void;
    getAndMatch(): ListenerFilterChainMatchPredicate.MatchSet | undefined;
    setAndMatch(value?: ListenerFilterChainMatchPredicate.MatchSet): void;


    hasNotMatch(): boolean;
    clearNotMatch(): void;
    getNotMatch(): ListenerFilterChainMatchPredicate | undefined;
    setNotMatch(value?: ListenerFilterChainMatchPredicate): void;


    hasAnyMatch(): boolean;
    clearAnyMatch(): void;
    getAnyMatch(): boolean;
    setAnyMatch(value: boolean): void;


    hasDestinationPortRange(): boolean;
    clearDestinationPortRange(): void;
    getDestinationPortRange(): envoy_type_range_pb.Int32Range | undefined;
    setDestinationPortRange(value?: envoy_type_range_pb.Int32Range): void;


    getRuleCase(): ListenerFilterChainMatchPredicate.RuleCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListenerFilterChainMatchPredicate.AsObject;
    static toObject(includeInstance: boolean, msg: ListenerFilterChainMatchPredicate): ListenerFilterChainMatchPredicate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListenerFilterChainMatchPredicate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListenerFilterChainMatchPredicate;
    static deserializeBinaryFromReader(message: ListenerFilterChainMatchPredicate, reader: jspb.BinaryReader): ListenerFilterChainMatchPredicate;
}

export namespace ListenerFilterChainMatchPredicate {
    export type AsObject = {
        orMatch?: ListenerFilterChainMatchPredicate.MatchSet.AsObject,
        andMatch?: ListenerFilterChainMatchPredicate.MatchSet.AsObject,
        notMatch?: ListenerFilterChainMatchPredicate.AsObject,
        anyMatch: boolean,
        destinationPortRange?: envoy_type_range_pb.Int32Range.AsObject,
    }


    export class MatchSet extends jspb.Message { 
        clearRulesList(): void;
        getRulesList(): Array<ListenerFilterChainMatchPredicate>;
        setRulesList(value: Array<ListenerFilterChainMatchPredicate>): void;
        addRules(value?: ListenerFilterChainMatchPredicate, index?: number): ListenerFilterChainMatchPredicate;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MatchSet.AsObject;
        static toObject(includeInstance: boolean, msg: MatchSet): MatchSet.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MatchSet, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MatchSet;
        static deserializeBinaryFromReader(message: MatchSet, reader: jspb.BinaryReader): MatchSet;
    }

    export namespace MatchSet {
        export type AsObject = {
            rulesList: Array<ListenerFilterChainMatchPredicate.AsObject>,
        }
    }


    export enum RuleCase {
        RULE_NOT_SET = 0,
    
    OR_MATCH = 1,

    AND_MATCH = 2,

    NOT_MATCH = 3,

    ANY_MATCH = 4,

    DESTINATION_PORT_RANGE = 5,

    }

}

export class ListenerFilter extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): google_protobuf_struct_pb.Struct | undefined;
    setConfig(value?: google_protobuf_struct_pb.Struct): void;


    hasTypedConfig(): boolean;
    clearTypedConfig(): void;
    getTypedConfig(): google_protobuf_any_pb.Any | undefined;
    setTypedConfig(value?: google_protobuf_any_pb.Any): void;


    hasFilterDisabled(): boolean;
    clearFilterDisabled(): void;
    getFilterDisabled(): ListenerFilterChainMatchPredicate | undefined;
    setFilterDisabled(value?: ListenerFilterChainMatchPredicate): void;


    getConfigTypeCase(): ListenerFilter.ConfigTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListenerFilter.AsObject;
    static toObject(includeInstance: boolean, msg: ListenerFilter): ListenerFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListenerFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListenerFilter;
    static deserializeBinaryFromReader(message: ListenerFilter, reader: jspb.BinaryReader): ListenerFilter;
}

export namespace ListenerFilter {
    export type AsObject = {
        name: string,
        config?: google_protobuf_struct_pb.Struct.AsObject,
        typedConfig?: google_protobuf_any_pb.Any.AsObject,
        filterDisabled?: ListenerFilterChainMatchPredicate.AsObject,
    }

    export enum ConfigTypeCase {
        CONFIG_TYPE_NOT_SET = 0,
    
    CONFIG = 2,

    TYPED_CONFIG = 3,

    }

}
