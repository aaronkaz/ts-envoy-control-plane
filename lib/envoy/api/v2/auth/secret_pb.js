// source: envoy/api/v2/auth/secret.proto
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

var envoy_api_v2_auth_common_pb = require('../../../../envoy/api/v2/auth/common_pb.js');
goog.object.extend(proto, envoy_api_v2_auth_common_pb);
var envoy_api_v2_core_base_pb = require('../../../../envoy/api/v2/core/base_pb.js');
goog.object.extend(proto, envoy_api_v2_core_base_pb);
var envoy_api_v2_core_config_source_pb = require('../../../../envoy/api/v2/core/config_source_pb.js');
goog.object.extend(proto, envoy_api_v2_core_config_source_pb);
var udpa_annotations_migrate_pb = require('../../../../udpa/annotations/migrate_pb.js');
goog.object.extend(proto, udpa_annotations_migrate_pb);
var udpa_annotations_sensitive_pb = require('../../../../udpa/annotations/sensitive_pb.js');
goog.object.extend(proto, udpa_annotations_sensitive_pb);
var udpa_annotations_status_pb = require('../../../../udpa/annotations/status_pb.js');
goog.object.extend(proto, udpa_annotations_status_pb);
goog.exportSymbol('proto.envoy.api.v2.auth.GenericSecret', null, global);
goog.exportSymbol('proto.envoy.api.v2.auth.SdsSecretConfig', null, global);
goog.exportSymbol('proto.envoy.api.v2.auth.Secret', null, global);
goog.exportSymbol('proto.envoy.api.v2.auth.Secret.TypeCase', null, global);
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
proto.envoy.api.v2.auth.GenericSecret = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.auth.GenericSecret, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.auth.GenericSecret.displayName = 'proto.envoy.api.v2.auth.GenericSecret';
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
proto.envoy.api.v2.auth.SdsSecretConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.auth.SdsSecretConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.auth.SdsSecretConfig.displayName = 'proto.envoy.api.v2.auth.SdsSecretConfig';
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
proto.envoy.api.v2.auth.Secret = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.api.v2.auth.Secret.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.auth.Secret, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.auth.Secret.displayName = 'proto.envoy.api.v2.auth.Secret';
}



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
proto.envoy.api.v2.auth.GenericSecret.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.auth.GenericSecret.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.auth.GenericSecret} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.auth.GenericSecret.toObject = function(includeInstance, msg) {
  var f, obj = {
    secret: (f = msg.getSecret()) && envoy_api_v2_core_base_pb.DataSource.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.auth.GenericSecret}
 */
proto.envoy.api.v2.auth.GenericSecret.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.auth.GenericSecret;
  return proto.envoy.api.v2.auth.GenericSecret.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.auth.GenericSecret} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.auth.GenericSecret}
 */
proto.envoy.api.v2.auth.GenericSecret.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_api_v2_core_base_pb.DataSource;
      reader.readMessage(value,envoy_api_v2_core_base_pb.DataSource.deserializeBinaryFromReader);
      msg.setSecret(value);
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
proto.envoy.api.v2.auth.GenericSecret.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.auth.GenericSecret.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.auth.GenericSecret} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.auth.GenericSecret.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      envoy_api_v2_core_base_pb.DataSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional envoy.api.v2.core.DataSource secret = 1;
 * @return {?proto.envoy.api.v2.core.DataSource}
 */
proto.envoy.api.v2.auth.GenericSecret.prototype.getSecret = function() {
  return /** @type{?proto.envoy.api.v2.core.DataSource} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.DataSource, 1));
};


/**
 * @param {?proto.envoy.api.v2.core.DataSource|undefined} value
 * @return {!proto.envoy.api.v2.auth.GenericSecret} returns this
*/
proto.envoy.api.v2.auth.GenericSecret.prototype.setSecret = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.auth.GenericSecret} returns this
 */
proto.envoy.api.v2.auth.GenericSecret.prototype.clearSecret = function() {
  return this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.auth.GenericSecret.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.envoy.api.v2.auth.SdsSecretConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.auth.SdsSecretConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.auth.SdsSecretConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.auth.SdsSecretConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sdsConfig: (f = msg.getSdsConfig()) && envoy_api_v2_core_config_source_pb.ConfigSource.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.auth.SdsSecretConfig}
 */
