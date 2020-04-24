import * as certPB from '../../../../../../../lib/envoy/api/v2/auth/cert_pb'
import * as configSourcePB from '../../../../../../../lib/envoy/api/v2/core/config_source_pb'
import { factory } from '../../../../factory'
import { ConfigSource } from '../core'

export const SdsSecretConfig = factory( certPB.SdsSecretConfig, {
  setSdsConfig: ( val: any ): configSourcePB.ConfigSource => {
    return ConfigSource( val )
  }
})

export const CertificateValidationContext = factory( certPB.CertificateValidationContext, {
  setVerifySubjectAltNameList: ( values: string[] ): string[] => {
    return values
  }
})

export const CombinedCertificateValidationContext = factory( certPB.CommonTlsContext.CombinedCertificateValidationContext, {
  setDefaultValidationContext: ( val: any ): certPB.CertificateValidationContext => {
    return CertificateValidationContext( val )
  },
  setValidationContextSdsSecretConfig: ( val: any ): certPB.SdsSecretConfig => {
    return SdsSecretConfig( val )
  }
})

export const TlsParameters = factory( certPB.TlsParameters, {
  setEcdhCurvesList: ( values: string[] ): string[] => {
    return values
  }
})

export const CommonTlsContext = factory( certPB.CommonTlsContext, {
  setTlsCertificateSdsSecretConfigsList: ( values: any[] ): certPB.SdsSecretConfig[] => {
    return values.map( val => {
      return SdsSecretConfig( val )
    })
  },
  setCombinedValidationContext: ( val: any ): certPB.CommonTlsContext.CombinedCertificateValidationContext => {
    return CombinedCertificateValidationContext( val )
  },
  setTlsParams: ( val: any ): certPB.TlsParameters => {
    return TlsParameters( val )
  }
})

export const UpstreamTlsContext = factory( certPB.UpstreamTlsContext, {
  setCommonTlsContext: ( val: any ): certPB.CommonTlsContext => {
    return CommonTlsContext( val )
  }
})

export const DownstreamTlsContext = factory( certPB.DownstreamTlsContext, {
  setCommonTlsContext: ( val: any ): certPB.CommonTlsContext => {
    return CommonTlsContext( val )
  }
})
