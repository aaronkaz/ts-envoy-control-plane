// package: envoy.config.filter.network.tcp_proxy.v2
// file: envoy/config/filter/network/tcp_proxy/v2/tcp_proxy.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_core_address_pb from "../../../../../../envoy/api/v2/core/address_pb";
import * as envoy_api_v2_core_base_pb from "../../../../../../envoy/api/v2/core/base_pb";
import * as envoy_config_filter_accesslog_v2_accesslog_pb from "../../../../../../envoy/config/filter/accesslog/v2/accesslog_pb";
import * as envoy_type_hash_policy_pb from "../../../../../../envoy/type/hash_policy_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as udpa_annotations_migrate_pb from "../../../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../../../validate/validate_pb";

export class TcpProxy extends jspb.Message { 
    getStatPrefix(): string;
    setStatPrefix(value: string): void;


    hasCluster(): boolean;
    clearCluster(): void;
    getCluster(): string;
    setCluster(value: string): void;


    hasWeightedClusters(): boolean;
    clearWeightedClusters(): void;
    getWeightedClusters(): TcpProxy.WeightedCluster | undefined;
    setWeightedClusters(value?: TcpProxy.WeightedCluster): void;


    hasMetadataMatch(): boolean;
    clearMetadataMatch(): void;
    getMetadataMatch(): envoy_api_v2_core_base_pb.Metadata | undefined;
    setMetadataMatch(value?: envoy_api_v2_core_base_pb.Metadata): void;


    hasIdleTimeout(): boolean;
    clearIdleTimeout(): void;
    getIdleTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setIdleTimeout(value?: google_protobuf_duration_pb.Duration): void;


    hasDownstreamIdleTimeout(): boolean;
    clearDownstreamIdleTimeout(): void;
    getDownstreamIdleTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setDownstreamIdleTimeout(value?: google_protobuf_duration_pb.Duration): void;


    hasUpstreamIdleTimeout(): boolean;
    clearUpstreamIdleTimeout(): void;
    getUpstreamIdleTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setUpstreamIdleTimeout(value?: google_protobuf_duration_pb.Duration): void;

    clearAccessLogList(): void;
    getAccessLogList(): Array<envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog>;
    setAccessLogList(value: Array<envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog>): void;
    addAccessLog(value?: envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog, index?: number): envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog;


    hasDeprecatedV1(): boolean;
    clearDeprecatedV1(): void;
    getDeprecatedV1(): TcpProxy.DeprecatedV1 | undefined;
    setDeprecatedV1(value?: TcpProxy.DeprecatedV1): void;


    hasMaxConnectAttempts(): boolean;
    clearMaxConnectAttempts(): void;
    getMaxConnectAttempts(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMaxConnectAttempts(value?: google_protobuf_wrappers_pb.UInt32Value): void;

    clearHashPolicyList(): void;
    getHashPolicyList(): Array<envoy_type_hash_policy_pb.HashPolicy>;
    setHashPolicyList(value: Array<envoy_type_hash_policy_pb.HashPolicy>): void;
    addHashPolicy(value?: envoy_type_hash_policy_pb.HashPolicy, index?: number): envoy_type_hash_policy_pb.HashPolicy;


    hasTunnelingConfig(): boolean;
    clearTunnelingConfig(): void;
    getTunnelingConfig(): TcpProxy.TunnelingConfig | undefined;
    setTunnelingConfig(value?: TcpProxy.TunnelingConfig): void;


    getClusterSpecifierCase(): TcpProxy.ClusterSpecifierCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TcpProxy.AsObject;
    static toObject(includeInstance: boolean, msg: TcpProxy): TcpProxy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TcpProxy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TcpProxy;
    static deserializeBinaryFromReader(message: TcpProxy, reader: jspb.BinaryReader): TcpProxy;
}

export namespace TcpProxy {
    export type AsObject = {
        statPrefix: string,
        cluster: string,
        weightedClusters?: TcpProxy.WeightedCluster.AsObject,
        metadataMatch?: envoy_api_v2_core_base_pb.Metadata.AsObject,
        idleTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        downstreamIdleTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        upstreamIdleTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        accessLogList: Array<envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog.AsObject>,
        deprecatedV1?: TcpProxy.DeprecatedV1.AsObject,
        maxConnectAttempts?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        hashPolicyList: Array<envoy_type_hash_policy_pb.HashPolicy.AsObject>,
        tunnelingConfig?: TcpProxy.TunnelingConfig.AsObject,
    }


