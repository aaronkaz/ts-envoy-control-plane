// source: envoy/config/filter/network/http_connection_manager/v2/http_connection_manager.proto
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

var envoy_api_v2_core_config_source_pb = require('../../../../../../envoy/api/v2/core/config_source_pb.js');
goog.object.extend(proto, envoy_api_v2_core_config_source_pb);
var envoy_api_v2_core_protocol_pb = require('../../../../../../envoy/api/v2/core/protocol_pb.js');
goog.object.extend(proto, envoy_api_v2_core_protocol_pb);
var envoy_api_v2_route_pb = require('../../../../../../envoy/api/v2/route_pb.js');
goog.object.extend(proto, envoy_api_v2_route_pb);
var envoy_api_v2_scoped_route_pb = require('../../../../../../envoy/api/v2/scoped_route_pb.js');
goog.object.extend(proto, envoy_api_v2_scoped_route_pb);
var envoy_config_filter_accesslog_v2_accesslog_pb = require('../../../../../../envoy/config/filter/accesslog/v2/accesslog_pb.js');
goog.object.extend(proto, envoy_config_filter_accesslog_v2_accesslog_pb);
var envoy_config_trace_v2_http_tracer_pb = require('../../../../../../envoy/config/trace/v2/http_tracer_pb.js');
goog.object.extend(proto, envoy_config_trace_v2_http_tracer_pb);
var envoy_type_percent_pb = require('../../../../../../envoy/type/percent_pb.js');
goog.object.extend(proto, envoy_type_percent_pb);
var envoy_type_tracing_v2_custom_tag_pb = require('../../../../../../envoy/type/tracing/v2/custom_tag_pb.js');
goog.object.extend(proto, envoy_type_tracing_v2_custom_tag_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var envoy_annotations_deprecation_pb = require('../../../../../../envoy/annotations/deprecation_pb.js');
goog.object.extend(proto, envoy_annotations_deprecation_pb);
var udpa_annotations_migrate_pb = require('../../../../../../udpa/annotations/migrate_pb.js');
goog.object.extend(proto, udpa_annotations_migrate_pb);
var udpa_annotations_status_pb = require('../../../../../../udpa/annotations/status_pb.js');
goog.object.extend(proto, udpa_annotations_status_pb);
var validate_validate_pb = require('../../../../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.CodecType', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.ForwardClientCertDetails', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.RouteSpecifierCase', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.ServerHeaderTransformation', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.OperationName', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.ConfigTypeCase', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.Rds', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ConfigSpecifierCase', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.ExtractTypeCase', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.TypeCase', null, global);
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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.repeatedFields_, proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.oneofGroups_);
};
goog.inherits(proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.displayName = 'proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager';
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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.displayName = 'proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing';
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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig.displayName = 'proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig';
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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.displayName = 'proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails';
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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.displayName = 'proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig';
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
proto.envoy.config.filter.network.http_connection_manager.v2.Rds = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.network.http_connection_manager.v2.Rds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.http_connection_manager.v2.Rds.displayName = 'proto.envoy.config.filter.network.http_connection_manager.v2.Rds';
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.displayName = 'proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList';
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.oneofGroups_);
};
goog.inherits(proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.displayName = 'proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes';
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.displayName = 'proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder';
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.oneofGroups_);
};
goog.inherits(proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.displayName = 'proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder';
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.oneofGroups_);
};
goog.inherits(proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.displayName = 'proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor';
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.displayName = 'proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement';
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.displayName = 'proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds';
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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.oneofGroups_);
};
goog.inherits(proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.displayName = 'proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter';
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
proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.displayName = 'proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.repeatedFields_ = [5,13,23];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.oneofGroups_ = [[3,4,31]];

/**
 * @enum {number}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.RouteSpecifierCase = {
  ROUTE_SPECIFIER_NOT_SET: 0,
  RDS: 3,
  ROUTE_CONFIG: 4,
  SCOPED_ROUTES: 31
};

/**
 * @return {proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.RouteSpecifierCase}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getRouteSpecifierCase = function() {
  return /** @type {proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.RouteSpecifierCase} */(jspb.Message.computeOneofCase(this, proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.oneofGroups_[0]));
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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.toObject = function(includeInstance, msg) {
  var f, obj = {
    codecType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    statPrefix: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rds: (f = msg.getRds()) && proto.envoy.config.filter.network.http_connection_manager.v2.Rds.toObject(includeInstance, f),
    routeConfig: (f = msg.getRouteConfig()) && envoy_api_v2_route_pb.RouteConfiguration.toObject(includeInstance, f),
    scopedRoutes: (f = msg.getScopedRoutes()) && proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.toObject(includeInstance, f),
    httpFiltersList: jspb.Message.toObjectList(msg.getHttpFiltersList(),
    proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.toObject, includeInstance),
    addUserAgent: (f = msg.getAddUserAgent()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    tracing: (f = msg.getTracing()) && proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.toObject(includeInstance, f),
    commonHttpProtocolOptions: (f = msg.getCommonHttpProtocolOptions()) && envoy_api_v2_core_protocol_pb.HttpProtocolOptions.toObject(includeInstance, f),
    httpProtocolOptions: (f = msg.getHttpProtocolOptions()) && envoy_api_v2_core_protocol_pb.Http1ProtocolOptions.toObject(includeInstance, f),
    http2ProtocolOptions: (f = msg.getHttp2ProtocolOptions()) && envoy_api_v2_core_protocol_pb.Http2ProtocolOptions.toObject(includeInstance, f),
    serverName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    serverHeaderTransformation: jspb.Message.getFieldWithDefault(msg, 34, 0),
    maxRequestHeadersKb: (f = msg.getMaxRequestHeadersKb()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    idleTimeout: (f = msg.getIdleTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    streamIdleTimeout: (f = msg.getStreamIdleTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    requestTimeout: (f = msg.getRequestTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    drainTimeout: (f = msg.getDrainTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    delayedCloseTimeout: (f = msg.getDelayedCloseTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    accessLogList: jspb.Message.toObjectList(msg.getAccessLogList(),
    envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog.toObject, includeInstance),
    useRemoteAddress: (f = msg.getUseRemoteAddress()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    xffNumTrustedHops: jspb.Message.getFieldWithDefault(msg, 19, 0),
    internalAddressConfig: (f = msg.getInternalAddressConfig()) && proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig.toObject(includeInstance, f),
    skipXffAppend: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    via: jspb.Message.getFieldWithDefault(msg, 22, ""),
    generateRequestId: (f = msg.getGenerateRequestId()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    preserveExternalRequestId: jspb.Message.getBooleanFieldWithDefault(msg, 32, false),
    forwardClientCertDetails: jspb.Message.getFieldWithDefault(msg, 16, 0),
    setCurrentClientCertDetails: (f = msg.getSetCurrentClientCertDetails()) && proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.toObject(includeInstance, f),
    proxy100Continue: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    representIpv4RemoteAddressAsIpv4MappedIpv6: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    upgradeConfigsList: jspb.Message.toObjectList(msg.getUpgradeConfigsList(),
    proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.toObject, includeInstance),
    normalizePath: (f = msg.getNormalizePath()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    mergeSlashes: jspb.Message.getBooleanFieldWithDefault(msg, 33, false),
    requestIdExtension: (f = msg.getRequestIdExtension()) && proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager;
  return proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.CodecType} */ (reader.readEnum());
      msg.setCodecType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatPrefix(value);
      break;
    case 3:
      var value = new proto.envoy.config.filter.network.http_connection_manager.v2.Rds;
      reader.readMessage(value,proto.envoy.config.filter.network.http_connection_manager.v2.Rds.deserializeBinaryFromReader);
      msg.setRds(value);
      break;
    case 4:
      var value = new envoy_api_v2_route_pb.RouteConfiguration;
      reader.readMessage(value,envoy_api_v2_route_pb.RouteConfiguration.deserializeBinaryFromReader);
      msg.setRouteConfig(value);
      break;
    case 31:
      var value = new proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes;
      reader.readMessage(value,proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.deserializeBinaryFromReader);
      msg.setScopedRoutes(value);
      break;
    case 5:
      var value = new proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter;
      reader.readMessage(value,proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.deserializeBinaryFromReader);
      msg.addHttpFilters(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setAddUserAgent(value);
      break;
    case 7:
      var value = new proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing;
      reader.readMessage(value,proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.deserializeBinaryFromReader);
      msg.setTracing(value);
      break;
    case 35:
      var value = new envoy_api_v2_core_protocol_pb.HttpProtocolOptions;
      reader.readMessage(value,envoy_api_v2_core_protocol_pb.HttpProtocolOptions.deserializeBinaryFromReader);
      msg.setCommonHttpProtocolOptions(value);
      break;
    case 8:
      var value = new envoy_api_v2_core_protocol_pb.Http1ProtocolOptions;
      reader.readMessage(value,envoy_api_v2_core_protocol_pb.Http1ProtocolOptions.deserializeBinaryFromReader);
      msg.setHttpProtocolOptions(value);
      break;
    case 9:
      var value = new envoy_api_v2_core_protocol_pb.Http2ProtocolOptions;
      reader.readMessage(value,envoy_api_v2_core_protocol_pb.Http2ProtocolOptions.deserializeBinaryFromReader);
      msg.setHttp2ProtocolOptions(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerName(value);
      break;
    case 34:
      var value = /** @type {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.ServerHeaderTransformation} */ (reader.readEnum());
      msg.setServerHeaderTransformation(value);
      break;
    case 29:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setMaxRequestHeadersKb(value);
      break;
    case 11:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setIdleTimeout(value);
      break;
    case 24:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setStreamIdleTimeout(value);
      break;
    case 28:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setRequestTimeout(value);
      break;
    case 12:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDrainTimeout(value);
      break;
    case 26:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDelayedCloseTimeout(value);
      break;
    case 13:
      var value = new envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog;
      reader.readMessage(value,envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog.deserializeBinaryFromReader);
      msg.addAccessLog(value);
      break;
    case 14:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setUseRemoteAddress(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setXffNumTrustedHops(value);
      break;
    case 25:
      var value = new proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig;
      reader.readMessage(value,proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig.deserializeBinaryFromReader);
      msg.setInternalAddressConfig(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipXffAppend(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setVia(value);
      break;
    case 15:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setGenerateRequestId(value);
      break;
    case 32:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreserveExternalRequestId(value);
      break;
    case 16:
      var value = /** @type {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.ForwardClientCertDetails} */ (reader.readEnum());
      msg.setForwardClientCertDetails(value);
      break;
    case 17:
      var value = new proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails;
      reader.readMessage(value,proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.deserializeBinaryFromReader);
      msg.setSetCurrentClientCertDetails(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProxy100Continue(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRepresentIpv4RemoteAddressAsIpv4MappedIpv6(value);
      break;
    case 23:
      var value = new proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig;
      reader.readMessage(value,proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.deserializeBinaryFromReader);
      msg.addUpgradeConfigs(value);
      break;
    case 30:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setNormalizePath(value);
      break;
    case 33:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMergeSlashes(value);
      break;
    case 36:
      var value = new proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension;
      reader.readMessage(value,proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.deserializeBinaryFromReader);
      msg.setRequestIdExtension(value);
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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCodecType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStatPrefix();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRds();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.envoy.config.filter.network.http_connection_manager.v2.Rds.serializeBinaryToWriter
    );
  }
  f = message.getRouteConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      envoy_api_v2_route_pb.RouteConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getScopedRoutes();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.serializeBinaryToWriter
    );
  }
  f = message.getHttpFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.serializeBinaryToWriter
    );
  }
  f = message.getAddUserAgent();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getTracing();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.serializeBinaryToWriter
    );
  }
  f = message.getCommonHttpProtocolOptions();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      envoy_api_v2_core_protocol_pb.HttpProtocolOptions.serializeBinaryToWriter
    );
  }
  f = message.getHttpProtocolOptions();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      envoy_api_v2_core_protocol_pb.Http1ProtocolOptions.serializeBinaryToWriter
    );
  }
  f = message.getHttp2ProtocolOptions();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      envoy_api_v2_core_protocol_pb.Http2ProtocolOptions.serializeBinaryToWriter
    );
  }
  f = message.getServerName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getServerHeaderTransformation();
  if (f !== 0.0) {
    writer.writeEnum(
      34,
      f
    );
  }
  f = message.getMaxRequestHeadersKb();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getIdleTimeout();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getStreamIdleTimeout();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getRequestTimeout();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getDrainTimeout();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getDelayedCloseTimeout();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getAccessLogList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog.serializeBinaryToWriter
    );
  }
  f = message.getUseRemoteAddress();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getXffNumTrustedHops();
  if (f !== 0) {
    writer.writeUint32(
      19,
      f
    );
  }
  f = message.getInternalAddressConfig();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig.serializeBinaryToWriter
    );
  }
  f = message.getSkipXffAppend();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getVia();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getGenerateRequestId();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getPreserveExternalRequestId();
  if (f) {
    writer.writeBool(
      32,
      f
    );
  }
  f = message.getForwardClientCertDetails();
  if (f !== 0.0) {
    writer.writeEnum(
      16,
      f
    );
  }
  f = message.getSetCurrentClientCertDetails();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.serializeBinaryToWriter
    );
  }
  f = message.getProxy100Continue();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getRepresentIpv4RemoteAddressAsIpv4MappedIpv6();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getUpgradeConfigsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      23,
      f,
      proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.serializeBinaryToWriter
    );
  }
  f = message.getNormalizePath();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getMergeSlashes();
  if (f) {
    writer.writeBool(
      33,
      f
    );
  }
  f = message.getRequestIdExtension();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.CodecType = {
  AUTO: 0,
  HTTP1: 1,
  HTTP2: 2,
  HTTP3: 3
};

