// package: opencensus.proto.trace.v1
// file: opencensus/proto/trace/v1/trace_config.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TraceConfig extends jspb.Message { 

    hasProbabilitySampler(): boolean;
    clearProbabilitySampler(): void;
    getProbabilitySampler(): ProbabilitySampler | undefined;
    setProbabilitySampler(value?: ProbabilitySampler): void;


    hasConstantSampler(): boolean;
    clearConstantSampler(): void;
    getConstantSampler(): ConstantSampler | undefined;
    setConstantSampler(value?: ConstantSampler): void;


    hasRateLimitingSampler(): boolean;
    clearRateLimitingSampler(): void;
    getRateLimitingSampler(): RateLimitingSampler | undefined;
    setRateLimitingSampler(value?: RateLimitingSampler): void;

    getMaxNumberOfAttributes(): number;
    setMaxNumberOfAttributes(value: number): void;

    getMaxNumberOfAnnotations(): number;
    setMaxNumberOfAnnotations(value: number): void;

    getMaxNumberOfMessageEvents(): number;
    setMaxNumberOfMessageEvents(value: number): void;

    getMaxNumberOfLinks(): number;
    setMaxNumberOfLinks(value: number): void;


    getSamplerCase(): TraceConfig.SamplerCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TraceConfig.AsObject;
    static toObject(includeInstance: boolean, msg: TraceConfig): TraceConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TraceConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TraceConfig;
    static deserializeBinaryFromReader(message: TraceConfig, reader: jspb.BinaryReader): TraceConfig;
}

export namespace TraceConfig {
    export type AsObject = {
        probabilitySampler?: ProbabilitySampler.AsObject,
        constantSampler?: ConstantSampler.AsObject,
        rateLimitingSampler?: RateLimitingSampler.AsObject,
        maxNumberOfAttributes: number,
        maxNumberOfAnnotations: number,
        maxNumberOfMessageEvents: number,
        maxNumberOfLinks: number,
    }

    export enum SamplerCase {
        SAMPLER_NOT_SET = 0,
    
    PROBABILITY_SAMPLER = 1,

    CONSTANT_SAMPLER = 2,

    RATE_LIMITING_SAMPLER = 3,

    }

}

export class ProbabilitySampler extends jspb.Message { 
    getSamplingprobability(): number;
    setSamplingprobability(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProbabilitySampler.AsObject;
    static toObject(includeInstance: boolean, msg: ProbabilitySampler): ProbabilitySampler.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProbabilitySampler, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProbabilitySampler;
    static deserializeBinaryFromReader(message: ProbabilitySampler, reader: jspb.BinaryReader): ProbabilitySampler;
}

export namespace ProbabilitySampler {
    export type AsObject = {
        samplingprobability: number,
    }
}

export class ConstantSampler extends jspb.Message { 
    getDecision(): ConstantSampler.ConstantDecision;
    setDecision(value: ConstantSampler.ConstantDecision): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConstantSampler.AsObject;
    static toObject(includeInstance: boolean, msg: ConstantSampler): ConstantSampler.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConstantSampler, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConstantSampler;
    static deserializeBinaryFromReader(message: ConstantSampler, reader: jspb.BinaryReader): ConstantSampler;
}

export namespace ConstantSampler {
    export type AsObject = {
        decision: ConstantSampler.ConstantDecision,
    }

    export enum ConstantDecision {
    ALWAYS_OFF = 0,
    ALWAYS_ON = 1,
    ALWAYS_PARENT = 2,
    }

}

export class RateLimitingSampler extends jspb.Message { 
    getQps(): number;
    setQps(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RateLimitingSampler.AsObject;
    static toObject(includeInstance: boolean, msg: RateLimitingSampler): RateLimitingSampler.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RateLimitingSampler, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RateLimitingSampler;
    static deserializeBinaryFromReader(message: RateLimitingSampler, reader: jspb.BinaryReader): RateLimitingSampler;
}

export namespace RateLimitingSampler {
    export type AsObject = {
        qps: number,
    }
}
