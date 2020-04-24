import * as awsLambdaPb from '../../../../../../../../../lib/envoy/config/filter/http/aws_lambda/v2alpha/aws_lambda_pb'

import { factory } from '../../../../../../factory'

export const Config = factory( awsLambdaPb.Config, {
  setInvocationMode: ( val: string ) => {
    const types = awsLambdaPb.Config.InvocationMode as any

    return types[val.toUpperCase()] || 0
  }
})

export const PerRouteConfig = factory( awsLambdaPb.PerRouteConfig, {})