/**
 * @enum {number}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.ServerHeaderTransformation = {
  OVERWRITE: 0,
  APPEND_IF_ABSENT: 1,
  PASS_THROUGH: 2
};

/**
 * @enum {number}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.ForwardClientCertDetails = {
  SANITIZE: 0,
  FORWARD_ONLY: 1,
  APPEND_FORWARD: 2,
  SANITIZE_SET: 3,
  ALWAYS_FORWARD_ONLY: 4
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.repeatedFields_ = [2,8];



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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationName: jspb.Message.getFieldWithDefault(msg, 1, 0),
    requestHeadersForTagsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    clientSampling: (f = msg.getClientSampling()) && envoy_type_percent_pb.Percent.toObject(includeInstance, f),
    randomSampling: (f = msg.getRandomSampling()) && envoy_type_percent_pb.Percent.toObject(includeInstance, f),
    overallSampling: (f = msg.getOverallSampling()) && envoy_type_percent_pb.Percent.toObject(includeInstance, f),
    verbose: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    maxPathTagLength: (f = msg.getMaxPathTagLength()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    customTagsList: jspb.Message.toObjectList(msg.getCustomTagsList(),
    envoy_type_tracing_v2_custom_tag_pb.CustomTag.toObject, includeInstance),
    provider: (f = msg.getProvider()) && envoy_config_trace_v2_http_tracer_pb.Tracing.Http.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing;
  return proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.OperationName} */ (reader.readEnum());
      msg.setOperationName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addRequestHeadersForTags(value);
      break;
    case 3:
      var value = new envoy_type_percent_pb.Percent;
      reader.readMessage(value,envoy_type_percent_pb.Percent.deserializeBinaryFromReader);
      msg.setClientSampling(value);
      break;
    case 4:
      var value = new envoy_type_percent_pb.Percent;
      reader.readMessage(value,envoy_type_percent_pb.Percent.deserializeBinaryFromReader);
      msg.setRandomSampling(value);
      break;
    case 5:
      var value = new envoy_type_percent_pb.Percent;
      reader.readMessage(value,envoy_type_percent_pb.Percent.deserializeBinaryFromReader);
      msg.setOverallSampling(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVerbose(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setMaxPathTagLength(value);
      break;
    case 8:
      var value = new envoy_type_tracing_v2_custom_tag_pb.CustomTag;
      reader.readMessage(value,envoy_type_tracing_v2_custom_tag_pb.CustomTag.deserializeBinaryFromReader);
      msg.addCustomTags(value);
      break;
    case 9:
      var value = new envoy_config_trace_v2_http_tracer_pb.Tracing.Http;
      reader.readMessage(value,envoy_config_trace_v2_http_tracer_pb.Tracing.Http.deserializeBinaryFromReader);
      msg.setProvider(value);
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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationName();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRequestHeadersForTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getClientSampling();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      envoy_type_percent_pb.Percent.serializeBinaryToWriter
    );
  }
  f = message.getRandomSampling();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      envoy_type_percent_pb.Percent.serializeBinaryToWriter
    );
  }
  f = message.getOverallSampling();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      envoy_type_percent_pb.Percent.serializeBinaryToWriter
    );
  }
  f = message.getVerbose();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getMaxPathTagLength();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getCustomTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      envoy_type_tracing_v2_custom_tag_pb.CustomTag.serializeBinaryToWriter
    );
  }
  f = message.getProvider();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      envoy_config_trace_v2_http_tracer_pb.Tracing.Http.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.OperationName = {
  INGRESS: 0,
  EGRESS: 1
};

