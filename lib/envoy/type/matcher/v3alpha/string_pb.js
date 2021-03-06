// source: envoy/type/matcher/v3alpha/string.proto
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

var envoy_type_matcher_v3alpha_regex_pb = require('../../../../envoy/type/matcher/v3alpha/regex_pb.js');
goog.object.extend(proto, envoy_type_matcher_v3alpha_regex_pb);
var udpa_annotations_versioning_pb = require('../../../../udpa/annotations/versioning_pb.js');
goog.object.extend(proto, udpa_annotations_versioning_pb);
var validate_validate_pb = require('../../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.type.matcher.v3alpha.ListStringMatcher', null, global);
goog.exportSymbol('proto.envoy.type.matcher.v3alpha.StringMatcher', null, global);
goog.exportSymbol('proto.envoy.type.matcher.v3alpha.StringMatcher.MatchPatternCase', null, global);
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
proto.envoy.type.matcher.v3alpha.StringMatcher = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.type.matcher.v3alpha.StringMatcher.oneofGroups_);
};
goog.inherits(proto.envoy.type.matcher.v3alpha.StringMatcher, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.type.matcher.v3alpha.StringMatcher.displayName = 'proto.envoy.type.matcher.v3alpha.StringMatcher';
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
proto.envoy.type.matcher.v3alpha.ListStringMatcher = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.type.matcher.v3alpha.ListStringMatcher.repeatedFields_, null);
};
goog.inherits(proto.envoy.type.matcher.v3alpha.ListStringMatcher, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.type.matcher.v3alpha.ListStringMatcher.displayName = 'proto.envoy.type.matcher.v3alpha.ListStringMatcher';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.oneofGroups_ = [[1,2,3,5]];

/**
 * @enum {number}
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.MatchPatternCase = {
  MATCH_PATTERN_NOT_SET: 0,
  EXACT: 1,
  PREFIX: 2,
  SUFFIX: 3,
  SAFE_REGEX: 5
};

/**
 * @return {proto.envoy.type.matcher.v3alpha.StringMatcher.MatchPatternCase}
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.getMatchPatternCase = function() {
  return /** @type {proto.envoy.type.matcher.v3alpha.StringMatcher.MatchPatternCase} */(jspb.Message.computeOneofCase(this, proto.envoy.type.matcher.v3alpha.StringMatcher.oneofGroups_[0]));
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
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.type.matcher.v3alpha.StringMatcher.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.type.matcher.v3alpha.StringMatcher} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.toObject = function(includeInstance, msg) {
  var f, obj = {
    exact: jspb.Message.getFieldWithDefault(msg, 1, ""),
    prefix: jspb.Message.getFieldWithDefault(msg, 2, ""),
    suffix: jspb.Message.getFieldWithDefault(msg, 3, ""),
    safeRegex: (f = msg.getSafeRegex()) && envoy_type_matcher_v3alpha_regex_pb.RegexMatcher.toObject(includeInstance, f)
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
 * @return {!proto.envoy.type.matcher.v3alpha.StringMatcher}
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.type.matcher.v3alpha.StringMatcher;
  return proto.envoy.type.matcher.v3alpha.StringMatcher.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.type.matcher.v3alpha.StringMatcher} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.type.matcher.v3alpha.StringMatcher}
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExact(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuffix(value);
      break;
    case 5:
      var value = new envoy_type_matcher_v3alpha_regex_pb.RegexMatcher;
      reader.readMessage(value,envoy_type_matcher_v3alpha_regex_pb.RegexMatcher.deserializeBinaryFromReader);
      msg.setSafeRegex(value);
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
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.type.matcher.v3alpha.StringMatcher.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.type.matcher.v3alpha.StringMatcher} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSafeRegex();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      envoy_type_matcher_v3alpha_regex_pb.RegexMatcher.serializeBinaryToWriter
    );
  }
};


