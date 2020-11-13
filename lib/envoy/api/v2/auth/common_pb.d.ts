// package: envoy.api.v2.auth
// file: envoy/api/v2/auth/common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_core_base_pb from "../../../../envoy/api/v2/core/base_pb";
import * as envoy_type_matcher_string_pb from "../../../../envoy/type/matcher/string_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_sensitive_pb from "../../../../udpa/annotations/sensitive_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class TlsParameters extends jspb.Message { 
    getTlsMinimumProtocolVersion(): TlsParameters.TlsProtocol;
    setTlsMinimumProtocolVersion(value: TlsParameters.TlsProtocol): void;

    getTlsMaximumProtocolVersion(): TlsParameters.TlsProtocol;
    setTlsMaximumProtocolVersion(value: TlsParameters.TlsProtocol): void;

    clearCipherSuitesList(): void;
    getCipherSuitesList(): Array<string>;
    setCipherSuitesList(value: Array<string>): void;
    addCipherSuites(value: string, index?: number): string;

    clearEcdhCurvesList(): void;
    getEcdhCurvesList(): Array<string>;
    setEcdhCurvesList(value: Array<string>): void;
    addEcdhCurves(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TlsParameters.AsObject;
    static toObject(includeInstance: boolean, msg: TlsParameters): TlsParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TlsParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TlsParameters;
    static deserializeBinaryFromReader(message: TlsParameters, reader: jspb.BinaryReader): TlsParameters;
}

export namespace TlsParameters {
    export type AsObject = {
        tlsMinimumProtocolVersion: TlsParameters.TlsProtocol,
        tlsMaximumProtocolVersion: TlsParameters.TlsProtocol,
        cipherSuitesList: Array<string>,
        ecdhCurvesList: Array<string>,
    }

    export enum TlsProtocol {
    TLS_AUTO = 0,
    TLSV1_0 = 1,
    TLSV1_1 = 2,
    TLSV1_2 = 3,
    TLSV1_3 = 4,
    }

}

export class PrivateKeyProvider extends jspb.Message { 
    getProviderName(): string;
    setProviderName(value: string): void;


    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): google_protobuf_struct_pb.Struct | undefined;
    setConfig(value?: google_protobuf_struct_pb.Struct): void;


    hasTypedConfig(): boolean;
    clearTypedConfig(): void;
    getTypedConfig(): google_protobuf_any_pb.Any | undefined;
    setTypedConfig(value?: google_protobuf_any_pb.Any): void;


    getConfigTypeCase(): PrivateKeyProvider.ConfigTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrivateKeyProvider.AsObject;
    static toObject(includeInstance: boolean, msg: PrivateKeyProvider): PrivateKeyProvider.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrivateKeyProvider, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrivateKeyProvider;
    static deserializeBinaryFromReader(message: PrivateKeyProvider, reader: jspb.BinaryReader): PrivateKeyProvider;
}

export namespace PrivateKeyProvider {
    export type AsObject = {
        providerName: string,
        config?: google_protobuf_struct_pb.Struct.AsObject,
        typedConfig?: google_protobuf_any_pb.Any.AsObject,
    }

    export enum ConfigTypeCase {
        CONFIG_TYPE_NOT_SET = 0,
    
    CONFIG = 2,

    TYPED_CONFIG = 3,

    }

}

export class TlsCertificate extends jspb.Message { 

    hasCertificateChain(): boolean;
    clearCertificateChain(): void;
    getCertificateChain(): envoy_api_v2_core_base_pb.DataSource | undefined;
    setCertificateChain(value?: envoy_api_v2_core_base_pb.DataSource): void;


    hasPrivateKey(): boolean;
    clearPrivateKey(): void;
    getPrivateKey(): envoy_api_v2_core_base_pb.DataSource | undefined;
    setPrivateKey(value?: envoy_api_v2_core_base_pb.DataSource): void;


    hasPrivateKeyProvider(): boolean;
    clearPrivateKeyProvider(): void;
    getPrivateKeyProvider(): PrivateKeyProvider | undefined;
    setPrivateKeyProvider(value?: PrivateKeyProvider): void;


    hasPassword(): boolean;
    clearPassword(): void;
    getPassword(): envoy_api_v2_core_base_pb.DataSource | undefined;
    setPassword(value?: envoy_api_v2_core_base_pb.DataSource): void;


    hasOcspStaple(): boolean;
    clearOcspStaple(): void;
    getOcspStaple(): envoy_api_v2_core_base_pb.DataSource | undefined;
    setOcspStaple(value?: envoy_api_v2_core_base_pb.DataSource): void;

    clearSignedCertificateTimestampList(): void;
    getSignedCertificateTimestampList(): Array<envoy_api_v2_core_base_pb.DataSource>;
    setSignedCertificateTimestampList(value: Array<envoy_api_v2_core_base_pb.DataSource>): void;
    addSignedCertificateTimestamp(value?: envoy_api_v2_core_base_pb.DataSource, index?: number): envoy_api_v2_core_base_pb.DataSource;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TlsCertificate.AsObject;
    static toObject(includeInstance: boolean, msg: TlsCertificate): TlsCertificate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TlsCertificate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TlsCertificate;
    static deserializeBinaryFromReader(message: TlsCertificate, reader: jspb.BinaryReader): TlsCertificate;
}

