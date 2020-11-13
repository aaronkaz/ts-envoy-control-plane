import * as commonPB from '../../../../../../../lib/envoy/api/v2/auth/common_pb'
import * as secretPB from '../../../../../../../lib/envoy/api/v2/auth/secret_pb'
import * as tlsPB from '../../../../../../../lib/envoy/api/v2/auth/tls_pb'
import * as configSourcePB from '../../../../../../../lib/envoy/api/v2/core/config_source_pb'
import { factory } from '../../../../factory'
import { ConfigSource } from '../core'

export const SdsSecretConfig = factory( secretPB.SdsSecretConfig, {
  setSdsConfig: ( val: any ): configSourcePB.ConfigSource => {
    return ConfigSource( val )
  }
})

export const CertificateValidationContext = factory( commonPB.CertificateValidationContext, {
  setVerifySubjectAltNameList: ( values: string[] ): string[] => {
    return values
  }
})

export const CombinedCertificateValidationContext = factory( tlsPB.CommonTlsContext.CombinedCertificateValidationContext, {
  setDefaultValidationContext: ( val: any ): commonPB.CertificateValidationContext => {
    return CertificateValidationContext( val )
  },
  setValidationContextSdsSecretConfig: ( val: any ): secretPB.SdsSecretConfig => {
    return SdsSecretConfig( val )
  }
})

export const TlsParameters = factory( commonPB.TlsParameters, {
  setEcdhCurvesList: ( values: string[] ): string[] => {
    return values
  }
})

export const CommonTlsContext = factory( tlsPB.CommonTlsContext, {
  setTlsCertificateSdsSecretConfigsList: ( values: any[] ): secretPB.SdsSecretConfig[] => {
    return values.map( val => {
      return SdsSecretConfig( val )
    })
  },
  setCombinedValidationContext: ( val: any ): tlsPB.CommonTlsContext.CombinedCertificateValidationContext => {
    return CombinedCertificateValidationContext( val )
  },
  setTlsParams: ( val: any ): commonPB.TlsParameters => {
    return TlsParameters( val )
  }
})

export const UpstreamTlsContext = factory( tlsPB.UpstreamTlsContext, {
  setCommonTlsContext: ( val: any ): tlsPB.CommonTlsContext => {
    return CommonTlsContext( val )
  }
})

export const DownstreamTlsContext = factory( tlsPB.DownstreamTlsContext, {
  setCommonTlsContext: ( val: any ): tlsPB.CommonTlsContext => {
    return CommonTlsContext( val )
  }
})
