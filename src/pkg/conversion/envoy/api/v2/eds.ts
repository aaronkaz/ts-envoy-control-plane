import * as edsPB from '../../../../../../lib/envoy/api/v2/endpoint_pb'
import * as endpointPB from '../../../../../../lib/envoy/api/v2/endpoint/endpoint_components_pb'
import { factory } from '../../../factory'
import { LocalityLbEndpoints } from './endpoint'

export const ClusterLoadAssignment = factory( edsPB.ClusterLoadAssignment, {
  setEndpointsList: ( values: any[] ): endpointPB.LocalityLbEndpoints[] => {
    return values.map( val => {
      return LocalityLbEndpoints( val )
    })
  }
})
