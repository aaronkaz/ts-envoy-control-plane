// package: envoy.api.v2.auth
// file: envoy/api/v2/auth/secret.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_auth_common_pb from "../../../../envoy/api/v2/auth/common_pb";
import * as envoy_api_v2_core_base_pb from "../../../../envoy/api/v2/core/base_pb";
import * as envoy_api_v2_core_config_source_pb from "../../../../envoy/api/v2/core/config_source_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_sensitive_pb from "../../../../udpa/annotations/sensitive_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";

export class GenericSecret extends jspb.Message { 

    hasSecret(): boolean;
    clearSecret(): void;
    getSecret(): envoy_api_v2_core_base_pb.DataSource | undefined;
    setSecret(value?: envoy_api_v2_core_base_pb.DataSource): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenericSecret.AsObject;
    static toObject(includeInstance: boolean, msg: GenericSecret): GenericSecret.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenericSecret, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenericSecret;
    static deserializeBinaryFromReader(message: GenericSecret, reader: jspb.BinaryReader): GenericSecret;
}

export namespace GenericSecret {
    export type AsObject = {
        secret?: envoy_api_v2_core_base_pb.DataSource.AsObject,
    }
}

export class SdsSecretConfig extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    hasSdsConfig(): boolean;
    clearSdsConfig(): void;
    getSdsConfig(): envoy_api_v2_core_config_source_pb.ConfigSource | undefined;
    setSdsConfig(value?: envoy_api_v2_core_config_source_pb.ConfigSource): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SdsSecretConfig.AsObject;
    static toObject(includeInstance: boolean, msg: SdsSecretConfig): SdsSecretConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SdsSecretConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SdsSecretConfig;
    static deserializeBinaryFromReader(message: SdsSecretConfig, reader: jspb.BinaryReader): SdsSecretConfig;
}

export namespace SdsSecretConfig {
    export type AsObject = {
        name: string,
        sdsConfig?: envoy_api_v2_core_config_source_pb.ConfigSource.AsObject,
    }
}

export class Secret extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    hasTlsCertificate(): boolean;
    clearTlsCertificate(): void;
    getTlsCertificate(): envoy_api_v2_auth_common_pb.TlsCertificate | undefined;
    setTlsCertificate(value?: envoy_api_v2_auth_common_pb.TlsCertificate): void;


    hasSessionTicketKeys(): boolean;
    clearSessionTicketKeys(): void;
    getSessionTicketKeys(): envoy_api_v2_auth_common_pb.TlsSessionTicketKeys | undefined;
    setSessionTicketKeys(value?: envoy_api_v2_auth_common_pb.TlsSessionTicketKeys): void;


    hasValidationContext(): boolean;
    clearValidationContext(): void;
    getValidationContext(): envoy_api_v2_auth_common_pb.CertificateValidationContext | undefined;
    setValidationContext(value?: envoy_api_v2_auth_common_pb.CertificateValidationContext): void;


    hasGenericSecret(): boolean;
    clearGenericSecret(): void;
    getGenericSecret(): GenericSecret | undefined;
    setGenericSecret(value?: GenericSecret): void;


    getTypeCase(): Secret.TypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Secret.AsObject;
    static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Secret;
    static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
}

export namespace Secret {
    export type AsObject = {
        name: string,
        tlsCertificate?: envoy_api_v2_auth_common_pb.TlsCertificate.AsObject,
        sessionTicketKeys?: envoy_api_v2_auth_common_pb.TlsSessionTicketKeys.AsObject,
        validationContext?: envoy_api_v2_auth_common_pb.CertificateValidationContext.AsObject,
        genericSecret?: GenericSecret.AsObject,
    }

    export enum TypeCase {
        TYPE_NOT_SET = 0,
    
    TLS_CERTIFICATE = 2,

    SESSION_TICKET_KEYS = 3,

    VALIDATION_CONTEXT = 4,

    GENERIC_SECRET = 5,

    }

}
