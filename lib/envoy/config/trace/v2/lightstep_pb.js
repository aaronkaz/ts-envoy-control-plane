// source: envoy/config/trace/v2/lightstep.proto
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

var udpa_annotations_status_pb = require('../../../../udpa/annotations/status_pb.js');
goog.object.extend(proto, udpa_annotations_status_pb);
var validate_validate_pb = require('../../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.config.trace.v2.LightstepConfig', null, global);
goog.exportSymbol('proto.envoy.config.trace.v2.LightstepConfig.PropagationMode', null, global);
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
proto.envoy.config.trace.v2.LightstepConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.trace.v2.LightstepConfig.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.trace.v2.LightstepConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.trace.v2.LightstepConfig.displayName = 'proto.envoy.config.trace.v2.LightstepConfig';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.trace.v2.LightstepConfig.repeatedFields_ = [3];



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
proto.envoy.config.trace.v2.LightstepConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.trace.v2.LightstepConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.trace.v2.LightstepConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.trace.v2.LightstepConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    collectorCluster: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accessTokenFile: jspb.Message.getFieldWithDefault(msg, 2, ""),
    propagationModesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.envoy.config.trace.v2.LightstepConfig}
 */
proto.envoy.config.trace.v2.LightstepConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.trace.v2.LightstepConfig;
  return proto.envoy.config.trace.v2.LightstepConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.trace.v2.LightstepConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.trace.v2.LightstepConfig}
 */
proto.envoy.config.trace.v2.LightstepConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectorCluster(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessTokenFile(value);
      break;
    case 3:
      var value = /** @type {!Array<!proto.envoy.config.trace.v2.LightstepConfig.PropagationMode>} */ (reader.readPackedEnum());
      msg.setPropagationModesList(value);
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
proto.envoy.config.trace.v2.LightstepConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.trace.v2.LightstepConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.trace.v2.LightstepConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.trace.v2.LightstepConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCollectorCluster();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccessTokenFile();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPropagationModesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.config.trace.v2.LightstepConfig.PropagationMode = {
  ENVOY: 0,
  LIGHTSTEP: 1,
  B3: 2,
  TRACE_CONTEXT: 3
};

/**
 * optional string collector_cluster = 1;
 * @return {string}
 */
proto.envoy.config.trace.v2.LightstepConfig.prototype.getCollectorCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.config.trace.v2.LightstepConfig} returns this
 */
proto.envoy.config.trace.v2.LightstepConfig.prototype.setCollectorCluster = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string access_token_file = 2;
 * @return {string}
 */
proto.envoy.config.trace.v2.LightstepConfig.prototype.getAccessTokenFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.config.trace.v2.LightstepConfig} returns this
 */
proto.envoy.config.trace.v2.LightstepConfig.prototype.setAccessTokenFile = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated PropagationMode propagation_modes = 3;
 * @return {!Array<!proto.envoy.config.trace.v2.LightstepConfig.PropagationMode>}
 */
proto.envoy.config.trace.v2.LightstepConfig.prototype.getPropagationModesList = function() {
  return /** @type {!Array<!proto.envoy.config.trace.v2.LightstepConfig.PropagationMode>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.envoy.config.trace.v2.LightstepConfig.PropagationMode>} value
 * @return {!proto.envoy.config.trace.v2.LightstepConfig} returns this
 */
proto.envoy.config.trace.v2.LightstepConfig.prototype.setPropagationModesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.envoy.config.trace.v2.LightstepConfig.PropagationMode} value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.trace.v2.LightstepConfig} returns this
 */
proto.envoy.config.trace.v2.LightstepConfig.prototype.addPropagationModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.config.trace.v2.LightstepConfig} returns this
 */
proto.envoy.config.trace.v2.LightstepConfig.prototype.clearPropagationModesList = function() {
  return this.setPropagationModesList([]);
};


goog.object.extend(exports, proto.envoy.config.trace.v2);