proto.envoy.api.v2.auth.SdsSecretConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.auth.SdsSecretConfig;
  return proto.envoy.api.v2.auth.SdsSecretConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.auth.SdsSecretConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.auth.SdsSecretConfig}
 */
proto.envoy.api.v2.auth.SdsSecretConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new envoy_api_v2_core_config_source_pb.ConfigSource;
      reader.readMessage(value,envoy_api_v2_core_config_source_pb.ConfigSource.deserializeBinaryFromReader);
      msg.setSdsConfig(value);
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
proto.envoy.api.v2.auth.SdsSecretConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.auth.SdsSecretConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.auth.SdsSecretConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.auth.SdsSecretConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSdsConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      envoy_api_v2_core_config_source_pb.ConfigSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.api.v2.auth.SdsSecretConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.auth.SdsSecretConfig} returns this
 */
proto.envoy.api.v2.auth.SdsSecretConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional envoy.api.v2.core.ConfigSource sds_config = 2;
 * @return {?proto.envoy.api.v2.core.ConfigSource}
 */
proto.envoy.api.v2.auth.SdsSecretConfig.prototype.getSdsConfig = function() {
  return /** @type{?proto.envoy.api.v2.core.ConfigSource} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_config_source_pb.ConfigSource, 2));
};


/**
 * @param {?proto.envoy.api.v2.core.ConfigSource|undefined} value
 * @return {!proto.envoy.api.v2.auth.SdsSecretConfig} returns this
*/
proto.envoy.api.v2.auth.SdsSecretConfig.prototype.setSdsConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.auth.SdsSecretConfig} returns this
 */
proto.envoy.api.v2.auth.SdsSecretConfig.prototype.clearSdsConfig = function() {
  return this.setSdsConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.auth.SdsSecretConfig.prototype.hasSdsConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.api.v2.auth.Secret.oneofGroups_ = [[2,3,4,5]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.auth.Secret.TypeCase = {
  TYPE_NOT_SET: 0,
  TLS_CERTIFICATE: 2,
  SESSION_TICKET_KEYS: 3,
  VALIDATION_CONTEXT: 4,
  GENERIC_SECRET: 5
};

/**
 * @return {proto.envoy.api.v2.auth.Secret.TypeCase}
 */
proto.envoy.api.v2.auth.Secret.prototype.getTypeCase = function() {
  return /** @type {proto.envoy.api.v2.auth.Secret.TypeCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.auth.Secret.oneofGroups_[0]));
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
proto.envoy.api.v2.auth.Secret.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.auth.Secret.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.auth.Secret} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.auth.Secret.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tlsCertificate: (f = msg.getTlsCertificate()) && envoy_api_v2_auth_common_pb.TlsCertificate.toObject(includeInstance, f),
    sessionTicketKeys: (f = msg.getSessionTicketKeys()) && envoy_api_v2_auth_common_pb.TlsSessionTicketKeys.toObject(includeInstance, f),
    validationContext: (f = msg.getValidationContext()) && envoy_api_v2_auth_common_pb.CertificateValidationContext.toObject(includeInstance, f),
    genericSecret: (f = msg.getGenericSecret()) && proto.envoy.api.v2.auth.GenericSecret.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.auth.Secret}
 */
proto.envoy.api.v2.auth.Secret.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.auth.Secret;
  return proto.envoy.api.v2.auth.Secret.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.auth.Secret} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.auth.Secret}
 */
proto.envoy.api.v2.auth.Secret.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new envoy_api_v2_auth_common_pb.TlsCertificate;
      reader.readMessage(value,envoy_api_v2_auth_common_pb.TlsCertificate.deserializeBinaryFromReader);
      msg.setTlsCertificate(value);
      break;
    case 3:
      var value = new envoy_api_v2_auth_common_pb.TlsSessionTicketKeys;
      reader.readMessage(value,envoy_api_v2_auth_common_pb.TlsSessionTicketKeys.deserializeBinaryFromReader);
      msg.setSessionTicketKeys(value);
      break;
    case 4:
      var value = new envoy_api_v2_auth_common_pb.CertificateValidationContext;
      reader.readMessage(value,envoy_api_v2_auth_common_pb.CertificateValidationContext.deserializeBinaryFromReader);
      msg.setValidationContext(value);
      break;
    case 5:
      var value = new proto.envoy.api.v2.auth.GenericSecret;
      reader.readMessage(value,proto.envoy.api.v2.auth.GenericSecret.deserializeBinaryFromReader);
      msg.setGenericSecret(value);
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
proto.envoy.api.v2.auth.Secret.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.auth.Secret.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.auth.Secret} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.auth.Secret.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTlsCertificate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      envoy_api_v2_auth_common_pb.TlsCertificate.serializeBinaryToWriter
    );
  }
  f = message.getSessionTicketKeys();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      envoy_api_v2_auth_common_pb.TlsSessionTicketKeys.serializeBinaryToWriter
    );
  }
  f = message.getValidationContext();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      envoy_api_v2_auth_common_pb.CertificateValidationContext.serializeBinaryToWriter
    );
  }
  f = message.getGenericSecret();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.envoy.api.v2.auth.GenericSecret.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.api.v2.auth.Secret.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.auth.Secret} returns this
 */
