import * as tcp_proxy_pb from '../../../../../../../../../lib/envoy/config/filter/network/tcp_proxy/v2/tcp_proxy_pb'
import { factory } from '../../../../../../factory'
// import { GrpcService } from '../../../../../api/v2/core'

export const TcpProxy = factory( tcp_proxy_pb.TcpProxy, {})
