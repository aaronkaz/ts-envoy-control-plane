import * as ext_authz_pb from '../../../../../../../../../lib/envoy/config/filter/network/ext_authz/v2/ext_authz_pb'
import { factory } from '../../../../../../factory'
import { GrpcService } from '../../../../../api/v2/core'

export const ExtAuthz = factory( ext_authz_pb.ExtAuthz, {
  setGrpcService: ( val: any ) => {
    return GrpcService( val )
  }
})
