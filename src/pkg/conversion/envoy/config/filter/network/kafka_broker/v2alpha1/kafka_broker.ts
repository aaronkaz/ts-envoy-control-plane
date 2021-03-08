import * as kafka_broker_pb from '../../../../../../../../../lib/envoy/config/filter/network/kafka_broker/v2alpha1/kafka_broker_pb'
import { factory } from '../../../../../../factory'

export const KafkaBroker = factory( kafka_broker_pb.KafkaBroker, {})
