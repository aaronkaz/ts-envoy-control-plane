// package: envoy.api.v2
// file: envoy/api/v2/listener.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_core_address_pb from "../../../envoy/api/v2/core/address_pb";
import * as envoy_api_v2_core_base_pb from "../../../envoy/api/v2/core/base_pb";
import * as envoy_api_v2_core_socket_option_pb from "../../../envoy/api/v2/core/socket_option_pb";
import * as envoy_api_v2_listener_listener_components_pb from "../../../envoy/api/v2/listener/listener_components_pb";
import * as envoy_api_v2_listener_udp_listener_config_pb from "../../../envoy/api/v2/listener/udp_listener_config_pb";
import * as envoy_config_filter_accesslog_v2_accesslog_pb from "../../../envoy/config/filter/accesslog/v2/accesslog_pb";
import * as envoy_config_listener_v2_api_listener_pb from "../../../envoy/config/listener/v2/api_listener_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as udpa_annotations_migrate_pb from "../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class Listener extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): envoy_api_v2_core_address_pb.Address | undefined;
    setAddress(value?: envoy_api_v2_core_address_pb.Address): void;

    clearFilterChainsList(): void;
    getFilterChainsList(): Array<envoy_api_v2_listener_listener_components_pb.FilterChain>;
    setFilterChainsList(value: Array<envoy_api_v2_listener_listener_components_pb.FilterChain>): void;
    addFilterChains(value?: envoy_api_v2_listener_listener_components_pb.FilterChain, index?: number): envoy_api_v2_listener_listener_components_pb.FilterChain;


    hasUseOriginalDst(): boolean;
    clearUseOriginalDst(): void;
    getUseOriginalDst(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setUseOriginalDst(value?: google_protobuf_wrappers_pb.BoolValue): void;


    hasPerConnectionBufferLimitBytes(): boolean;
    clearPerConnectionBufferLimitBytes(): void;
    getPerConnectionBufferLimitBytes(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setPerConnectionBufferLimitBytes(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): envoy_api_v2_core_base_pb.Metadata | undefined;
    setMetadata(value?: envoy_api_v2_core_base_pb.Metadata): void;


    hasDeprecatedV1(): boolean;
    clearDeprecatedV1(): void;
    getDeprecatedV1(): Listener.DeprecatedV1 | undefined;
    setDeprecatedV1(value?: Listener.DeprecatedV1): void;

    getDrainType(): Listener.DrainType;
    setDrainType(value: Listener.DrainType): void;

    clearListenerFiltersList(): void;
    getListenerFiltersList(): Array<envoy_api_v2_listener_listener_components_pb.ListenerFilter>;
    setListenerFiltersList(value: Array<envoy_api_v2_listener_listener_components_pb.ListenerFilter>): void;
    addListenerFilters(value?: envoy_api_v2_listener_listener_components_pb.ListenerFilter, index?: number): envoy_api_v2_listener_listener_components_pb.ListenerFilter;


    hasListenerFiltersTimeout(): boolean;
    clearListenerFiltersTimeout(): void;
    getListenerFiltersTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setListenerFiltersTimeout(value?: google_protobuf_duration_pb.Duration): void;

    getContinueOnListenerFiltersTimeout(): boolean;
    setContinueOnListenerFiltersTimeout(value: boolean): void;


    hasTransparent(): boolean;
    clearTransparent(): void;
    getTransparent(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTransparent(value?: google_protobuf_wrappers_pb.BoolValue): void;


    hasFreebind(): boolean;
    clearFreebind(): void;
    getFreebind(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setFreebind(value?: google_protobuf_wrappers_pb.BoolValue): void;

    clearSocketOptionsList(): void;
    getSocketOptionsList(): Array<envoy_api_v2_core_socket_option_pb.SocketOption>;
    setSocketOptionsList(value: Array<envoy_api_v2_core_socket_option_pb.SocketOption>): void;
    addSocketOptions(value?: envoy_api_v2_core_socket_option_pb.SocketOption, index?: number): envoy_api_v2_core_socket_option_pb.SocketOption;


    hasTcpFastOpenQueueLength(): boolean;
    clearTcpFastOpenQueueLength(): void;
    getTcpFastOpenQueueLength(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setTcpFastOpenQueueLength(value?: google_protobuf_wrappers_pb.UInt32Value): void;

    getTrafficDirection(): envoy_api_v2_core_base_pb.TrafficDirection;
    setTrafficDirection(value: envoy_api_v2_core_base_pb.TrafficDirection): void;


    hasUdpListenerConfig(): boolean;
    clearUdpListenerConfig(): void;
    getUdpListenerConfig(): envoy_api_v2_listener_udp_listener_config_pb.UdpListenerConfig | undefined;
    setUdpListenerConfig(value?: envoy_api_v2_listener_udp_listener_config_pb.UdpListenerConfig): void;


    hasApiListener(): boolean;
    clearApiListener(): void;
    getApiListener(): envoy_config_listener_v2_api_listener_pb.ApiListener | undefined;
    setApiListener(value?: envoy_config_listener_v2_api_listener_pb.ApiListener): void;


    hasConnectionBalanceConfig(): boolean;
    clearConnectionBalanceConfig(): void;
    getConnectionBalanceConfig(): Listener.ConnectionBalanceConfig | undefined;
    setConnectionBalanceConfig(value?: Listener.ConnectionBalanceConfig): void;

    getReusePort(): boolean;
    setReusePort(value: boolean): void;

    clearAccessLogList(): void;
    getAccessLogList(): Array<envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog>;
    setAccessLogList(value: Array<envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog>): void;
    addAccessLog(value?: envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog, index?: number): envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Listener.AsObject;
    static toObject(includeInstance: boolean, msg: Listener): Listener.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Listener, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Listener;
    static deserializeBinaryFromReader(message: Listener, reader: jspb.BinaryReader): Listener;
}

export namespace Listener {
    export type AsObject = {
        name: string,
        address?: envoy_api_v2_core_address_pb.Address.AsObject,
        filterChainsList: Array<envoy_api_v2_listener_listener_components_pb.FilterChain.AsObject>,
        useOriginalDst?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        perConnectionBufferLimitBytes?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        metadata?: envoy_api_v2_core_base_pb.Metadata.AsObject,
        deprecatedV1?: Listener.DeprecatedV1.AsObject,
        drainType: Listener.DrainType,
        listenerFiltersList: Array<envoy_api_v2_listener_listener_components_pb.ListenerFilter.AsObject>,
        listenerFiltersTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        continueOnListenerFiltersTimeout: boolean,
        transparent?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        freebind?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        socketOptionsList: Array<envoy_api_v2_core_socket_option_pb.SocketOption.AsObject>,
        tcpFastOpenQueueLength?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        trafficDirection: envoy_api_v2_core_base_pb.TrafficDirection,
        udpListenerConfig?: envoy_api_v2_listener_udp_listener_config_pb.UdpListenerConfig.AsObject,
        apiListener?: envoy_config_listener_v2_api_listener_pb.ApiListener.AsObject,
        connectionBalanceConfig?: Listener.ConnectionBalanceConfig.AsObject,
        reusePort: boolean,
        accessLogList: Array<envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog.AsObject>,
    }


    export class DeprecatedV1 extends jspb.Message { 

        hasBindToPort(): boolean;
        clearBindToPort(): void;
        getBindToPort(): google_protobuf_wrappers_pb.BoolValue | undefined;
        setBindToPort(value?: google_protobuf_wrappers_pb.BoolValue): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DeprecatedV1.AsObject;
        static toObject(includeInstance: boolean, msg: DeprecatedV1): DeprecatedV1.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DeprecatedV1, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DeprecatedV1;
        static deserializeBinaryFromReader(message: DeprecatedV1, reader: jspb.BinaryReader): DeprecatedV1;
    }

    export namespace DeprecatedV1 {
        export type AsObject = {
            bindToPort?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        }
    }

    export class ConnectionBalanceConfig extends jspb.Message { 

        hasExactBalance(): boolean;
        clearExactBalance(): void;
        getExactBalance(): Listener.ConnectionBalanceConfig.ExactBalance | undefined;
        setExactBalance(value?: Listener.ConnectionBalanceConfig.ExactBalance): void;


        getBalanceTypeCase(): ConnectionBalanceConfig.BalanceTypeCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ConnectionBalanceConfig.AsObject;
        static toObject(includeInstance: boolean, msg: ConnectionBalanceConfig): ConnectionBalanceConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ConnectionBalanceConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ConnectionBalanceConfig;
        static deserializeBinaryFromReader(message: ConnectionBalanceConfig, reader: jspb.BinaryReader): ConnectionBalanceConfig;
    }

    export namespace ConnectionBalanceConfig {
        export type AsObject = {
            exactBalance?: Listener.ConnectionBalanceConfig.ExactBalance.AsObject,
        }


        export class ExactBalance extends jspb.Message { 

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): ExactBalance.AsObject;
            static toObject(includeInstance: boolean, msg: ExactBalance): ExactBalance.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: ExactBalance, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): ExactBalance;
            static deserializeBinaryFromReader(message: ExactBalance, reader: jspb.BinaryReader): ExactBalance;
        }

        export namespace ExactBalance {
            export type AsObject = {
            }
        }


        export enum BalanceTypeCase {
            BALANCETYPE_NOT_SET = 0,
        
    EXACT_BALANCE = 1,

        }

    }


    export enum DrainType {
    DEFAULT = 0,
    MODIFY_ONLY = 1,
    }

}