    export class DeprecatedV1 extends jspb.Message { 
        clearRoutesList(): void;
        getRoutesList(): Array<TcpProxy.DeprecatedV1.TCPRoute>;
        setRoutesList(value: Array<TcpProxy.DeprecatedV1.TCPRoute>): void;
        addRoutes(value?: TcpProxy.DeprecatedV1.TCPRoute, index?: number): TcpProxy.DeprecatedV1.TCPRoute;


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
            routesList: Array<TcpProxy.DeprecatedV1.TCPRoute.AsObject>,
        }


        export class TCPRoute extends jspb.Message { 
            getCluster(): string;
            setCluster(value: string): void;

            clearDestinationIpListList(): void;
            getDestinationIpListList(): Array<envoy_api_v2_core_address_pb.CidrRange>;
            setDestinationIpListList(value: Array<envoy_api_v2_core_address_pb.CidrRange>): void;
            addDestinationIpList(value?: envoy_api_v2_core_address_pb.CidrRange, index?: number): envoy_api_v2_core_address_pb.CidrRange;

            getDestinationPorts(): string;
            setDestinationPorts(value: string): void;

            clearSourceIpListList(): void;
            getSourceIpListList(): Array<envoy_api_v2_core_address_pb.CidrRange>;
            setSourceIpListList(value: Array<envoy_api_v2_core_address_pb.CidrRange>): void;
            addSourceIpList(value?: envoy_api_v2_core_address_pb.CidrRange, index?: number): envoy_api_v2_core_address_pb.CidrRange;

            getSourcePorts(): string;
            setSourcePorts(value: string): void;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): TCPRoute.AsObject;
            static toObject(includeInstance: boolean, msg: TCPRoute): TCPRoute.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: TCPRoute, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): TCPRoute;
            static deserializeBinaryFromReader(message: TCPRoute, reader: jspb.BinaryReader): TCPRoute;
        }

        export namespace TCPRoute {
            export type AsObject = {
                cluster: string,
                destinationIpListList: Array<envoy_api_v2_core_address_pb.CidrRange.AsObject>,
                destinationPorts: string,
                sourceIpListList: Array<envoy_api_v2_core_address_pb.CidrRange.AsObject>,
                sourcePorts: string,
            }
        }

    }

    export class WeightedCluster extends jspb.Message { 
        clearClustersList(): void;
        getClustersList(): Array<TcpProxy.WeightedCluster.ClusterWeight>;
        setClustersList(value: Array<TcpProxy.WeightedCluster.ClusterWeight>): void;
        addClusters(value?: TcpProxy.WeightedCluster.ClusterWeight, index?: number): TcpProxy.WeightedCluster.ClusterWeight;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): WeightedCluster.AsObject;
        static toObject(includeInstance: boolean, msg: WeightedCluster): WeightedCluster.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: WeightedCluster, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): WeightedCluster;
        static deserializeBinaryFromReader(message: WeightedCluster, reader: jspb.BinaryReader): WeightedCluster;
    }

    export namespace WeightedCluster {
        export type AsObject = {
            clustersList: Array<TcpProxy.WeightedCluster.ClusterWeight.AsObject>,
        }


        export class ClusterWeight extends jspb.Message { 
            getName(): string;
            setName(value: string): void;

            getWeight(): number;
            setWeight(value: number): void;


            hasMetadataMatch(): boolean;
            clearMetadataMatch(): void;
            getMetadataMatch(): envoy_api_v2_core_base_pb.Metadata | undefined;
            setMetadataMatch(value?: envoy_api_v2_core_base_pb.Metadata): void;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): ClusterWeight.AsObject;
            static toObject(includeInstance: boolean, msg: ClusterWeight): ClusterWeight.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: ClusterWeight, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): ClusterWeight;
            static deserializeBinaryFromReader(message: ClusterWeight, reader: jspb.BinaryReader): ClusterWeight;
        }

        export namespace ClusterWeight {
            export type AsObject = {
                name: string,
                weight: number,
                metadataMatch?: envoy_api_v2_core_base_pb.Metadata.AsObject,
            }
        }

    }

    export class TunnelingConfig extends jspb.Message { 
        getHostname(): string;
        setHostname(value: string): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TunnelingConfig.AsObject;
        static toObject(includeInstance: boolean, msg: TunnelingConfig): TunnelingConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TunnelingConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TunnelingConfig;
        static deserializeBinaryFromReader(message: TunnelingConfig, reader: jspb.BinaryReader): TunnelingConfig;
    }

    export namespace TunnelingConfig {
        export type AsObject = {
            hostname: string,
        }
    }


    export enum ClusterSpecifierCase {
        CLUSTER_SPECIFIER_NOT_SET = 0,
    
    CLUSTER = 2,

    WEIGHTED_CLUSTERS = 10,

    }

}