/**
 * optional OperationName operation_name = 1;
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.OperationName}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.getOperationName = function() {
  return /** @type {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.OperationName} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.OperationName} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.setOperationName = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated string request_headers_for_tags = 2;
 * @return {!Array<string>}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.getRequestHeadersForTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.setRequestHeadersForTagsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.addRequestHeadersForTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.clearRequestHeadersForTagsList = function() {
  return this.setRequestHeadersForTagsList([]);
};


/**
 * optional envoy.type.Percent client_sampling = 3;
 * @return {?proto.envoy.type.Percent}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.getClientSampling = function() {
  return /** @type{?proto.envoy.type.Percent} */ (
    jspb.Message.getWrapperField(this, envoy_type_percent_pb.Percent, 3));
};


/**
 * @param {?proto.envoy.type.Percent|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.setClientSampling = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.clearClientSampling = function() {
  return this.setClientSampling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.hasClientSampling = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional envoy.type.Percent random_sampling = 4;
 * @return {?proto.envoy.type.Percent}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.getRandomSampling = function() {
  return /** @type{?proto.envoy.type.Percent} */ (
    jspb.Message.getWrapperField(this, envoy_type_percent_pb.Percent, 4));
};


/**
 * @param {?proto.envoy.type.Percent|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.setRandomSampling = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.clearRandomSampling = function() {
  return this.setRandomSampling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.hasRandomSampling = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional envoy.type.Percent overall_sampling = 5;
 * @return {?proto.envoy.type.Percent}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.getOverallSampling = function() {
  return /** @type{?proto.envoy.type.Percent} */ (
    jspb.Message.getWrapperField(this, envoy_type_percent_pb.Percent, 5));
};


