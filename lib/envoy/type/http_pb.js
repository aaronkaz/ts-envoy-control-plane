// source: envoy/type/http.proto
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

var udpa_annotations_status_pb = require('../../udpa/annotations/status_pb.js');
goog.object.extend(proto, udpa_annotations_status_pb);
goog.exportSymbol('proto.envoy.type.CodecClientType', null, global);
/**
 * @enum {number}
 */
proto.envoy.type.CodecClientType = {
  HTTP1: 0,
  HTTP2: 1,
  HTTP3: 2
};

goog.object.extend(exports, proto.envoy.type);
