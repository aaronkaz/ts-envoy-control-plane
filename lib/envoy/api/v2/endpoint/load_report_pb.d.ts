// package: envoy.api.v2.endpoint
// file: envoy/api/v2/endpoint/load_report.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_core_address_pb from "../../../../envoy/api/v2/core/address_pb";
import * as envoy_api_v2_core_base_pb from "../../../../envoy/api/v2/core/base_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class UpstreamLocalityStats extends jspb.Message { 

    hasLocality(): boolean;
    clearLocality(): void;
    getLocality(): envoy_api_v2_core_base_pb.Locality | undefined;
    setLocality(value?: envoy_api_v2_core_base_pb.Locality): void;

    getTotalSuccessfulRequests(): number;
    setTotalSuccessfulRequests(value: number): void;

    getTotalRequestsInProgress(): number;
    setTotalRequestsInProgress(value: number): void;

    getTotalErrorRequests(): number;
    setTotalErrorRequests(value: number): void;

    getTotalIssuedRequests(): number;
    setTotalIssuedRequests(value: number): void;

    clearLoadMetricStatsList(): void;
    getLoadMetricStatsList(): Array<EndpointLoadMetricStats>;
    setLoadMetricStatsList(value: Array<EndpointLoadMetricStats>): void;
    addLoadMetricStats(value?: EndpointLoadMetricStats, index?: number): EndpointLoadMetricStats;

    clearUpstreamEndpointStatsList(): void;
    getUpstreamEndpointStatsList(): Array<UpstreamEndpointStats>;
    setUpstreamEndpointStatsList(value: Array<UpstreamEndpointStats>): void;
    addUpstreamEndpointStats(value?: UpstreamEndpointStats, index?: number): UpstreamEndpointStats;

    getPriority(): number;
    setPriority(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpstreamLocalityStats.AsObject;
    static toObject(includeInstance: boolean, msg: UpstreamLocalityStats): UpstreamLocalityStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpstreamLocalityStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpstreamLocalityStats;
    static deserializeBinaryFromReader(message: UpstreamLocalityStats, reader: jspb.BinaryReader): UpstreamLocalityStats;
}

export namespace UpstreamLocalityStats {
    export type AsObject = {
        locality?: envoy_api_v2_core_base_pb.Locality.AsObject,
        totalSuccessfulRequests: number,
        totalRequestsInProgress: number,
        totalErrorRequests: number,
        totalIssuedRequests: number,
        loadMetricStatsList: Array<EndpointLoadMetricStats.AsObject>,
        upstreamEndpointStatsList: Array<UpstreamEndpointStats.AsObject>,
        priority: number,
    }
}

export class UpstreamEndpointStats extends jspb.Message { 

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): envoy_api_v2_core_address_pb.Address | undefined;
    setAddress(value?: envoy_api_v2_core_address_pb.Address): void;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): void;

    getTotalSuccessfulRequests(): number;
    setTotalSuccessfulRequests(value: number): void;

    getTotalRequestsInProgress(): number;
    setTotalRequestsInProgress(value: number): void;

    getTotalErrorRequests(): number;
    setTotalErrorRequests(value: number): void;

    getTotalIssuedRequests(): number;
    setTotalIssuedRequests(value: number): void;

    clearLoadMetricStatsList(): void;
    getLoadMetricStatsList(): Array<EndpointLoadMetricStats>;
    setLoadMetricStatsList(value: Array<EndpointLoadMetricStats>): void;
    addLoadMetricStats(value?: EndpointLoadMetricStats, index?: number): EndpointLoadMetricStats;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpstreamEndpointStats.AsObject;
    static toObject(includeInstance: boolean, msg: UpstreamEndpointStats): UpstreamEndpointStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpstreamEndpointStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpstreamEndpointStats;
    static deserializeBinaryFromReader(message: UpstreamEndpointStats, reader: jspb.BinaryReader): UpstreamEndpointStats;
}

export namespace UpstreamEndpointStats {
    export type AsObject = {
        address?: envoy_api_v2_core_address_pb.Address.AsObject,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        totalSuccessfulRequests: number,
        totalRequestsInProgress: number,
        totalErrorRequests: number,
        totalIssuedRequests: number,
        loadMetricStatsList: Array<EndpointLoadMetricStats.AsObject>,
    }
}

export class EndpointLoadMetricStats extends jspb.Message { 
    getMetricName(): string;
    setMetricName(value: string): void;

    getNumRequestsFinishedWithMetric(): number;
    setNumRequestsFinishedWithMetric(value: number): void;

    getTotalMetricValue(): number;
    setTotalMetricValue(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndpointLoadMetricStats.AsObject;
    static toObject(includeInstance: boolean, msg: EndpointLoadMetricStats): EndpointLoadMetricStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EndpointLoadMetricStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndpointLoadMetricStats;
    static deserializeBinaryFromReader(message: EndpointLoadMetricStats, reader: jspb.BinaryReader): EndpointLoadMetricStats;
}

export namespace EndpointLoadMetricStats {
    export type AsObject = {
        metricName: string,
        numRequestsFinishedWithMetric: number,
        totalMetricValue: number,
    }
}

export class ClusterStats extends jspb.Message { 
    getClusterName(): string;
    setClusterName(value: string): void;

    getClusterServiceName(): string;
    setClusterServiceName(value: string): void;

    clearUpstreamLocalityStatsList(): void;
    getUpstreamLocalityStatsList(): Array<UpstreamLocalityStats>;
    setUpstreamLocalityStatsList(value: Array<UpstreamLocalityStats>): void;
    addUpstreamLocalityStats(value?: UpstreamLocalityStats, index?: number): UpstreamLocalityStats;

    getTotalDroppedRequests(): number;
    setTotalDroppedRequests(value: number): void;

    clearDroppedRequestsList(): void;
    getDroppedRequestsList(): Array<ClusterStats.DroppedRequests>;
    setDroppedRequestsList(value: Array<ClusterStats.DroppedRequests>): void;
    addDroppedRequests(value?: ClusterStats.DroppedRequests, index?: number): ClusterStats.DroppedRequests;


    hasLoadReportInterval(): boolean;
    clearLoadReportInterval(): void;
    getLoadReportInterval(): google_protobuf_duration_pb.Duration | undefined;
    setLoadReportInterval(value?: google_protobuf_duration_pb.Duration): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClusterStats.AsObject;
    static toObject(includeInstance: boolean, msg: ClusterStats): ClusterStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClusterStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClusterStats;
    static deserializeBinaryFromReader(message: ClusterStats, reader: jspb.BinaryReader): ClusterStats;
}

export namespace ClusterStats {
    export type AsObject = {
        clusterName: string,
        clusterServiceName: string,
        upstreamLocalityStatsList: Array<UpstreamLocalityStats.AsObject>,
        totalDroppedRequests: number,
        droppedRequestsList: Array<ClusterStats.DroppedRequests.AsObject>,
        loadReportInterval?: google_protobuf_duration_pb.Duration.AsObject,
    }


    export class DroppedRequests extends jspb.Message { 
        getCategory(): string;
        setCategory(value: string): void;

        getDroppedCount(): number;
        setDroppedCount(value: number): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DroppedRequests.AsObject;
        static toObject(includeInstance: boolean, msg: DroppedRequests): DroppedRequests.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DroppedRequests, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DroppedRequests;
        static deserializeBinaryFromReader(message: DroppedRequests, reader: jspb.BinaryReader): DroppedRequests;
    }

    export namespace DroppedRequests {
        export type AsObject = {
            category: string,
            droppedCount: number,
        }
    }

}