proto.envoy.api.v2.auth.Secret.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TlsCertificate tls_certificate = 2;
 * @return {?proto.envoy.api.v2.auth.TlsCertificate}
 */
proto.envoy.api.v2.auth.Secret.prototype.getTlsCertificate = function() {
  return /** @type{?proto.envoy.api.v2.auth.TlsCertificate} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_auth_common_pb.TlsCertificate, 2));
};


/**
 * @param {?proto.envoy.api.v2.auth.TlsCertificate|undefined} value
 * @return {!proto.envoy.api.v2.auth.Secret} returns this
*/
proto.envoy.api.v2.auth.Secret.prototype.setTlsCertificate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.envoy.api.v2.auth.Secret.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.auth.Secret} returns this
 */
proto.envoy.api.v2.auth.Secret.prototype.clearTlsCertificate = function() {
  return this.setTlsCertificate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.auth.Secret.prototype.hasTlsCertificate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TlsSessionTicketKeys session_ticket_keys = 3;
 * @return {?proto.envoy.api.v2.auth.TlsSessionTicketKeys}
 */
proto.envoy.api.v2.auth.Secret.prototype.getSessionTicketKeys = function() {
  return /** @type{?proto.envoy.api.v2.auth.TlsSessionTicketKeys} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_auth_common_pb.TlsSessionTicketKeys, 3));
};


/**
 * @param {?proto.envoy.api.v2.auth.TlsSessionTicketKeys|undefined} value
 * @return {!proto.envoy.api.v2.auth.Secret} returns this
*/
proto.envoy.api.v2.auth.Secret.prototype.setSessionTicketKeys = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.envoy.api.v2.auth.Secret.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.auth.Secret} returns this
 */
proto.envoy.api.v2.auth.Secret.prototype.clearSessionTicketKeys = function() {
  return this.setSessionTicketKeys(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.auth.Secret.prototype.hasSessionTicketKeys = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CertificateValidationContext validation_context = 4;
 * @return {?proto.envoy.api.v2.auth.CertificateValidationContext}
 */
proto.envoy.api.v2.auth.Secret.prototype.getValidationContext = function() {
  return /** @type{?proto.envoy.api.v2.auth.CertificateValidationContext} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_auth_common_pb.CertificateValidationContext, 4));
};


/**
 * @param {?proto.envoy.api.v2.auth.CertificateValidationContext|undefined} value
 * @return {!proto.envoy.api.v2.auth.Secret} returns this
*/
proto.envoy.api.v2.auth.Secret.prototype.setValidationContext = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.envoy.api.v2.auth.Secret.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.auth.Secret} returns this
 */
proto.envoy.api.v2.auth.Secret.prototype.clearValidationContext = function() {
  return this.setValidationContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.auth.Secret.prototype.hasValidationContext = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional GenericSecret generic_secret = 5;
 * @return {?proto.envoy.api.v2.auth.GenericSecret}
 */
proto.envoy.api.v2.auth.Secret.prototype.getGenericSecret = function() {
  return /** @type{?proto.envoy.api.v2.auth.GenericSecret} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.auth.GenericSecret, 5));
};


/**
 * @param {?proto.envoy.api.v2.auth.GenericSecret|undefined} value
 * @return {!proto.envoy.api.v2.auth.Secret} returns this
*/
proto.envoy.api.v2.auth.Secret.prototype.setGenericSecret = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.envoy.api.v2.auth.Secret.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.auth.Secret} returns this
 */
proto.envoy.api.v2.auth.Secret.prototype.clearGenericSecret = function() {
  return this.setGenericSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.auth.Secret.prototype.hasGenericSecret = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.envoy.api.v2.auth);
