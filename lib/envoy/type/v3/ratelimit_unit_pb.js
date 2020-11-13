// source: envoy/type/v3/ratelimit_unit.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var udpa_annotations_status_pb = require('../../../udpa/annotations/status_pb.js');
goog.object.extend(proto, udpa_annotations_status_pb);
goog.exportSymbol('proto.envoy.type.v3.RateLimitUnit', null, global);
/**
 * @enum {number}
 */
proto.envoy.type.v3.RateLimitUnit = {
  UNKNOWN: 0,
  SECOND: 1,
  MINUTE: 2,
  HOUR: 3,
  DAY: 4
};

goog.object.extend(exports, proto.envoy.type.v3);
