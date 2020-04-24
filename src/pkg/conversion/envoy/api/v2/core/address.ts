import * as addressPB from '../../../../../../../lib/envoy/api/v2/core/address_pb'
import { factory } from '../../../../factory'

export const Pipe = factory( addressPB.Pipe, {})

export const SocketAddress = factory( addressPB.SocketAddress, {})

export const Address = factory( addressPB.Address, {
  setSocketAddress: ( val: any ): addressPB.SocketAddress => {
    return SocketAddress( val )
  },
  setPipe: ( val: any ): addressPB.Pipe => {
    return Pipe( val )
  }
})

export const TcpKeepalive = factory( addressPB.TcpKeepalive, {})
