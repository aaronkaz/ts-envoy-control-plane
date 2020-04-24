// package: envoy.api.v2.cluster
// file: envoy/api/v2/cluster/circuit_breaker.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_core_base_pb from "../../../../envoy/api/v2/core/base_pb";
import * as envoy_type_percent_pb from "../../../../envoy/type/percent_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class CircuitBreakers extends jspb.Message { 
    clearThresholdsList(): void;
    getThresholdsList(): Array<CircuitBreakers.Thresholds>;
    setThresholdsList(value: Array<CircuitBreakers.Thresholds>): void;
    addThresholds(value?: CircuitBreakers.Thresholds, index?: number): CircuitBreakers.Thresholds;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CircuitBreakers.AsObject;
    static toObject(includeInstance: boolean, msg: CircuitBreakers): CircuitBreakers.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CircuitBreakers, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CircuitBreakers;
    static deserializeBinaryFromReader(message: CircuitBreakers, reader: jspb.BinaryReader): CircuitBreakers;
}

export namespace CircuitBreakers {
    export type AsObject = {
        thresholdsList: Array<CircuitBreakers.Thresholds.AsObject>,
    }


    export class Thresholds extends jspb.Message { 
        getPriority(): envoy_api_v2_core_base_pb.RoutingPriority;
        setPriority(value: envoy_api_v2_core_base_pb.RoutingPriority): void;


        hasMaxConnections(): boolean;
        clearMaxConnections(): void;
        getMaxConnections(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setMaxConnections(value?: google_protobuf_wrappers_pb.UInt32Value): void;


        hasMaxPendingRequests(): boolean;
        clearMaxPendingRequests(): void;
        getMaxPendingRequests(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setMaxPendingRequests(value?: google_protobuf_wrappers_pb.UInt32Value): void;


        hasMaxRequests(): boolean;
        clearMaxRequests(): void;
        getMaxRequests(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setMaxRequests(value?: google_protobuf_wrappers_pb.UInt32Value): void;


        hasMaxRetries(): boolean;
        clearMaxRetries(): void;
        getMaxRetries(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setMaxRetries(value?: google_protobuf_wrappers_pb.UInt32Value): void;


        hasRetryBudget(): boolean;
        clearRetryBudget(): void;
        getRetryBudget(): CircuitBreakers.Thresholds.RetryBudget | undefined;
        setRetryBudget(value?: CircuitBreakers.Thresholds.RetryBudget): void;

        getTrackRemaining(): boolean;
        setTrackRemaining(value: boolean): void;


        hasMaxConnectionPools(): boolean;
        clearMaxConnectionPools(): void;
        getMaxConnectionPools(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setMaxConnectionPools(value?: google_protobuf_wrappers_pb.UInt32Value): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Thresholds.AsObject;
        static toObject(includeInstance: boolean, msg: Thresholds): Thresholds.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Thresholds, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Thresholds;
        static deserializeBinaryFromReader(message: Thresholds, reader: jspb.BinaryReader): Thresholds;
    }

    export namespace Thresholds {
        export type AsObject = {
            priority: envoy_api_v2_core_base_pb.RoutingPriority,
            maxConnections?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
            maxPendingRequests?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
            maxRequests?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
            maxRetries?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
            retryBudget?: CircuitBreakers.Thresholds.RetryBudget.AsObject,
            trackRemaining: boolean,
            maxConnectionPools?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        }


        export class RetryBudget extends jspb.Message { 

            hasBudgetPercent(): boolean;
            clearBudgetPercent(): void;
            getBudgetPercent(): envoy_type_percent_pb.Percent | undefined;
            setBudgetPercent(value?: envoy_type_percent_pb.Percent): void;


            hasMinRetryConcurrency(): boolean;
            clearMinRetryConcurrency(): void;
            getMinRetryConcurrency(): google_protobuf_wrappers_pb.UInt32Value | undefined;
            setMinRetryConcurrency(value?: google_protobuf_wrappers_pb.UInt32Value): void;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): RetryBudget.AsObject;
            static toObject(includeInstance: boolean, msg: RetryBudget): RetryBudget.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: RetryBudget, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): RetryBudget;
            static deserializeBinaryFromReader(message: RetryBudget, reader: jspb.BinaryReader): RetryBudget;
        }

        export namespace RetryBudget {
            export type AsObject = {
                budgetPercent?: envoy_type_percent_pb.Percent.AsObject,
                minRetryConcurrency?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
            }
        }

    }

}