/**
 * optional string exact = 1;
 * @return {string}
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.getExact = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.type.matcher.v3alpha.StringMatcher} returns this
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.setExact = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.envoy.type.matcher.v3alpha.StringMatcher.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.type.matcher.v3alpha.StringMatcher} returns this
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.clearExact = function() {
  return jspb.Message.setOneofField(this, 1, proto.envoy.type.matcher.v3alpha.StringMatcher.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.hasExact = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string prefix = 2;
 * @return {string}
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.type.matcher.v3alpha.StringMatcher} returns this
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.setPrefix = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.envoy.type.matcher.v3alpha.StringMatcher.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.type.matcher.v3alpha.StringMatcher} returns this
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.clearPrefix = function() {
  return jspb.Message.setOneofField(this, 2, proto.envoy.type.matcher.v3alpha.StringMatcher.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.hasPrefix = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string suffix = 3;
 * @return {string}
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.getSuffix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.type.matcher.v3alpha.StringMatcher} returns this
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.setSuffix = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.envoy.type.matcher.v3alpha.StringMatcher.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.type.matcher.v3alpha.StringMatcher} returns this
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.clearSuffix = function() {
  return jspb.Message.setOneofField(this, 3, proto.envoy.type.matcher.v3alpha.StringMatcher.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.hasSuffix = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RegexMatcher safe_regex = 5;
 * @return {?proto.envoy.type.matcher.v3alpha.RegexMatcher}
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.getSafeRegex = function() {
  return /** @type{?proto.envoy.type.matcher.v3alpha.RegexMatcher} */ (
    jspb.Message.getWrapperField(this, envoy_type_matcher_v3alpha_regex_pb.RegexMatcher, 5));
};


/**
 * @param {?proto.envoy.type.matcher.v3alpha.RegexMatcher|undefined} value
 * @return {!proto.envoy.type.matcher.v3alpha.StringMatcher} returns this
*/
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.setSafeRegex = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.envoy.type.matcher.v3alpha.StringMatcher.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.type.matcher.v3alpha.StringMatcher} returns this
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.clearSafeRegex = function() {
  return this.setSafeRegex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.type.matcher.v3alpha.StringMatcher.prototype.hasSafeRegex = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.type.matcher.v3alpha.ListStringMatcher.repeatedFields_ = [1];



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
proto.envoy.type.matcher.v3alpha.ListStringMatcher.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.type.matcher.v3alpha.ListStringMatcher.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.type.matcher.v3alpha.ListStringMatcher} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.type.matcher.v3alpha.ListStringMatcher.toObject = function(includeInstance, msg) {
  var f, obj = {
    patternsList: jspb.Message.toObjectList(msg.getPatternsList(),
    proto.envoy.type.matcher.v3alpha.StringMatcher.toObject, includeInstance)
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
 * @return {!proto.envoy.type.matcher.v3alpha.ListStringMatcher}
 */
proto.envoy.type.matcher.v3alpha.ListStringMatcher.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.type.matcher.v3alpha.ListStringMatcher;
  return proto.envoy.type.matcher.v3alpha.ListStringMatcher.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.type.matcher.v3alpha.ListStringMatcher} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.type.matcher.v3alpha.ListStringMatcher}
 */
proto.envoy.type.matcher.v3alpha.ListStringMatcher.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.type.matcher.v3alpha.StringMatcher;
      reader.readMessage(value,proto.envoy.type.matcher.v3alpha.StringMatcher.deserializeBinaryFromReader);
      msg.addPatterns(value);
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
proto.envoy.type.matcher.v3alpha.ListStringMatcher.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.type.matcher.v3alpha.ListStringMatcher.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.type.matcher.v3alpha.ListStringMatcher} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.type.matcher.v3alpha.ListStringMatcher.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPatternsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.envoy.type.matcher.v3alpha.StringMatcher.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StringMatcher patterns = 1;
 * @return {!Array<!proto.envoy.type.matcher.v3alpha.StringMatcher>}
 */
proto.envoy.type.matcher.v3alpha.ListStringMatcher.prototype.getPatternsList = function() {
  return /** @type{!Array<!proto.envoy.type.matcher.v3alpha.StringMatcher>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.type.matcher.v3alpha.StringMatcher, 1));
};


/**
 * @param {!Array<!proto.envoy.type.matcher.v3alpha.StringMatcher>} value
 * @return {!proto.envoy.type.matcher.v3alpha.ListStringMatcher} returns this
*/
proto.envoy.type.matcher.v3alpha.ListStringMatcher.prototype.setPatternsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.envoy.type.matcher.v3alpha.StringMatcher=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.type.matcher.v3alpha.StringMatcher}
 */
proto.envoy.type.matcher.v3alpha.ListStringMatcher.prototype.addPatterns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.envoy.type.matcher.v3alpha.StringMatcher, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.type.matcher.v3alpha.ListStringMatcher} returns this
 */
proto.envoy.type.matcher.v3alpha.ListStringMatcher.prototype.clearPatternsList = function() {
  return this.setPatternsList([]);
};


goog.object.extend(exports, proto.envoy.type.matcher.v3alpha);