/**
 * @param {?proto.envoy.type.Percent|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.setOverallSampling = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.clearOverallSampling = function() {
  return this.setOverallSampling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.hasOverallSampling = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool verbose = 6;
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.getVerbose = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.setVerbose = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional google.protobuf.UInt32Value max_path_tag_length = 7;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.getMaxPathTagLength = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 7));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.setMaxPathTagLength = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.clearMaxPathTagLength = function() {
  return this.setMaxPathTagLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.hasMaxPathTagLength = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated envoy.type.tracing.v2.CustomTag custom_tags = 8;
 * @return {!Array<!proto.envoy.type.tracing.v2.CustomTag>}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.getCustomTagsList = function() {
  return /** @type{!Array<!proto.envoy.type.tracing.v2.CustomTag>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_type_tracing_v2_custom_tag_pb.CustomTag, 8));
};


/**
 * @param {!Array<!proto.envoy.type.tracing.v2.CustomTag>} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.setCustomTagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.envoy.type.tracing.v2.CustomTag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.type.tracing.v2.CustomTag}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.addCustomTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.envoy.type.tracing.v2.CustomTag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.clearCustomTagsList = function() {
  return this.setCustomTagsList([]);
};


/**
 * optional envoy.config.trace.v2.Tracing.Http provider = 9;
 * @return {?proto.envoy.config.trace.v2.Tracing.Http}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.getProvider = function() {
  return /** @type{?proto.envoy.config.trace.v2.Tracing.Http} */ (
    jspb.Message.getWrapperField(this, envoy_config_trace_v2_http_tracer_pb.Tracing.Http, 9));
};


