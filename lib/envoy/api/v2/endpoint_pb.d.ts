// package: envoy.api.v2
// file: envoy/api/v2/endpoint.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_endpoint_endpoint_components_pb from "../../../envoy/api/v2/endpoint/endpoint_components_pb";
import * as envoy_type_percent_pb from "../../../envoy/type/percent_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as udpa_annotations_migrate_pb from "../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class ClusterLoadAssignment extends jspb.Message { 
    getClusterName(): string;
    setClusterName(value: string): void;

    clearEndpointsList(): void;
    getEndpointsList(): Array<envoy_api_v2_endpoint_endpoint_components_pb.LocalityLbEndpoints>;
    setEndpointsList(value: Array<envoy_api_v2_endpoint_endpoint_components_pb.LocalityLbEndpoints>): void;
    addEndpoints(value?: envoy_api_v2_endpoint_endpoint_components_pb.LocalityLbEndpoints, index?: number): envoy_api_v2_endpoint_endpoint_components_pb.LocalityLbEndpoints;


    getNamedEndpointsMap(): jspb.Map<string, envoy_api_v2_endpoint_endpoint_components_pb.Endpoint>;
    clearNamedEndpointsMap(): void;


    hasPolicy(): boolean;
    clearPolicy(): void;
    getPolicy(): ClusterLoadAssignment.Policy | undefined;
    setPolicy(value?: ClusterLoadAssignment.Policy): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClusterLoadAssignment.AsObject;
    static toObject(includeInstance: boolean, msg: ClusterLoadAssignment): ClusterLoadAssignment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClusterLoadAssignment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClusterLoadAssignment;
    static deserializeBinaryFromReader(message: ClusterLoadAssignment, reader: jspb.BinaryReader): ClusterLoadAssignment;
}

export namespace ClusterLoadAssignment {
    export type AsObject = {
        clusterName: string,
        endpointsList: Array<envoy_api_v2_endpoint_endpoint_components_pb.LocalityLbEndpoints.AsObject>,

        namedEndpointsMap: Array<[string, envoy_api_v2_endpoint_endpoint_components_pb.Endpoint.AsObject]>,
        policy?: ClusterLoadAssignment.Policy.AsObject,
    }


    export class Policy extends jspb.Message { 
        clearDropOverloadsList(): void;
        getDropOverloadsList(): Array<ClusterLoadAssignment.Policy.DropOverload>;
        setDropOverloadsList(value: Array<ClusterLoadAssignment.Policy.DropOverload>): void;
        addDropOverloads(value?: ClusterLoadAssignment.Policy.DropOverload, index?: number): ClusterLoadAssignment.Policy.DropOverload;


        hasOverprovisioningFactor(): boolean;
        clearOverprovisioningFactor(): void;
        getOverprovisioningFactor(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setOverprovisioningFactor(value?: google_protobuf_wrappers_pb.UInt32Value): void;


        hasEndpointStaleAfter(): boolean;
        clearEndpointStaleAfter(): void;
        getEndpointStaleAfter(): google_protobuf_duration_pb.Duration | undefined;
        setEndpointStaleAfter(value?: google_protobuf_duration_pb.Duration): void;

        getDisableOverprovisioning(): boolean;
        setDisableOverprovisioning(value: boolean): void;


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
            dropOverloadsList: Array<ClusterLoadAssignment.Policy.DropOverload.AsObject>,
            overprovisioningFactor?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
            endpointStaleAfter?: google_protobuf_duration_pb.Duration.AsObject,
            disableOverprovisioning: boolean,
        }


        export class DropOverload extends jspb.Message { 
            getCategory(): string;
            setCategory(value: string): void;


            hasDropPercentage(): boolean;
            clearDropPercentage(): void;
            getDropPercentage(): envoy_type_percent_pb.FractionalPercent | undefined;
            setDropPercentage(value?: envoy_type_percent_pb.FractionalPercent): void;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): DropOverload.AsObject;
            static toObject(includeInstance: boolean, msg: DropOverload): DropOverload.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: DropOverload, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): DropOverload;
            static deserializeBinaryFromReader(message: DropOverload, reader: jspb.BinaryReader): DropOverload;
        }

        export namespace DropOverload {
            export type AsObject = {
                category: string,
                dropPercentage?: envoy_type_percent_pb.FractionalPercent.AsObject,
            }
        }

    }

}
