import { UInt32Value } from 'google-protobuf/google/protobuf/wrappers_pb'
import * as circuitBreakerPB from '../../../../../../../lib/envoy/api/v2/cluster/circuit_breaker_pb'
import * as corePB from '../../../../../../../lib/envoy/api/v2/core/base_pb'
import { factory } from '../../../../factory'

export const Thresholds = factory( circuitBreakerPB.CircuitBreakers.Thresholds, {
  setPriority: ( val: string ) => {
    const types = corePB.RoutingPriority as any

    return types[val.toUpperCase()]
  },
  setMaxConnections: ( val: number ): UInt32Value => {
    const i = new UInt32Value
    i.setValue( val )

    return i
  },
  setMaxPendingRequests: ( val: number ): UInt32Value => {
    const i = new UInt32Value
    i.setValue( val )

    return i
  },
  setMaxRequests: ( val: number ): UInt32Value => {
    const i = new UInt32Value
    i.setValue( val )

    return i
  },
  setMaxRetries: ( val: number ): UInt32Value => {
    const i = new UInt32Value
    i.setValue( val )

    return i
  }
})

export const CircuitBreakers = factory( circuitBreakerPB.CircuitBreakers, {
  setThresholdsList: ( values: any[] ): circuitBreakerPB.CircuitBreakers.Thresholds[] => {
    return values.map( val => {
      return Thresholds( val )
    })
  }
})