/**
 * @param {?proto.envoy.config.trace.v2.Tracing.Http|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.setProvider = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.clearProvider = function() {
  return this.setProvider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing.prototype.hasProvider = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    unixSockets: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig;
  return proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUnixSockets(value);
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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnixSockets();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool unix_sockets = 1;
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig.prototype.getUnixSockets = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig.prototype.setUnixSockets = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    subject: (f = msg.getSubject()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    cert: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    chain: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    dns: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    uri: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails;
  return proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setSubject(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCert(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setChain(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDns(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUri(value);
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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getCert();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getChain();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getDns();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getUri();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional google.protobuf.BoolValue subject = 1;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.prototype.getSubject = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 1));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.prototype.setSubject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.prototype.clearSubject = function() {
  return this.setSubject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.prototype.hasSubject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool cert = 3;
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.prototype.getCert = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.prototype.setCert = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool chain = 6;
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.prototype.getChain = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.prototype.setChain = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool dns = 4;
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.prototype.getDns = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.prototype.setDns = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool uri = 5;
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.prototype.getUri = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails.prototype.setUri = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.repeatedFields_ = [2];



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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    upgradeType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.toObject, includeInstance),
    enabled: (f = msg.getEnabled()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig;
  return proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpgradeType(value);
      break;
    case 2:
      var value = new proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter;
      reader.readMessage(value,proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setEnabled(value);
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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpgradeType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.serializeBinaryToWriter
    );
  }
  f = message.getEnabled();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string upgrade_type = 1;
 * @return {string}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.prototype.getUpgradeType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.prototype.setUpgradeType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated HttpFilter filters = 2;
 * @return {!Array<!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter>}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter, 2));
};


/**
 * @param {!Array<!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter>} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};


/**
 * optional google.protobuf.BoolValue enabled = 3;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.prototype.getEnabled = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 3));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.prototype.setEnabled = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.prototype.clearEnabled = function() {
  return this.setEnabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CodecType codec_type = 1;
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.CodecType}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getCodecType = function() {
  return /** @type {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.CodecType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.CodecType} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setCodecType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string stat_prefix = 2;
 * @return {string}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getStatPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setStatPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Rds rds = 3;
 * @return {?proto.envoy.config.filter.network.http_connection_manager.v2.Rds}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getRds = function() {
  return /** @type{?proto.envoy.config.filter.network.http_connection_manager.v2.Rds} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.network.http_connection_manager.v2.Rds, 3));
};


/**
 * @param {?proto.envoy.config.filter.network.http_connection_manager.v2.Rds|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setRds = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearRds = function() {
  return this.setRds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasRds = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional envoy.api.v2.RouteConfiguration route_config = 4;
 * @return {?proto.envoy.api.v2.RouteConfiguration}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getRouteConfig = function() {
  return /** @type{?proto.envoy.api.v2.RouteConfiguration} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_route_pb.RouteConfiguration, 4));
};


/**
 * @param {?proto.envoy.api.v2.RouteConfiguration|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setRouteConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearRouteConfig = function() {
  return this.setRouteConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasRouteConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ScopedRoutes scoped_routes = 31;
 * @return {?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getScopedRoutes = function() {
  return /** @type{?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes, 31));
};


/**
 * @param {?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setScopedRoutes = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearScopedRoutes = function() {
  return this.setScopedRoutes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasScopedRoutes = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * repeated HttpFilter http_filters = 5;
 * @return {!Array<!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter>}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getHttpFiltersList = function() {
  return /** @type{!Array<!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter, 5));
};


/**
 * @param {!Array<!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter>} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setHttpFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.addHttpFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearHttpFiltersList = function() {
  return this.setHttpFiltersList([]);
};


/**
 * optional google.protobuf.BoolValue add_user_agent = 6;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getAddUserAgent = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 6));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setAddUserAgent = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearAddUserAgent = function() {
  return this.setAddUserAgent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasAddUserAgent = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Tracing tracing = 7;
 * @return {?proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getTracing = function() {
  return /** @type{?proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing, 7));
};


/**
 * @param {?proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.Tracing|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setTracing = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearTracing = function() {
  return this.setTracing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasTracing = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional envoy.api.v2.core.HttpProtocolOptions common_http_protocol_options = 35;
 * @return {?proto.envoy.api.v2.core.HttpProtocolOptions}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getCommonHttpProtocolOptions = function() {
  return /** @type{?proto.envoy.api.v2.core.HttpProtocolOptions} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_protocol_pb.HttpProtocolOptions, 35));
};


/**
 * @param {?proto.envoy.api.v2.core.HttpProtocolOptions|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setCommonHttpProtocolOptions = function(value) {
  return jspb.Message.setWrapperField(this, 35, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearCommonHttpProtocolOptions = function() {
  return this.setCommonHttpProtocolOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasCommonHttpProtocolOptions = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional envoy.api.v2.core.Http1ProtocolOptions http_protocol_options = 8;
 * @return {?proto.envoy.api.v2.core.Http1ProtocolOptions}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getHttpProtocolOptions = function() {
  return /** @type{?proto.envoy.api.v2.core.Http1ProtocolOptions} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_protocol_pb.Http1ProtocolOptions, 8));
};


/**
 * @param {?proto.envoy.api.v2.core.Http1ProtocolOptions|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setHttpProtocolOptions = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearHttpProtocolOptions = function() {
  return this.setHttpProtocolOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasHttpProtocolOptions = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional envoy.api.v2.core.Http2ProtocolOptions http2_protocol_options = 9;
 * @return {?proto.envoy.api.v2.core.Http2ProtocolOptions}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getHttp2ProtocolOptions = function() {
  return /** @type{?proto.envoy.api.v2.core.Http2ProtocolOptions} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_protocol_pb.Http2ProtocolOptions, 9));
};


/**
 * @param {?proto.envoy.api.v2.core.Http2ProtocolOptions|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setHttp2ProtocolOptions = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearHttp2ProtocolOptions = function() {
  return this.setHttp2ProtocolOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasHttp2ProtocolOptions = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string server_name = 10;
 * @return {string}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getServerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setServerName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional ServerHeaderTransformation server_header_transformation = 34;
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.ServerHeaderTransformation}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getServerHeaderTransformation = function() {
  return /** @type {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.ServerHeaderTransformation} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/**
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.ServerHeaderTransformation} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setServerHeaderTransformation = function(value) {
  return jspb.Message.setProto3EnumField(this, 34, value);
};


/**
 * optional google.protobuf.UInt32Value max_request_headers_kb = 29;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getMaxRequestHeadersKb = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 29));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setMaxRequestHeadersKb = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearMaxRequestHeadersKb = function() {
  return this.setMaxRequestHeadersKb(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasMaxRequestHeadersKb = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional google.protobuf.Duration idle_timeout = 11;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getIdleTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 11));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setIdleTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearIdleTimeout = function() {
  return this.setIdleTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasIdleTimeout = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Duration stream_idle_timeout = 24;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getStreamIdleTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 24));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setStreamIdleTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearStreamIdleTimeout = function() {
  return this.setStreamIdleTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasStreamIdleTimeout = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional google.protobuf.Duration request_timeout = 28;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getRequestTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 28));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setRequestTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearRequestTimeout = function() {
  return this.setRequestTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasRequestTimeout = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional google.protobuf.Duration drain_timeout = 12;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getDrainTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 12));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setDrainTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearDrainTimeout = function() {
  return this.setDrainTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasDrainTimeout = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Duration delayed_close_timeout = 26;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getDelayedCloseTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 26));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setDelayedCloseTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearDelayedCloseTimeout = function() {
  return this.setDelayedCloseTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasDelayedCloseTimeout = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * repeated envoy.config.filter.accesslog.v2.AccessLog access_log = 13;
 * @return {!Array<!proto.envoy.config.filter.accesslog.v2.AccessLog>}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getAccessLogList = function() {
  return /** @type{!Array<!proto.envoy.config.filter.accesslog.v2.AccessLog>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog, 13));
};


/**
 * @param {!Array<!proto.envoy.config.filter.accesslog.v2.AccessLog>} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setAccessLogList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.envoy.config.filter.accesslog.v2.AccessLog=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.accesslog.v2.AccessLog}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.addAccessLog = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.envoy.config.filter.accesslog.v2.AccessLog, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearAccessLogList = function() {
  return this.setAccessLogList([]);
};


/**
 * optional google.protobuf.BoolValue use_remote_address = 14;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getUseRemoteAddress = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 14));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setUseRemoteAddress = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearUseRemoteAddress = function() {
  return this.setUseRemoteAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasUseRemoteAddress = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional uint32 xff_num_trusted_hops = 19;
 * @return {number}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getXffNumTrustedHops = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setXffNumTrustedHops = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional InternalAddressConfig internal_address_config = 25;
 * @return {?proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getInternalAddressConfig = function() {
  return /** @type{?proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig, 25));
};


/**
 * @param {?proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.InternalAddressConfig|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setInternalAddressConfig = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearInternalAddressConfig = function() {
  return this.setInternalAddressConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasInternalAddressConfig = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional bool skip_xff_append = 21;
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getSkipXffAppend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setSkipXffAppend = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional string via = 22;
 * @return {string}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getVia = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setVia = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional google.protobuf.BoolValue generate_request_id = 15;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getGenerateRequestId = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 15));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setGenerateRequestId = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearGenerateRequestId = function() {
  return this.setGenerateRequestId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasGenerateRequestId = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bool preserve_external_request_id = 32;
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getPreserveExternalRequestId = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 32, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setPreserveExternalRequestId = function(value) {
  return jspb.Message.setProto3BooleanField(this, 32, value);
};


/**
 * optional ForwardClientCertDetails forward_client_cert_details = 16;
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.ForwardClientCertDetails}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getForwardClientCertDetails = function() {
  return /** @type {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.ForwardClientCertDetails} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.ForwardClientCertDetails} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setForwardClientCertDetails = function(value) {
  return jspb.Message.setProto3EnumField(this, 16, value);
};


/**
 * optional SetCurrentClientCertDetails set_current_client_cert_details = 17;
 * @return {?proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getSetCurrentClientCertDetails = function() {
  return /** @type{?proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails, 17));
};


/**
 * @param {?proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.SetCurrentClientCertDetails|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setSetCurrentClientCertDetails = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearSetCurrentClientCertDetails = function() {
  return this.setSetCurrentClientCertDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasSetCurrentClientCertDetails = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool proxy_100_continue = 18;
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getProxy100Continue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setProxy100Continue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional bool represent_ipv4_remote_address_as_ipv4_mapped_ipv6 = 20;
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getRepresentIpv4RemoteAddressAsIpv4MappedIpv6 = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setRepresentIpv4RemoteAddressAsIpv4MappedIpv6 = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * repeated UpgradeConfig upgrade_configs = 23;
 * @return {!Array<!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig>}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getUpgradeConfigsList = function() {
  return /** @type{!Array<!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig, 23));
};


/**
 * @param {!Array<!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig>} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setUpgradeConfigsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 23, value);
};


/**
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.addUpgradeConfigs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 23, opt_value, proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.UpgradeConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearUpgradeConfigsList = function() {
  return this.setUpgradeConfigsList([]);
};


/**
 * optional google.protobuf.BoolValue normalize_path = 30;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getNormalizePath = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 30));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setNormalizePath = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearNormalizePath = function() {
  return this.setNormalizePath(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasNormalizePath = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional bool merge_slashes = 33;
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getMergeSlashes = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 33, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setMergeSlashes = function(value) {
  return jspb.Message.setProto3BooleanField(this, 33, value);
};


/**
 * optional RequestIDExtension request_id_extension = 36;
 * @return {?proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.getRequestIdExtension = function() {
  return /** @type{?proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension, 36));
};


/**
 * @param {?proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.setRequestIdExtension = function(value) {
  return jspb.Message.setWrapperField(this, 36, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.clearRequestIdExtension = function() {
  return this.setRequestIdExtension(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager.prototype.hasRequestIdExtension = function() {
  return jspb.Message.getField(this, 36) != null;
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
proto.envoy.config.filter.network.http_connection_manager.v2.Rds.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.http_connection_manager.v2.Rds.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.Rds} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.Rds.toObject = function(includeInstance, msg) {
  var f, obj = {
    configSource: (f = msg.getConfigSource()) && envoy_api_v2_core_config_source_pb.ConfigSource.toObject(includeInstance, f),
    routeConfigName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.Rds}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.Rds.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.http_connection_manager.v2.Rds;
  return proto.envoy.config.filter.network.http_connection_manager.v2.Rds.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.Rds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.Rds}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.Rds.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_api_v2_core_config_source_pb.ConfigSource;
      reader.readMessage(value,envoy_api_v2_core_config_source_pb.ConfigSource.deserializeBinaryFromReader);
      msg.setConfigSource(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRouteConfigName(value);
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
proto.envoy.config.filter.network.http_connection_manager.v2.Rds.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.http_connection_manager.v2.Rds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.Rds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.Rds.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigSource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      envoy_api_v2_core_config_source_pb.ConfigSource.serializeBinaryToWriter
    );
  }
  f = message.getRouteConfigName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional envoy.api.v2.core.ConfigSource config_source = 1;
 * @return {?proto.envoy.api.v2.core.ConfigSource}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.Rds.prototype.getConfigSource = function() {
  return /** @type{?proto.envoy.api.v2.core.ConfigSource} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_config_source_pb.ConfigSource, 1));
};


/**
 * @param {?proto.envoy.api.v2.core.ConfigSource|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.Rds} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.Rds.prototype.setConfigSource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.Rds} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.Rds.prototype.clearConfigSource = function() {
  return this.setConfigSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.Rds.prototype.hasConfigSource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string route_config_name = 2;
 * @return {string}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.Rds.prototype.getRouteConfigName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.Rds} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.Rds.prototype.setRouteConfigName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.repeatedFields_ = [1];



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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopedRouteConfigurationsList: jspb.Message.toObjectList(msg.getScopedRouteConfigurationsList(),
    envoy_api_v2_scoped_route_pb.ScopedRouteConfiguration.toObject, includeInstance)
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
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList;
  return proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_api_v2_scoped_route_pb.ScopedRouteConfiguration;
      reader.readMessage(value,envoy_api_v2_scoped_route_pb.ScopedRouteConfiguration.deserializeBinaryFromReader);
      msg.addScopedRouteConfigurations(value);
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopedRouteConfigurationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      envoy_api_v2_scoped_route_pb.ScopedRouteConfiguration.serializeBinaryToWriter
    );
  }
};


/**
 * repeated envoy.api.v2.ScopedRouteConfiguration scoped_route_configurations = 1;
 * @return {!Array<!proto.envoy.api.v2.ScopedRouteConfiguration>}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.prototype.getScopedRouteConfigurationsList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.ScopedRouteConfiguration>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_scoped_route_pb.ScopedRouteConfiguration, 1));
};


/**
 * @param {!Array<!proto.envoy.api.v2.ScopedRouteConfiguration>} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.prototype.setScopedRouteConfigurationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.envoy.api.v2.ScopedRouteConfiguration=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.ScopedRouteConfiguration}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.prototype.addScopedRouteConfigurations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.envoy.api.v2.ScopedRouteConfiguration, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.prototype.clearScopedRouteConfigurationsList = function() {
  return this.setScopedRouteConfigurationsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.oneofGroups_ = [[4,5]];

/**
 * @enum {number}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ConfigSpecifierCase = {
  CONFIG_SPECIFIER_NOT_SET: 0,
  SCOPED_ROUTE_CONFIGURATIONS_LIST: 4,
  SCOPED_RDS: 5
};

/**
 * @return {proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ConfigSpecifierCase}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.getConfigSpecifierCase = function() {
  return /** @type {proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ConfigSpecifierCase} */(jspb.Message.computeOneofCase(this, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.oneofGroups_[0]));
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeKeyBuilder: (f = msg.getScopeKeyBuilder()) && proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.toObject(includeInstance, f),
    rdsConfigSource: (f = msg.getRdsConfigSource()) && envoy_api_v2_core_config_source_pb.ConfigSource.toObject(includeInstance, f),
    scopedRouteConfigurationsList: (f = msg.getScopedRouteConfigurationsList()) && proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.toObject(includeInstance, f),
    scopedRds: (f = msg.getScopedRds()) && proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes;
  return proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder;
      reader.readMessage(value,proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.deserializeBinaryFromReader);
      msg.setScopeKeyBuilder(value);
      break;
    case 3:
      var value = new envoy_api_v2_core_config_source_pb.ConfigSource;
      reader.readMessage(value,envoy_api_v2_core_config_source_pb.ConfigSource.deserializeBinaryFromReader);
      msg.setRdsConfigSource(value);
      break;
    case 4:
      var value = new proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList;
      reader.readMessage(value,proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.deserializeBinaryFromReader);
      msg.setScopedRouteConfigurationsList(value);
      break;
    case 5:
      var value = new proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds;
      reader.readMessage(value,proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.deserializeBinaryFromReader);
      msg.setScopedRds(value);
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeKeyBuilder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.serializeBinaryToWriter
    );
  }
  f = message.getRdsConfigSource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      envoy_api_v2_core_config_source_pb.ConfigSource.serializeBinaryToWriter
    );
  }
  f = message.getScopedRouteConfigurationsList();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList.serializeBinaryToWriter
    );
  }
  f = message.getScopedRds();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.repeatedFields_ = [1];



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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.toObject = function(includeInstance, msg) {
  var f, obj = {
    fragmentsList: jspb.Message.toObjectList(msg.getFragmentsList(),
    proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.toObject, includeInstance)
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
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder;
  return proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder;
      reader.readMessage(value,proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.deserializeBinaryFromReader);
      msg.addFragments(value);
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFragmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.serializeBinaryToWriter
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.TypeCase = {
  TYPE_NOT_SET: 0,
  HEADER_VALUE_EXTRACTOR: 1
};

/**
 * @return {proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.TypeCase}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.prototype.getTypeCase = function() {
  return /** @type {proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.TypeCase} */(jspb.Message.computeOneofCase(this, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.oneofGroups_[0]));
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.toObject = function(includeInstance, msg) {
  var f, obj = {
    headerValueExtractor: (f = msg.getHeaderValueExtractor()) && proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder;
  return proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor;
      reader.readMessage(value,proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.deserializeBinaryFromReader);
      msg.setHeaderValueExtractor(value);
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeaderValueExtractor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.serializeBinaryToWriter
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.ExtractTypeCase = {
  EXTRACT_TYPE_NOT_SET: 0,
  INDEX: 3,
  ELEMENT: 4
};

/**
 * @return {proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.ExtractTypeCase}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.prototype.getExtractTypeCase = function() {
  return /** @type {proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.ExtractTypeCase} */(jspb.Message.computeOneofCase(this, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.oneofGroups_[0]));
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    elementSeparator: jspb.Message.getFieldWithDefault(msg, 2, ""),
    index: jspb.Message.getFieldWithDefault(msg, 3, 0),
    element: (f = msg.getElement()) && proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor;
  return proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setElementSeparator(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 4:
      var value = new proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement;
      reader.readMessage(value,proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.deserializeBinaryFromReader);
      msg.setElement(value);
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getElementSeparator();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getElement();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.serializeBinaryToWriter
    );
  }
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.toObject = function(includeInstance, msg) {
  var f, obj = {
    separator: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement;
  return proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeparator(value);
      break;
    case 2:
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeparator();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string separator = 1;
 * @return {string}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.prototype.getSeparator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.prototype.setSeparator = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string element_separator = 2;
 * @return {string}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.prototype.getElementSeparator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.prototype.setElementSeparator = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 index = 3;
 * @return {number}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.prototype.setIndex = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.prototype.clearIndex = function() {
  return jspb.Message.setOneofField(this, 3, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.prototype.hasIndex = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional KvElement element = 4;
 * @return {?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.prototype.getElement = function() {
  return /** @type{?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement, 4));
};


/**
 * @param {?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.KvElement|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.prototype.setElement = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.prototype.clearElement = function() {
  return this.setElement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor.prototype.hasElement = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional HeaderValueExtractor header_value_extractor = 1;
 * @return {?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.prototype.getHeaderValueExtractor = function() {
  return /** @type{?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor, 1));
};


/**
 * @param {?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.HeaderValueExtractor|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.prototype.setHeaderValueExtractor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.prototype.clearHeaderValueExtractor = function() {
  return this.setHeaderValueExtractor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder.prototype.hasHeaderValueExtractor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated FragmentBuilder fragments = 1;
 * @return {!Array<!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder>}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.prototype.getFragmentsList = function() {
  return /** @type{!Array<!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder, 1));
};


/**
 * @param {!Array<!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder>} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.prototype.setFragmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.prototype.addFragments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.FragmentBuilder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.prototype.clearFragmentsList = function() {
  return this.setFragmentsList([]);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ScopeKeyBuilder scope_key_builder = 2;
 * @return {?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.getScopeKeyBuilder = function() {
  return /** @type{?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder, 2));
};


/**
 * @param {?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.setScopeKeyBuilder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.clearScopeKeyBuilder = function() {
  return this.setScopeKeyBuilder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.hasScopeKeyBuilder = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional envoy.api.v2.core.ConfigSource rds_config_source = 3;
 * @return {?proto.envoy.api.v2.core.ConfigSource}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.getRdsConfigSource = function() {
  return /** @type{?proto.envoy.api.v2.core.ConfigSource} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_config_source_pb.ConfigSource, 3));
};


/**
 * @param {?proto.envoy.api.v2.core.ConfigSource|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.setRdsConfigSource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.clearRdsConfigSource = function() {
  return this.setRdsConfigSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.hasRdsConfigSource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ScopedRouteConfigurationsList scoped_route_configurations_list = 4;
 * @return {?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.getScopedRouteConfigurationsList = function() {
  return /** @type{?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList, 4));
};


/**
 * @param {?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRouteConfigurationsList|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.setScopedRouteConfigurationsList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.clearScopedRouteConfigurationsList = function() {
  return this.setScopedRouteConfigurationsList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.hasScopedRouteConfigurationsList = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ScopedRds scoped_rds = 5;
 * @return {?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.getScopedRds = function() {
  return /** @type{?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds, 5));
};


/**
 * @param {?proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.setScopedRds = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.clearScopedRds = function() {
  return this.setScopedRds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.prototype.hasScopedRds = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopedRdsConfigSource: (f = msg.getScopedRdsConfigSource()) && envoy_api_v2_core_config_source_pb.ConfigSource.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds;
  return proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_api_v2_core_config_source_pb.ConfigSource;
      reader.readMessage(value,envoy_api_v2_core_config_source_pb.ConfigSource.deserializeBinaryFromReader);
      msg.setScopedRdsConfigSource(value);
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
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopedRdsConfigSource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      envoy_api_v2_core_config_source_pb.ConfigSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional envoy.api.v2.core.ConfigSource scoped_rds_config_source = 1;
 * @return {?proto.envoy.api.v2.core.ConfigSource}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.prototype.getScopedRdsConfigSource = function() {
  return /** @type{?proto.envoy.api.v2.core.ConfigSource} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_config_source_pb.ConfigSource, 1));
};


/**
 * @param {?proto.envoy.api.v2.core.ConfigSource|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.prototype.setScopedRdsConfigSource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.prototype.clearScopedRdsConfigSource = function() {
  return this.setScopedRdsConfigSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.ScopedRds.prototype.hasScopedRdsConfigSource = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.oneofGroups_ = [[2,4]];

/**
 * @enum {number}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.ConfigTypeCase = {
  CONFIG_TYPE_NOT_SET: 0,
  CONFIG: 2,
  TYPED_CONFIG: 4
};

/**
 * @return {proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.ConfigTypeCase}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.prototype.getConfigTypeCase = function() {
  return /** @type {proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.ConfigTypeCase} */(jspb.Message.computeOneofCase(this, proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.oneofGroups_[0]));
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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    typedConfig: (f = msg.getTypedConfig()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter;
  return proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 4:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setTypedConfig(value);
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
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getTypedConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct config = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.prototype.getConfig = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.prototype.setConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Any typed_config = 4;
 * @return {?proto.google.protobuf.Any}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.prototype.getTypedConfig = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 4));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.prototype.setTypedConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.prototype.clearTypedConfig = function() {
  return this.setTypedConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.HttpFilter.prototype.hasTypedConfig = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.toObject = function(includeInstance, msg) {
  var f, obj = {
    typedConfig: (f = msg.getTypedConfig()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension;
  return proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setTypedConfig(value);
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
proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypedConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Any typed_config = 1;
 * @return {?proto.google.protobuf.Any}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.prototype.getTypedConfig = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 1));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension} returns this
*/
proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.prototype.setTypedConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension} returns this
 */
proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.prototype.clearTypedConfig = function() {
  return this.setTypedConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.http_connection_manager.v2.RequestIDExtension.prototype.hasTypedConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.envoy.config.filter.network.http_connection_manager.v2);
