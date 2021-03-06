// source: envoy/type/matcher/v4alpha/node.proto
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

var envoy_type_matcher_v4alpha_string_pb = require('../../../../envoy/type/matcher/v4alpha/string_pb.js');
goog.object.extend(proto, envoy_type_matcher_v4alpha_string_pb);
var envoy_type_matcher_v4alpha_struct_pb = require('../../../../envoy/type/matcher/v4alpha/struct_pb.js');
goog.object.extend(proto, envoy_type_matcher_v4alpha_struct_pb);
var udpa_annotations_status_pb = require('../../../../udpa/annotations/status_pb.js');
goog.object.extend(proto, udpa_annotations_status_pb);
var udpa_annotations_versioning_pb = require('../../../../udpa/annotations/versioning_pb.js');
goog.object.extend(proto, udpa_annotations_versioning_pb);
goog.exportSymbol('proto.envoy.type.matcher.v4alpha.NodeMatcher', null, global);
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
proto.envoy.type.matcher.v4alpha.NodeMatcher = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.type.matcher.v4alpha.NodeMatcher.repeatedFields_, null);
};
goog.inherits(proto.envoy.type.matcher.v4alpha.NodeMatcher, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.type.matcher.v4alpha.NodeMatcher.displayName = 'proto.envoy.type.matcher.v4alpha.NodeMatcher';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.type.matcher.v4alpha.NodeMatcher.repeatedFields_ = [2];



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
proto.envoy.type.matcher.v4alpha.NodeMatcher.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.type.matcher.v4alpha.NodeMatcher.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.type.matcher.v4alpha.NodeMatcher} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.type.matcher.v4alpha.NodeMatcher.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeId: (f = msg.getNodeId()) && envoy_type_matcher_v4alpha_string_pb.StringMatcher.toObject(includeInstance, f),
    nodeMetadatasList: jspb.Message.toObjectList(msg.getNodeMetadatasList(),
    envoy_type_matcher_v4alpha_struct_pb.StructMatcher.toObject, includeInstance)
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
 * @return {!proto.envoy.type.matcher.v4alpha.NodeMatcher}
 */
proto.envoy.type.matcher.v4alpha.NodeMatcher.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.type.matcher.v4alpha.NodeMatcher;
  return proto.envoy.type.matcher.v4alpha.NodeMatcher.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.type.matcher.v4alpha.NodeMatcher} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.type.matcher.v4alpha.NodeMatcher}
 */
proto.envoy.type.matcher.v4alpha.NodeMatcher.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_type_matcher_v4alpha_string_pb.StringMatcher;
      reader.readMessage(value,envoy_type_matcher_v4alpha_string_pb.StringMatcher.deserializeBinaryFromReader);
      msg.setNodeId(value);
      break;
    case 2:
      var value = new envoy_type_matcher_v4alpha_struct_pb.StructMatcher;
      reader.readMessage(value,envoy_type_matcher_v4alpha_struct_pb.StructMatcher.deserializeBinaryFromReader);
      msg.addNodeMetadatas(value);
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
proto.envoy.type.matcher.v4alpha.NodeMatcher.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.type.matcher.v4alpha.NodeMatcher.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.type.matcher.v4alpha.NodeMatcher} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.type.matcher.v4alpha.NodeMatcher.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      envoy_type_matcher_v4alpha_string_pb.StringMatcher.serializeBinaryToWriter
    );
  }
  f = message.getNodeMetadatasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      envoy_type_matcher_v4alpha_struct_pb.StructMatcher.serializeBinaryToWriter
    );
  }
};


/**
 * optional StringMatcher node_id = 1;
 * @return {?proto.envoy.type.matcher.v4alpha.StringMatcher}
 */
proto.envoy.type.matcher.v4alpha.NodeMatcher.prototype.getNodeId = function() {
  return /** @type{?proto.envoy.type.matcher.v4alpha.StringMatcher} */ (
    jspb.Message.getWrapperField(this, envoy_type_matcher_v4alpha_string_pb.StringMatcher, 1));
};


/**
 * @param {?proto.envoy.type.matcher.v4alpha.StringMatcher|undefined} value
 * @return {!proto.envoy.type.matcher.v4alpha.NodeMatcher} returns this
*/
proto.envoy.type.matcher.v4alpha.NodeMatcher.prototype.setNodeId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.type.matcher.v4alpha.NodeMatcher} returns this
 */
proto.envoy.type.matcher.v4alpha.NodeMatcher.prototype.clearNodeId = function() {
  return this.setNodeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.type.matcher.v4alpha.NodeMatcher.prototype.hasNodeId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated StructMatcher node_metadatas = 2;
 * @return {!Array<!proto.envoy.type.matcher.v4alpha.StructMatcher>}
 */
proto.envoy.type.matcher.v4alpha.NodeMatcher.prototype.getNodeMetadatasList = function() {
  return /** @type{!Array<!proto.envoy.type.matcher.v4alpha.StructMatcher>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_type_matcher_v4alpha_struct_pb.StructMatcher, 2));
};


/**
 * @param {!Array<!proto.envoy.type.matcher.v4alpha.StructMatcher>} value
 * @return {!proto.envoy.type.matcher.v4alpha.NodeMatcher} returns this
*/
proto.envoy.type.matcher.v4alpha.NodeMatcher.prototype.setNodeMetadatasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.envoy.type.matcher.v4alpha.StructMatcher=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.type.matcher.v4alpha.StructMatcher}
 */
proto.envoy.type.matcher.v4alpha.NodeMatcher.prototype.addNodeMetadatas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.envoy.type.matcher.v4alpha.StructMatcher, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.type.matcher.v4alpha.NodeMatcher} returns this
 */
proto.envoy.type.matcher.v4alpha.NodeMatcher.prototype.clearNodeMetadatasList = function() {
  return this.setNodeMetadatasList([]);
};


goog.object.extend(exports, proto.envoy.type.matcher.v4alpha);
