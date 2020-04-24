// package: envoy.api.v2
// file: envoy/api/v2/cluster.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_auth_cert_pb from "../../../envoy/api/v2/auth/cert_pb";
import * as envoy_api_v2_cluster_circuit_breaker_pb from "../../../envoy/api/v2/cluster/circuit_breaker_pb";
import * as envoy_api_v2_cluster_filter_pb from "../../../envoy/api/v2/cluster/filter_pb";
import * as envoy_api_v2_cluster_outlier_detection_pb from "../../../envoy/api/v2/cluster/outlier_detection_pb";
import * as envoy_api_v2_core_address_pb from "../../../envoy/api/v2/core/address_pb";
import * as envoy_api_v2_core_base_pb from "../../../envoy/api/v2/core/base_pb";
import * as envoy_api_v2_core_config_source_pb from "../../../envoy/api/v2/core/config_source_pb";
import * as envoy_api_v2_core_health_check_pb from "../../../envoy/api/v2/core/health_check_pb";
import * as envoy_api_v2_core_protocol_pb from "../../../envoy/api/v2/core/protocol_pb";
import * as envoy_api_v2_endpoint_pb from "../../../envoy/api/v2/endpoint_pb";
import * as envoy_type_percent_pb from "../../../envoy/type/percent_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as envoy_annotations_deprecation_pb from "../../../envoy/annotations/deprecation_pb";
import * as udpa_annotations_migrate_pb from "../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class Cluster extends jspb.Message { 
    clearTransportSocketMatchesList(): void;
    getTransportSocketMatchesList(): Array<Cluster.TransportSocketMatch>;
    setTransportSocketMatchesList(value: Array<Cluster.TransportSocketMatch>): void;
    addTransportSocketMatches(value?: Cluster.TransportSocketMatch, index?: number): Cluster.TransportSocketMatch;

    getName(): string;
    setName(value: string): void;

    getAltStatName(): string;
    setAltStatName(value: string): void;


    hasType(): boolean;
    clearType(): void;
    getType(): Cluster.DiscoveryType;
    setType(value: Cluster.DiscoveryType): void;


    hasClusterType(): boolean;
    clearClusterType(): void;
    getClusterType(): Cluster.CustomClusterType | undefined;
    setClusterType(value?: Cluster.CustomClusterType): void;


    hasEdsClusterConfig(): boolean;
    clearEdsClusterConfig(): void;
    getEdsClusterConfig(): Cluster.EdsClusterConfig | undefined;
    setEdsClusterConfig(value?: Cluster.EdsClusterConfig): void;


    hasConnectTimeout(): boolean;
    clearConnectTimeout(): void;
    getConnectTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setConnectTimeout(value?: google_protobuf_duration_pb.Duration): void;


    hasPerConnectionBufferLimitBytes(): boolean;
    clearPerConnectionBufferLimitBytes(): void;
    getPerConnectionBufferLimitBytes(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setPerConnectionBufferLimitBytes(value?: google_protobuf_wrappers_pb.UInt32Value): void;

    getLbPolicy(): Cluster.LbPolicy;
    setLbPolicy(value: Cluster.LbPolicy): void;

    clearHostsList(): void;
    getHostsList(): Array<envoy_api_v2_core_address_pb.Address>;
    setHostsList(value: Array<envoy_api_v2_core_address_pb.Address>): void;
    addHosts(value?: envoy_api_v2_core_address_pb.Address, index?: number): envoy_api_v2_core_address_pb.Address;


    hasLoadAssignment(): boolean;
    clearLoadAssignment(): void;
    getLoadAssignment(): envoy_api_v2_endpoint_pb.ClusterLoadAssignment | undefined;
    setLoadAssignment(value?: envoy_api_v2_endpoint_pb.ClusterLoadAssignment): void;

    clearHealthChecksList(): void;
    getHealthChecksList(): Array<envoy_api_v2_core_health_check_pb.HealthCheck>;
    setHealthChecksList(value: Array<envoy_api_v2_core_health_check_pb.HealthCheck>): void;
    addHealthChecks(value?: envoy_api_v2_core_health_check_pb.HealthCheck, index?: number): envoy_api_v2_core_health_check_pb.HealthCheck;


    hasMaxRequestsPerConnection(): boolean;
    clearMaxRequestsPerConnection(): void;
    getMaxRequestsPerConnection(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMaxRequestsPerConnection(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    hasCircuitBreakers(): boolean;
    clearCircuitBreakers(): void;
    getCircuitBreakers(): envoy_api_v2_cluster_circuit_breaker_pb.CircuitBreakers | undefined;
    setCircuitBreakers(value?: envoy_api_v2_cluster_circuit_breaker_pb.CircuitBreakers): void;


    hasTlsContext(): boolean;
    clearTlsContext(): void;
    getTlsContext(): envoy_api_v2_auth_cert_pb.UpstreamTlsContext | undefined;
    setTlsContext(value?: envoy_api_v2_auth_cert_pb.UpstreamTlsContext): void;


    hasUpstreamHttpProtocolOptions(): boolean;
    clearUpstreamHttpProtocolOptions(): void;
    getUpstreamHttpProtocolOptions(): envoy_api_v2_core_protocol_pb.UpstreamHttpProtocolOptions | undefined;
    setUpstreamHttpProtocolOptions(value?: envoy_api_v2_core_protocol_pb.UpstreamHttpProtocolOptions): void;


    hasCommonHttpProtocolOptions(): boolean;
    clearCommonHttpProtocolOptions(): void;
    getCommonHttpProtocolOptions(): envoy_api_v2_core_protocol_pb.HttpProtocolOptions | undefined;
    setCommonHttpProtocolOptions(value?: envoy_api_v2_core_protocol_pb.HttpProtocolOptions): void;


    hasHttpProtocolOptions(): boolean;
    clearHttpProtocolOptions(): void;
    getHttpProtocolOptions(): envoy_api_v2_core_protocol_pb.Http1ProtocolOptions | undefined;
    setHttpProtocolOptions(value?: envoy_api_v2_core_protocol_pb.Http1ProtocolOptions): void;


    hasHttp2ProtocolOptions(): boolean;
    clearHttp2ProtocolOptions(): void;
    getHttp2ProtocolOptions(): envoy_api_v2_core_protocol_pb.Http2ProtocolOptions | undefined;
    setHttp2ProtocolOptions(value?: envoy_api_v2_core_protocol_pb.Http2ProtocolOptions): void;


    getExtensionProtocolOptionsMap(): jspb.Map<string, google_protobuf_struct_pb.Struct>;
    clearExtensionProtocolOptionsMap(): void;


    getTypedExtensionProtocolOptionsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
    clearTypedExtensionProtocolOptionsMap(): void;


    hasDnsRefreshRate(): boolean;
    clearDnsRefreshRate(): void;
    getDnsRefreshRate(): google_protobuf_duration_pb.Duration | undefined;
    setDnsRefreshRate(value?: google_protobuf_duration_pb.Duration): void;


    hasDnsFailureRefreshRate(): boolean;
    clearDnsFailureRefreshRate(): void;
    getDnsFailureRefreshRate(): Cluster.RefreshRate | undefined;
    setDnsFailureRefreshRate(value?: Cluster.RefreshRate): void;

    getRespectDnsTtl(): boolean;
    setRespectDnsTtl(value: boolean): void;

    getDnsLookupFamily(): Cluster.DnsLookupFamily;
    setDnsLookupFamily(value: Cluster.DnsLookupFamily): void;

    clearDnsResolversList(): void;
    getDnsResolversList(): Array<envoy_api_v2_core_address_pb.Address>;
    setDnsResolversList(value: Array<envoy_api_v2_core_address_pb.Address>): void;
    addDnsResolvers(value?: envoy_api_v2_core_address_pb.Address, index?: number): envoy_api_v2_core_address_pb.Address;

    getUseTcpForDnsLookups(): boolean;
    setUseTcpForDnsLookups(value: boolean): void;


    hasOutlierDetection(): boolean;
    clearOutlierDetection(): void;
    getOutlierDetection(): envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection | undefined;
    setOutlierDetection(value?: envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection): void;


    hasCleanupInterval(): boolean;
    clearCleanupInterval(): void;
    getCleanupInterval(): google_protobuf_duration_pb.Duration | undefined;
    setCleanupInterval(value?: google_protobuf_duration_pb.Duration): void;


    hasUpstreamBindConfig(): boolean;
    clearUpstreamBindConfig(): void;
    getUpstreamBindConfig(): envoy_api_v2_core_address_pb.BindConfig | undefined;
    setUpstreamBindConfig(value?: envoy_api_v2_core_address_pb.BindConfig): void;


    hasLbSubsetConfig(): boolean;
    clearLbSubsetConfig(): void;
    getLbSubsetConfig(): Cluster.LbSubsetConfig | undefined;
    setLbSubsetConfig(value?: Cluster.LbSubsetConfig): void;


    hasRingHashLbConfig(): boolean;
    clearRingHashLbConfig(): void;
    getRingHashLbConfig(): Cluster.RingHashLbConfig | undefined;
    setRingHashLbConfig(value?: Cluster.RingHashLbConfig): void;


    hasOriginalDstLbConfig(): boolean;
    clearOriginalDstLbConfig(): void;
    getOriginalDstLbConfig(): Cluster.OriginalDstLbConfig | undefined;
    setOriginalDstLbConfig(value?: Cluster.OriginalDstLbConfig): void;


    hasLeastRequestLbConfig(): boolean;
    clearLeastRequestLbConfig(): void;
    getLeastRequestLbConfig(): Cluster.LeastRequestLbConfig | undefined;
    setLeastRequestLbConfig(value?: Cluster.LeastRequestLbConfig): void;


    hasCommonLbConfig(): boolean;
    clearCommonLbConfig(): void;
    getCommonLbConfig(): Cluster.CommonLbConfig | undefined;
    setCommonLbConfig(value?: Cluster.CommonLbConfig): void;


    hasTransportSocket(): boolean;
    clearTransportSocket(): void;
    getTransportSocket(): envoy_api_v2_core_base_pb.TransportSocket | undefined;
    setTransportSocket(value?: envoy_api_v2_core_base_pb.TransportSocket): void;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): envoy_api_v2_core_base_pb.Metadata | undefined;
    setMetadata(value?: envoy_api_v2_core_base_pb.Metadata): void;

    getProtocolSelection(): Cluster.ClusterProtocolSelection;
    setProtocolSelection(value: Cluster.ClusterProtocolSelection): void;


    hasUpstreamConnectionOptions(): boolean;
    clearUpstreamConnectionOptions(): void;
    getUpstreamConnectionOptions(): UpstreamConnectionOptions | undefined;
    setUpstreamConnectionOptions(value?: UpstreamConnectionOptions): void;

    getCloseConnectionsOnHostHealthFailure(): boolean;
    setCloseConnectionsOnHostHealthFailure(value: boolean): void;

    getDrainConnectionsOnHostRemoval(): boolean;
    setDrainConnectionsOnHostRemoval(value: boolean): void;

    clearFiltersList(): void;
    getFiltersList(): Array<envoy_api_v2_cluster_filter_pb.Filter>;
    setFiltersList(value: Array<envoy_api_v2_cluster_filter_pb.Filter>): void;
    addFilters(value?: envoy_api_v2_cluster_filter_pb.Filter, index?: number): envoy_api_v2_cluster_filter_pb.Filter;


    hasLoadBalancingPolicy(): boolean;
    clearLoadBalancingPolicy(): void;
    getLoadBalancingPolicy(): LoadBalancingPolicy | undefined;
    setLoadBalancingPolicy(value?: LoadBalancingPolicy): void;


    hasLrsServer(): boolean;
    clearLrsServer(): void;
    getLrsServer(): envoy_api_v2_core_config_source_pb.ConfigSource | undefined;
    setLrsServer(value?: envoy_api_v2_core_config_source_pb.ConfigSource): void;

    getTrackTimeoutBudgets(): boolean;
    setTrackTimeoutBudgets(value: boolean): void;


    getClusterDiscoveryTypeCase(): Cluster.ClusterDiscoveryTypeCase;
    getLbConfigCase(): Cluster.LbConfigCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cluster.AsObject;
    static toObject(includeInstance: boolean, msg: Cluster): Cluster.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cluster, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cluster;
    static deserializeBinaryFromReader(message: Cluster, reader: jspb.BinaryReader): Cluster;
}

export namespace Cluster {
    export type AsObject = {
        transportSocketMatchesList: Array<Cluster.TransportSocketMatch.AsObject>,
        name: string,
        altStatName: string,
        type: Cluster.DiscoveryType,
        clusterType?: Cluster.CustomClusterType.AsObject,
        edsClusterConfig?: Cluster.EdsClusterConfig.AsObject,
        connectTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        perConnectionBufferLimitBytes?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        lbPolicy: Cluster.LbPolicy,
        hostsList: Array<envoy_api_v2_core_address_pb.Address.AsObject>,
        loadAssignment?: envoy_api_v2_endpoint_pb.ClusterLoadAssignment.AsObject,
        healthChecksList: Array<envoy_api_v2_core_health_check_pb.HealthCheck.AsObject>,
        maxRequestsPerConnection?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        circuitBreakers?: envoy_api_v2_cluster_circuit_breaker_pb.CircuitBreakers.AsObject,
        tlsContext?: envoy_api_v2_auth_cert_pb.UpstreamTlsContext.AsObject,
        upstreamHttpProtocolOptions?: envoy_api_v2_core_protocol_pb.UpstreamHttpProtocolOptions.AsObject,
        commonHttpProtocolOptions?: envoy_api_v2_core_protocol_pb.HttpProtocolOptions.AsObject,
        httpProtocolOptions?: envoy_api_v2_core_protocol_pb.Http1ProtocolOptions.AsObject,
        http2ProtocolOptions?: envoy_api_v2_core_protocol_pb.Http2ProtocolOptions.AsObject,

        extensionProtocolOptionsMap: Array<[string, google_protobuf_struct_pb.Struct.AsObject]>,

        typedExtensionProtocolOptionsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
        dnsRefreshRate?: google_protobuf_duration_pb.Duration.AsObject,
        dnsFailureRefreshRate?: Cluster.RefreshRate.AsObject,
        respectDnsTtl: boolean,
        dnsLookupFamily: Cluster.DnsLookupFamily,
        dnsResolversList: Array<envoy_api_v2_core_address_pb.Address.AsObject>,
        useTcpForDnsLookups: boolean,
        outlierDetection?: envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection.AsObject,
        cleanupInterval?: google_protobuf_duration_pb.Duration.AsObject,
        upstreamBindConfig?: envoy_api_v2_core_address_pb.BindConfig.AsObject,
        lbSubsetConfig?: Cluster.LbSubsetConfig.AsObject,
        ringHashLbConfig?: Cluster.RingHashLbConfig.AsObject,
        originalDstLbConfig?: Cluster.OriginalDstLbConfig.AsObject,
        leastRequestLbConfig?: Cluster.LeastRequestLbConfig.AsObject,
        commonLbConfig?: Cluster.CommonLbConfig.AsObject,
        transportSocket?: envoy_api_v2_core_base_pb.TransportSocket.AsObject,
        metadata?: envoy_api_v2_core_base_pb.Metadata.AsObject,
        protocolSelection: Cluster.ClusterProtocolSelection,
        upstreamConnectionOptions?: UpstreamConnectionOptions.AsObject,
        closeConnectionsOnHostHealthFailure: boolean,
        drainConnectionsOnHostRemoval: boolean,
        filtersList: Array<envoy_api_v2_cluster_filter_pb.Filter.AsObject>,
        loadBalancingPolicy?: LoadBalancingPolicy.AsObject,
        lrsServer?: envoy_api_v2_core_config_source_pb.ConfigSource.AsObject,
        trackTimeoutBudgets: boolean,
    }


    export class TransportSocketMatch extends jspb.Message { 
        getName(): string;
        setName(value: string): void;


        hasMatch(): boolean;
        clearMatch(): void;
        getMatch(): google_protobuf_struct_pb.Struct | undefined;
        setMatch(value?: google_protobuf_struct_pb.Struct): void;


        hasTransportSocket(): boolean;
        clearTransportSocket(): void;
        getTransportSocket(): envoy_api_v2_core_base_pb.TransportSocket | undefined;
        setTransportSocket(value?: envoy_api_v2_core_base_pb.TransportSocket): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TransportSocketMatch.AsObject;
        static toObject(includeInstance: boolean, msg: TransportSocketMatch): TransportSocketMatch.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TransportSocketMatch, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TransportSocketMatch;
        static deserializeBinaryFromReader(message: TransportSocketMatch, reader: jspb.BinaryReader): TransportSocketMatch;
    }

    export namespace TransportSocketMatch {
        export type AsObject = {
            name: string,
            match?: google_protobuf_struct_pb.Struct.AsObject,
            transportSocket?: envoy_api_v2_core_base_pb.TransportSocket.AsObject,
        }
    }

    export class CustomClusterType extends jspb.Message { 
        getName(): string;
        setName(value: string): void;


        hasTypedConfig(): boolean;
        clearTypedConfig(): void;
        getTypedConfig(): google_protobuf_any_pb.Any | undefined;
        setTypedConfig(value?: google_protobuf_any_pb.Any): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CustomClusterType.AsObject;
        static toObject(includeInstance: boolean, msg: CustomClusterType): CustomClusterType.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CustomClusterType, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CustomClusterType;
        static deserializeBinaryFromReader(message: CustomClusterType, reader: jspb.BinaryReader): CustomClusterType;
    }

    export namespace CustomClusterType {
        export type AsObject = {
            name: string,
            typedConfig?: google_protobuf_any_pb.Any.AsObject,
        }
    }

    export class EdsClusterConfig extends jspb.Message { 

        hasEdsConfig(): boolean;
        clearEdsConfig(): void;
        getEdsConfig(): envoy_api_v2_core_config_source_pb.ConfigSource | undefined;
        setEdsConfig(value?: envoy_api_v2_core_config_source_pb.ConfigSource): void;

        getServiceName(): string;
        setServiceName(value: string): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): EdsClusterConfig.AsObject;
        static toObject(includeInstance: boolean, msg: EdsClusterConfig): EdsClusterConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: EdsClusterConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): EdsClusterConfig;
        static deserializeBinaryFromReader(message: EdsClusterConfig, reader: jspb.BinaryReader): EdsClusterConfig;
    }

    export namespace EdsClusterConfig {
        export type AsObject = {
            edsConfig?: envoy_api_v2_core_config_source_pb.ConfigSource.AsObject,
            serviceName: string,
        }
    }

    export class LbSubsetConfig extends jspb.Message { 
        getFallbackPolicy(): Cluster.LbSubsetConfig.LbSubsetFallbackPolicy;
        setFallbackPolicy(value: Cluster.LbSubsetConfig.LbSubsetFallbackPolicy): void;


        hasDefaultSubset(): boolean;
        clearDefaultSubset(): void;
        getDefaultSubset(): google_protobuf_struct_pb.Struct | undefined;
        setDefaultSubset(value?: google_protobuf_struct_pb.Struct): void;

        clearSubsetSelectorsList(): void;
        getSubsetSelectorsList(): Array<Cluster.LbSubsetConfig.LbSubsetSelector>;
        setSubsetSelectorsList(value: Array<Cluster.LbSubsetConfig.LbSubsetSelector>): void;
        addSubsetSelectors(value?: Cluster.LbSubsetConfig.LbSubsetSelector, index?: number): Cluster.LbSubsetConfig.LbSubsetSelector;

        getLocalityWeightAware(): boolean;
        setLocalityWeightAware(value: boolean): void;

        getScaleLocalityWeight(): boolean;
        setScaleLocalityWeight(value: boolean): void;

        getPanicModeAny(): boolean;
        setPanicModeAny(value: boolean): void;

        getListAsAny(): boolean;
        setListAsAny(value: boolean): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): LbSubsetConfig.AsObject;
        static toObject(includeInstance: boolean, msg: LbSubsetConfig): LbSubsetConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: LbSubsetConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): LbSubsetConfig;
        static deserializeBinaryFromReader(message: LbSubsetConfig, reader: jspb.BinaryReader): LbSubsetConfig;
    }

    export namespace LbSubsetConfig {
        export type AsObject = {
            fallbackPolicy: Cluster.LbSubsetConfig.LbSubsetFallbackPolicy,
            defaultSubset?: google_protobuf_struct_pb.Struct.AsObject,
            subsetSelectorsList: Array<Cluster.LbSubsetConfig.LbSubsetSelector.AsObject>,
            localityWeightAware: boolean,
            scaleLocalityWeight: boolean,
            panicModeAny: boolean,
            listAsAny: boolean,
        }


        export class LbSubsetSelector extends jspb.Message { 
            clearKeysList(): void;
            getKeysList(): Array<string>;
            setKeysList(value: Array<string>): void;
            addKeys(value: string, index?: number): string;

            getFallbackPolicy(): Cluster.LbSubsetConfig.LbSubsetSelector.LbSubsetSelectorFallbackPolicy;
            setFallbackPolicy(value: Cluster.LbSubsetConfig.LbSubsetSelector.LbSubsetSelectorFallbackPolicy): void;

            clearFallbackKeysSubsetList(): void;
            getFallbackKeysSubsetList(): Array<string>;
            setFallbackKeysSubsetList(value: Array<string>): void;
            addFallbackKeysSubset(value: string, index?: number): string;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): LbSubsetSelector.AsObject;
            static toObject(includeInstance: boolean, msg: LbSubsetSelector): LbSubsetSelector.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: LbSubsetSelector, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): LbSubsetSelector;
            static deserializeBinaryFromReader(message: LbSubsetSelector, reader: jspb.BinaryReader): LbSubsetSelector;
        }

        export namespace LbSubsetSelector {
            export type AsObject = {
                keysList: Array<string>,
                fallbackPolicy: Cluster.LbSubsetConfig.LbSubsetSelector.LbSubsetSelectorFallbackPolicy,
                fallbackKeysSubsetList: Array<string>,
            }

            export enum LbSubsetSelectorFallbackPolicy {
    NOT_DEFINED = 0,
    NO_FALLBACK = 1,
    ANY_ENDPOINT = 2,
    DEFAULT_SUBSET = 3,
    KEYS_SUBSET = 4,
            }

        }


        export enum LbSubsetFallbackPolicy {
    NO_FALLBACK = 0,
    ANY_ENDPOINT = 1,
    DEFAULT_SUBSET = 2,
        }

    }

    export class LeastRequestLbConfig extends jspb.Message { 

        hasChoiceCount(): boolean;
        clearChoiceCount(): void;
        getChoiceCount(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setChoiceCount(value?: google_protobuf_wrappers_pb.UInt32Value): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): LeastRequestLbConfig.AsObject;
        static toObject(includeInstance: boolean, msg: LeastRequestLbConfig): LeastRequestLbConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: LeastRequestLbConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): LeastRequestLbConfig;
        static deserializeBinaryFromReader(message: LeastRequestLbConfig, reader: jspb.BinaryReader): LeastRequestLbConfig;
    }

    export namespace LeastRequestLbConfig {
        export type AsObject = {
            choiceCount?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        }
    }

    export class RingHashLbConfig extends jspb.Message { 

        hasMinimumRingSize(): boolean;
        clearMinimumRingSize(): void;
        getMinimumRingSize(): google_protobuf_wrappers_pb.UInt64Value | undefined;
        setMinimumRingSize(value?: google_protobuf_wrappers_pb.UInt64Value): void;

        getHashFunction(): Cluster.RingHashLbConfig.HashFunction;
        setHashFunction(value: Cluster.RingHashLbConfig.HashFunction): void;


        hasMaximumRingSize(): boolean;
        clearMaximumRingSize(): void;
        getMaximumRingSize(): google_protobuf_wrappers_pb.UInt64Value | undefined;
        setMaximumRingSize(value?: google_protobuf_wrappers_pb.UInt64Value): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RingHashLbConfig.AsObject;
        static toObject(includeInstance: boolean, msg: RingHashLbConfig): RingHashLbConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RingHashLbConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RingHashLbConfig;
        static deserializeBinaryFromReader(message: RingHashLbConfig, reader: jspb.BinaryReader): RingHashLbConfig;
    }

    export namespace RingHashLbConfig {
        export type AsObject = {
            minimumRingSize?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
            hashFunction: Cluster.RingHashLbConfig.HashFunction,
            maximumRingSize?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
        }

        export enum HashFunction {
    XX_HASH = 0,
    MURMUR_HASH_2 = 1,
        }

    }

    export class OriginalDstLbConfig extends jspb.Message { 
        getUseHttpHeader(): boolean;
        setUseHttpHeader(value: boolean): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OriginalDstLbConfig.AsObject;
        static toObject(includeInstance: boolean, msg: OriginalDstLbConfig): OriginalDstLbConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OriginalDstLbConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OriginalDstLbConfig;
        static deserializeBinaryFromReader(message: OriginalDstLbConfig, reader: jspb.BinaryReader): OriginalDstLbConfig;
    }

    export namespace OriginalDstLbConfig {
        export type AsObject = {
            useHttpHeader: boolean,
        }
    }

    export class CommonLbConfig extends jspb.Message { 

        hasHealthyPanicThreshold(): boolean;
        clearHealthyPanicThreshold(): void;
        getHealthyPanicThreshold(): envoy_type_percent_pb.Percent | undefined;
        setHealthyPanicThreshold(value?: envoy_type_percent_pb.Percent): void;


        hasZoneAwareLbConfig(): boolean;
        clearZoneAwareLbConfig(): void;
        getZoneAwareLbConfig(): Cluster.CommonLbConfig.ZoneAwareLbConfig | undefined;
        setZoneAwareLbConfig(value?: Cluster.CommonLbConfig.ZoneAwareLbConfig): void;


        hasLocalityWeightedLbConfig(): boolean;
        clearLocalityWeightedLbConfig(): void;
        getLocalityWeightedLbConfig(): Cluster.CommonLbConfig.LocalityWeightedLbConfig | undefined;
        setLocalityWeightedLbConfig(value?: Cluster.CommonLbConfig.LocalityWeightedLbConfig): void;


        hasUpdateMergeWindow(): boolean;
        clearUpdateMergeWindow(): void;
        getUpdateMergeWindow(): google_protobuf_duration_pb.Duration | undefined;
        setUpdateMergeWindow(value?: google_protobuf_duration_pb.Duration): void;

        getIgnoreNewHostsUntilFirstHc(): boolean;
        setIgnoreNewHostsUntilFirstHc(value: boolean): void;

        getCloseConnectionsOnHostSetChange(): boolean;
        setCloseConnectionsOnHostSetChange(value: boolean): void;


        hasConsistentHashingLbConfig(): boolean;
        clearConsistentHashingLbConfig(): void;
        getConsistentHashingLbConfig(): Cluster.CommonLbConfig.ConsistentHashingLbConfig | undefined;
        setConsistentHashingLbConfig(value?: Cluster.CommonLbConfig.ConsistentHashingLbConfig): void;


        getLocalityConfigSpecifierCase(): CommonLbConfig.LocalityConfigSpecifierCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CommonLbConfig.AsObject;
        static toObject(includeInstance: boolean, msg: CommonLbConfig): CommonLbConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CommonLbConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CommonLbConfig;
        static deserializeBinaryFromReader(message: CommonLbConfig, reader: jspb.BinaryReader): CommonLbConfig;
    }

    export namespace CommonLbConfig {
        export type AsObject = {
            healthyPanicThreshold?: envoy_type_percent_pb.Percent.AsObject,
            zoneAwareLbConfig?: Cluster.CommonLbConfig.ZoneAwareLbConfig.AsObject,
            localityWeightedLbConfig?: Cluster.CommonLbConfig.LocalityWeightedLbConfig.AsObject,
            updateMergeWindow?: google_protobuf_duration_pb.Duration.AsObject,
            ignoreNewHostsUntilFirstHc: boolean,
            closeConnectionsOnHostSetChange: boolean,
            consistentHashingLbConfig?: Cluster.CommonLbConfig.ConsistentHashingLbConfig.AsObject,
        }


        export class ZoneAwareLbConfig extends jspb.Message { 

            hasRoutingEnabled(): boolean;
            clearRoutingEnabled(): void;
            getRoutingEnabled(): envoy_type_percent_pb.Percent | undefined;
            setRoutingEnabled(value?: envoy_type_percent_pb.Percent): void;


            hasMinClusterSize(): boolean;
            clearMinClusterSize(): void;
            getMinClusterSize(): google_protobuf_wrappers_pb.UInt64Value | undefined;
            setMinClusterSize(value?: google_protobuf_wrappers_pb.UInt64Value): void;

            getFailTrafficOnPanic(): boolean;
            setFailTrafficOnPanic(value: boolean): void;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): ZoneAwareLbConfig.AsObject;
            static toObject(includeInstance: boolean, msg: ZoneAwareLbConfig): ZoneAwareLbConfig.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: ZoneAwareLbConfig, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): ZoneAwareLbConfig;
            static deserializeBinaryFromReader(message: ZoneAwareLbConfig, reader: jspb.BinaryReader): ZoneAwareLbConfig;
        }

        export namespace ZoneAwareLbConfig {
            export type AsObject = {
                routingEnabled?: envoy_type_percent_pb.Percent.AsObject,
                minClusterSize?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
                failTrafficOnPanic: boolean,
            }
        }

        export class LocalityWeightedLbConfig extends jspb.Message { 

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): LocalityWeightedLbConfig.AsObject;
            static toObject(includeInstance: boolean, msg: LocalityWeightedLbConfig): LocalityWeightedLbConfig.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: LocalityWeightedLbConfig, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): LocalityWeightedLbConfig;
            static deserializeBinaryFromReader(message: LocalityWeightedLbConfig, reader: jspb.BinaryReader): LocalityWeightedLbConfig;
        }

        export namespace LocalityWeightedLbConfig {
            export type AsObject = {
            }
        }

        export class ConsistentHashingLbConfig extends jspb.Message { 
            getUseHostnameForHashing(): boolean;
            setUseHostnameForHashing(value: boolean): void;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): ConsistentHashingLbConfig.AsObject;
            static toObject(includeInstance: boolean, msg: ConsistentHashingLbConfig): ConsistentHashingLbConfig.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: ConsistentHashingLbConfig, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): ConsistentHashingLbConfig;
            static deserializeBinaryFromReader(message: ConsistentHashingLbConfig, reader: jspb.BinaryReader): ConsistentHashingLbConfig;
        }

        export namespace ConsistentHashingLbConfig {
            export type AsObject = {
                useHostnameForHashing: boolean,
            }
        }


        export enum LocalityConfigSpecifierCase {
            LOCALITYCONFIGSPECIFIER_NOT_SET = 0,
        
    ZONE_AWARE_LB_CONFIG = 2,

    LOCALITY_WEIGHTED_LB_CONFIG = 3,

        }

    }

    export class RefreshRate extends jspb.Message { 

        hasBaseInterval(): boolean;
        clearBaseInterval(): void;
        getBaseInterval(): google_protobuf_duration_pb.Duration | undefined;
        setBaseInterval(value?: google_protobuf_duration_pb.Duration): void;


        hasMaxInterval(): boolean;
        clearMaxInterval(): void;
        getMaxInterval(): google_protobuf_duration_pb.Duration | undefined;
        setMaxInterval(value?: google_protobuf_duration_pb.Duration): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RefreshRate.AsObject;
        static toObject(includeInstance: boolean, msg: RefreshRate): RefreshRate.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RefreshRate, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RefreshRate;
        static deserializeBinaryFromReader(message: RefreshRate, reader: jspb.BinaryReader): RefreshRate;
    }

    export namespace RefreshRate {
        export type AsObject = {
            baseInterval?: google_protobuf_duration_pb.Duration.AsObject,
            maxInterval?: google_protobuf_duration_pb.Duration.AsObject,
        }
    }


    export enum DiscoveryType {
    STATIC = 0,
    STRICT_DNS = 1,
    LOGICAL_DNS = 2,
    EDS = 3,
    ORIGINAL_DST = 4,
    }

    export enum LbPolicy {
    ROUND_ROBIN = 0,
    LEAST_REQUEST = 1,
    RING_HASH = 2,
    RANDOM = 3,
    ORIGINAL_DST_LB = 4,
    MAGLEV = 5,
    CLUSTER_PROVIDED = 6,
    LOAD_BALANCING_POLICY_CONFIG = 7,
    }

    export enum DnsLookupFamily {
    AUTO = 0,
    V4_ONLY = 1,
    V6_ONLY = 2,
    }

    export enum ClusterProtocolSelection {
    USE_CONFIGURED_PROTOCOL = 0,
    USE_DOWNSTREAM_PROTOCOL = 1,
    }


    export enum ClusterDiscoveryTypeCase {
        CLUSTERDISCOVERYTYPE_NOT_SET = 0,
    
    TYPE = 2,

    CLUSTER_TYPE = 38,

    }

    export enum LbConfigCase {
        LBCONFIG_NOT_SET = 0,
    
    RING_HASH_LB_CONFIG = 23,

    ORIGINAL_DST_LB_CONFIG = 34,

    LEAST_REQUEST_LB_CONFIG = 37,

    }

}

