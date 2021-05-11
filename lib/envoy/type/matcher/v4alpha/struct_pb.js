// source: envoy/type/matcher/v4alpha/struct.proto
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

var envoy_type_matcher_v4alpha_value_pb = require('../../../../envoy/type/matcher/v4alpha/value_pb.js');
goog.object.extend(proto, envoy_type_matcher_v4alpha_value_pb);
var udpa_annotations_status_pb = require('../../../../udpa/annotations/status_pb.js');
goog.object.extend(proto, udpa_annotations_status_pb);
var udpa_annotations_versioning_pb = require('../../../../udpa/annotations/versioning_pb.js');
goog.object.extend(proto, udpa_annotations_versioning_pb);
var validate_validate_pb = require('../../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.type.matcher.v4alpha.StructMatcher', null, global);
goog.exportSymbol('proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment', null, global);
goog.exportSymbol('proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.SegmentCase', null, global);
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
proto.envoy.type.matcher.v4alpha.StructMatcher = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.type.matcher.v4alpha.StructMatcher.repeatedFields_, null);
};
goog.inherits(proto.envoy.type.matcher.v4alpha.StructMatcher, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.type.matcher.v4alpha.StructMatcher.displayName = 'proto.envoy.type.matcher.v4alpha.StructMatcher';
}
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
proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.oneofGroups_);
};
goog.inherits(proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.displayName = 'proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.repeatedFields_ = [2];



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
proto.envoy.type.matcher.v4alpha.StructMatcher.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.type.matcher.v4alpha.StructMatcher.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.type.matcher.v4alpha.StructMatcher} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.toObject = function(includeInstance, msg) {
  var f, obj = {
    pathList: jspb.Message.toObjectList(msg.getPathList(),
    proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.toObject, includeInstance),
    value: (f = msg.getValue()) && envoy_type_matcher_v4alpha_value_pb.ValueMatcher.toObject(includeInstance, f)
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
 * @return {!proto.envoy.type.matcher.v4alpha.StructMatcher}
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.type.matcher.v4alpha.StructMatcher;
  return proto.envoy.type.matcher.v4alpha.StructMatcher.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.type.matcher.v4alpha.StructMatcher} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.type.matcher.v4alpha.StructMatcher}
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment;
      reader.readMessage(value,proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.deserializeBinaryFromReader);
      msg.addPath(value);
      break;
    case 3:
      var value = new envoy_type_matcher_v4alpha_value_pb.ValueMatcher;
      reader.readMessage(value,envoy_type_matcher_v4alpha_value_pb.ValueMatcher.deserializeBinaryFromReader);
      msg.setValue(value);
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
proto.envoy.type.matcher.v4alpha.StructMatcher.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.type.matcher.v4alpha.StructMatcher.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.type.matcher.v4alpha.StructMatcher} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPathList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      envoy_type_matcher_v4alpha_value_pb.ValueMatcher.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.SegmentCase = {
  SEGMENT_NOT_SET: 0,
  KEY: 1
};

/**
 * @return {proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.SegmentCase}
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.prototype.getSegmentCase = function() {
  return /** @type {proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.SegmentCase} */(jspb.Message.computeOneofCase(this, proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.oneofGroups_[0]));
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
proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment}
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment;
  return proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment}
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
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
proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment} returns this
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.prototype.setKey = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment} returns this
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.prototype.clearKey = function() {
  return jspb.Message.setOneofField(this, 1, proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PathSegment path = 2;
 * @return {!Array<!proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment>}
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.prototype.getPathList = function() {
  return /** @type{!Array<!proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment, 2));
};


/**
 * @param {!Array<!proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment>} value
 * @return {!proto.envoy.type.matcher.v4alpha.StructMatcher} returns this
*/
proto.envoy.type.matcher.v4alpha.StructMatcher.prototype.setPathList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment}
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.prototype.addPath = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.envoy.type.matcher.v4alpha.StructMatcher.PathSegment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.type.matcher.v4alpha.StructMatcher} returns this
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.prototype.clearPathList = function() {
  return this.setPathList([]);
};


/**
 * optional ValueMatcher value = 3;
 * @return {?proto.envoy.type.matcher.v4alpha.ValueMatcher}
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.prototype.getValue = function() {
  return /** @type{?proto.envoy.type.matcher.v4alpha.ValueMatcher} */ (
    jspb.Message.getWrapperField(this, envoy_type_matcher_v4alpha_value_pb.ValueMatcher, 3));
};


/**
 * @param {?proto.envoy.type.matcher.v4alpha.ValueMatcher|undefined} value
 * @return {!proto.envoy.type.matcher.v4alpha.StructMatcher} returns this
*/
proto.envoy.type.matcher.v4alpha.StructMatcher.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.type.matcher.v4alpha.StructMatcher} returns this
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.type.matcher.v4alpha.StructMatcher.prototype.hasValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.envoy.type.matcher.v4alpha);