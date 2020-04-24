// package: envoy.api.v2
// file: envoy/api/v2/scoped_route.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as udpa_annotations_migrate_pb from "../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

export class ScopedRouteConfiguration extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getRouteConfigurationName(): string;
    setRouteConfigurationName(value: string): void;


    hasKey(): boolean;
    clearKey(): void;
    getKey(): ScopedRouteConfiguration.Key | undefined;
    setKey(value?: ScopedRouteConfiguration.Key): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopedRouteConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: ScopedRouteConfiguration): ScopedRouteConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopedRouteConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopedRouteConfiguration;
    static deserializeBinaryFromReader(message: ScopedRouteConfiguration, reader: jspb.BinaryReader): ScopedRouteConfiguration;
}

export namespace ScopedRouteConfiguration {
    export type AsObject = {
        name: string,
        routeConfigurationName: string,
        key?: ScopedRouteConfiguration.Key.AsObject,
    }


    export class Key extends jspb.Message { 
        clearFragmentsList(): void;
        getFragmentsList(): Array<ScopedRouteConfiguration.Key.Fragment>;
        setFragmentsList(value: Array<ScopedRouteConfiguration.Key.Fragment>): void;
        addFragments(value?: ScopedRouteConfiguration.Key.Fragment, index?: number): ScopedRouteConfiguration.Key.Fragment;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Key.AsObject;
        static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Key;
        static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
    }

    export namespace Key {
        export type AsObject = {
            fragmentsList: Array<ScopedRouteConfiguration.Key.Fragment.AsObject>,
        }


        export class Fragment extends jspb.Message { 

            hasStringKey(): boolean;
            clearStringKey(): void;
            getStringKey(): string;
            setStringKey(value: string): void;


            getTypeCase(): Fragment.TypeCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Fragment.AsObject;
            static toObject(includeInstance: boolean, msg: Fragment): Fragment.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Fragment, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Fragment;
            static deserializeBinaryFromReader(message: Fragment, reader: jspb.BinaryReader): Fragment;
        }

        export namespace Fragment {
            export type AsObject = {
                stringKey: string,
            }

            export enum TypeCase {
                TYPE_NOT_SET = 0,
            
    STRING_KEY = 1,

            }

        }

    }

}
