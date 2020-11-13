// package: envoy.api.v2.auth
// file: envoy/api/v2/auth/tls.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_auth_common_pb from "../../../../envoy/api/v2/auth/common_pb";
import * as envoy_api_v2_auth_secret_pb from "../../../../envoy/api/v2/auth/secret_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class UpstreamTlsContext extends jspb.Message { 

    hasCommonTlsContext(): boolean;
    clearCommonTlsContext(): void;
    getCommonTlsContext(): CommonTlsContext | undefined;
    setCommonTlsContext(value?: CommonTlsContext): void;

    getSni(): string;
    setSni(value: string): void;

    getAllowRenegotiation(): boolean;
    setAllowRenegotiation(value: boolean): void;


    hasMaxSessionKeys(): boolean;
    clearMaxSessionKeys(): void;
    getMaxSessionKeys(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMaxSessionKeys(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpstreamTlsContext.AsObject;
    static toObject(includeInstance: boolean, msg: UpstreamTlsContext): UpstreamTlsContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpstreamTlsContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpstreamTlsContext;
    static deserializeBinaryFromReader(message: UpstreamTlsContext, reader: jspb.BinaryReader): UpstreamTlsContext;
}

export namespace UpstreamTlsContext {
    export type AsObject = {
        commonTlsContext?: CommonTlsContext.AsObject,
        sni: string,
        allowRenegotiation: boolean,
        maxSessionKeys?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    }
}

export class DownstreamTlsContext extends jspb.Message { 

    hasCommonTlsContext(): boolean;
    clearCommonTlsContext(): void;
    getCommonTlsContext(): CommonTlsContext | undefined;
    setCommonTlsContext(value?: CommonTlsContext): void;


    hasRequireClientCertificate(): boolean;
    clearRequireClientCertificate(): void;
    getRequireClientCertificate(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setRequireClientCertificate(value?: google_protobuf_wrappers_pb.BoolValue): void;


    hasRequireSni(): boolean;
    clearRequireSni(): void;
    getRequireSni(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setRequireSni(value?: google_protobuf_wrappers_pb.BoolValue): void;


    hasSessionTicketKeys(): boolean;
    clearSessionTicketKeys(): void;
    getSessionTicketKeys(): envoy_api_v2_auth_common_pb.TlsSessionTicketKeys | undefined;
    setSessionTicketKeys(value?: envoy_api_v2_auth_common_pb.TlsSessionTicketKeys): void;


    hasSessionTicketKeysSdsSecretConfig(): boolean;
    clearSessionTicketKeysSdsSecretConfig(): void;
    getSessionTicketKeysSdsSecretConfig(): envoy_api_v2_auth_secret_pb.SdsSecretConfig | undefined;
    setSessionTicketKeysSdsSecretConfig(value?: envoy_api_v2_auth_secret_pb.SdsSecretConfig): void;


    hasDisableStatelessSessionResumption(): boolean;
    clearDisableStatelessSessionResumption(): void;
    getDisableStatelessSessionResumption(): boolean;
    setDisableStatelessSessionResumption(value: boolean): void;


    hasSessionTimeout(): boolean;
    clearSessionTimeout(): void;
    getSessionTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setSessionTimeout(value?: google_protobuf_duration_pb.Duration): void;


    getSessionTicketKeysTypeCase(): DownstreamTlsContext.SessionTicketKeysTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownstreamTlsContext.AsObject;
    static toObject(includeInstance: boolean, msg: DownstreamTlsContext): DownstreamTlsContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownstreamTlsContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownstreamTlsContext;
    static deserializeBinaryFromReader(message: DownstreamTlsContext, reader: jspb.BinaryReader): DownstreamTlsContext;
}

export namespace DownstreamTlsContext {
    export type AsObject = {
        commonTlsContext?: CommonTlsContext.AsObject,
        requireClientCertificate?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        requireSni?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        sessionTicketKeys?: envoy_api_v2_auth_common_pb.TlsSessionTicketKeys.AsObject,
        sessionTicketKeysSdsSecretConfig?: envoy_api_v2_auth_secret_pb.SdsSecretConfig.AsObject,
        disableStatelessSessionResumption: boolean,
        sessionTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    }

    export enum SessionTicketKeysTypeCase {
        SESSION_TICKET_KEYS_TYPE_NOT_SET = 0,
    
    SESSION_TICKET_KEYS = 4,

    SESSION_TICKET_KEYS_SDS_SECRET_CONFIG = 5,

    DISABLE_STATELESS_SESSION_RESUMPTION = 7,

    }

}

export class CommonTlsContext extends jspb.Message { 

    hasTlsParams(): boolean;
    clearTlsParams(): void;
    getTlsParams(): envoy_api_v2_auth_common_pb.TlsParameters | undefined;
    setTlsParams(value?: envoy_api_v2_auth_common_pb.TlsParameters): void;

    clearTlsCertificatesList(): void;
    getTlsCertificatesList(): Array<envoy_api_v2_auth_common_pb.TlsCertificate>;
    setTlsCertificatesList(value: Array<envoy_api_v2_auth_common_pb.TlsCertificate>): void;
    addTlsCertificates(value?: envoy_api_v2_auth_common_pb.TlsCertificate, index?: number): envoy_api_v2_auth_common_pb.TlsCertificate;

    clearTlsCertificateSdsSecretConfigsList(): void;
    getTlsCertificateSdsSecretConfigsList(): Array<envoy_api_v2_auth_secret_pb.SdsSecretConfig>;
    setTlsCertificateSdsSecretConfigsList(value: Array<envoy_api_v2_auth_secret_pb.SdsSecretConfig>): void;
    addTlsCertificateSdsSecretConfigs(value?: envoy_api_v2_auth_secret_pb.SdsSecretConfig, index?: number): envoy_api_v2_auth_secret_pb.SdsSecretConfig;


    hasValidationContext(): boolean;
    clearValidationContext(): void;
    getValidationContext(): envoy_api_v2_auth_common_pb.CertificateValidationContext | undefined;
    setValidationContext(value?: envoy_api_v2_auth_common_pb.CertificateValidationContext): void;


    hasValidationContextSdsSecretConfig(): boolean;
    clearValidationContextSdsSecretConfig(): void;
    getValidationContextSdsSecretConfig(): envoy_api_v2_auth_secret_pb.SdsSecretConfig | undefined;
    setValidationContextSdsSecretConfig(value?: envoy_api_v2_auth_secret_pb.SdsSecretConfig): void;


    hasCombinedValidationContext(): boolean;
    clearCombinedValidationContext(): void;
    getCombinedValidationContext(): CommonTlsContext.CombinedCertificateValidationContext | undefined;
    setCombinedValidationContext(value?: CommonTlsContext.CombinedCertificateValidationContext): void;

    clearAlpnProtocolsList(): void;
    getAlpnProtocolsList(): Array<string>;
    setAlpnProtocolsList(value: Array<string>): void;
    addAlpnProtocols(value: string, index?: number): string;


    getValidationContextTypeCase(): CommonTlsContext.ValidationContextTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommonTlsContext.AsObject;
    static toObject(includeInstance: boolean, msg: CommonTlsContext): CommonTlsContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommonTlsContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommonTlsContext;
    static deserializeBinaryFromReader(message: CommonTlsContext, reader: jspb.BinaryReader): CommonTlsContext;
}

export namespace CommonTlsContext {
    export type AsObject = {
        tlsParams?: envoy_api_v2_auth_common_pb.TlsParameters.AsObject,
        tlsCertificatesList: Array<envoy_api_v2_auth_common_pb.TlsCertificate.AsObject>,
        tlsCertificateSdsSecretConfigsList: Array<envoy_api_v2_auth_secret_pb.SdsSecretConfig.AsObject>,
        validationContext?: envoy_api_v2_auth_common_pb.CertificateValidationContext.AsObject,
        validationContextSdsSecretConfig?: envoy_api_v2_auth_secret_pb.SdsSecretConfig.AsObject,
        combinedValidationContext?: CommonTlsContext.CombinedCertificateValidationContext.AsObject,
        alpnProtocolsList: Array<string>,
    }


    export class CombinedCertificateValidationContext extends jspb.Message { 

        hasDefaultValidationContext(): boolean;
        clearDefaultValidationContext(): void;
        getDefaultValidationContext(): envoy_api_v2_auth_common_pb.CertificateValidationContext | undefined;
        setDefaultValidationContext(value?: envoy_api_v2_auth_common_pb.CertificateValidationContext): void;


        hasValidationContextSdsSecretConfig(): boolean;
        clearValidationContextSdsSecretConfig(): void;
        getValidationContextSdsSecretConfig(): envoy_api_v2_auth_secret_pb.SdsSecretConfig | undefined;
        setValidationContextSdsSecretConfig(value?: envoy_api_v2_auth_secret_pb.SdsSecretConfig): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CombinedCertificateValidationContext.AsObject;
        static toObject(includeInstance: boolean, msg: CombinedCertificateValidationContext): CombinedCertificateValidationContext.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CombinedCertificateValidationContext, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CombinedCertificateValidationContext;
        static deserializeBinaryFromReader(message: CombinedCertificateValidationContext, reader: jspb.BinaryReader): CombinedCertificateValidationContext;
    }

    export namespace CombinedCertificateValidationContext {
        export type AsObject = {
            defaultValidationContext?: envoy_api_v2_auth_common_pb.CertificateValidationContext.AsObject,
            validationContextSdsSecretConfig?: envoy_api_v2_auth_secret_pb.SdsSecretConfig.AsObject,
        }
    }


    export enum ValidationContextTypeCase {
        VALIDATION_CONTEXT_TYPE_NOT_SET = 0,
    
    VALIDATION_CONTEXT = 3,

    VALIDATION_CONTEXT_SDS_SECRET_CONFIG = 7,

    COMBINED_VALIDATION_CONTEXT = 8,

    }

}
