// source: envoy/api/v2/core/event_service_config.proto
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

var envoy_api_v2_core_grpc_service_pb = require('../../../../envoy/api/v2/core/grpc_service_pb.js');
goog.object.extend(proto, envoy_api_v2_core_grpc_service_pb);
var udpa_annotations_migrate_pb = require('../../../../udpa/annotations/migrate_pb.js');
goog.object.extend(proto, udpa_annotations_migrate_pb);
var udpa_annotations_status_pb = require('../../../../udpa/annotations/status_pb.js');
goog.object.extend(proto, udpa_annotations_status_pb);
var validate_validate_pb = require('../../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.api.v2.core.EventServiceConfig', null, global);
goog.exportSymbol('proto.envoy.api.v2.core.EventServiceConfig.ConfigSourceSpecifierCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.envoy.api.v2.core.EventServiceConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.api.v2.core.EventServiceConfig.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.core.EventServiceConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.core.EventServiceConfig.displayName = 'proto.envoy.api.v2.core.EventServiceConfig';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.api.v2.core.EventServiceConfig.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.core.EventServiceConfig.ConfigSourceSpecifierCase = {
  CONFIG_SOURCE_SPECIFIER_NOT_SET: 0,
  GRPC_SERVICE: 1
};

/**
 * @return {proto.envoy.api.v2.core.EventServiceConfig.ConfigSourceSpecifierCase}
 */
proto.envoy.api.v2.core.EventServiceConfig.prototype.getConfigSourceSpecifierCase = function() {
  return /** @type {proto.envoy.api.v2.core.EventServiceConfig.ConfigSourceSpecifierCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.core.EventServiceConfig.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.api.v2.core.EventServiceConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.core.EventServiceConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.core.EventServiceConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.EventServiceConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    grpcService: (f = msg.getGrpcService()) && envoy_api_v2_core_grpc_service_pb.GrpcService.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.envoy.api.v2.core.EventServiceConfig}
 */
proto.envoy.api.v2.core.EventServiceConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.core.EventServiceConfig;
  return proto.envoy.api.v2.core.EventServiceConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.core.EventServiceConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.core.EventServiceConfig}
 */
proto.envoy.api.v2.core.EventServiceConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_api_v2_core_grpc_service_pb.GrpcService;
      reader.readMessage(value,envoy_api_v2_core_grpc_service_pb.GrpcService.deserializeBinaryFromReader);
      msg.setGrpcService(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.envoy.api.v2.core.EventServiceConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.core.EventServiceConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.core.EventServiceConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.EventServiceConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGrpcService();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      envoy_api_v2_core_grpc_service_pb.GrpcService.serializeBinaryToWriter
    );
  }
};


/**
 * optional GrpcService grpc_service = 1;
 * @return {?proto.envoy.api.v2.core.GrpcService}
 */
proto.envoy.api.v2.core.EventServiceConfig.prototype.getGrpcService = function() {
  return /** @type{?proto.envoy.api.v2.core.GrpcService} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_grpc_service_pb.GrpcService, 1));
};


/**
 * @param {?proto.envoy.api.v2.core.GrpcService|undefined} value
 * @return {!proto.envoy.api.v2.core.EventServiceConfig} returns this
*/
proto.envoy.api.v2.core.EventServiceConfig.prototype.setGrpcService = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.envoy.api.v2.core.EventServiceConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.core.EventServiceConfig} returns this
 */
proto.envoy.api.v2.core.EventServiceConfig.prototype.clearGrpcService = function() {
  return this.setGrpcService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.EventServiceConfig.prototype.hasGrpcService = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.envoy.api.v2.core);