export class LoadBalancingPolicy extends jspb.Message { 
    clearPoliciesList(): void;
    getPoliciesList(): Array<LoadBalancingPolicy.Policy>;
    setPoliciesList(value: Array<LoadBalancingPolicy.Policy>): void;
    addPolicies(value?: LoadBalancingPolicy.Policy, index?: number): LoadBalancingPolicy.Policy;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadBalancingPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: LoadBalancingPolicy): LoadBalancingPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadBalancingPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadBalancingPolicy;
    static deserializeBinaryFromReader(message: LoadBalancingPolicy, reader: jspb.BinaryReader): LoadBalancingPolicy;
}

export namespace LoadBalancingPolicy {
    export type AsObject = {
        policiesList: Array<LoadBalancingPolicy.Policy.AsObject>,
    }


    export class Policy extends jspb.Message { 
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


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Policy.AsObject;
        static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Policy;
        static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
    }

    export namespace Policy {
        export type AsObject = {
            name: string,
            config?: google_protobuf_struct_pb.Struct.AsObject,
            typedConfig?: google_protobuf_any_pb.Any.AsObject,
        }
    }

}

export class UpstreamBindConfig extends jspb.Message { 

    hasSourceAddress(): boolean;
    clearSourceAddress(): void;
    getSourceAddress(): envoy_api_v2_core_address_pb.Address | undefined;
    setSourceAddress(value?: envoy_api_v2_core_address_pb.Address): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpstreamBindConfig.AsObject;
    static toObject(includeInstance: boolean, msg: UpstreamBindConfig): UpstreamBindConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpstreamBindConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpstreamBindConfig;
    static deserializeBinaryFromReader(message: UpstreamBindConfig, reader: jspb.BinaryReader): UpstreamBindConfig;
}

export namespace UpstreamBindConfig {
    export type AsObject = {
        sourceAddress?: envoy_api_v2_core_address_pb.Address.AsObject,
    }
}

export class UpstreamConnectionOptions extends jspb.Message { 

    hasTcpKeepalive(): boolean;
    clearTcpKeepalive(): void;
    getTcpKeepalive(): envoy_api_v2_core_address_pb.TcpKeepalive | undefined;
    setTcpKeepalive(value?: envoy_api_v2_core_address_pb.TcpKeepalive): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpstreamConnectionOptions.AsObject;
    static toObject(includeInstance: boolean, msg: UpstreamConnectionOptions): UpstreamConnectionOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpstreamConnectionOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpstreamConnectionOptions;
    static deserializeBinaryFromReader(message: UpstreamConnectionOptions, reader: jspb.BinaryReader): UpstreamConnectionOptions;
}

export namespace UpstreamConnectionOptions {
    export type AsObject = {
        tcpKeepalive?: envoy_api_v2_core_address_pb.TcpKeepalive.AsObject,
    }
}
