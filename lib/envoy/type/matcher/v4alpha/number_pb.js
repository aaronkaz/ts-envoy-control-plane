// source: envoy/type/matcher/v4alpha/number.proto
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

var envoy_type_v3_range_pb = require('../../../../envoy/type/v3/range_pb.js');
goog.object.extend(proto, envoy_type_v3_range_pb);
var udpa_annotations_status_pb = require('../../../../udpa/annotations/status_pb.js');
goog.object.extend(proto, udpa_annotations_status_pb);
var udpa_annotations_versioning_pb = require('../../../../udpa/annotations/versioning_pb.js');
goog.object.extend(proto, udpa_annotations_versioning_pb);
var validate_validate_pb = require('../../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.type.matcher.v4alpha.DoubleMatcher', null, global);
goog.exportSymbol('proto.envoy.type.matcher.v4alpha.DoubleMatcher.MatchPatternCase', null, global);
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
proto.envoy.type.matcher.v4alpha.DoubleMatcher = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.type.matcher.v4alpha.DoubleMatcher.oneofGroups_);
};
goog.inherits(proto.envoy.type.matcher.v4alpha.DoubleMatcher, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.type.matcher.v4alpha.DoubleMatcher.displayName = 'proto.envoy.type.matcher.v4alpha.DoubleMatcher';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.type.matcher.v4alpha.DoubleMatcher.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.envoy.type.matcher.v4alpha.DoubleMatcher.MatchPatternCase = {
  MATCH_PATTERN_NOT_SET: 0,
  RANGE: 1,
  EXACT: 2
};

/**
 * @return {proto.envoy.type.matcher.v4alpha.DoubleMatcher.MatchPatternCase}
 */
proto.envoy.type.matcher.v4alpha.DoubleMatcher.prototype.getMatchPatternCase = function() {
  return /** @type {proto.envoy.type.matcher.v4alpha.DoubleMatcher.MatchPatternCase} */(jspb.Message.computeOneofCase(this, proto.envoy.type.matcher.v4alpha.DoubleMatcher.oneofGroups_[0]));
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
proto.envoy.type.matcher.v4alpha.DoubleMatcher.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.type.matcher.v4alpha.DoubleMatcher.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.type.matcher.v4alpha.DoubleMatcher} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.type.matcher.v4alpha.DoubleMatcher.toObject = function(includeInstance, msg) {
  var f, obj = {
    range: (f = msg.getRange()) && envoy_type_v3_range_pb.DoubleRange.toObject(includeInstance, f),
    exact: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.envoy.type.matcher.v4alpha.DoubleMatcher}
 */
proto.envoy.type.matcher.v4alpha.DoubleMatcher.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.type.matcher.v4alpha.DoubleMatcher;
  return proto.envoy.type.matcher.v4alpha.DoubleMatcher.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.type.matcher.v4alpha.DoubleMatcher} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.type.matcher.v4alpha.DoubleMatcher}
 */
proto.envoy.type.matcher.v4alpha.DoubleMatcher.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_type_v3_range_pb.DoubleRange;
      reader.readMessage(value,envoy_type_v3_range_pb.DoubleRange.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setExact(value);
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
proto.envoy.type.matcher.v4alpha.DoubleMatcher.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.type.matcher.v4alpha.DoubleMatcher.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.type.matcher.v4alpha.DoubleMatcher} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.type.matcher.v4alpha.DoubleMatcher.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      envoy_type_v3_range_pb.DoubleRange.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional envoy.type.v3.DoubleRange range = 1;
 * @return {?proto.envoy.type.v3.DoubleRange}
 */
proto.envoy.type.matcher.v4alpha.DoubleMatcher.prototype.getRange = function() {
  return /** @type{?proto.envoy.type.v3.DoubleRange} */ (
    jspb.Message.getWrapperField(this, envoy_type_v3_range_pb.DoubleRange, 1));
};


/**
 * @param {?proto.envoy.type.v3.DoubleRange|undefined} value
 * @return {!proto.envoy.type.matcher.v4alpha.DoubleMatcher} returns this
*/
proto.envoy.type.matcher.v4alpha.DoubleMatcher.prototype.setRange = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.envoy.type.matcher.v4alpha.DoubleMatcher.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.type.matcher.v4alpha.DoubleMatcher} returns this
 */
proto.envoy.type.matcher.v4alpha.DoubleMatcher.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.type.matcher.v4alpha.DoubleMatcher.prototype.hasRange = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double exact = 2;
 * @return {number}
 */
proto.envoy.type.matcher.v4alpha.DoubleMatcher.prototype.getExact = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.envoy.type.matcher.v4alpha.DoubleMatcher} returns this
 */
proto.envoy.type.matcher.v4alpha.DoubleMatcher.prototype.setExact = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.envoy.type.matcher.v4alpha.DoubleMatcher.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.type.matcher.v4alpha.DoubleMatcher} returns this
 */
proto.envoy.type.matcher.v4alpha.DoubleMatcher.prototype.clearExact = function() {
  return jspb.Message.setOneofField(this, 2, proto.envoy.type.matcher.v4alpha.DoubleMatcher.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.type.matcher.v4alpha.DoubleMatcher.prototype.hasExact = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.envoy.type.matcher.v4alpha);