export namespace TlsCertificate {
    export type AsObject = {
        certificateChain?: envoy_api_v2_core_base_pb.DataSource.AsObject,
        privateKey?: envoy_api_v2_core_base_pb.DataSource.AsObject,
        privateKeyProvider?: PrivateKeyProvider.AsObject,
        password?: envoy_api_v2_core_base_pb.DataSource.AsObject,
        ocspStaple?: envoy_api_v2_core_base_pb.DataSource.AsObject,
        signedCertificateTimestampList: Array<envoy_api_v2_core_base_pb.DataSource.AsObject>,
    }
}

export class TlsSessionTicketKeys extends jspb.Message { 
    clearKeysList(): void;
    getKeysList(): Array<envoy_api_v2_core_base_pb.DataSource>;
    setKeysList(value: Array<envoy_api_v2_core_base_pb.DataSource>): void;
    addKeys(value?: envoy_api_v2_core_base_pb.DataSource, index?: number): envoy_api_v2_core_base_pb.DataSource;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TlsSessionTicketKeys.AsObject;
    static toObject(includeInstance: boolean, msg: TlsSessionTicketKeys): TlsSessionTicketKeys.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TlsSessionTicketKeys, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TlsSessionTicketKeys;
    static deserializeBinaryFromReader(message: TlsSessionTicketKeys, reader: jspb.BinaryReader): TlsSessionTicketKeys;
}

export namespace TlsSessionTicketKeys {
    export type AsObject = {
        keysList: Array<envoy_api_v2_core_base_pb.DataSource.AsObject>,
    }
}

export class CertificateValidationContext extends jspb.Message { 

    hasTrustedCa(): boolean;
    clearTrustedCa(): void;
    getTrustedCa(): envoy_api_v2_core_base_pb.DataSource | undefined;
    setTrustedCa(value?: envoy_api_v2_core_base_pb.DataSource): void;

    clearVerifyCertificateSpkiList(): void;
    getVerifyCertificateSpkiList(): Array<string>;
    setVerifyCertificateSpkiList(value: Array<string>): void;
    addVerifyCertificateSpki(value: string, index?: number): string;

    clearVerifyCertificateHashList(): void;
    getVerifyCertificateHashList(): Array<string>;
    setVerifyCertificateHashList(value: Array<string>): void;
    addVerifyCertificateHash(value: string, index?: number): string;

    clearVerifySubjectAltNameList(): void;
    getVerifySubjectAltNameList(): Array<string>;
    setVerifySubjectAltNameList(value: Array<string>): void;
    addVerifySubjectAltName(value: string, index?: number): string;

    clearMatchSubjectAltNamesList(): void;
    getMatchSubjectAltNamesList(): Array<envoy_type_matcher_string_pb.StringMatcher>;
    setMatchSubjectAltNamesList(value: Array<envoy_type_matcher_string_pb.StringMatcher>): void;
    addMatchSubjectAltNames(value?: envoy_type_matcher_string_pb.StringMatcher, index?: number): envoy_type_matcher_string_pb.StringMatcher;


    hasRequireOcspStaple(): boolean;
    clearRequireOcspStaple(): void;
    getRequireOcspStaple(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setRequireOcspStaple(value?: google_protobuf_wrappers_pb.BoolValue): void;


    hasRequireSignedCertificateTimestamp(): boolean;
    clearRequireSignedCertificateTimestamp(): void;
    getRequireSignedCertificateTimestamp(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setRequireSignedCertificateTimestamp(value?: google_protobuf_wrappers_pb.BoolValue): void;


    hasCrl(): boolean;
    clearCrl(): void;
    getCrl(): envoy_api_v2_core_base_pb.DataSource | undefined;
    setCrl(value?: envoy_api_v2_core_base_pb.DataSource): void;

    getAllowExpiredCertificate(): boolean;
    setAllowExpiredCertificate(value: boolean): void;

    getTrustChainVerification(): CertificateValidationContext.TrustChainVerification;
    setTrustChainVerification(value: CertificateValidationContext.TrustChainVerification): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CertificateValidationContext.AsObject;
    static toObject(includeInstance: boolean, msg: CertificateValidationContext): CertificateValidationContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CertificateValidationContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CertificateValidationContext;
    static deserializeBinaryFromReader(message: CertificateValidationContext, reader: jspb.BinaryReader): CertificateValidationContext;
}

export namespace CertificateValidationContext {
    export type AsObject = {
        trustedCa?: envoy_api_v2_core_base_pb.DataSource.AsObject,
        verifyCertificateSpkiList: Array<string>,
        verifyCertificateHashList: Array<string>,
        verifySubjectAltNameList: Array<string>,
        matchSubjectAltNamesList: Array<envoy_type_matcher_string_pb.StringMatcher.AsObject>,
        requireOcspStaple?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        requireSignedCertificateTimestamp?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        crl?: envoy_api_v2_core_base_pb.DataSource.AsObject,
        allowExpiredCertificate: boolean,
        trustChainVerification: CertificateValidationContext.TrustChainVerification,
    }

    export enum TrustChainVerification {
    VERIFY_TRUST_CHAIN = 0,
    ACCEPT_UNTRUSTED = 1,
    }

}
