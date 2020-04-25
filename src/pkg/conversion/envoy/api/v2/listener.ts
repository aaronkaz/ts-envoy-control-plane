import * as ldsPB from '../../../../../../lib/envoy/api/v2/listener_pb'
import * as listenerPB from '../../../../../../lib/envoy/api/v2/listener/listener_components_pb'
import * as addressPB from '../../../../../../lib/envoy/api/v2/core/address_pb'
import { factory } from '../../../factory'
import { FilterChain } from './listener/index'
import { Address } from './core'

export const Listener = factory( ldsPB.Listener, {
  setAddress: ( val: any ): addressPB.Address => {
    return Address( val )
  },
  setFilterChainsList: ( values: any[] ): listenerPB.FilterChain[] => {
    return values.map( val => {
      return FilterChain( val )
    })
  }
})
