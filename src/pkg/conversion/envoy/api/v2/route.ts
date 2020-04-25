import * as route_pb from '../../../../../../lib/envoy/api/v2/route_pb'
import { factory } from '../../../factory'
import { VirtualHost } from './route/index'

export const RouteConfiguration = factory( route_pb.RouteConfiguration, {
  setVirtualHostsList: ( values: any[] ) => {
    return values.map( val => {
      return VirtualHost( val )
    })
  }
})
