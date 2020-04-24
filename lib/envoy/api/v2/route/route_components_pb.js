// source: envoy/api/v2/route/route_components.proto
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

var envoy_api_v2_core_base_pb = require('../../../../envoy/api/v2/core/base_pb.js');
goog.object.extend(proto, envoy_api_v2_core_base_pb);
var envoy_type_matcher_regex_pb = require('../../../../envoy/type/matcher/regex_pb.js');
goog.object.extend(proto, envoy_type_matcher_regex_pb);
var envoy_type_matcher_string_pb = require('../../../../envoy/type/matcher/string_pb.js');
goog.object.extend(proto, envoy_type_matcher_string_pb);
var envoy_type_percent_pb = require('../../../../envoy/type/percent_pb.js');
goog.object.extend(proto, envoy_type_percent_pb);
var envoy_type_range_pb = require('../../../../envoy/type/range_pb.js');
goog.object.extend(proto, envoy_type_range_pb);
var envoy_type_tracing_v2_custom_tag_pb = require('../../../../envoy/type/tracing/v2/custom_tag_pb.js');
goog.object.extend(proto, envoy_type_tracing_v2_custom_tag_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var envoy_annotations_deprecation_pb = require('../../../../envoy/annotations/deprecation_pb.js');
goog.object.extend(proto, envoy_annotations_deprecation_pb);
var udpa_annotations_migrate_pb = require('../../../../udpa/annotations/migrate_pb.js');
goog.object.extend(proto, udpa_annotations_migrate_pb);
var udpa_annotations_status_pb = require('../../../../udpa/annotations/status_pb.js');
goog.object.extend(proto, udpa_annotations_status_pb);
var validate_validate_pb = require('../../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.api.v2.route.CorsPolicy', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.CorsPolicy.EnabledSpecifierCase', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.Decorator', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.DirectResponseAction', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.FilterAction', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.HeaderMatcher', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.HeaderMatcher.HeaderMatchSpecifierCase', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.HedgePolicy', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.QueryParameterMatcher', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.QueryParameterMatcher.QueryParameterMatchSpecifierCase', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RateLimit', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RateLimit.Action', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RateLimit.Action.ActionSpecifierCase', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RateLimit.Action.GenericKey', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RateLimit.Action.SourceCluster', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RedirectAction', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RedirectAction.PathRewriteSpecifierCase', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RedirectAction.RedirectResponseCode', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RedirectAction.SchemeRewriteSpecifierCase', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RetryPolicy', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RetryPolicy.RetryBackOff', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.ConfigTypeCase', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RetryPolicy.RetryPriority', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RetryPolicy.RetryPriority.ConfigTypeCase', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.Route', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.Route.ActionCase', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteAction', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteAction.ClusterNotFoundResponseCode', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteAction.ClusterSpecifierCase', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteAction.HashPolicy', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteAction.HashPolicy.Header', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteAction.HashPolicy.PolicySpecifierCase', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteAction.HostRewriteSpecifierCase', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteAction.InternalRedirectAction', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteAction.UpgradeConfig', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteMatch', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteMatch.PathSpecifierCase', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.Tracing', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.VirtualCluster', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.VirtualHost', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.VirtualHost.TlsRequirementType', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.WeightedCluster', null, global);
goog.exportSymbol('proto.envoy.api.v2.route.WeightedCluster.ClusterWeight', null, global);
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
proto.envoy.api.v2.route.VirtualHost = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.route.VirtualHost.repeatedFields_, null);
};
goog.inherits(proto.envoy.api.v2.route.VirtualHost, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.VirtualHost.displayName = 'proto.envoy.api.v2.route.VirtualHost';
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
proto.envoy.api.v2.route.FilterAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.FilterAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.FilterAction.displayName = 'proto.envoy.api.v2.route.FilterAction';
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
proto.envoy.api.v2.route.Route = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.route.Route.repeatedFields_, proto.envoy.api.v2.route.Route.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.route.Route, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.Route.displayName = 'proto.envoy.api.v2.route.Route';
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
proto.envoy.api.v2.route.WeightedCluster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.route.WeightedCluster.repeatedFields_, null);
};
goog.inherits(proto.envoy.api.v2.route.WeightedCluster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.WeightedCluster.displayName = 'proto.envoy.api.v2.route.WeightedCluster';
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
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.repeatedFields_, null);
};
goog.inherits(proto.envoy.api.v2.route.WeightedCluster.ClusterWeight, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.displayName = 'proto.envoy.api.v2.route.WeightedCluster.ClusterWeight';
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
proto.envoy.api.v2.route.RouteMatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.route.RouteMatch.repeatedFields_, proto.envoy.api.v2.route.RouteMatch.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.route.RouteMatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RouteMatch.displayName = 'proto.envoy.api.v2.route.RouteMatch';
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
proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions.displayName = 'proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions';
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
proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.displayName = 'proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions';
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
proto.envoy.api.v2.route.CorsPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.route.CorsPolicy.repeatedFields_, proto.envoy.api.v2.route.CorsPolicy.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.route.CorsPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.CorsPolicy.displayName = 'proto.envoy.api.v2.route.CorsPolicy';
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
proto.envoy.api.v2.route.RouteAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.route.RouteAction.repeatedFields_, proto.envoy.api.v2.route.RouteAction.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.route.RouteAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RouteAction.displayName = 'proto.envoy.api.v2.route.RouteAction';
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
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.displayName = 'proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy';
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
proto.envoy.api.v2.route.RouteAction.HashPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.api.v2.route.RouteAction.HashPolicy.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.route.RouteAction.HashPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RouteAction.HashPolicy.displayName = 'proto.envoy.api.v2.route.RouteAction.HashPolicy';
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.Header = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.RouteAction.HashPolicy.Header, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RouteAction.HashPolicy.Header.displayName = 'proto.envoy.api.v2.route.RouteAction.HashPolicy.Header';
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.displayName = 'proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie';
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties.displayName = 'proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties';
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter.displayName = 'proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter';
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState.displayName = 'proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState';
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
proto.envoy.api.v2.route.RouteAction.UpgradeConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.RouteAction.UpgradeConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RouteAction.UpgradeConfig.displayName = 'proto.envoy.api.v2.route.RouteAction.UpgradeConfig';
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
proto.envoy.api.v2.route.RetryPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.route.RetryPolicy.repeatedFields_, null);
};
goog.inherits(proto.envoy.api.v2.route.RetryPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RetryPolicy.displayName = 'proto.envoy.api.v2.route.RetryPolicy';
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
proto.envoy.api.v2.route.RetryPolicy.RetryPriority = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.api.v2.route.RetryPolicy.RetryPriority.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.route.RetryPolicy.RetryPriority, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RetryPolicy.RetryPriority.displayName = 'proto.envoy.api.v2.route.RetryPolicy.RetryPriority';
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
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.displayName = 'proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate';
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
proto.envoy.api.v2.route.RetryPolicy.RetryBackOff = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.RetryPolicy.RetryBackOff, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.displayName = 'proto.envoy.api.v2.route.RetryPolicy.RetryBackOff';
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
proto.envoy.api.v2.route.HedgePolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.HedgePolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.HedgePolicy.displayName = 'proto.envoy.api.v2.route.HedgePolicy';
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
proto.envoy.api.v2.route.RedirectAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.api.v2.route.RedirectAction.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.route.RedirectAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RedirectAction.displayName = 'proto.envoy.api.v2.route.RedirectAction';
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
proto.envoy.api.v2.route.DirectResponseAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.DirectResponseAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.DirectResponseAction.displayName = 'proto.envoy.api.v2.route.DirectResponseAction';
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
proto.envoy.api.v2.route.Decorator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.Decorator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.Decorator.displayName = 'proto.envoy.api.v2.route.Decorator';
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
proto.envoy.api.v2.route.Tracing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.route.Tracing.repeatedFields_, null);
};
goog.inherits(proto.envoy.api.v2.route.Tracing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.Tracing.displayName = 'proto.envoy.api.v2.route.Tracing';
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
proto.envoy.api.v2.route.VirtualCluster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.route.VirtualCluster.repeatedFields_, null);
};
goog.inherits(proto.envoy.api.v2.route.VirtualCluster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.VirtualCluster.displayName = 'proto.envoy.api.v2.route.VirtualCluster';
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
proto.envoy.api.v2.route.RateLimit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.route.RateLimit.repeatedFields_, null);
};
goog.inherits(proto.envoy.api.v2.route.RateLimit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RateLimit.displayName = 'proto.envoy.api.v2.route.RateLimit';
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
proto.envoy.api.v2.route.RateLimit.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.api.v2.route.RateLimit.Action.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.route.RateLimit.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RateLimit.Action.displayName = 'proto.envoy.api.v2.route.RateLimit.Action';
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
proto.envoy.api.v2.route.RateLimit.Action.SourceCluster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.RateLimit.Action.SourceCluster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RateLimit.Action.SourceCluster.displayName = 'proto.envoy.api.v2.route.RateLimit.Action.SourceCluster';
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
proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster.displayName = 'proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster';
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
proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.displayName = 'proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders';
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
proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress.displayName = 'proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress';
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
proto.envoy.api.v2.route.RateLimit.Action.GenericKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.route.RateLimit.Action.GenericKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RateLimit.Action.GenericKey.displayName = 'proto.envoy.api.v2.route.RateLimit.Action.GenericKey';
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
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.repeatedFields_, null);
};
goog.inherits(proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.displayName = 'proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch';
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
proto.envoy.api.v2.route.HeaderMatcher = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.api.v2.route.HeaderMatcher.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.route.HeaderMatcher, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.HeaderMatcher.displayName = 'proto.envoy.api.v2.route.HeaderMatcher';
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
proto.envoy.api.v2.route.QueryParameterMatcher = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.api.v2.route.QueryParameterMatcher.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.route.QueryParameterMatcher, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.route.QueryParameterMatcher.displayName = 'proto.envoy.api.v2.route.QueryParameterMatcher';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.route.VirtualHost.repeatedFields_ = [2,3,5,6,7,13,10,11];



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
proto.envoy.api.v2.route.VirtualHost.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.VirtualHost.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.VirtualHost} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.VirtualHost.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    domainsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    routesList: jspb.Message.toObjectList(msg.getRoutesList(),
    proto.envoy.api.v2.route.Route.toObject, includeInstance),
    requireTls: jspb.Message.getFieldWithDefault(msg, 4, 0),
    virtualClustersList: jspb.Message.toObjectList(msg.getVirtualClustersList(),
    proto.envoy.api.v2.route.VirtualCluster.toObject, includeInstance),
    rateLimitsList: jspb.Message.toObjectList(msg.getRateLimitsList(),
    proto.envoy.api.v2.route.RateLimit.toObject, includeInstance),
    requestHeadersToAddList: jspb.Message.toObjectList(msg.getRequestHeadersToAddList(),
    envoy_api_v2_core_base_pb.HeaderValueOption.toObject, includeInstance),
    requestHeadersToRemoveList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    responseHeadersToAddList: jspb.Message.toObjectList(msg.getResponseHeadersToAddList(),
    envoy_api_v2_core_base_pb.HeaderValueOption.toObject, includeInstance),
    responseHeadersToRemoveList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    cors: (f = msg.getCors()) && proto.envoy.api.v2.route.CorsPolicy.toObject(includeInstance, f),
    perFilterConfigMap: (f = msg.getPerFilterConfigMap()) ? f.toObject(includeInstance, proto.google.protobuf.Struct.toObject) : [],
    typedPerFilterConfigMap: (f = msg.getTypedPerFilterConfigMap()) ? f.toObject(includeInstance, proto.google.protobuf.Any.toObject) : [],
    includeRequestAttemptCount: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    includeAttemptCountInResponse: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    retryPolicy: (f = msg.getRetryPolicy()) && proto.envoy.api.v2.route.RetryPolicy.toObject(includeInstance, f),
    retryPolicyTypedConfig: (f = msg.getRetryPolicyTypedConfig()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    hedgePolicy: (f = msg.getHedgePolicy()) && proto.envoy.api.v2.route.HedgePolicy.toObject(includeInstance, f),
    perRequestBufferLimitBytes: (f = msg.getPerRequestBufferLimitBytes()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.route.VirtualHost}
 */
proto.envoy.api.v2.route.VirtualHost.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.VirtualHost;
  return proto.envoy.api.v2.route.VirtualHost.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.VirtualHost} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.VirtualHost}
 */
proto.envoy.api.v2.route.VirtualHost.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addDomains(value);
      break;
    case 3:
      var value = new proto.envoy.api.v2.route.Route;
      reader.readMessage(value,proto.envoy.api.v2.route.Route.deserializeBinaryFromReader);
      msg.addRoutes(value);
      break;
    case 4:
      var value = /** @type {!proto.envoy.api.v2.route.VirtualHost.TlsRequirementType} */ (reader.readEnum());
      msg.setRequireTls(value);
      break;
    case 5:
      var value = new proto.envoy.api.v2.route.VirtualCluster;
      reader.readMessage(value,proto.envoy.api.v2.route.VirtualCluster.deserializeBinaryFromReader);
      msg.addVirtualClusters(value);
      break;
    case 6:
      var value = new proto.envoy.api.v2.route.RateLimit;
      reader.readMessage(value,proto.envoy.api.v2.route.RateLimit.deserializeBinaryFromReader);
      msg.addRateLimits(value);
      break;
    case 7:
      var value = new envoy_api_v2_core_base_pb.HeaderValueOption;
      reader.readMessage(value,envoy_api_v2_core_base_pb.HeaderValueOption.deserializeBinaryFromReader);
      msg.addRequestHeadersToAdd(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.addRequestHeadersToRemove(value);
      break;
    case 10:
      var value = new envoy_api_v2_core_base_pb.HeaderValueOption;
      reader.readMessage(value,envoy_api_v2_core_base_pb.HeaderValueOption.deserializeBinaryFromReader);
      msg.addResponseHeadersToAdd(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addResponseHeadersToRemove(value);
      break;
    case 8:
      var value = new proto.envoy.api.v2.route.CorsPolicy;
      reader.readMessage(value,proto.envoy.api.v2.route.CorsPolicy.deserializeBinaryFromReader);
      msg.setCors(value);
      break;
    case 12:
      var value = msg.getPerFilterConfigMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Struct.deserializeBinaryFromReader, "", new proto.google.protobuf.Struct());
         });
      break;
    case 15:
      var value = msg.getTypedPerFilterConfigMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Any.deserializeBinaryFromReader, "", new proto.google.protobuf.Any());
         });
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequestAttemptCount(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeAttemptCountInResponse(value);
      break;
    case 16:
      var value = new proto.envoy.api.v2.route.RetryPolicy;
      reader.readMessage(value,proto.envoy.api.v2.route.RetryPolicy.deserializeBinaryFromReader);
      msg.setRetryPolicy(value);
      break;
    case 20:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setRetryPolicyTypedConfig(value);
      break;
    case 17:
      var value = new proto.envoy.api.v2.route.HedgePolicy;
      reader.readMessage(value,proto.envoy.api.v2.route.HedgePolicy.deserializeBinaryFromReader);
      msg.setHedgePolicy(value);
      break;
    case 18:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setPerRequestBufferLimitBytes(value);
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
proto.envoy.api.v2.route.VirtualHost.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.VirtualHost.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.VirtualHost} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.VirtualHost.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getRoutesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.envoy.api.v2.route.Route.serializeBinaryToWriter
    );
  }
  f = message.getRequireTls();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getVirtualClustersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.envoy.api.v2.route.VirtualCluster.serializeBinaryToWriter
    );
  }
  f = message.getRateLimitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.envoy.api.v2.route.RateLimit.serializeBinaryToWriter
    );
  }
  f = message.getRequestHeadersToAddList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      envoy_api_v2_core_base_pb.HeaderValueOption.serializeBinaryToWriter
    );
  }
  f = message.getRequestHeadersToRemoveList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      13,
      f
    );
  }
  f = message.getResponseHeadersToAddList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      envoy_api_v2_core_base_pb.HeaderValueOption.serializeBinaryToWriter
    );
  }
  f = message.getResponseHeadersToRemoveList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getCors();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.envoy.api.v2.route.CorsPolicy.serializeBinaryToWriter
    );
  }
  f = message.getPerFilterConfigMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(12, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Struct.serializeBinaryToWriter);
  }
  f = message.getTypedPerFilterConfigMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(15, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Any.serializeBinaryToWriter);
  }
  f = message.getIncludeRequestAttemptCount();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getIncludeAttemptCountInResponse();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getRetryPolicy();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.envoy.api.v2.route.RetryPolicy.serializeBinaryToWriter
    );
  }
  f = message.getRetryPolicyTypedConfig();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getHedgePolicy();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.envoy.api.v2.route.HedgePolicy.serializeBinaryToWriter
    );
  }
  f = message.getPerRequestBufferLimitBytes();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.api.v2.route.VirtualHost.TlsRequirementType = {
  NONE: 0,
  EXTERNAL_ONLY: 1,
  ALL: 2
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string domains = 2;
 * @return {!Array<string>}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getDomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.setDomainsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.addDomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.clearDomainsList = function() {
  return this.setDomainsList([]);
};


/**
 * repeated Route routes = 3;
 * @return {!Array<!proto.envoy.api.v2.route.Route>}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getRoutesList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.route.Route>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.route.Route, 3));
};


/**
 * @param {!Array<!proto.envoy.api.v2.route.Route>} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
*/
proto.envoy.api.v2.route.VirtualHost.prototype.setRoutesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.envoy.api.v2.route.Route=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.Route}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.addRoutes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.envoy.api.v2.route.Route, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.clearRoutesList = function() {
  return this.setRoutesList([]);
};


/**
 * optional TlsRequirementType require_tls = 4;
 * @return {!proto.envoy.api.v2.route.VirtualHost.TlsRequirementType}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getRequireTls = function() {
  return /** @type {!proto.envoy.api.v2.route.VirtualHost.TlsRequirementType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.envoy.api.v2.route.VirtualHost.TlsRequirementType} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.setRequireTls = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated VirtualCluster virtual_clusters = 5;
 * @return {!Array<!proto.envoy.api.v2.route.VirtualCluster>}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getVirtualClustersList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.route.VirtualCluster>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.route.VirtualCluster, 5));
};


/**
 * @param {!Array<!proto.envoy.api.v2.route.VirtualCluster>} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
*/
proto.envoy.api.v2.route.VirtualHost.prototype.setVirtualClustersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.envoy.api.v2.route.VirtualCluster=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.VirtualCluster}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.addVirtualClusters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.envoy.api.v2.route.VirtualCluster, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.clearVirtualClustersList = function() {
  return this.setVirtualClustersList([]);
};


/**
 * repeated RateLimit rate_limits = 6;
 * @return {!Array<!proto.envoy.api.v2.route.RateLimit>}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getRateLimitsList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.route.RateLimit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.route.RateLimit, 6));
};


/**
 * @param {!Array<!proto.envoy.api.v2.route.RateLimit>} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
*/
proto.envoy.api.v2.route.VirtualHost.prototype.setRateLimitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.envoy.api.v2.route.RateLimit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.RateLimit}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.addRateLimits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.envoy.api.v2.route.RateLimit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.clearRateLimitsList = function() {
  return this.setRateLimitsList([]);
};


/**
 * repeated envoy.api.v2.core.HeaderValueOption request_headers_to_add = 7;
 * @return {!Array<!proto.envoy.api.v2.core.HeaderValueOption>}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getRequestHeadersToAddList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.core.HeaderValueOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_core_base_pb.HeaderValueOption, 7));
};


/**
 * @param {!Array<!proto.envoy.api.v2.core.HeaderValueOption>} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
*/
proto.envoy.api.v2.route.VirtualHost.prototype.setRequestHeadersToAddList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.envoy.api.v2.core.HeaderValueOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.core.HeaderValueOption}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.addRequestHeadersToAdd = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.envoy.api.v2.core.HeaderValueOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.clearRequestHeadersToAddList = function() {
  return this.setRequestHeadersToAddList([]);
};


/**
 * repeated string request_headers_to_remove = 13;
 * @return {!Array<string>}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getRequestHeadersToRemoveList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.setRequestHeadersToRemoveList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.addRequestHeadersToRemove = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.clearRequestHeadersToRemoveList = function() {
  return this.setRequestHeadersToRemoveList([]);
};


/**
 * repeated envoy.api.v2.core.HeaderValueOption response_headers_to_add = 10;
 * @return {!Array<!proto.envoy.api.v2.core.HeaderValueOption>}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getResponseHeadersToAddList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.core.HeaderValueOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_core_base_pb.HeaderValueOption, 10));
};


/**
 * @param {!Array<!proto.envoy.api.v2.core.HeaderValueOption>} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
*/
proto.envoy.api.v2.route.VirtualHost.prototype.setResponseHeadersToAddList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.envoy.api.v2.core.HeaderValueOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.core.HeaderValueOption}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.addResponseHeadersToAdd = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.envoy.api.v2.core.HeaderValueOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.clearResponseHeadersToAddList = function() {
  return this.setResponseHeadersToAddList([]);
};


/**
 * repeated string response_headers_to_remove = 11;
 * @return {!Array<string>}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getResponseHeadersToRemoveList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.setResponseHeadersToRemoveList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.addResponseHeadersToRemove = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.clearResponseHeadersToRemoveList = function() {
  return this.setResponseHeadersToRemoveList([]);
};


/**
 * optional CorsPolicy cors = 8;
 * @return {?proto.envoy.api.v2.route.CorsPolicy}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getCors = function() {
  return /** @type{?proto.envoy.api.v2.route.CorsPolicy} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.CorsPolicy, 8));
};


/**
 * @param {?proto.envoy.api.v2.route.CorsPolicy|undefined} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
*/
proto.envoy.api.v2.route.VirtualHost.prototype.setCors = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.clearCors = function() {
  return this.setCors(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.hasCors = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * map<string, google.protobuf.Struct> per_filter_config = 12;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Struct>}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getPerFilterConfigMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Struct>} */ (
      jspb.Message.getMapField(this, 12, opt_noLazyCreate,
      proto.google.protobuf.Struct));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.clearPerFilterConfigMap = function() {
  this.getPerFilterConfigMap().clear();
  return this;};


/**
 * map<string, google.protobuf.Any> typed_per_filter_config = 15;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Any>}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getTypedPerFilterConfigMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Any>} */ (
      jspb.Message.getMapField(this, 15, opt_noLazyCreate,
      proto.google.protobuf.Any));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.clearTypedPerFilterConfigMap = function() {
  this.getTypedPerFilterConfigMap().clear();
  return this;};


/**
 * optional bool include_request_attempt_count = 14;
 * @return {boolean}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getIncludeRequestAttemptCount = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.setIncludeRequestAttemptCount = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool include_attempt_count_in_response = 19;
 * @return {boolean}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getIncludeAttemptCountInResponse = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.setIncludeAttemptCountInResponse = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * optional RetryPolicy retry_policy = 16;
 * @return {?proto.envoy.api.v2.route.RetryPolicy}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getRetryPolicy = function() {
  return /** @type{?proto.envoy.api.v2.route.RetryPolicy} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RetryPolicy, 16));
};


/**
 * @param {?proto.envoy.api.v2.route.RetryPolicy|undefined} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
*/
proto.envoy.api.v2.route.VirtualHost.prototype.setRetryPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.clearRetryPolicy = function() {
  return this.setRetryPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.hasRetryPolicy = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Any retry_policy_typed_config = 20;
 * @return {?proto.google.protobuf.Any}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getRetryPolicyTypedConfig = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 20));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
*/
proto.envoy.api.v2.route.VirtualHost.prototype.setRetryPolicyTypedConfig = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.clearRetryPolicyTypedConfig = function() {
  return this.setRetryPolicyTypedConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.hasRetryPolicyTypedConfig = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional HedgePolicy hedge_policy = 17;
 * @return {?proto.envoy.api.v2.route.HedgePolicy}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getHedgePolicy = function() {
  return /** @type{?proto.envoy.api.v2.route.HedgePolicy} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.HedgePolicy, 17));
};


/**
 * @param {?proto.envoy.api.v2.route.HedgePolicy|undefined} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
*/
proto.envoy.api.v2.route.VirtualHost.prototype.setHedgePolicy = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.clearHedgePolicy = function() {
  return this.setHedgePolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.hasHedgePolicy = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.UInt32Value per_request_buffer_limit_bytes = 18;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.getPerRequestBufferLimitBytes = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 18));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
*/
proto.envoy.api.v2.route.VirtualHost.prototype.setPerRequestBufferLimitBytes = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.VirtualHost} returns this
 */
proto.envoy.api.v2.route.VirtualHost.prototype.clearPerRequestBufferLimitBytes = function() {
  return this.setPerRequestBufferLimitBytes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.VirtualHost.prototype.hasPerRequestBufferLimitBytes = function() {
  return jspb.Message.getField(this, 18) != null;
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
proto.envoy.api.v2.route.FilterAction.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.FilterAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.FilterAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.FilterAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: (f = msg.getAction()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.route.FilterAction}
 */
proto.envoy.api.v2.route.FilterAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.FilterAction;
  return proto.envoy.api.v2.route.FilterAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.FilterAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.FilterAction}
 */
proto.envoy.api.v2.route.FilterAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setAction(value);
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
proto.envoy.api.v2.route.FilterAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.FilterAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.FilterAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.FilterAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Any action = 1;
 * @return {?proto.google.protobuf.Any}
 */
proto.envoy.api.v2.route.FilterAction.prototype.getAction = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 1));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.envoy.api.v2.route.FilterAction} returns this
*/
proto.envoy.api.v2.route.FilterAction.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.FilterAction} returns this
 */
proto.envoy.api.v2.route.FilterAction.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.FilterAction.prototype.hasAction = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.route.Route.repeatedFields_ = [9,12,10,11];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.api.v2.route.Route.oneofGroups_ = [[2,3,7,17]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.route.Route.ActionCase = {
  ACTION_NOT_SET: 0,
  ROUTE: 2,
  REDIRECT: 3,
  DIRECT_RESPONSE: 7,
  FILTER_ACTION: 17
};

/**
 * @return {proto.envoy.api.v2.route.Route.ActionCase}
 */
proto.envoy.api.v2.route.Route.prototype.getActionCase = function() {
  return /** @type {proto.envoy.api.v2.route.Route.ActionCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.route.Route.oneofGroups_[0]));
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
proto.envoy.api.v2.route.Route.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.Route.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.Route} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.Route.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 14, ""),
    match: (f = msg.getMatch()) && proto.envoy.api.v2.route.RouteMatch.toObject(includeInstance, f),
    route: (f = msg.getRoute()) && proto.envoy.api.v2.route.RouteAction.toObject(includeInstance, f),
    redirect: (f = msg.getRedirect()) && proto.envoy.api.v2.route.RedirectAction.toObject(includeInstance, f),
    directResponse: (f = msg.getDirectResponse()) && proto.envoy.api.v2.route.DirectResponseAction.toObject(includeInstance, f),
    filterAction: (f = msg.getFilterAction()) && proto.envoy.api.v2.route.FilterAction.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && envoy_api_v2_core_base_pb.Metadata.toObject(includeInstance, f),
    decorator: (f = msg.getDecorator()) && proto.envoy.api.v2.route.Decorator.toObject(includeInstance, f),
    perFilterConfigMap: (f = msg.getPerFilterConfigMap()) ? f.toObject(includeInstance, proto.google.protobuf.Struct.toObject) : [],
    typedPerFilterConfigMap: (f = msg.getTypedPerFilterConfigMap()) ? f.toObject(includeInstance, proto.google.protobuf.Any.toObject) : [],
    requestHeadersToAddList: jspb.Message.toObjectList(msg.getRequestHeadersToAddList(),
    envoy_api_v2_core_base_pb.HeaderValueOption.toObject, includeInstance),
    requestHeadersToRemoveList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    responseHeadersToAddList: jspb.Message.toObjectList(msg.getResponseHeadersToAddList(),
    envoy_api_v2_core_base_pb.HeaderValueOption.toObject, includeInstance),
    responseHeadersToRemoveList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    tracing: (f = msg.getTracing()) && proto.envoy.api.v2.route.Tracing.toObject(includeInstance, f),
    perRequestBufferLimitBytes: (f = msg.getPerRequestBufferLimitBytes()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.route.Route}
 */
proto.envoy.api.v2.route.Route.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.Route;
  return proto.envoy.api.v2.route.Route.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.Route} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.Route}
 */
proto.envoy.api.v2.route.Route.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 1:
      var value = new proto.envoy.api.v2.route.RouteMatch;
      reader.readMessage(value,proto.envoy.api.v2.route.RouteMatch.deserializeBinaryFromReader);
      msg.setMatch(value);
      break;
    case 2:
      var value = new proto.envoy.api.v2.route.RouteAction;
      reader.readMessage(value,proto.envoy.api.v2.route.RouteAction.deserializeBinaryFromReader);
      msg.setRoute(value);
      break;
    case 3:
      var value = new proto.envoy.api.v2.route.RedirectAction;
      reader.readMessage(value,proto.envoy.api.v2.route.RedirectAction.deserializeBinaryFromReader);
      msg.setRedirect(value);
      break;
    case 7:
      var value = new proto.envoy.api.v2.route.DirectResponseAction;
      reader.readMessage(value,proto.envoy.api.v2.route.DirectResponseAction.deserializeBinaryFromReader);
      msg.setDirectResponse(value);
      break;
    case 17:
      var value = new proto.envoy.api.v2.route.FilterAction;
      reader.readMessage(value,proto.envoy.api.v2.route.FilterAction.deserializeBinaryFromReader);
      msg.setFilterAction(value);
      break;
    case 4:
      var value = new envoy_api_v2_core_base_pb.Metadata;
      reader.readMessage(value,envoy_api_v2_core_base_pb.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = new proto.envoy.api.v2.route.Decorator;
      reader.readMessage(value,proto.envoy.api.v2.route.Decorator.deserializeBinaryFromReader);
      msg.setDecorator(value);
      break;
    case 8:
      var value = msg.getPerFilterConfigMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Struct.deserializeBinaryFromReader, "", new proto.google.protobuf.Struct());
         });
      break;
    case 13:
      var value = msg.getTypedPerFilterConfigMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Any.deserializeBinaryFromReader, "", new proto.google.protobuf.Any());
         });
      break;
    case 9:
      var value = new envoy_api_v2_core_base_pb.HeaderValueOption;
      reader.readMessage(value,envoy_api_v2_core_base_pb.HeaderValueOption.deserializeBinaryFromReader);
      msg.addRequestHeadersToAdd(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addRequestHeadersToRemove(value);
      break;
    case 10:
      var value = new envoy_api_v2_core_base_pb.HeaderValueOption;
      reader.readMessage(value,envoy_api_v2_core_base_pb.HeaderValueOption.deserializeBinaryFromReader);
      msg.addResponseHeadersToAdd(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addResponseHeadersToRemove(value);
      break;
    case 15:
      var value = new proto.envoy.api.v2.route.Tracing;
      reader.readMessage(value,proto.envoy.api.v2.route.Tracing.deserializeBinaryFromReader);
      msg.setTracing(value);
      break;
    case 16:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setPerRequestBufferLimitBytes(value);
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
proto.envoy.api.v2.route.Route.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.Route.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.Route} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.Route.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getMatch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.envoy.api.v2.route.RouteMatch.serializeBinaryToWriter
    );
  }
  f = message.getRoute();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.api.v2.route.RouteAction.serializeBinaryToWriter
    );
  }
  f = message.getRedirect();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.envoy.api.v2.route.RedirectAction.serializeBinaryToWriter
    );
  }
  f = message.getDirectResponse();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.envoy.api.v2.route.DirectResponseAction.serializeBinaryToWriter
    );
  }
  f = message.getFilterAction();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.envoy.api.v2.route.FilterAction.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      envoy_api_v2_core_base_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getDecorator();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.envoy.api.v2.route.Decorator.serializeBinaryToWriter
    );
  }
  f = message.getPerFilterConfigMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Struct.serializeBinaryToWriter);
  }
  f = message.getTypedPerFilterConfigMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(13, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Any.serializeBinaryToWriter);
  }
  f = message.getRequestHeadersToAddList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      envoy_api_v2_core_base_pb.HeaderValueOption.serializeBinaryToWriter
    );
  }
  f = message.getRequestHeadersToRemoveList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getResponseHeadersToAddList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      envoy_api_v2_core_base_pb.HeaderValueOption.serializeBinaryToWriter
    );
  }
  f = message.getResponseHeadersToRemoveList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getTracing();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.envoy.api.v2.route.Tracing.serializeBinaryToWriter
    );
  }
  f = message.getPerRequestBufferLimitBytes();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 14;
 * @return {string}
 */
proto.envoy.api.v2.route.Route.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional RouteMatch match = 1;
 * @return {?proto.envoy.api.v2.route.RouteMatch}
 */
proto.envoy.api.v2.route.Route.prototype.getMatch = function() {
  return /** @type{?proto.envoy.api.v2.route.RouteMatch} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RouteMatch, 1));
};


/**
 * @param {?proto.envoy.api.v2.route.RouteMatch|undefined} value
 * @return {!proto.envoy.api.v2.route.Route} returns this
*/
proto.envoy.api.v2.route.Route.prototype.setMatch = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.clearMatch = function() {
  return this.setMatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.Route.prototype.hasMatch = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RouteAction route = 2;
 * @return {?proto.envoy.api.v2.route.RouteAction}
 */
proto.envoy.api.v2.route.Route.prototype.getRoute = function() {
  return /** @type{?proto.envoy.api.v2.route.RouteAction} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RouteAction, 2));
};


/**
 * @param {?proto.envoy.api.v2.route.RouteAction|undefined} value
 * @return {!proto.envoy.api.v2.route.Route} returns this
*/
proto.envoy.api.v2.route.Route.prototype.setRoute = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.envoy.api.v2.route.Route.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.clearRoute = function() {
  return this.setRoute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.Route.prototype.hasRoute = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RedirectAction redirect = 3;
 * @return {?proto.envoy.api.v2.route.RedirectAction}
 */
proto.envoy.api.v2.route.Route.prototype.getRedirect = function() {
  return /** @type{?proto.envoy.api.v2.route.RedirectAction} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RedirectAction, 3));
};


/**
 * @param {?proto.envoy.api.v2.route.RedirectAction|undefined} value
 * @return {!proto.envoy.api.v2.route.Route} returns this
*/
proto.envoy.api.v2.route.Route.prototype.setRedirect = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.envoy.api.v2.route.Route.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.clearRedirect = function() {
  return this.setRedirect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.Route.prototype.hasRedirect = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DirectResponseAction direct_response = 7;
 * @return {?proto.envoy.api.v2.route.DirectResponseAction}
 */
proto.envoy.api.v2.route.Route.prototype.getDirectResponse = function() {
  return /** @type{?proto.envoy.api.v2.route.DirectResponseAction} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.DirectResponseAction, 7));
};


/**
 * @param {?proto.envoy.api.v2.route.DirectResponseAction|undefined} value
 * @return {!proto.envoy.api.v2.route.Route} returns this
*/
proto.envoy.api.v2.route.Route.prototype.setDirectResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.envoy.api.v2.route.Route.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.clearDirectResponse = function() {
  return this.setDirectResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.Route.prototype.hasDirectResponse = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional FilterAction filter_action = 17;
 * @return {?proto.envoy.api.v2.route.FilterAction}
 */
proto.envoy.api.v2.route.Route.prototype.getFilterAction = function() {
  return /** @type{?proto.envoy.api.v2.route.FilterAction} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.FilterAction, 17));
};


/**
 * @param {?proto.envoy.api.v2.route.FilterAction|undefined} value
 * @return {!proto.envoy.api.v2.route.Route} returns this
*/
proto.envoy.api.v2.route.Route.prototype.setFilterAction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.envoy.api.v2.route.Route.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.clearFilterAction = function() {
  return this.setFilterAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.Route.prototype.hasFilterAction = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional envoy.api.v2.core.Metadata metadata = 4;
 * @return {?proto.envoy.api.v2.core.Metadata}
 */
proto.envoy.api.v2.route.Route.prototype.getMetadata = function() {
  return /** @type{?proto.envoy.api.v2.core.Metadata} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.Metadata, 4));
};


/**
 * @param {?proto.envoy.api.v2.core.Metadata|undefined} value
 * @return {!proto.envoy.api.v2.route.Route} returns this
*/
proto.envoy.api.v2.route.Route.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.Route.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Decorator decorator = 5;
 * @return {?proto.envoy.api.v2.route.Decorator}
 */
proto.envoy.api.v2.route.Route.prototype.getDecorator = function() {
  return /** @type{?proto.envoy.api.v2.route.Decorator} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.Decorator, 5));
};


/**
 * @param {?proto.envoy.api.v2.route.Decorator|undefined} value
 * @return {!proto.envoy.api.v2.route.Route} returns this
*/
proto.envoy.api.v2.route.Route.prototype.setDecorator = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.clearDecorator = function() {
  return this.setDecorator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.Route.prototype.hasDecorator = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * map<string, google.protobuf.Struct> per_filter_config = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Struct>}
 */
proto.envoy.api.v2.route.Route.prototype.getPerFilterConfigMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Struct>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      proto.google.protobuf.Struct));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.clearPerFilterConfigMap = function() {
  this.getPerFilterConfigMap().clear();
  return this;};


/**
 * map<string, google.protobuf.Any> typed_per_filter_config = 13;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Any>}
 */
proto.envoy.api.v2.route.Route.prototype.getTypedPerFilterConfigMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Any>} */ (
      jspb.Message.getMapField(this, 13, opt_noLazyCreate,
      proto.google.protobuf.Any));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.clearTypedPerFilterConfigMap = function() {
  this.getTypedPerFilterConfigMap().clear();
  return this;};


/**
 * repeated envoy.api.v2.core.HeaderValueOption request_headers_to_add = 9;
 * @return {!Array<!proto.envoy.api.v2.core.HeaderValueOption>}
 */
proto.envoy.api.v2.route.Route.prototype.getRequestHeadersToAddList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.core.HeaderValueOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_core_base_pb.HeaderValueOption, 9));
};


/**
 * @param {!Array<!proto.envoy.api.v2.core.HeaderValueOption>} value
 * @return {!proto.envoy.api.v2.route.Route} returns this
*/
proto.envoy.api.v2.route.Route.prototype.setRequestHeadersToAddList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.envoy.api.v2.core.HeaderValueOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.core.HeaderValueOption}
 */
proto.envoy.api.v2.route.Route.prototype.addRequestHeadersToAdd = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.envoy.api.v2.core.HeaderValueOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.clearRequestHeadersToAddList = function() {
  return this.setRequestHeadersToAddList([]);
};


/**
 * repeated string request_headers_to_remove = 12;
 * @return {!Array<string>}
 */
proto.envoy.api.v2.route.Route.prototype.getRequestHeadersToRemoveList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.setRequestHeadersToRemoveList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.addRequestHeadersToRemove = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.clearRequestHeadersToRemoveList = function() {
  return this.setRequestHeadersToRemoveList([]);
};


/**
 * repeated envoy.api.v2.core.HeaderValueOption response_headers_to_add = 10;
 * @return {!Array<!proto.envoy.api.v2.core.HeaderValueOption>}
 */
proto.envoy.api.v2.route.Route.prototype.getResponseHeadersToAddList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.core.HeaderValueOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_core_base_pb.HeaderValueOption, 10));
};


/**
 * @param {!Array<!proto.envoy.api.v2.core.HeaderValueOption>} value
 * @return {!proto.envoy.api.v2.route.Route} returns this
*/
proto.envoy.api.v2.route.Route.prototype.setResponseHeadersToAddList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.envoy.api.v2.core.HeaderValueOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.core.HeaderValueOption}
 */
proto.envoy.api.v2.route.Route.prototype.addResponseHeadersToAdd = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.envoy.api.v2.core.HeaderValueOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.clearResponseHeadersToAddList = function() {
  return this.setResponseHeadersToAddList([]);
};


/**
 * repeated string response_headers_to_remove = 11;
 * @return {!Array<string>}
 */
proto.envoy.api.v2.route.Route.prototype.getResponseHeadersToRemoveList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.setResponseHeadersToRemoveList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.addResponseHeadersToRemove = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.clearResponseHeadersToRemoveList = function() {
  return this.setResponseHeadersToRemoveList([]);
};


/**
 * optional Tracing tracing = 15;
 * @return {?proto.envoy.api.v2.route.Tracing}
 */
proto.envoy.api.v2.route.Route.prototype.getTracing = function() {
  return /** @type{?proto.envoy.api.v2.route.Tracing} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.Tracing, 15));
};


/**
 * @param {?proto.envoy.api.v2.route.Tracing|undefined} value
 * @return {!proto.envoy.api.v2.route.Route} returns this
*/
proto.envoy.api.v2.route.Route.prototype.setTracing = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.clearTracing = function() {
  return this.setTracing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.Route.prototype.hasTracing = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.UInt32Value per_request_buffer_limit_bytes = 16;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.route.Route.prototype.getPerRequestBufferLimitBytes = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 16));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.envoy.api.v2.route.Route} returns this
*/
proto.envoy.api.v2.route.Route.prototype.setPerRequestBufferLimitBytes = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.Route} returns this
 */
proto.envoy.api.v2.route.Route.prototype.clearPerRequestBufferLimitBytes = function() {
  return this.setPerRequestBufferLimitBytes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.Route.prototype.hasPerRequestBufferLimitBytes = function() {
  return jspb.Message.getField(this, 16) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.route.WeightedCluster.repeatedFields_ = [1];



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
proto.envoy.api.v2.route.WeightedCluster.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.WeightedCluster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.WeightedCluster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.WeightedCluster.toObject = function(includeInstance, msg) {
  var f, obj = {
    clustersList: jspb.Message.toObjectList(msg.getClustersList(),
    proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.toObject, includeInstance),
    totalWeight: (f = msg.getTotalWeight()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    runtimeKeyPrefix: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.envoy.api.v2.route.WeightedCluster}
 */
proto.envoy.api.v2.route.WeightedCluster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.WeightedCluster;
  return proto.envoy.api.v2.route.WeightedCluster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.WeightedCluster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.WeightedCluster}
 */
proto.envoy.api.v2.route.WeightedCluster.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.api.v2.route.WeightedCluster.ClusterWeight;
      reader.readMessage(value,proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.deserializeBinaryFromReader);
      msg.addClusters(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setTotalWeight(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntimeKeyPrefix(value);
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
proto.envoy.api.v2.route.WeightedCluster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.WeightedCluster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.WeightedCluster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.WeightedCluster.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClustersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.serializeBinaryToWriter
    );
  }
  f = message.getTotalWeight();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getRuntimeKeyPrefix();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.repeatedFields_ = [4,9,5,6];



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
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    weight: (f = msg.getWeight()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    metadataMatch: (f = msg.getMetadataMatch()) && envoy_api_v2_core_base_pb.Metadata.toObject(includeInstance, f),
    requestHeadersToAddList: jspb.Message.toObjectList(msg.getRequestHeadersToAddList(),
    envoy_api_v2_core_base_pb.HeaderValueOption.toObject, includeInstance),
    requestHeadersToRemoveList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    responseHeadersToAddList: jspb.Message.toObjectList(msg.getResponseHeadersToAddList(),
    envoy_api_v2_core_base_pb.HeaderValueOption.toObject, includeInstance),
    responseHeadersToRemoveList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    perFilterConfigMap: (f = msg.getPerFilterConfigMap()) ? f.toObject(includeInstance, proto.google.protobuf.Struct.toObject) : [],
    typedPerFilterConfigMap: (f = msg.getTypedPerFilterConfigMap()) ? f.toObject(includeInstance, proto.google.protobuf.Any.toObject) : []
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
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight}
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.WeightedCluster.ClusterWeight;
  return proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight}
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setWeight(value);
      break;
    case 3:
      var value = new envoy_api_v2_core_base_pb.Metadata;
      reader.readMessage(value,envoy_api_v2_core_base_pb.Metadata.deserializeBinaryFromReader);
      msg.setMetadataMatch(value);
      break;
    case 4:
      var value = new envoy_api_v2_core_base_pb.HeaderValueOption;
      reader.readMessage(value,envoy_api_v2_core_base_pb.HeaderValueOption.deserializeBinaryFromReader);
      msg.addRequestHeadersToAdd(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addRequestHeadersToRemove(value);
      break;
    case 5:
      var value = new envoy_api_v2_core_base_pb.HeaderValueOption;
      reader.readMessage(value,envoy_api_v2_core_base_pb.HeaderValueOption.deserializeBinaryFromReader);
      msg.addResponseHeadersToAdd(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addResponseHeadersToRemove(value);
      break;
    case 8:
      var value = msg.getPerFilterConfigMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Struct.deserializeBinaryFromReader, "", new proto.google.protobuf.Struct());
         });
      break;
    case 10:
      var value = msg.getTypedPerFilterConfigMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Any.deserializeBinaryFromReader, "", new proto.google.protobuf.Any());
         });
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
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWeight();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMatch();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      envoy_api_v2_core_base_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getRequestHeadersToAddList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      envoy_api_v2_core_base_pb.HeaderValueOption.serializeBinaryToWriter
    );
  }
  f = message.getRequestHeadersToRemoveList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getResponseHeadersToAddList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      envoy_api_v2_core_base_pb.HeaderValueOption.serializeBinaryToWriter
    );
  }
  f = message.getResponseHeadersToRemoveList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getPerFilterConfigMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Struct.serializeBinaryToWriter);
  }
  f = message.getTypedPerFilterConfigMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Any.serializeBinaryToWriter);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.UInt32Value weight = 2;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.getWeight = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 2));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
*/
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.setWeight = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.clearWeight = function() {
  return this.setWeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.hasWeight = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional envoy.api.v2.core.Metadata metadata_match = 3;
 * @return {?proto.envoy.api.v2.core.Metadata}
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.getMetadataMatch = function() {
  return /** @type{?proto.envoy.api.v2.core.Metadata} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.Metadata, 3));
};


/**
 * @param {?proto.envoy.api.v2.core.Metadata|undefined} value
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
*/
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.setMetadataMatch = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.clearMetadataMatch = function() {
  return this.setMetadataMatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.hasMetadataMatch = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated envoy.api.v2.core.HeaderValueOption request_headers_to_add = 4;
 * @return {!Array<!proto.envoy.api.v2.core.HeaderValueOption>}
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.getRequestHeadersToAddList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.core.HeaderValueOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_core_base_pb.HeaderValueOption, 4));
};


/**
 * @param {!Array<!proto.envoy.api.v2.core.HeaderValueOption>} value
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
*/
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.setRequestHeadersToAddList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.envoy.api.v2.core.HeaderValueOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.core.HeaderValueOption}
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.addRequestHeadersToAdd = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.envoy.api.v2.core.HeaderValueOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.clearRequestHeadersToAddList = function() {
  return this.setRequestHeadersToAddList([]);
};


/**
 * repeated string request_headers_to_remove = 9;
 * @return {!Array<string>}
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.getRequestHeadersToRemoveList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.setRequestHeadersToRemoveList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.addRequestHeadersToRemove = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.clearRequestHeadersToRemoveList = function() {
  return this.setRequestHeadersToRemoveList([]);
};


/**
 * repeated envoy.api.v2.core.HeaderValueOption response_headers_to_add = 5;
 * @return {!Array<!proto.envoy.api.v2.core.HeaderValueOption>}
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.getResponseHeadersToAddList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.core.HeaderValueOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_core_base_pb.HeaderValueOption, 5));
};


/**
 * @param {!Array<!proto.envoy.api.v2.core.HeaderValueOption>} value
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
*/
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.setResponseHeadersToAddList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.envoy.api.v2.core.HeaderValueOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.core.HeaderValueOption}
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.addResponseHeadersToAdd = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.envoy.api.v2.core.HeaderValueOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.clearResponseHeadersToAddList = function() {
  return this.setResponseHeadersToAddList([]);
};


/**
 * repeated string response_headers_to_remove = 6;
 * @return {!Array<string>}
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.getResponseHeadersToRemoveList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.setResponseHeadersToRemoveList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.addResponseHeadersToRemove = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.clearResponseHeadersToRemoveList = function() {
  return this.setResponseHeadersToRemoveList([]);
};


/**
 * map<string, google.protobuf.Struct> per_filter_config = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Struct>}
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.getPerFilterConfigMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Struct>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      proto.google.protobuf.Struct));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.clearPerFilterConfigMap = function() {
  this.getPerFilterConfigMap().clear();
  return this;};


/**
 * map<string, google.protobuf.Any> typed_per_filter_config = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Any>}
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.getTypedPerFilterConfigMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Any>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      proto.google.protobuf.Any));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight} returns this
 */
proto.envoy.api.v2.route.WeightedCluster.ClusterWeight.prototype.clearTypedPerFilterConfigMap = function() {
  this.getTypedPerFilterConfigMap().clear();
  return this;};


/**
 * repeated ClusterWeight clusters = 1;
 * @return {!Array<!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight>}
 */
proto.envoy.api.v2.route.WeightedCluster.prototype.getClustersList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.route.WeightedCluster.ClusterWeight, 1));
};


/**
 * @param {!Array<!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight>} value
 * @return {!proto.envoy.api.v2.route.WeightedCluster} returns this
*/
proto.envoy.api.v2.route.WeightedCluster.prototype.setClustersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.WeightedCluster.ClusterWeight}
 */
proto.envoy.api.v2.route.WeightedCluster.prototype.addClusters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.envoy.api.v2.route.WeightedCluster.ClusterWeight, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.WeightedCluster} returns this
 */
proto.envoy.api.v2.route.WeightedCluster.prototype.clearClustersList = function() {
  return this.setClustersList([]);
};


/**
 * optional google.protobuf.UInt32Value total_weight = 3;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.route.WeightedCluster.prototype.getTotalWeight = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 3));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.envoy.api.v2.route.WeightedCluster} returns this
*/
proto.envoy.api.v2.route.WeightedCluster.prototype.setTotalWeight = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.WeightedCluster} returns this
 */
proto.envoy.api.v2.route.WeightedCluster.prototype.clearTotalWeight = function() {
  return this.setTotalWeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.WeightedCluster.prototype.hasTotalWeight = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string runtime_key_prefix = 2;
 * @return {string}
 */
proto.envoy.api.v2.route.WeightedCluster.prototype.getRuntimeKeyPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.WeightedCluster} returns this
 */
proto.envoy.api.v2.route.WeightedCluster.prototype.setRuntimeKeyPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.route.RouteMatch.repeatedFields_ = [6,7];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.api.v2.route.RouteMatch.oneofGroups_ = [[1,2,3,10]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.route.RouteMatch.PathSpecifierCase = {
  PATH_SPECIFIER_NOT_SET: 0,
  PREFIX: 1,
  PATH: 2,
  REGEX: 3,
  SAFE_REGEX: 10
};

/**
 * @return {proto.envoy.api.v2.route.RouteMatch.PathSpecifierCase}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.getPathSpecifierCase = function() {
  return /** @type {proto.envoy.api.v2.route.RouteMatch.PathSpecifierCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.route.RouteMatch.oneofGroups_[0]));
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
proto.envoy.api.v2.route.RouteMatch.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RouteMatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RouteMatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteMatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    prefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    regex: jspb.Message.getFieldWithDefault(msg, 3, ""),
    safeRegex: (f = msg.getSafeRegex()) && envoy_type_matcher_regex_pb.RegexMatcher.toObject(includeInstance, f),
    caseSensitive: (f = msg.getCaseSensitive()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    runtimeFraction: (f = msg.getRuntimeFraction()) && envoy_api_v2_core_base_pb.RuntimeFractionalPercent.toObject(includeInstance, f),
    headersList: jspb.Message.toObjectList(msg.getHeadersList(),
    proto.envoy.api.v2.route.HeaderMatcher.toObject, includeInstance),
    queryParametersList: jspb.Message.toObjectList(msg.getQueryParametersList(),
    proto.envoy.api.v2.route.QueryParameterMatcher.toObject, includeInstance),
    grpc: (f = msg.getGrpc()) && proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions.toObject(includeInstance, f),
    tlsContext: (f = msg.getTlsContext()) && proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.route.RouteMatch}
 */
proto.envoy.api.v2.route.RouteMatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RouteMatch;
  return proto.envoy.api.v2.route.RouteMatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RouteMatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RouteMatch}
 */
proto.envoy.api.v2.route.RouteMatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegex(value);
      break;
    case 10:
      var value = new envoy_type_matcher_regex_pb.RegexMatcher;
      reader.readMessage(value,envoy_type_matcher_regex_pb.RegexMatcher.deserializeBinaryFromReader);
      msg.setSafeRegex(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setCaseSensitive(value);
      break;
    case 9:
      var value = new envoy_api_v2_core_base_pb.RuntimeFractionalPercent;
      reader.readMessage(value,envoy_api_v2_core_base_pb.RuntimeFractionalPercent.deserializeBinaryFromReader);
      msg.setRuntimeFraction(value);
      break;
    case 6:
      var value = new proto.envoy.api.v2.route.HeaderMatcher;
      reader.readMessage(value,proto.envoy.api.v2.route.HeaderMatcher.deserializeBinaryFromReader);
      msg.addHeaders(value);
      break;
    case 7:
      var value = new proto.envoy.api.v2.route.QueryParameterMatcher;
      reader.readMessage(value,proto.envoy.api.v2.route.QueryParameterMatcher.deserializeBinaryFromReader);
      msg.addQueryParameters(value);
      break;
    case 8:
      var value = new proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions;
      reader.readMessage(value,proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions.deserializeBinaryFromReader);
      msg.setGrpc(value);
      break;
    case 11:
      var value = new proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions;
      reader.readMessage(value,proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.deserializeBinaryFromReader);
      msg.setTlsContext(value);
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
proto.envoy.api.v2.route.RouteMatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RouteMatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RouteMatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteMatch.serializeBinaryToWriter = function(message, writer) {
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
      10,
      f,
      envoy_type_matcher_regex_pb.RegexMatcher.serializeBinaryToWriter
    );
  }
  f = message.getCaseSensitive();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getRuntimeFraction();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      envoy_api_v2_core_base_pb.RuntimeFractionalPercent.serializeBinaryToWriter
    );
  }
  f = message.getHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.envoy.api.v2.route.HeaderMatcher.serializeBinaryToWriter
    );
  }
  f = message.getQueryParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.envoy.api.v2.route.QueryParameterMatcher.serializeBinaryToWriter
    );
  }
  f = message.getGrpc();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions.serializeBinaryToWriter
    );
  }
  f = message.getTlsContext();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.serializeBinaryToWriter
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
proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions}
 */
proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions;
  return proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions}
 */
proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    presented: (f = msg.getPresented()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    validated: (f = msg.getValidated()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions}
 */
proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions;
  return proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions}
 */
proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setPresented(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setValidated(value);
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
proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPresented();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getValidated();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.BoolValue presented = 1;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.prototype.getPresented = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 1));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions} returns this
*/
proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.prototype.setPresented = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions} returns this
 */
proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.prototype.clearPresented = function() {
  return this.setPresented(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.prototype.hasPresented = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.BoolValue validated = 2;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.prototype.getValidated = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 2));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions} returns this
*/
proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.prototype.setValidated = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions} returns this
 */
proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.prototype.clearValidated = function() {
  return this.setValidated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions.prototype.hasValidated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string prefix = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
 */
proto.envoy.api.v2.route.RouteMatch.prototype.setPrefix = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.envoy.api.v2.route.RouteMatch.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
 */
proto.envoy.api.v2.route.RouteMatch.prototype.clearPrefix = function() {
  return jspb.Message.setOneofField(this, 1, proto.envoy.api.v2.route.RouteMatch.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.hasPrefix = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
 */
proto.envoy.api.v2.route.RouteMatch.prototype.setPath = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.envoy.api.v2.route.RouteMatch.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
 */
proto.envoy.api.v2.route.RouteMatch.prototype.clearPath = function() {
  return jspb.Message.setOneofField(this, 2, proto.envoy.api.v2.route.RouteMatch.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.hasPath = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string regex = 3;
 * @return {string}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.getRegex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
 */
proto.envoy.api.v2.route.RouteMatch.prototype.setRegex = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.envoy.api.v2.route.RouteMatch.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
 */
proto.envoy.api.v2.route.RouteMatch.prototype.clearRegex = function() {
  return jspb.Message.setOneofField(this, 3, proto.envoy.api.v2.route.RouteMatch.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.hasRegex = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional envoy.type.matcher.RegexMatcher safe_regex = 10;
 * @return {?proto.envoy.type.matcher.RegexMatcher}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.getSafeRegex = function() {
  return /** @type{?proto.envoy.type.matcher.RegexMatcher} */ (
    jspb.Message.getWrapperField(this, envoy_type_matcher_regex_pb.RegexMatcher, 10));
};


/**
 * @param {?proto.envoy.type.matcher.RegexMatcher|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
*/
proto.envoy.api.v2.route.RouteMatch.prototype.setSafeRegex = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.envoy.api.v2.route.RouteMatch.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
 */
proto.envoy.api.v2.route.RouteMatch.prototype.clearSafeRegex = function() {
  return this.setSafeRegex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.hasSafeRegex = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.BoolValue case_sensitive = 4;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.getCaseSensitive = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 4));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
*/
proto.envoy.api.v2.route.RouteMatch.prototype.setCaseSensitive = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
 */
proto.envoy.api.v2.route.RouteMatch.prototype.clearCaseSensitive = function() {
  return this.setCaseSensitive(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.hasCaseSensitive = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional envoy.api.v2.core.RuntimeFractionalPercent runtime_fraction = 9;
 * @return {?proto.envoy.api.v2.core.RuntimeFractionalPercent}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.getRuntimeFraction = function() {
  return /** @type{?proto.envoy.api.v2.core.RuntimeFractionalPercent} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.RuntimeFractionalPercent, 9));
};


/**
 * @param {?proto.envoy.api.v2.core.RuntimeFractionalPercent|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
*/
proto.envoy.api.v2.route.RouteMatch.prototype.setRuntimeFraction = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
 */
proto.envoy.api.v2.route.RouteMatch.prototype.clearRuntimeFraction = function() {
  return this.setRuntimeFraction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.hasRuntimeFraction = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated HeaderMatcher headers = 6;
 * @return {!Array<!proto.envoy.api.v2.route.HeaderMatcher>}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.getHeadersList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.route.HeaderMatcher>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.route.HeaderMatcher, 6));
};


/**
 * @param {!Array<!proto.envoy.api.v2.route.HeaderMatcher>} value
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
*/
proto.envoy.api.v2.route.RouteMatch.prototype.setHeadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.envoy.api.v2.route.HeaderMatcher=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.HeaderMatcher}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.addHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.envoy.api.v2.route.HeaderMatcher, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
 */
proto.envoy.api.v2.route.RouteMatch.prototype.clearHeadersList = function() {
  return this.setHeadersList([]);
};


/**
 * repeated QueryParameterMatcher query_parameters = 7;
 * @return {!Array<!proto.envoy.api.v2.route.QueryParameterMatcher>}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.getQueryParametersList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.route.QueryParameterMatcher>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.route.QueryParameterMatcher, 7));
};


/**
 * @param {!Array<!proto.envoy.api.v2.route.QueryParameterMatcher>} value
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
*/
proto.envoy.api.v2.route.RouteMatch.prototype.setQueryParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.envoy.api.v2.route.QueryParameterMatcher=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.QueryParameterMatcher}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.addQueryParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.envoy.api.v2.route.QueryParameterMatcher, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
 */
proto.envoy.api.v2.route.RouteMatch.prototype.clearQueryParametersList = function() {
  return this.setQueryParametersList([]);
};


/**
 * optional GrpcRouteMatchOptions grpc = 8;
 * @return {?proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.getGrpc = function() {
  return /** @type{?proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions, 8));
};


/**
 * @param {?proto.envoy.api.v2.route.RouteMatch.GrpcRouteMatchOptions|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
*/
proto.envoy.api.v2.route.RouteMatch.prototype.setGrpc = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
 */
proto.envoy.api.v2.route.RouteMatch.prototype.clearGrpc = function() {
  return this.setGrpc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.hasGrpc = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional TlsContextMatchOptions tls_context = 11;
 * @return {?proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.getTlsContext = function() {
  return /** @type{?proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions, 11));
};


/**
 * @param {?proto.envoy.api.v2.route.RouteMatch.TlsContextMatchOptions|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
*/
proto.envoy.api.v2.route.RouteMatch.prototype.setTlsContext = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteMatch} returns this
 */
proto.envoy.api.v2.route.RouteMatch.prototype.clearTlsContext = function() {
  return this.setTlsContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteMatch.prototype.hasTlsContext = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.route.CorsPolicy.repeatedFields_ = [1,8,11];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.api.v2.route.CorsPolicy.oneofGroups_ = [[7,9]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.route.CorsPolicy.EnabledSpecifierCase = {
  ENABLED_SPECIFIER_NOT_SET: 0,
  ENABLED: 7,
  FILTER_ENABLED: 9
};

/**
 * @return {proto.envoy.api.v2.route.CorsPolicy.EnabledSpecifierCase}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.getEnabledSpecifierCase = function() {
  return /** @type {proto.envoy.api.v2.route.CorsPolicy.EnabledSpecifierCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.route.CorsPolicy.oneofGroups_[0]));
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
proto.envoy.api.v2.route.CorsPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.CorsPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.CorsPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.CorsPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowOriginList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    allowOriginRegexList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    allowOriginStringMatchList: jspb.Message.toObjectList(msg.getAllowOriginStringMatchList(),
    envoy_type_matcher_string_pb.StringMatcher.toObject, includeInstance),
    allowMethods: jspb.Message.getFieldWithDefault(msg, 2, ""),
    allowHeaders: jspb.Message.getFieldWithDefault(msg, 3, ""),
    exposeHeaders: jspb.Message.getFieldWithDefault(msg, 4, ""),
    maxAge: jspb.Message.getFieldWithDefault(msg, 5, ""),
    allowCredentials: (f = msg.getAllowCredentials()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    enabled: (f = msg.getEnabled()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    filterEnabled: (f = msg.getFilterEnabled()) && envoy_api_v2_core_base_pb.RuntimeFractionalPercent.toObject(includeInstance, f),
    shadowEnabled: (f = msg.getShadowEnabled()) && envoy_api_v2_core_base_pb.RuntimeFractionalPercent.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.route.CorsPolicy}
 */
proto.envoy.api.v2.route.CorsPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.CorsPolicy;
  return proto.envoy.api.v2.route.CorsPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.CorsPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.CorsPolicy}
 */
proto.envoy.api.v2.route.CorsPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowOrigin(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowOriginRegex(value);
      break;
    case 11:
      var value = new envoy_type_matcher_string_pb.StringMatcher;
      reader.readMessage(value,envoy_type_matcher_string_pb.StringMatcher.deserializeBinaryFromReader);
      msg.addAllowOriginStringMatch(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAllowMethods(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAllowHeaders(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExposeHeaders(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaxAge(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setAllowCredentials(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setEnabled(value);
      break;
    case 9:
      var value = new envoy_api_v2_core_base_pb.RuntimeFractionalPercent;
      reader.readMessage(value,envoy_api_v2_core_base_pb.RuntimeFractionalPercent.deserializeBinaryFromReader);
      msg.setFilterEnabled(value);
      break;
    case 10:
      var value = new envoy_api_v2_core_base_pb.RuntimeFractionalPercent;
      reader.readMessage(value,envoy_api_v2_core_base_pb.RuntimeFractionalPercent.deserializeBinaryFromReader);
      msg.setShadowEnabled(value);
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
proto.envoy.api.v2.route.CorsPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.CorsPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.CorsPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.CorsPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowOriginList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAllowOriginRegexList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getAllowOriginStringMatchList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      envoy_type_matcher_string_pb.StringMatcher.serializeBinaryToWriter
    );
  }
  f = message.getAllowMethods();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAllowHeaders();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExposeHeaders();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMaxAge();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAllowCredentials();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getEnabled();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getFilterEnabled();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      envoy_api_v2_core_base_pb.RuntimeFractionalPercent.serializeBinaryToWriter
    );
  }
  f = message.getShadowEnabled();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      envoy_api_v2_core_base_pb.RuntimeFractionalPercent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string allow_origin = 1;
 * @return {!Array<string>}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.getAllowOriginList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.setAllowOriginList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.addAllowOrigin = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.clearAllowOriginList = function() {
  return this.setAllowOriginList([]);
};


/**
 * repeated string allow_origin_regex = 8;
 * @return {!Array<string>}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.getAllowOriginRegexList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.setAllowOriginRegexList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.addAllowOriginRegex = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.clearAllowOriginRegexList = function() {
  return this.setAllowOriginRegexList([]);
};


/**
 * repeated envoy.type.matcher.StringMatcher allow_origin_string_match = 11;
 * @return {!Array<!proto.envoy.type.matcher.StringMatcher>}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.getAllowOriginStringMatchList = function() {
  return /** @type{!Array<!proto.envoy.type.matcher.StringMatcher>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_type_matcher_string_pb.StringMatcher, 11));
};


/**
 * @param {!Array<!proto.envoy.type.matcher.StringMatcher>} value
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
*/
proto.envoy.api.v2.route.CorsPolicy.prototype.setAllowOriginStringMatchList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.envoy.type.matcher.StringMatcher=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.type.matcher.StringMatcher}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.addAllowOriginStringMatch = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.envoy.type.matcher.StringMatcher, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.clearAllowOriginStringMatchList = function() {
  return this.setAllowOriginStringMatchList([]);
};


/**
 * optional string allow_methods = 2;
 * @return {string}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.getAllowMethods = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.setAllowMethods = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string allow_headers = 3;
 * @return {string}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.getAllowHeaders = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.setAllowHeaders = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string expose_headers = 4;
 * @return {string}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.getExposeHeaders = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.setExposeHeaders = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string max_age = 5;
 * @return {string}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.getMaxAge = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.setMaxAge = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.BoolValue allow_credentials = 6;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.getAllowCredentials = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 6));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
*/
proto.envoy.api.v2.route.CorsPolicy.prototype.setAllowCredentials = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.clearAllowCredentials = function() {
  return this.setAllowCredentials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.hasAllowCredentials = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.BoolValue enabled = 7;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.getEnabled = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 7));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
*/
proto.envoy.api.v2.route.CorsPolicy.prototype.setEnabled = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.envoy.api.v2.route.CorsPolicy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.clearEnabled = function() {
  return this.setEnabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional envoy.api.v2.core.RuntimeFractionalPercent filter_enabled = 9;
 * @return {?proto.envoy.api.v2.core.RuntimeFractionalPercent}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.getFilterEnabled = function() {
  return /** @type{?proto.envoy.api.v2.core.RuntimeFractionalPercent} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.RuntimeFractionalPercent, 9));
};


/**
 * @param {?proto.envoy.api.v2.core.RuntimeFractionalPercent|undefined} value
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
*/
proto.envoy.api.v2.route.CorsPolicy.prototype.setFilterEnabled = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.envoy.api.v2.route.CorsPolicy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.clearFilterEnabled = function() {
  return this.setFilterEnabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.hasFilterEnabled = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional envoy.api.v2.core.RuntimeFractionalPercent shadow_enabled = 10;
 * @return {?proto.envoy.api.v2.core.RuntimeFractionalPercent}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.getShadowEnabled = function() {
  return /** @type{?proto.envoy.api.v2.core.RuntimeFractionalPercent} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.RuntimeFractionalPercent, 10));
};


/**
 * @param {?proto.envoy.api.v2.core.RuntimeFractionalPercent|undefined} value
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
*/
proto.envoy.api.v2.route.CorsPolicy.prototype.setShadowEnabled = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.CorsPolicy} returns this
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.clearShadowEnabled = function() {
  return this.setShadowEnabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.CorsPolicy.prototype.hasShadowEnabled = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.route.RouteAction.repeatedFields_ = [30,13,15,25];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.api.v2.route.RouteAction.oneofGroups_ = [[1,2,3],[6,7,29]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.route.RouteAction.ClusterSpecifierCase = {
  CLUSTER_SPECIFIER_NOT_SET: 0,
  CLUSTER: 1,
  CLUSTER_HEADER: 2,
  WEIGHTED_CLUSTERS: 3
};

/**
 * @return {proto.envoy.api.v2.route.RouteAction.ClusterSpecifierCase}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getClusterSpecifierCase = function() {
  return /** @type {proto.envoy.api.v2.route.RouteAction.ClusterSpecifierCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.route.RouteAction.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.envoy.api.v2.route.RouteAction.HostRewriteSpecifierCase = {
  HOST_REWRITE_SPECIFIER_NOT_SET: 0,
  HOST_REWRITE: 6,
  AUTO_HOST_REWRITE: 7,
  AUTO_HOST_REWRITE_HEADER: 29
};

/**
 * @return {proto.envoy.api.v2.route.RouteAction.HostRewriteSpecifierCase}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getHostRewriteSpecifierCase = function() {
  return /** @type {proto.envoy.api.v2.route.RouteAction.HostRewriteSpecifierCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.route.RouteAction.oneofGroups_[1]));
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
proto.envoy.api.v2.route.RouteAction.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RouteAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RouteAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    cluster: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clusterHeader: jspb.Message.getFieldWithDefault(msg, 2, ""),
    weightedClusters: (f = msg.getWeightedClusters()) && proto.envoy.api.v2.route.WeightedCluster.toObject(includeInstance, f),
    clusterNotFoundResponseCode: jspb.Message.getFieldWithDefault(msg, 20, 0),
    metadataMatch: (f = msg.getMetadataMatch()) && envoy_api_v2_core_base_pb.Metadata.toObject(includeInstance, f),
    prefixRewrite: jspb.Message.getFieldWithDefault(msg, 5, ""),
    regexRewrite: (f = msg.getRegexRewrite()) && envoy_type_matcher_regex_pb.RegexMatchAndSubstitute.toObject(includeInstance, f),
    hostRewrite: jspb.Message.getFieldWithDefault(msg, 6, ""),
    autoHostRewrite: (f = msg.getAutoHostRewrite()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    autoHostRewriteHeader: jspb.Message.getFieldWithDefault(msg, 29, ""),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    idleTimeout: (f = msg.getIdleTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    retryPolicy: (f = msg.getRetryPolicy()) && proto.envoy.api.v2.route.RetryPolicy.toObject(includeInstance, f),
    retryPolicyTypedConfig: (f = msg.getRetryPolicyTypedConfig()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    requestMirrorPolicy: (f = msg.getRequestMirrorPolicy()) && proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.toObject(includeInstance, f),
    requestMirrorPoliciesList: jspb.Message.toObjectList(msg.getRequestMirrorPoliciesList(),
    proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.toObject, includeInstance),
    priority: jspb.Message.getFieldWithDefault(msg, 11, 0),
    rateLimitsList: jspb.Message.toObjectList(msg.getRateLimitsList(),
    proto.envoy.api.v2.route.RateLimit.toObject, includeInstance),
    includeVhRateLimits: (f = msg.getIncludeVhRateLimits()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    hashPolicyList: jspb.Message.toObjectList(msg.getHashPolicyList(),
    proto.envoy.api.v2.route.RouteAction.HashPolicy.toObject, includeInstance),
    cors: (f = msg.getCors()) && proto.envoy.api.v2.route.CorsPolicy.toObject(includeInstance, f),
    maxGrpcTimeout: (f = msg.getMaxGrpcTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    grpcTimeoutOffset: (f = msg.getGrpcTimeoutOffset()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    upgradeConfigsList: jspb.Message.toObjectList(msg.getUpgradeConfigsList(),
    proto.envoy.api.v2.route.RouteAction.UpgradeConfig.toObject, includeInstance),
    internalRedirectAction: jspb.Message.getFieldWithDefault(msg, 26, 0),
    maxInternalRedirects: (f = msg.getMaxInternalRedirects()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    hedgePolicy: (f = msg.getHedgePolicy()) && proto.envoy.api.v2.route.HedgePolicy.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.route.RouteAction}
 */
proto.envoy.api.v2.route.RouteAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RouteAction;
  return proto.envoy.api.v2.route.RouteAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RouteAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RouteAction}
 */
proto.envoy.api.v2.route.RouteAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCluster(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterHeader(value);
      break;
    case 3:
      var value = new proto.envoy.api.v2.route.WeightedCluster;
      reader.readMessage(value,proto.envoy.api.v2.route.WeightedCluster.deserializeBinaryFromReader);
      msg.setWeightedClusters(value);
      break;
    case 20:
      var value = /** @type {!proto.envoy.api.v2.route.RouteAction.ClusterNotFoundResponseCode} */ (reader.readEnum());
      msg.setClusterNotFoundResponseCode(value);
      break;
    case 4:
      var value = new envoy_api_v2_core_base_pb.Metadata;
      reader.readMessage(value,envoy_api_v2_core_base_pb.Metadata.deserializeBinaryFromReader);
      msg.setMetadataMatch(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefixRewrite(value);
      break;
    case 32:
      var value = new envoy_type_matcher_regex_pb.RegexMatchAndSubstitute;
      reader.readMessage(value,envoy_type_matcher_regex_pb.RegexMatchAndSubstitute.deserializeBinaryFromReader);
      msg.setRegexRewrite(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostRewrite(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setAutoHostRewrite(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setAutoHostRewriteHeader(value);
      break;
    case 8:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    case 24:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setIdleTimeout(value);
      break;
    case 9:
      var value = new proto.envoy.api.v2.route.RetryPolicy;
      reader.readMessage(value,proto.envoy.api.v2.route.RetryPolicy.deserializeBinaryFromReader);
      msg.setRetryPolicy(value);
      break;
    case 33:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setRetryPolicyTypedConfig(value);
      break;
    case 10:
      var value = new proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy;
      reader.readMessage(value,proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.deserializeBinaryFromReader);
      msg.setRequestMirrorPolicy(value);
      break;
    case 30:
      var value = new proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy;
      reader.readMessage(value,proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.deserializeBinaryFromReader);
      msg.addRequestMirrorPolicies(value);
      break;
    case 11:
      var value = /** @type {!proto.envoy.api.v2.core.RoutingPriority} */ (reader.readEnum());
      msg.setPriority(value);
      break;
    case 13:
      var value = new proto.envoy.api.v2.route.RateLimit;
      reader.readMessage(value,proto.envoy.api.v2.route.RateLimit.deserializeBinaryFromReader);
      msg.addRateLimits(value);
      break;
    case 14:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setIncludeVhRateLimits(value);
      break;
    case 15:
      var value = new proto.envoy.api.v2.route.RouteAction.HashPolicy;
      reader.readMessage(value,proto.envoy.api.v2.route.RouteAction.HashPolicy.deserializeBinaryFromReader);
      msg.addHashPolicy(value);
      break;
    case 17:
      var value = new proto.envoy.api.v2.route.CorsPolicy;
      reader.readMessage(value,proto.envoy.api.v2.route.CorsPolicy.deserializeBinaryFromReader);
      msg.setCors(value);
      break;
    case 23:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMaxGrpcTimeout(value);
      break;
    case 28:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setGrpcTimeoutOffset(value);
      break;
    case 25:
      var value = new proto.envoy.api.v2.route.RouteAction.UpgradeConfig;
      reader.readMessage(value,proto.envoy.api.v2.route.RouteAction.UpgradeConfig.deserializeBinaryFromReader);
      msg.addUpgradeConfigs(value);
      break;
    case 26:
      var value = /** @type {!proto.envoy.api.v2.route.RouteAction.InternalRedirectAction} */ (reader.readEnum());
      msg.setInternalRedirectAction(value);
      break;
    case 31:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setMaxInternalRedirects(value);
      break;
    case 27:
      var value = new proto.envoy.api.v2.route.HedgePolicy;
      reader.readMessage(value,proto.envoy.api.v2.route.HedgePolicy.deserializeBinaryFromReader);
      msg.setHedgePolicy(value);
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
proto.envoy.api.v2.route.RouteAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RouteAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RouteAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getWeightedClusters();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.envoy.api.v2.route.WeightedCluster.serializeBinaryToWriter
    );
  }
  f = message.getClusterNotFoundResponseCode();
  if (f !== 0.0) {
    writer.writeEnum(
      20,
      f
    );
  }
  f = message.getMetadataMatch();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      envoy_api_v2_core_base_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getPrefixRewrite();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRegexRewrite();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      envoy_type_matcher_regex_pb.RegexMatchAndSubstitute.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAutoHostRewrite();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 29));
  if (f != null) {
    writer.writeString(
      29,
      f
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getIdleTimeout();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getRetryPolicy();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.envoy.api.v2.route.RetryPolicy.serializeBinaryToWriter
    );
  }
  f = message.getRetryPolicyTypedConfig();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getRequestMirrorPolicy();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.serializeBinaryToWriter
    );
  }
  f = message.getRequestMirrorPoliciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      30,
      f,
      proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.serializeBinaryToWriter
    );
  }
  f = message.getPriority();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getRateLimitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.envoy.api.v2.route.RateLimit.serializeBinaryToWriter
    );
  }
  f = message.getIncludeVhRateLimits();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getHashPolicyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.envoy.api.v2.route.RouteAction.HashPolicy.serializeBinaryToWriter
    );
  }
  f = message.getCors();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.envoy.api.v2.route.CorsPolicy.serializeBinaryToWriter
    );
  }
  f = message.getMaxGrpcTimeout();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getGrpcTimeoutOffset();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getUpgradeConfigsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      25,
      f,
      proto.envoy.api.v2.route.RouteAction.UpgradeConfig.serializeBinaryToWriter
    );
  }
  f = message.getInternalRedirectAction();
  if (f !== 0.0) {
    writer.writeEnum(
      26,
      f
    );
  }
  f = message.getMaxInternalRedirects();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getHedgePolicy();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.envoy.api.v2.route.HedgePolicy.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.api.v2.route.RouteAction.ClusterNotFoundResponseCode = {
  SERVICE_UNAVAILABLE: 0,
  NOT_FOUND: 1
};

/**
 * @enum {number}
 */
proto.envoy.api.v2.route.RouteAction.InternalRedirectAction = {
  PASS_THROUGH_INTERNAL_REDIRECT: 0,
  HANDLE_INTERNAL_REDIRECT: 1
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
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    cluster: jspb.Message.getFieldWithDefault(msg, 1, ""),
    runtimeKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    runtimeFraction: (f = msg.getRuntimeFraction()) && envoy_api_v2_core_base_pb.RuntimeFractionalPercent.toObject(includeInstance, f),
    traceSampled: (f = msg.getTraceSampled()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy}
 */
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy;
  return proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy}
 */
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCluster(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntimeKey(value);
      break;
    case 3:
      var value = new envoy_api_v2_core_base_pb.RuntimeFractionalPercent;
      reader.readMessage(value,envoy_api_v2_core_base_pb.RuntimeFractionalPercent.deserializeBinaryFromReader);
      msg.setRuntimeFraction(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setTraceSampled(value);
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
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCluster();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRuntimeKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRuntimeFraction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      envoy_api_v2_core_base_pb.RuntimeFractionalPercent.serializeBinaryToWriter
    );
  }
  f = message.getTraceSampled();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string cluster = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy} returns this
 */
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.prototype.setCluster = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string runtime_key = 2;
 * @return {string}
 */
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.prototype.getRuntimeKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy} returns this
 */
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.prototype.setRuntimeKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional envoy.api.v2.core.RuntimeFractionalPercent runtime_fraction = 3;
 * @return {?proto.envoy.api.v2.core.RuntimeFractionalPercent}
 */
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.prototype.getRuntimeFraction = function() {
  return /** @type{?proto.envoy.api.v2.core.RuntimeFractionalPercent} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.RuntimeFractionalPercent, 3));
};


/**
 * @param {?proto.envoy.api.v2.core.RuntimeFractionalPercent|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy} returns this
*/
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.prototype.setRuntimeFraction = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy} returns this
 */
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.prototype.clearRuntimeFraction = function() {
  return this.setRuntimeFraction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.prototype.hasRuntimeFraction = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.BoolValue trace_sampled = 4;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.prototype.getTraceSampled = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 4));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy} returns this
*/
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.prototype.setTraceSampled = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy} returns this
 */
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.prototype.clearTraceSampled = function() {
  return this.setTraceSampled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy.prototype.hasTraceSampled = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.oneofGroups_ = [[1,2,3,5,6]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.PolicySpecifierCase = {
  POLICY_SPECIFIER_NOT_SET: 0,
  HEADER: 1,
  COOKIE: 2,
  CONNECTION_PROPERTIES: 3,
  QUERY_PARAMETER: 5,
  FILTER_STATE: 6
};

/**
 * @return {proto.envoy.api.v2.route.RouteAction.HashPolicy.PolicySpecifierCase}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.getPolicySpecifierCase = function() {
  return /** @type {proto.envoy.api.v2.route.RouteAction.HashPolicy.PolicySpecifierCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.route.RouteAction.HashPolicy.oneofGroups_[0]));
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RouteAction.HashPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.envoy.api.v2.route.RouteAction.HashPolicy.Header.toObject(includeInstance, f),
    cookie: (f = msg.getCookie()) && proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.toObject(includeInstance, f),
    connectionProperties: (f = msg.getConnectionProperties()) && proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties.toObject(includeInstance, f),
    queryParameter: (f = msg.getQueryParameter()) && proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter.toObject(includeInstance, f),
    filterState: (f = msg.getFilterState()) && proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState.toObject(includeInstance, f),
    terminal: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RouteAction.HashPolicy;
  return proto.envoy.api.v2.route.RouteAction.HashPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.api.v2.route.RouteAction.HashPolicy.Header;
      reader.readMessage(value,proto.envoy.api.v2.route.RouteAction.HashPolicy.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie;
      reader.readMessage(value,proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.deserializeBinaryFromReader);
      msg.setCookie(value);
      break;
    case 3:
      var value = new proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties;
      reader.readMessage(value,proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties.deserializeBinaryFromReader);
      msg.setConnectionProperties(value);
      break;
    case 5:
      var value = new proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter;
      reader.readMessage(value,proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter.deserializeBinaryFromReader);
      msg.setQueryParameter(value);
      break;
    case 6:
      var value = new proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState;
      reader.readMessage(value,proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState.deserializeBinaryFromReader);
      msg.setFilterState(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTerminal(value);
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RouteAction.HashPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.envoy.api.v2.route.RouteAction.HashPolicy.Header.serializeBinaryToWriter
    );
  }
  f = message.getCookie();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.serializeBinaryToWriter
    );
  }
  f = message.getConnectionProperties();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties.serializeBinaryToWriter
    );
  }
  f = message.getQueryParameter();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter.serializeBinaryToWriter
    );
  }
  f = message.getFilterState();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState.serializeBinaryToWriter
    );
  }
  f = message.getTerminal();
  if (f) {
    writer.writeBool(
      4,
      f
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.Header.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RouteAction.HashPolicy.Header.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy.Header} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Header.toObject = function(includeInstance, msg) {
  var f, obj = {
    headerName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.Header}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Header.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RouteAction.HashPolicy.Header;
  return proto.envoy.api.v2.route.RouteAction.HashPolicy.Header.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy.Header} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.Header}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Header.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeaderName(value);
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.Header.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RouteAction.HashPolicy.Header.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy.Header} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Header.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeaderName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string header_name = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Header.prototype.getHeaderName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.Header} returns this
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Header.prototype.setHeaderName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ttl: (f = msg.getTtl()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    path: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie;
  return proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTtl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTtl();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie} returns this
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Duration ttl = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.prototype.getTtl = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie} returns this
*/
proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.prototype.setTtl = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie} returns this
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.prototype.clearTtl = function() {
  return this.setTtl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.prototype.hasTtl = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string path = 3;
 * @return {string}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie} returns this
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourceIp: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties;
  return proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSourceIp(value);
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceIp();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool source_ip = 1;
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties.prototype.getSourceIp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties} returns this
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties.prototype.setSourceIp = function(value) {
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter;
  return proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter.deserializeBinaryFromReader = function(msg, reader) {
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter} returns this
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState.toObject = function(includeInstance, msg) {
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
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState;
  return proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState.deserializeBinaryFromReader = function(msg, reader) {
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
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
proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState} returns this
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Header header = 1;
 * @return {?proto.envoy.api.v2.route.RouteAction.HashPolicy.Header}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.getHeader = function() {
  return /** @type{?proto.envoy.api.v2.route.RouteAction.HashPolicy.Header} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RouteAction.HashPolicy.Header, 1));
};


/**
 * @param {?proto.envoy.api.v2.route.RouteAction.HashPolicy.Header|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy} returns this
*/
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.setHeader = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.envoy.api.v2.route.RouteAction.HashPolicy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy} returns this
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Cookie cookie = 2;
 * @return {?proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.getCookie = function() {
  return /** @type{?proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie, 2));
};


/**
 * @param {?proto.envoy.api.v2.route.RouteAction.HashPolicy.Cookie|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy} returns this
*/
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.setCookie = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.envoy.api.v2.route.RouteAction.HashPolicy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy} returns this
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.clearCookie = function() {
  return this.setCookie(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.hasCookie = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ConnectionProperties connection_properties = 3;
 * @return {?proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.getConnectionProperties = function() {
  return /** @type{?proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties, 3));
};


/**
 * @param {?proto.envoy.api.v2.route.RouteAction.HashPolicy.ConnectionProperties|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy} returns this
*/
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.setConnectionProperties = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.envoy.api.v2.route.RouteAction.HashPolicy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy} returns this
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.clearConnectionProperties = function() {
  return this.setConnectionProperties(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.hasConnectionProperties = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional QueryParameter query_parameter = 5;
 * @return {?proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.getQueryParameter = function() {
  return /** @type{?proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter, 5));
};


/**
 * @param {?proto.envoy.api.v2.route.RouteAction.HashPolicy.QueryParameter|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy} returns this
*/
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.setQueryParameter = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.envoy.api.v2.route.RouteAction.HashPolicy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy} returns this
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.clearQueryParameter = function() {
  return this.setQueryParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.hasQueryParameter = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional FilterState filter_state = 6;
 * @return {?proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.getFilterState = function() {
  return /** @type{?proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState, 6));
};


/**
 * @param {?proto.envoy.api.v2.route.RouteAction.HashPolicy.FilterState|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy} returns this
*/
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.setFilterState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.envoy.api.v2.route.RouteAction.HashPolicy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy} returns this
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.clearFilterState = function() {
  return this.setFilterState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.hasFilterState = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool terminal = 4;
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.getTerminal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy} returns this
 */
proto.envoy.api.v2.route.RouteAction.HashPolicy.prototype.setTerminal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.envoy.api.v2.route.RouteAction.UpgradeConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RouteAction.UpgradeConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RouteAction.UpgradeConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.UpgradeConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    upgradeType: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.envoy.api.v2.route.RouteAction.UpgradeConfig}
 */
proto.envoy.api.v2.route.RouteAction.UpgradeConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RouteAction.UpgradeConfig;
  return proto.envoy.api.v2.route.RouteAction.UpgradeConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RouteAction.UpgradeConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RouteAction.UpgradeConfig}
 */
proto.envoy.api.v2.route.RouteAction.UpgradeConfig.deserializeBinaryFromReader = function(msg, reader) {
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
proto.envoy.api.v2.route.RouteAction.UpgradeConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RouteAction.UpgradeConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RouteAction.UpgradeConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RouteAction.UpgradeConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpgradeType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnabled();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string upgrade_type = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.RouteAction.UpgradeConfig.prototype.getUpgradeType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RouteAction.UpgradeConfig} returns this
 */
proto.envoy.api.v2.route.RouteAction.UpgradeConfig.prototype.setUpgradeType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.BoolValue enabled = 2;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.route.RouteAction.UpgradeConfig.prototype.getEnabled = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 2));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction.UpgradeConfig} returns this
*/
proto.envoy.api.v2.route.RouteAction.UpgradeConfig.prototype.setEnabled = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction.UpgradeConfig} returns this
 */
proto.envoy.api.v2.route.RouteAction.UpgradeConfig.prototype.clearEnabled = function() {
  return this.setEnabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.UpgradeConfig.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string cluster = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.setCluster = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.envoy.api.v2.route.RouteAction.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearCluster = function() {
  return jspb.Message.setOneofField(this, 1, proto.envoy.api.v2.route.RouteAction.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasCluster = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string cluster_header = 2;
 * @return {string}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getClusterHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.setClusterHeader = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.envoy.api.v2.route.RouteAction.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearClusterHeader = function() {
  return jspb.Message.setOneofField(this, 2, proto.envoy.api.v2.route.RouteAction.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasClusterHeader = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional WeightedCluster weighted_clusters = 3;
 * @return {?proto.envoy.api.v2.route.WeightedCluster}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getWeightedClusters = function() {
  return /** @type{?proto.envoy.api.v2.route.WeightedCluster} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.WeightedCluster, 3));
};


/**
 * @param {?proto.envoy.api.v2.route.WeightedCluster|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setWeightedClusters = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.envoy.api.v2.route.RouteAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearWeightedClusters = function() {
  return this.setWeightedClusters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasWeightedClusters = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ClusterNotFoundResponseCode cluster_not_found_response_code = 20;
 * @return {!proto.envoy.api.v2.route.RouteAction.ClusterNotFoundResponseCode}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getClusterNotFoundResponseCode = function() {
  return /** @type {!proto.envoy.api.v2.route.RouteAction.ClusterNotFoundResponseCode} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {!proto.envoy.api.v2.route.RouteAction.ClusterNotFoundResponseCode} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.setClusterNotFoundResponseCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 20, value);
};


/**
 * optional envoy.api.v2.core.Metadata metadata_match = 4;
 * @return {?proto.envoy.api.v2.core.Metadata}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getMetadataMatch = function() {
  return /** @type{?proto.envoy.api.v2.core.Metadata} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.Metadata, 4));
};


/**
 * @param {?proto.envoy.api.v2.core.Metadata|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setMetadataMatch = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearMetadataMatch = function() {
  return this.setMetadataMatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasMetadataMatch = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string prefix_rewrite = 5;
 * @return {string}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getPrefixRewrite = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.setPrefixRewrite = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional envoy.type.matcher.RegexMatchAndSubstitute regex_rewrite = 32;
 * @return {?proto.envoy.type.matcher.RegexMatchAndSubstitute}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getRegexRewrite = function() {
  return /** @type{?proto.envoy.type.matcher.RegexMatchAndSubstitute} */ (
    jspb.Message.getWrapperField(this, envoy_type_matcher_regex_pb.RegexMatchAndSubstitute, 32));
};


/**
 * @param {?proto.envoy.type.matcher.RegexMatchAndSubstitute|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setRegexRewrite = function(value) {
  return jspb.Message.setWrapperField(this, 32, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearRegexRewrite = function() {
  return this.setRegexRewrite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasRegexRewrite = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional string host_rewrite = 6;
 * @return {string}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getHostRewrite = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.setHostRewrite = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.envoy.api.v2.route.RouteAction.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearHostRewrite = function() {
  return jspb.Message.setOneofField(this, 6, proto.envoy.api.v2.route.RouteAction.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasHostRewrite = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.BoolValue auto_host_rewrite = 7;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getAutoHostRewrite = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 7));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setAutoHostRewrite = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.envoy.api.v2.route.RouteAction.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearAutoHostRewrite = function() {
  return this.setAutoHostRewrite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasAutoHostRewrite = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string auto_host_rewrite_header = 29;
 * @return {string}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getAutoHostRewriteHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.setAutoHostRewriteHeader = function(value) {
  return jspb.Message.setOneofField(this, 29, proto.envoy.api.v2.route.RouteAction.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearAutoHostRewriteHeader = function() {
  return jspb.Message.setOneofField(this, 29, proto.envoy.api.v2.route.RouteAction.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasAutoHostRewriteHeader = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional google.protobuf.Duration timeout = 8;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 8));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Duration idle_timeout = 24;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getIdleTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 24));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setIdleTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearIdleTimeout = function() {
  return this.setIdleTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasIdleTimeout = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional RetryPolicy retry_policy = 9;
 * @return {?proto.envoy.api.v2.route.RetryPolicy}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getRetryPolicy = function() {
  return /** @type{?proto.envoy.api.v2.route.RetryPolicy} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RetryPolicy, 9));
};


/**
 * @param {?proto.envoy.api.v2.route.RetryPolicy|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setRetryPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearRetryPolicy = function() {
  return this.setRetryPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasRetryPolicy = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Any retry_policy_typed_config = 33;
 * @return {?proto.google.protobuf.Any}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getRetryPolicyTypedConfig = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 33));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setRetryPolicyTypedConfig = function(value) {
  return jspb.Message.setWrapperField(this, 33, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearRetryPolicyTypedConfig = function() {
  return this.setRetryPolicyTypedConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasRetryPolicyTypedConfig = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional RequestMirrorPolicy request_mirror_policy = 10;
 * @return {?proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getRequestMirrorPolicy = function() {
  return /** @type{?proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy, 10));
};


/**
 * @param {?proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setRequestMirrorPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearRequestMirrorPolicy = function() {
  return this.setRequestMirrorPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasRequestMirrorPolicy = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated RequestMirrorPolicy request_mirror_policies = 30;
 * @return {!Array<!proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy>}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getRequestMirrorPoliciesList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy, 30));
};


/**
 * @param {!Array<!proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy>} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setRequestMirrorPoliciesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 30, value);
};


/**
 * @param {!proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy}
 */
proto.envoy.api.v2.route.RouteAction.prototype.addRequestMirrorPolicies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 30, opt_value, proto.envoy.api.v2.route.RouteAction.RequestMirrorPolicy, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearRequestMirrorPoliciesList = function() {
  return this.setRequestMirrorPoliciesList([]);
};


/**
 * optional envoy.api.v2.core.RoutingPriority priority = 11;
 * @return {!proto.envoy.api.v2.core.RoutingPriority}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getPriority = function() {
  return /** @type {!proto.envoy.api.v2.core.RoutingPriority} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.envoy.api.v2.core.RoutingPriority} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.setPriority = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * repeated RateLimit rate_limits = 13;
 * @return {!Array<!proto.envoy.api.v2.route.RateLimit>}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getRateLimitsList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.route.RateLimit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.route.RateLimit, 13));
};


/**
 * @param {!Array<!proto.envoy.api.v2.route.RateLimit>} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setRateLimitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.envoy.api.v2.route.RateLimit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.RateLimit}
 */
proto.envoy.api.v2.route.RouteAction.prototype.addRateLimits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.envoy.api.v2.route.RateLimit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearRateLimitsList = function() {
  return this.setRateLimitsList([]);
};


/**
 * optional google.protobuf.BoolValue include_vh_rate_limits = 14;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getIncludeVhRateLimits = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 14));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setIncludeVhRateLimits = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearIncludeVhRateLimits = function() {
  return this.setIncludeVhRateLimits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasIncludeVhRateLimits = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * repeated HashPolicy hash_policy = 15;
 * @return {!Array<!proto.envoy.api.v2.route.RouteAction.HashPolicy>}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getHashPolicyList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.route.RouteAction.HashPolicy>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.route.RouteAction.HashPolicy, 15));
};


/**
 * @param {!Array<!proto.envoy.api.v2.route.RouteAction.HashPolicy>} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setHashPolicyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.envoy.api.v2.route.RouteAction.HashPolicy=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.RouteAction.HashPolicy}
 */
proto.envoy.api.v2.route.RouteAction.prototype.addHashPolicy = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.envoy.api.v2.route.RouteAction.HashPolicy, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearHashPolicyList = function() {
  return this.setHashPolicyList([]);
};


/**
 * optional CorsPolicy cors = 17;
 * @return {?proto.envoy.api.v2.route.CorsPolicy}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getCors = function() {
  return /** @type{?proto.envoy.api.v2.route.CorsPolicy} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.CorsPolicy, 17));
};


/**
 * @param {?proto.envoy.api.v2.route.CorsPolicy|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setCors = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearCors = function() {
  return this.setCors(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasCors = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Duration max_grpc_timeout = 23;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getMaxGrpcTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 23));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setMaxGrpcTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearMaxGrpcTimeout = function() {
  return this.setMaxGrpcTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasMaxGrpcTimeout = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional google.protobuf.Duration grpc_timeout_offset = 28;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getGrpcTimeoutOffset = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 28));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setGrpcTimeoutOffset = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearGrpcTimeoutOffset = function() {
  return this.setGrpcTimeoutOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasGrpcTimeoutOffset = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * repeated UpgradeConfig upgrade_configs = 25;
 * @return {!Array<!proto.envoy.api.v2.route.RouteAction.UpgradeConfig>}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getUpgradeConfigsList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.route.RouteAction.UpgradeConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.route.RouteAction.UpgradeConfig, 25));
};


/**
 * @param {!Array<!proto.envoy.api.v2.route.RouteAction.UpgradeConfig>} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setUpgradeConfigsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 25, value);
};


/**
 * @param {!proto.envoy.api.v2.route.RouteAction.UpgradeConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.RouteAction.UpgradeConfig}
 */
proto.envoy.api.v2.route.RouteAction.prototype.addUpgradeConfigs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 25, opt_value, proto.envoy.api.v2.route.RouteAction.UpgradeConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearUpgradeConfigsList = function() {
  return this.setUpgradeConfigsList([]);
};


/**
 * optional InternalRedirectAction internal_redirect_action = 26;
 * @return {!proto.envoy.api.v2.route.RouteAction.InternalRedirectAction}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getInternalRedirectAction = function() {
  return /** @type {!proto.envoy.api.v2.route.RouteAction.InternalRedirectAction} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {!proto.envoy.api.v2.route.RouteAction.InternalRedirectAction} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.setInternalRedirectAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 26, value);
};


/**
 * optional google.protobuf.UInt32Value max_internal_redirects = 31;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getMaxInternalRedirects = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 31));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setMaxInternalRedirects = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearMaxInternalRedirects = function() {
  return this.setMaxInternalRedirects(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasMaxInternalRedirects = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional HedgePolicy hedge_policy = 27;
 * @return {?proto.envoy.api.v2.route.HedgePolicy}
 */
proto.envoy.api.v2.route.RouteAction.prototype.getHedgePolicy = function() {
  return /** @type{?proto.envoy.api.v2.route.HedgePolicy} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.HedgePolicy, 27));
};


/**
 * @param {?proto.envoy.api.v2.route.HedgePolicy|undefined} value
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
*/
proto.envoy.api.v2.route.RouteAction.prototype.setHedgePolicy = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RouteAction} returns this
 */
proto.envoy.api.v2.route.RouteAction.prototype.clearHedgePolicy = function() {
  return this.setHedgePolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RouteAction.prototype.hasHedgePolicy = function() {
  return jspb.Message.getField(this, 27) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.route.RetryPolicy.repeatedFields_ = [5,7,9,10];



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
proto.envoy.api.v2.route.RetryPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RetryPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RetryPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RetryPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    retryOn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    numRetries: (f = msg.getNumRetries()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    perTryTimeout: (f = msg.getPerTryTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    retryPriority: (f = msg.getRetryPriority()) && proto.envoy.api.v2.route.RetryPolicy.RetryPriority.toObject(includeInstance, f),
    retryHostPredicateList: jspb.Message.toObjectList(msg.getRetryHostPredicateList(),
    proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.toObject, includeInstance),
    hostSelectionRetryMaxAttempts: jspb.Message.getFieldWithDefault(msg, 6, 0),
    retriableStatusCodesList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    retryBackOff: (f = msg.getRetryBackOff()) && proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.toObject(includeInstance, f),
    retriableHeadersList: jspb.Message.toObjectList(msg.getRetriableHeadersList(),
    proto.envoy.api.v2.route.HeaderMatcher.toObject, includeInstance),
    retriableRequestHeadersList: jspb.Message.toObjectList(msg.getRetriableRequestHeadersList(),
    proto.envoy.api.v2.route.HeaderMatcher.toObject, includeInstance)
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
 * @return {!proto.envoy.api.v2.route.RetryPolicy}
 */
proto.envoy.api.v2.route.RetryPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RetryPolicy;
  return proto.envoy.api.v2.route.RetryPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RetryPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RetryPolicy}
 */
proto.envoy.api.v2.route.RetryPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRetryOn(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setNumRetries(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setPerTryTimeout(value);
      break;
    case 4:
      var value = new proto.envoy.api.v2.route.RetryPolicy.RetryPriority;
      reader.readMessage(value,proto.envoy.api.v2.route.RetryPolicy.RetryPriority.deserializeBinaryFromReader);
      msg.setRetryPriority(value);
      break;
    case 5:
      var value = new proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate;
      reader.readMessage(value,proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.deserializeBinaryFromReader);
      msg.addRetryHostPredicate(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHostSelectionRetryMaxAttempts(value);
      break;
    case 7:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setRetriableStatusCodesList(value);
      break;
    case 8:
      var value = new proto.envoy.api.v2.route.RetryPolicy.RetryBackOff;
      reader.readMessage(value,proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.deserializeBinaryFromReader);
      msg.setRetryBackOff(value);
      break;
    case 9:
      var value = new proto.envoy.api.v2.route.HeaderMatcher;
      reader.readMessage(value,proto.envoy.api.v2.route.HeaderMatcher.deserializeBinaryFromReader);
      msg.addRetriableHeaders(value);
      break;
    case 10:
      var value = new proto.envoy.api.v2.route.HeaderMatcher;
      reader.readMessage(value,proto.envoy.api.v2.route.HeaderMatcher.deserializeBinaryFromReader);
      msg.addRetriableRequestHeaders(value);
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
proto.envoy.api.v2.route.RetryPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RetryPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RetryPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RetryPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRetryOn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNumRetries();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getPerTryTimeout();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getRetryPriority();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.envoy.api.v2.route.RetryPolicy.RetryPriority.serializeBinaryToWriter
    );
  }
  f = message.getRetryHostPredicateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.serializeBinaryToWriter
    );
  }
  f = message.getHostSelectionRetryMaxAttempts();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getRetriableStatusCodesList();
  if (f.length > 0) {
    writer.writePackedUint32(
      7,
      f
    );
  }
  f = message.getRetryBackOff();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.serializeBinaryToWriter
    );
  }
  f = message.getRetriableHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.envoy.api.v2.route.HeaderMatcher.serializeBinaryToWriter
    );
  }
  f = message.getRetriableRequestHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.envoy.api.v2.route.HeaderMatcher.serializeBinaryToWriter
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
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.ConfigTypeCase = {
  CONFIG_TYPE_NOT_SET: 0,
  CONFIG: 2,
  TYPED_CONFIG: 3
};

/**
 * @return {proto.envoy.api.v2.route.RetryPolicy.RetryPriority.ConfigTypeCase}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.prototype.getConfigTypeCase = function() {
  return /** @type {proto.envoy.api.v2.route.RetryPolicy.RetryPriority.ConfigTypeCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.route.RetryPolicy.RetryPriority.oneofGroups_[0]));
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
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RetryPolicy.RetryPriority.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RetryPolicy.RetryPriority} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.toObject = function(includeInstance, msg) {
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
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryPriority}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RetryPolicy.RetryPriority;
  return proto.envoy.api.v2.route.RetryPolicy.RetryPriority.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RetryPolicy.RetryPriority} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryPriority}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
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
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RetryPolicy.RetryPriority.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RetryPolicy.RetryPriority} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.serializeBinaryToWriter = function(message, writer) {
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
      3,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryPriority} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct config = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.prototype.getConfig = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryPriority} returns this
*/
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.prototype.setConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.envoy.api.v2.route.RetryPolicy.RetryPriority.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryPriority} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Any typed_config = 3;
 * @return {?proto.google.protobuf.Any}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.prototype.getTypedConfig = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 3));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryPriority} returns this
*/
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.prototype.setTypedConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.envoy.api.v2.route.RetryPolicy.RetryPriority.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryPriority} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.prototype.clearTypedConfig = function() {
  return this.setTypedConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryPriority.prototype.hasTypedConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.ConfigTypeCase = {
  CONFIG_TYPE_NOT_SET: 0,
  CONFIG: 2,
  TYPED_CONFIG: 3
};

/**
 * @return {proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.ConfigTypeCase}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.prototype.getConfigTypeCase = function() {
  return /** @type {proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.ConfigTypeCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.oneofGroups_[0]));
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
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.toObject = function(includeInstance, msg) {
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
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate;
  return proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
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
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.serializeBinaryToWriter = function(message, writer) {
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
      3,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct config = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.prototype.getConfig = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate} returns this
*/
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.prototype.setConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Any typed_config = 3;
 * @return {?proto.google.protobuf.Any}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.prototype.getTypedConfig = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 3));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate} returns this
*/
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.prototype.setTypedConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.prototype.clearTypedConfig = function() {
  return this.setTypedConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate.prototype.hasTypedConfig = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RetryPolicy.RetryBackOff} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseInterval: (f = msg.getBaseInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    maxInterval: (f = msg.getMaxInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryBackOff}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RetryPolicy.RetryBackOff;
  return proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RetryPolicy.RetryBackOff} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryBackOff}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setBaseInterval(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMaxInterval(value);
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
proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RetryPolicy.RetryBackOff} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseInterval();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getMaxInterval();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration base_interval = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.prototype.getBaseInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryBackOff} returns this
*/
proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.prototype.setBaseInterval = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryBackOff} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.prototype.clearBaseInterval = function() {
  return this.setBaseInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.prototype.hasBaseInterval = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration max_interval = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.prototype.getMaxInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryBackOff} returns this
*/
proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.prototype.setMaxInterval = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryBackOff} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.prototype.clearMaxInterval = function() {
  return this.setMaxInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RetryPolicy.RetryBackOff.prototype.hasMaxInterval = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string retry_on = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.getRetryOn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.setRetryOn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.UInt32Value num_retries = 2;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.getNumRetries = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 2));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
*/
proto.envoy.api.v2.route.RetryPolicy.prototype.setNumRetries = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.clearNumRetries = function() {
  return this.setNumRetries(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.hasNumRetries = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration per_try_timeout = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.getPerTryTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
*/
proto.envoy.api.v2.route.RetryPolicy.prototype.setPerTryTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.clearPerTryTimeout = function() {
  return this.setPerTryTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.hasPerTryTimeout = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RetryPriority retry_priority = 4;
 * @return {?proto.envoy.api.v2.route.RetryPolicy.RetryPriority}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.getRetryPriority = function() {
  return /** @type{?proto.envoy.api.v2.route.RetryPolicy.RetryPriority} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RetryPolicy.RetryPriority, 4));
};


/**
 * @param {?proto.envoy.api.v2.route.RetryPolicy.RetryPriority|undefined} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
*/
proto.envoy.api.v2.route.RetryPolicy.prototype.setRetryPriority = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.clearRetryPriority = function() {
  return this.setRetryPriority(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.hasRetryPriority = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated RetryHostPredicate retry_host_predicate = 5;
 * @return {!Array<!proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate>}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.getRetryHostPredicateList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate, 5));
};


/**
 * @param {!Array<!proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate>} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
*/
proto.envoy.api.v2.route.RetryPolicy.prototype.setRetryHostPredicateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.addRetryHostPredicate = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.envoy.api.v2.route.RetryPolicy.RetryHostPredicate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.clearRetryHostPredicateList = function() {
  return this.setRetryHostPredicateList([]);
};


/**
 * optional int64 host_selection_retry_max_attempts = 6;
 * @return {number}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.getHostSelectionRetryMaxAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.setHostSelectionRetryMaxAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated uint32 retriable_status_codes = 7;
 * @return {!Array<number>}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.getRetriableStatusCodesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.setRetriableStatusCodesList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.addRetriableStatusCodes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.clearRetriableStatusCodesList = function() {
  return this.setRetriableStatusCodesList([]);
};


/**
 * optional RetryBackOff retry_back_off = 8;
 * @return {?proto.envoy.api.v2.route.RetryPolicy.RetryBackOff}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.getRetryBackOff = function() {
  return /** @type{?proto.envoy.api.v2.route.RetryPolicy.RetryBackOff} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RetryPolicy.RetryBackOff, 8));
};


/**
 * @param {?proto.envoy.api.v2.route.RetryPolicy.RetryBackOff|undefined} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
*/
proto.envoy.api.v2.route.RetryPolicy.prototype.setRetryBackOff = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.clearRetryBackOff = function() {
  return this.setRetryBackOff(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.hasRetryBackOff = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated HeaderMatcher retriable_headers = 9;
 * @return {!Array<!proto.envoy.api.v2.route.HeaderMatcher>}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.getRetriableHeadersList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.route.HeaderMatcher>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.route.HeaderMatcher, 9));
};


/**
 * @param {!Array<!proto.envoy.api.v2.route.HeaderMatcher>} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
*/
proto.envoy.api.v2.route.RetryPolicy.prototype.setRetriableHeadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.envoy.api.v2.route.HeaderMatcher=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.HeaderMatcher}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.addRetriableHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.envoy.api.v2.route.HeaderMatcher, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.clearRetriableHeadersList = function() {
  return this.setRetriableHeadersList([]);
};


/**
 * repeated HeaderMatcher retriable_request_headers = 10;
 * @return {!Array<!proto.envoy.api.v2.route.HeaderMatcher>}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.getRetriableRequestHeadersList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.route.HeaderMatcher>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.route.HeaderMatcher, 10));
};


/**
 * @param {!Array<!proto.envoy.api.v2.route.HeaderMatcher>} value
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
*/
proto.envoy.api.v2.route.RetryPolicy.prototype.setRetriableRequestHeadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.envoy.api.v2.route.HeaderMatcher=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.HeaderMatcher}
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.addRetriableRequestHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.envoy.api.v2.route.HeaderMatcher, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.RetryPolicy} returns this
 */
proto.envoy.api.v2.route.RetryPolicy.prototype.clearRetriableRequestHeadersList = function() {
  return this.setRetriableRequestHeadersList([]);
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
proto.envoy.api.v2.route.HedgePolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.HedgePolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.HedgePolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.HedgePolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    initialRequests: (f = msg.getInitialRequests()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    additionalRequestChance: (f = msg.getAdditionalRequestChance()) && envoy_type_percent_pb.FractionalPercent.toObject(includeInstance, f),
    hedgeOnPerTryTimeout: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.envoy.api.v2.route.HedgePolicy}
 */
proto.envoy.api.v2.route.HedgePolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.HedgePolicy;
  return proto.envoy.api.v2.route.HedgePolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.HedgePolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.HedgePolicy}
 */
proto.envoy.api.v2.route.HedgePolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setInitialRequests(value);
      break;
    case 2:
      var value = new envoy_type_percent_pb.FractionalPercent;
      reader.readMessage(value,envoy_type_percent_pb.FractionalPercent.deserializeBinaryFromReader);
      msg.setAdditionalRequestChance(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHedgeOnPerTryTimeout(value);
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
proto.envoy.api.v2.route.HedgePolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.HedgePolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.HedgePolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.HedgePolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInitialRequests();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getAdditionalRequestChance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      envoy_type_percent_pb.FractionalPercent.serializeBinaryToWriter
    );
  }
  f = message.getHedgeOnPerTryTimeout();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.UInt32Value initial_requests = 1;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.route.HedgePolicy.prototype.getInitialRequests = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 1));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.envoy.api.v2.route.HedgePolicy} returns this
*/
proto.envoy.api.v2.route.HedgePolicy.prototype.setInitialRequests = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.HedgePolicy} returns this
 */
proto.envoy.api.v2.route.HedgePolicy.prototype.clearInitialRequests = function() {
  return this.setInitialRequests(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.HedgePolicy.prototype.hasInitialRequests = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional envoy.type.FractionalPercent additional_request_chance = 2;
 * @return {?proto.envoy.type.FractionalPercent}
 */
proto.envoy.api.v2.route.HedgePolicy.prototype.getAdditionalRequestChance = function() {
  return /** @type{?proto.envoy.type.FractionalPercent} */ (
    jspb.Message.getWrapperField(this, envoy_type_percent_pb.FractionalPercent, 2));
};


/**
 * @param {?proto.envoy.type.FractionalPercent|undefined} value
 * @return {!proto.envoy.api.v2.route.HedgePolicy} returns this
*/
proto.envoy.api.v2.route.HedgePolicy.prototype.setAdditionalRequestChance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.HedgePolicy} returns this
 */
proto.envoy.api.v2.route.HedgePolicy.prototype.clearAdditionalRequestChance = function() {
  return this.setAdditionalRequestChance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.HedgePolicy.prototype.hasAdditionalRequestChance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool hedge_on_per_try_timeout = 3;
 * @return {boolean}
 */
proto.envoy.api.v2.route.HedgePolicy.prototype.getHedgeOnPerTryTimeout = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.route.HedgePolicy} returns this
 */
proto.envoy.api.v2.route.HedgePolicy.prototype.setHedgeOnPerTryTimeout = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.api.v2.route.RedirectAction.oneofGroups_ = [[4,7],[2,5]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.route.RedirectAction.SchemeRewriteSpecifierCase = {
  SCHEME_REWRITE_SPECIFIER_NOT_SET: 0,
  HTTPS_REDIRECT: 4,
  SCHEME_REDIRECT: 7
};

/**
 * @return {proto.envoy.api.v2.route.RedirectAction.SchemeRewriteSpecifierCase}
 */
proto.envoy.api.v2.route.RedirectAction.prototype.getSchemeRewriteSpecifierCase = function() {
  return /** @type {proto.envoy.api.v2.route.RedirectAction.SchemeRewriteSpecifierCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.route.RedirectAction.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.envoy.api.v2.route.RedirectAction.PathRewriteSpecifierCase = {
  PATH_REWRITE_SPECIFIER_NOT_SET: 0,
  PATH_REDIRECT: 2,
  PREFIX_REWRITE: 5
};

/**
 * @return {proto.envoy.api.v2.route.RedirectAction.PathRewriteSpecifierCase}
 */
proto.envoy.api.v2.route.RedirectAction.prototype.getPathRewriteSpecifierCase = function() {
  return /** @type {proto.envoy.api.v2.route.RedirectAction.PathRewriteSpecifierCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.route.RedirectAction.oneofGroups_[1]));
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
proto.envoy.api.v2.route.RedirectAction.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RedirectAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RedirectAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RedirectAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    httpsRedirect: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    schemeRedirect: jspb.Message.getFieldWithDefault(msg, 7, ""),
    hostRedirect: jspb.Message.getFieldWithDefault(msg, 1, ""),
    portRedirect: jspb.Message.getFieldWithDefault(msg, 8, 0),
    pathRedirect: jspb.Message.getFieldWithDefault(msg, 2, ""),
    prefixRewrite: jspb.Message.getFieldWithDefault(msg, 5, ""),
    responseCode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    stripQuery: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.envoy.api.v2.route.RedirectAction}
 */
proto.envoy.api.v2.route.RedirectAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RedirectAction;
  return proto.envoy.api.v2.route.RedirectAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RedirectAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RedirectAction}
 */
proto.envoy.api.v2.route.RedirectAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHttpsRedirect(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemeRedirect(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostRedirect(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPortRedirect(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPathRedirect(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefixRewrite(value);
      break;
    case 3:
      var value = /** @type {!proto.envoy.api.v2.route.RedirectAction.RedirectResponseCode} */ (reader.readEnum());
      msg.setResponseCode(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStripQuery(value);
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
proto.envoy.api.v2.route.RedirectAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RedirectAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RedirectAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RedirectAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getHostRedirect();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPortRedirect();
  if (f !== 0) {
    writer.writeUint32(
      8,
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
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getResponseCode();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getStripQuery();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.api.v2.route.RedirectAction.RedirectResponseCode = {
  MOVED_PERMANENTLY: 0,
  FOUND: 1,
  SEE_OTHER: 2,
  TEMPORARY_REDIRECT: 3,
  PERMANENT_REDIRECT: 4
};

/**
 * optional bool https_redirect = 4;
 * @return {boolean}
 */
proto.envoy.api.v2.route.RedirectAction.prototype.getHttpsRedirect = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.route.RedirectAction} returns this
 */
proto.envoy.api.v2.route.RedirectAction.prototype.setHttpsRedirect = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.envoy.api.v2.route.RedirectAction.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.RedirectAction} returns this
 */
proto.envoy.api.v2.route.RedirectAction.prototype.clearHttpsRedirect = function() {
  return jspb.Message.setOneofField(this, 4, proto.envoy.api.v2.route.RedirectAction.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RedirectAction.prototype.hasHttpsRedirect = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string scheme_redirect = 7;
 * @return {string}
 */
proto.envoy.api.v2.route.RedirectAction.prototype.getSchemeRedirect = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RedirectAction} returns this
 */
proto.envoy.api.v2.route.RedirectAction.prototype.setSchemeRedirect = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.envoy.api.v2.route.RedirectAction.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.RedirectAction} returns this
 */
proto.envoy.api.v2.route.RedirectAction.prototype.clearSchemeRedirect = function() {
  return jspb.Message.setOneofField(this, 7, proto.envoy.api.v2.route.RedirectAction.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RedirectAction.prototype.hasSchemeRedirect = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string host_redirect = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.RedirectAction.prototype.getHostRedirect = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RedirectAction} returns this
 */
proto.envoy.api.v2.route.RedirectAction.prototype.setHostRedirect = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port_redirect = 8;
 * @return {number}
 */
proto.envoy.api.v2.route.RedirectAction.prototype.getPortRedirect = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.envoy.api.v2.route.RedirectAction} returns this
 */
proto.envoy.api.v2.route.RedirectAction.prototype.setPortRedirect = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string path_redirect = 2;
 * @return {string}
 */
proto.envoy.api.v2.route.RedirectAction.prototype.getPathRedirect = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RedirectAction} returns this
 */
proto.envoy.api.v2.route.RedirectAction.prototype.setPathRedirect = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.envoy.api.v2.route.RedirectAction.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.RedirectAction} returns this
 */
proto.envoy.api.v2.route.RedirectAction.prototype.clearPathRedirect = function() {
  return jspb.Message.setOneofField(this, 2, proto.envoy.api.v2.route.RedirectAction.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RedirectAction.prototype.hasPathRedirect = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string prefix_rewrite = 5;
 * @return {string}
 */
proto.envoy.api.v2.route.RedirectAction.prototype.getPrefixRewrite = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RedirectAction} returns this
 */
proto.envoy.api.v2.route.RedirectAction.prototype.setPrefixRewrite = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.envoy.api.v2.route.RedirectAction.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.RedirectAction} returns this
 */
proto.envoy.api.v2.route.RedirectAction.prototype.clearPrefixRewrite = function() {
  return jspb.Message.setOneofField(this, 5, proto.envoy.api.v2.route.RedirectAction.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RedirectAction.prototype.hasPrefixRewrite = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RedirectResponseCode response_code = 3;
 * @return {!proto.envoy.api.v2.route.RedirectAction.RedirectResponseCode}
 */
proto.envoy.api.v2.route.RedirectAction.prototype.getResponseCode = function() {
  return /** @type {!proto.envoy.api.v2.route.RedirectAction.RedirectResponseCode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.envoy.api.v2.route.RedirectAction.RedirectResponseCode} value
 * @return {!proto.envoy.api.v2.route.RedirectAction} returns this
 */
proto.envoy.api.v2.route.RedirectAction.prototype.setResponseCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool strip_query = 6;
 * @return {boolean}
 */
proto.envoy.api.v2.route.RedirectAction.prototype.getStripQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.route.RedirectAction} returns this
 */
proto.envoy.api.v2.route.RedirectAction.prototype.setStripQuery = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.envoy.api.v2.route.DirectResponseAction.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.DirectResponseAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.DirectResponseAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.DirectResponseAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    body: (f = msg.getBody()) && envoy_api_v2_core_base_pb.DataSource.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.route.DirectResponseAction}
 */
proto.envoy.api.v2.route.DirectResponseAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.DirectResponseAction;
  return proto.envoy.api.v2.route.DirectResponseAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.DirectResponseAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.DirectResponseAction}
 */
proto.envoy.api.v2.route.DirectResponseAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStatus(value);
      break;
    case 2:
      var value = new envoy_api_v2_core_base_pb.DataSource;
      reader.readMessage(value,envoy_api_v2_core_base_pb.DataSource.deserializeBinaryFromReader);
      msg.setBody(value);
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
proto.envoy.api.v2.route.DirectResponseAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.DirectResponseAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.DirectResponseAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.DirectResponseAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      envoy_api_v2_core_base_pb.DataSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 status = 1;
 * @return {number}
 */
proto.envoy.api.v2.route.DirectResponseAction.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.envoy.api.v2.route.DirectResponseAction} returns this
 */
proto.envoy.api.v2.route.DirectResponseAction.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional envoy.api.v2.core.DataSource body = 2;
 * @return {?proto.envoy.api.v2.core.DataSource}
 */
proto.envoy.api.v2.route.DirectResponseAction.prototype.getBody = function() {
  return /** @type{?proto.envoy.api.v2.core.DataSource} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.DataSource, 2));
};


/**
 * @param {?proto.envoy.api.v2.core.DataSource|undefined} value
 * @return {!proto.envoy.api.v2.route.DirectResponseAction} returns this
*/
proto.envoy.api.v2.route.DirectResponseAction.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.DirectResponseAction} returns this
 */
proto.envoy.api.v2.route.DirectResponseAction.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.DirectResponseAction.prototype.hasBody = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.envoy.api.v2.route.Decorator.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.Decorator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.Decorator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.Decorator.toObject = function(includeInstance, msg) {
  var f, obj = {
    operation: jspb.Message.getFieldWithDefault(msg, 1, ""),
    propagate: (f = msg.getPropagate()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.route.Decorator}
 */
proto.envoy.api.v2.route.Decorator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.Decorator;
  return proto.envoy.api.v2.route.Decorator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.Decorator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.Decorator}
 */
proto.envoy.api.v2.route.Decorator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperation(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setPropagate(value);
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
proto.envoy.api.v2.route.Decorator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.Decorator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.Decorator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.Decorator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperation();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPropagate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string operation = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.Decorator.prototype.getOperation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.Decorator} returns this
 */
proto.envoy.api.v2.route.Decorator.prototype.setOperation = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.BoolValue propagate = 2;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.route.Decorator.prototype.getPropagate = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 2));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.api.v2.route.Decorator} returns this
*/
proto.envoy.api.v2.route.Decorator.prototype.setPropagate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.Decorator} returns this
 */
proto.envoy.api.v2.route.Decorator.prototype.clearPropagate = function() {
  return this.setPropagate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.Decorator.prototype.hasPropagate = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.route.Tracing.repeatedFields_ = [4];



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
proto.envoy.api.v2.route.Tracing.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.Tracing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.Tracing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.Tracing.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientSampling: (f = msg.getClientSampling()) && envoy_type_percent_pb.FractionalPercent.toObject(includeInstance, f),
    randomSampling: (f = msg.getRandomSampling()) && envoy_type_percent_pb.FractionalPercent.toObject(includeInstance, f),
    overallSampling: (f = msg.getOverallSampling()) && envoy_type_percent_pb.FractionalPercent.toObject(includeInstance, f),
    customTagsList: jspb.Message.toObjectList(msg.getCustomTagsList(),
    envoy_type_tracing_v2_custom_tag_pb.CustomTag.toObject, includeInstance)
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
 * @return {!proto.envoy.api.v2.route.Tracing}
 */
proto.envoy.api.v2.route.Tracing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.Tracing;
  return proto.envoy.api.v2.route.Tracing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.Tracing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.Tracing}
 */
proto.envoy.api.v2.route.Tracing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_type_percent_pb.FractionalPercent;
      reader.readMessage(value,envoy_type_percent_pb.FractionalPercent.deserializeBinaryFromReader);
      msg.setClientSampling(value);
      break;
    case 2:
      var value = new envoy_type_percent_pb.FractionalPercent;
      reader.readMessage(value,envoy_type_percent_pb.FractionalPercent.deserializeBinaryFromReader);
      msg.setRandomSampling(value);
      break;
    case 3:
      var value = new envoy_type_percent_pb.FractionalPercent;
      reader.readMessage(value,envoy_type_percent_pb.FractionalPercent.deserializeBinaryFromReader);
      msg.setOverallSampling(value);
      break;
    case 4:
      var value = new envoy_type_tracing_v2_custom_tag_pb.CustomTag;
      reader.readMessage(value,envoy_type_tracing_v2_custom_tag_pb.CustomTag.deserializeBinaryFromReader);
      msg.addCustomTags(value);
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
proto.envoy.api.v2.route.Tracing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.Tracing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.Tracing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.Tracing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientSampling();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      envoy_type_percent_pb.FractionalPercent.serializeBinaryToWriter
    );
  }
  f = message.getRandomSampling();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      envoy_type_percent_pb.FractionalPercent.serializeBinaryToWriter
    );
  }
  f = message.getOverallSampling();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      envoy_type_percent_pb.FractionalPercent.serializeBinaryToWriter
    );
  }
  f = message.getCustomTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      envoy_type_tracing_v2_custom_tag_pb.CustomTag.serializeBinaryToWriter
    );
  }
};


/**
 * optional envoy.type.FractionalPercent client_sampling = 1;
 * @return {?proto.envoy.type.FractionalPercent}
 */
proto.envoy.api.v2.route.Tracing.prototype.getClientSampling = function() {
  return /** @type{?proto.envoy.type.FractionalPercent} */ (
    jspb.Message.getWrapperField(this, envoy_type_percent_pb.FractionalPercent, 1));
};


/**
 * @param {?proto.envoy.type.FractionalPercent|undefined} value
 * @return {!proto.envoy.api.v2.route.Tracing} returns this
*/
proto.envoy.api.v2.route.Tracing.prototype.setClientSampling = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.Tracing} returns this
 */
proto.envoy.api.v2.route.Tracing.prototype.clearClientSampling = function() {
  return this.setClientSampling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.Tracing.prototype.hasClientSampling = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional envoy.type.FractionalPercent random_sampling = 2;
 * @return {?proto.envoy.type.FractionalPercent}
 */
proto.envoy.api.v2.route.Tracing.prototype.getRandomSampling = function() {
  return /** @type{?proto.envoy.type.FractionalPercent} */ (
    jspb.Message.getWrapperField(this, envoy_type_percent_pb.FractionalPercent, 2));
};


/**
 * @param {?proto.envoy.type.FractionalPercent|undefined} value
 * @return {!proto.envoy.api.v2.route.Tracing} returns this
*/
proto.envoy.api.v2.route.Tracing.prototype.setRandomSampling = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.Tracing} returns this
 */
proto.envoy.api.v2.route.Tracing.prototype.clearRandomSampling = function() {
  return this.setRandomSampling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.Tracing.prototype.hasRandomSampling = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional envoy.type.FractionalPercent overall_sampling = 3;
 * @return {?proto.envoy.type.FractionalPercent}
 */
proto.envoy.api.v2.route.Tracing.prototype.getOverallSampling = function() {
  return /** @type{?proto.envoy.type.FractionalPercent} */ (
    jspb.Message.getWrapperField(this, envoy_type_percent_pb.FractionalPercent, 3));
};


/**
 * @param {?proto.envoy.type.FractionalPercent|undefined} value
 * @return {!proto.envoy.api.v2.route.Tracing} returns this
*/
proto.envoy.api.v2.route.Tracing.prototype.setOverallSampling = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.Tracing} returns this
 */
proto.envoy.api.v2.route.Tracing.prototype.clearOverallSampling = function() {
  return this.setOverallSampling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.Tracing.prototype.hasOverallSampling = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated envoy.type.tracing.v2.CustomTag custom_tags = 4;
 * @return {!Array<!proto.envoy.type.tracing.v2.CustomTag>}
 */
proto.envoy.api.v2.route.Tracing.prototype.getCustomTagsList = function() {
  return /** @type{!Array<!proto.envoy.type.tracing.v2.CustomTag>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_type_tracing_v2_custom_tag_pb.CustomTag, 4));
};


/**
 * @param {!Array<!proto.envoy.type.tracing.v2.CustomTag>} value
 * @return {!proto.envoy.api.v2.route.Tracing} returns this
*/
proto.envoy.api.v2.route.Tracing.prototype.setCustomTagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.envoy.type.tracing.v2.CustomTag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.type.tracing.v2.CustomTag}
 */
proto.envoy.api.v2.route.Tracing.prototype.addCustomTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.envoy.type.tracing.v2.CustomTag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.Tracing} returns this
 */
proto.envoy.api.v2.route.Tracing.prototype.clearCustomTagsList = function() {
  return this.setCustomTagsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.route.VirtualCluster.repeatedFields_ = [4];



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
proto.envoy.api.v2.route.VirtualCluster.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.VirtualCluster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.VirtualCluster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.VirtualCluster.toObject = function(includeInstance, msg) {
  var f, obj = {
    pattern: jspb.Message.getFieldWithDefault(msg, 1, ""),
    headersList: jspb.Message.toObjectList(msg.getHeadersList(),
    proto.envoy.api.v2.route.HeaderMatcher.toObject, includeInstance),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    method: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.envoy.api.v2.route.VirtualCluster}
 */
proto.envoy.api.v2.route.VirtualCluster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.VirtualCluster;
  return proto.envoy.api.v2.route.VirtualCluster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.VirtualCluster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.VirtualCluster}
 */
proto.envoy.api.v2.route.VirtualCluster.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPattern(value);
      break;
    case 4:
      var value = new proto.envoy.api.v2.route.HeaderMatcher;
      reader.readMessage(value,proto.envoy.api.v2.route.HeaderMatcher.deserializeBinaryFromReader);
      msg.addHeaders(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.envoy.api.v2.core.RequestMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.envoy.api.v2.route.VirtualCluster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.VirtualCluster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.VirtualCluster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.VirtualCluster.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPattern();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.envoy.api.v2.route.HeaderMatcher.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string pattern = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.VirtualCluster.prototype.getPattern = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.VirtualCluster} returns this
 */
proto.envoy.api.v2.route.VirtualCluster.prototype.setPattern = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated HeaderMatcher headers = 4;
 * @return {!Array<!proto.envoy.api.v2.route.HeaderMatcher>}
 */
proto.envoy.api.v2.route.VirtualCluster.prototype.getHeadersList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.route.HeaderMatcher>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.route.HeaderMatcher, 4));
};


/**
 * @param {!Array<!proto.envoy.api.v2.route.HeaderMatcher>} value
 * @return {!proto.envoy.api.v2.route.VirtualCluster} returns this
*/
proto.envoy.api.v2.route.VirtualCluster.prototype.setHeadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.envoy.api.v2.route.HeaderMatcher=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.HeaderMatcher}
 */
proto.envoy.api.v2.route.VirtualCluster.prototype.addHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.envoy.api.v2.route.HeaderMatcher, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.VirtualCluster} returns this
 */
proto.envoy.api.v2.route.VirtualCluster.prototype.clearHeadersList = function() {
  return this.setHeadersList([]);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.envoy.api.v2.route.VirtualCluster.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.VirtualCluster} returns this
 */
proto.envoy.api.v2.route.VirtualCluster.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional envoy.api.v2.core.RequestMethod method = 3;
 * @return {!proto.envoy.api.v2.core.RequestMethod}
 */
proto.envoy.api.v2.route.VirtualCluster.prototype.getMethod = function() {
  return /** @type {!proto.envoy.api.v2.core.RequestMethod} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.envoy.api.v2.core.RequestMethod} value
 * @return {!proto.envoy.api.v2.route.VirtualCluster} returns this
 */
proto.envoy.api.v2.route.VirtualCluster.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.route.RateLimit.repeatedFields_ = [3];



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
proto.envoy.api.v2.route.RateLimit.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RateLimit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RateLimit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RateLimit.toObject = function(includeInstance, msg) {
  var f, obj = {
    stage: (f = msg.getStage()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    disableKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.envoy.api.v2.route.RateLimit.Action.toObject, includeInstance)
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
 * @return {!proto.envoy.api.v2.route.RateLimit}
 */
proto.envoy.api.v2.route.RateLimit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RateLimit;
  return proto.envoy.api.v2.route.RateLimit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RateLimit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RateLimit}
 */
proto.envoy.api.v2.route.RateLimit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setStage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisableKey(value);
      break;
    case 3:
      var value = new proto.envoy.api.v2.route.RateLimit.Action;
      reader.readMessage(value,proto.envoy.api.v2.route.RateLimit.Action.deserializeBinaryFromReader);
      msg.addActions(value);
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
proto.envoy.api.v2.route.RateLimit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RateLimit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RateLimit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RateLimit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getDisableKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.envoy.api.v2.route.RateLimit.Action.serializeBinaryToWriter
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
proto.envoy.api.v2.route.RateLimit.Action.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.route.RateLimit.Action.ActionSpecifierCase = {
  ACTION_SPECIFIER_NOT_SET: 0,
  SOURCE_CLUSTER: 1,
  DESTINATION_CLUSTER: 2,
  REQUEST_HEADERS: 3,
  REMOTE_ADDRESS: 4,
  GENERIC_KEY: 5,
  HEADER_VALUE_MATCH: 6
};

/**
 * @return {proto.envoy.api.v2.route.RateLimit.Action.ActionSpecifierCase}
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.getActionSpecifierCase = function() {
  return /** @type {proto.envoy.api.v2.route.RateLimit.Action.ActionSpecifierCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.route.RateLimit.Action.oneofGroups_[0]));
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
proto.envoy.api.v2.route.RateLimit.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RateLimit.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RateLimit.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RateLimit.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourceCluster: (f = msg.getSourceCluster()) && proto.envoy.api.v2.route.RateLimit.Action.SourceCluster.toObject(includeInstance, f),
    destinationCluster: (f = msg.getDestinationCluster()) && proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster.toObject(includeInstance, f),
    requestHeaders: (f = msg.getRequestHeaders()) && proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.toObject(includeInstance, f),
    remoteAddress: (f = msg.getRemoteAddress()) && proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress.toObject(includeInstance, f),
    genericKey: (f = msg.getGenericKey()) && proto.envoy.api.v2.route.RateLimit.Action.GenericKey.toObject(includeInstance, f),
    headerValueMatch: (f = msg.getHeaderValueMatch()) && proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.route.RateLimit.Action}
 */
proto.envoy.api.v2.route.RateLimit.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RateLimit.Action;
  return proto.envoy.api.v2.route.RateLimit.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RateLimit.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RateLimit.Action}
 */
proto.envoy.api.v2.route.RateLimit.Action.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.api.v2.route.RateLimit.Action.SourceCluster;
      reader.readMessage(value,proto.envoy.api.v2.route.RateLimit.Action.SourceCluster.deserializeBinaryFromReader);
      msg.setSourceCluster(value);
      break;
    case 2:
      var value = new proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster;
      reader.readMessage(value,proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster.deserializeBinaryFromReader);
      msg.setDestinationCluster(value);
      break;
    case 3:
      var value = new proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders;
      reader.readMessage(value,proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.deserializeBinaryFromReader);
      msg.setRequestHeaders(value);
      break;
    case 4:
      var value = new proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress;
      reader.readMessage(value,proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress.deserializeBinaryFromReader);
      msg.setRemoteAddress(value);
      break;
    case 5:
      var value = new proto.envoy.api.v2.route.RateLimit.Action.GenericKey;
      reader.readMessage(value,proto.envoy.api.v2.route.RateLimit.Action.GenericKey.deserializeBinaryFromReader);
      msg.setGenericKey(value);
      break;
    case 6:
      var value = new proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch;
      reader.readMessage(value,proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.deserializeBinaryFromReader);
      msg.setHeaderValueMatch(value);
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
proto.envoy.api.v2.route.RateLimit.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RateLimit.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RateLimit.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RateLimit.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceCluster();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.envoy.api.v2.route.RateLimit.Action.SourceCluster.serializeBinaryToWriter
    );
  }
  f = message.getDestinationCluster();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster.serializeBinaryToWriter
    );
  }
  f = message.getRequestHeaders();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.serializeBinaryToWriter
    );
  }
  f = message.getRemoteAddress();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress.serializeBinaryToWriter
    );
  }
  f = message.getGenericKey();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.envoy.api.v2.route.RateLimit.Action.GenericKey.serializeBinaryToWriter
    );
  }
  f = message.getHeaderValueMatch();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.serializeBinaryToWriter
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
proto.envoy.api.v2.route.RateLimit.Action.SourceCluster.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RateLimit.Action.SourceCluster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.SourceCluster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RateLimit.Action.SourceCluster.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.SourceCluster}
 */
proto.envoy.api.v2.route.RateLimit.Action.SourceCluster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RateLimit.Action.SourceCluster;
  return proto.envoy.api.v2.route.RateLimit.Action.SourceCluster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.SourceCluster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.SourceCluster}
 */
proto.envoy.api.v2.route.RateLimit.Action.SourceCluster.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.envoy.api.v2.route.RateLimit.Action.SourceCluster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RateLimit.Action.SourceCluster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.SourceCluster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RateLimit.Action.SourceCluster.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster}
 */
proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster;
  return proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster}
 */
proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.toObject = function(includeInstance, msg) {
  var f, obj = {
    headerName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    descriptorKey: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders}
 */
proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders;
  return proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders}
 */
proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeaderName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescriptorKey(value);
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
proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeaderName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescriptorKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string header_name = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.prototype.getHeaderName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders} returns this
 */
proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.prototype.setHeaderName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string descriptor_key = 2;
 * @return {string}
 */
proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.prototype.getDescriptorKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders} returns this
 */
proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders.prototype.setDescriptorKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress}
 */
proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress;
  return proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress}
 */
proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.envoy.api.v2.route.RateLimit.Action.GenericKey.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RateLimit.Action.GenericKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.GenericKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RateLimit.Action.GenericKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    descriptorValue: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.GenericKey}
 */
proto.envoy.api.v2.route.RateLimit.Action.GenericKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RateLimit.Action.GenericKey;
  return proto.envoy.api.v2.route.RateLimit.Action.GenericKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.GenericKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.GenericKey}
 */
proto.envoy.api.v2.route.RateLimit.Action.GenericKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescriptorValue(value);
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
proto.envoy.api.v2.route.RateLimit.Action.GenericKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RateLimit.Action.GenericKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.GenericKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RateLimit.Action.GenericKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescriptorValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string descriptor_value = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.RateLimit.Action.GenericKey.prototype.getDescriptorValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.GenericKey} returns this
 */
proto.envoy.api.v2.route.RateLimit.Action.GenericKey.prototype.setDescriptorValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.repeatedFields_ = [3];



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
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    descriptorValue: jspb.Message.getFieldWithDefault(msg, 1, ""),
    expectMatch: (f = msg.getExpectMatch()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    headersList: jspb.Message.toObjectList(msg.getHeadersList(),
    proto.envoy.api.v2.route.HeaderMatcher.toObject, includeInstance)
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
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch}
 */
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch;
  return proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch}
 */
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescriptorValue(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setExpectMatch(value);
      break;
    case 3:
      var value = new proto.envoy.api.v2.route.HeaderMatcher;
      reader.readMessage(value,proto.envoy.api.v2.route.HeaderMatcher.deserializeBinaryFromReader);
      msg.addHeaders(value);
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
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescriptorValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExpectMatch();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.envoy.api.v2.route.HeaderMatcher.serializeBinaryToWriter
    );
  }
};


/**
 * optional string descriptor_value = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.prototype.getDescriptorValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch} returns this
 */
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.prototype.setDescriptorValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.BoolValue expect_match = 2;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.prototype.getExpectMatch = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 2));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch} returns this
*/
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.prototype.setExpectMatch = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch} returns this
 */
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.prototype.clearExpectMatch = function() {
  return this.setExpectMatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.prototype.hasExpectMatch = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated HeaderMatcher headers = 3;
 * @return {!Array<!proto.envoy.api.v2.route.HeaderMatcher>}
 */
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.prototype.getHeadersList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.route.HeaderMatcher>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.route.HeaderMatcher, 3));
};


/**
 * @param {!Array<!proto.envoy.api.v2.route.HeaderMatcher>} value
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch} returns this
*/
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.prototype.setHeadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.envoy.api.v2.route.HeaderMatcher=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.HeaderMatcher}
 */
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.prototype.addHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.envoy.api.v2.route.HeaderMatcher, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch} returns this
 */
proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch.prototype.clearHeadersList = function() {
  return this.setHeadersList([]);
};


/**
 * optional SourceCluster source_cluster = 1;
 * @return {?proto.envoy.api.v2.route.RateLimit.Action.SourceCluster}
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.getSourceCluster = function() {
  return /** @type{?proto.envoy.api.v2.route.RateLimit.Action.SourceCluster} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RateLimit.Action.SourceCluster, 1));
};


/**
 * @param {?proto.envoy.api.v2.route.RateLimit.Action.SourceCluster|undefined} value
 * @return {!proto.envoy.api.v2.route.RateLimit.Action} returns this
*/
proto.envoy.api.v2.route.RateLimit.Action.prototype.setSourceCluster = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.envoy.api.v2.route.RateLimit.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RateLimit.Action} returns this
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.clearSourceCluster = function() {
  return this.setSourceCluster(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.hasSourceCluster = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DestinationCluster destination_cluster = 2;
 * @return {?proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster}
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.getDestinationCluster = function() {
  return /** @type{?proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster, 2));
};


/**
 * @param {?proto.envoy.api.v2.route.RateLimit.Action.DestinationCluster|undefined} value
 * @return {!proto.envoy.api.v2.route.RateLimit.Action} returns this
*/
proto.envoy.api.v2.route.RateLimit.Action.prototype.setDestinationCluster = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.envoy.api.v2.route.RateLimit.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RateLimit.Action} returns this
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.clearDestinationCluster = function() {
  return this.setDestinationCluster(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.hasDestinationCluster = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RequestHeaders request_headers = 3;
 * @return {?proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders}
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.getRequestHeaders = function() {
  return /** @type{?proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders, 3));
};


/**
 * @param {?proto.envoy.api.v2.route.RateLimit.Action.RequestHeaders|undefined} value
 * @return {!proto.envoy.api.v2.route.RateLimit.Action} returns this
*/
proto.envoy.api.v2.route.RateLimit.Action.prototype.setRequestHeaders = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.envoy.api.v2.route.RateLimit.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RateLimit.Action} returns this
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.clearRequestHeaders = function() {
  return this.setRequestHeaders(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.hasRequestHeaders = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RemoteAddress remote_address = 4;
 * @return {?proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress}
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.getRemoteAddress = function() {
  return /** @type{?proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress, 4));
};


/**
 * @param {?proto.envoy.api.v2.route.RateLimit.Action.RemoteAddress|undefined} value
 * @return {!proto.envoy.api.v2.route.RateLimit.Action} returns this
*/
proto.envoy.api.v2.route.RateLimit.Action.prototype.setRemoteAddress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.envoy.api.v2.route.RateLimit.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RateLimit.Action} returns this
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.clearRemoteAddress = function() {
  return this.setRemoteAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.hasRemoteAddress = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional GenericKey generic_key = 5;
 * @return {?proto.envoy.api.v2.route.RateLimit.Action.GenericKey}
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.getGenericKey = function() {
  return /** @type{?proto.envoy.api.v2.route.RateLimit.Action.GenericKey} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RateLimit.Action.GenericKey, 5));
};


/**
 * @param {?proto.envoy.api.v2.route.RateLimit.Action.GenericKey|undefined} value
 * @return {!proto.envoy.api.v2.route.RateLimit.Action} returns this
*/
proto.envoy.api.v2.route.RateLimit.Action.prototype.setGenericKey = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.envoy.api.v2.route.RateLimit.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RateLimit.Action} returns this
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.clearGenericKey = function() {
  return this.setGenericKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.hasGenericKey = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional HeaderValueMatch header_value_match = 6;
 * @return {?proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch}
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.getHeaderValueMatch = function() {
  return /** @type{?proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch, 6));
};


/**
 * @param {?proto.envoy.api.v2.route.RateLimit.Action.HeaderValueMatch|undefined} value
 * @return {!proto.envoy.api.v2.route.RateLimit.Action} returns this
*/
proto.envoy.api.v2.route.RateLimit.Action.prototype.setHeaderValueMatch = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.envoy.api.v2.route.RateLimit.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RateLimit.Action} returns this
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.clearHeaderValueMatch = function() {
  return this.setHeaderValueMatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RateLimit.Action.prototype.hasHeaderValueMatch = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.UInt32Value stage = 1;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.route.RateLimit.prototype.getStage = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 1));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.envoy.api.v2.route.RateLimit} returns this
*/
proto.envoy.api.v2.route.RateLimit.prototype.setStage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.RateLimit} returns this
 */
proto.envoy.api.v2.route.RateLimit.prototype.clearStage = function() {
  return this.setStage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.RateLimit.prototype.hasStage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string disable_key = 2;
 * @return {string}
 */
proto.envoy.api.v2.route.RateLimit.prototype.getDisableKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.RateLimit} returns this
 */
proto.envoy.api.v2.route.RateLimit.prototype.setDisableKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Action actions = 3;
 * @return {!Array<!proto.envoy.api.v2.route.RateLimit.Action>}
 */
proto.envoy.api.v2.route.RateLimit.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.route.RateLimit.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.route.RateLimit.Action, 3));
};


/**
 * @param {!Array<!proto.envoy.api.v2.route.RateLimit.Action>} value
 * @return {!proto.envoy.api.v2.route.RateLimit} returns this
*/
proto.envoy.api.v2.route.RateLimit.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.envoy.api.v2.route.RateLimit.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.route.RateLimit.Action}
 */
proto.envoy.api.v2.route.RateLimit.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.envoy.api.v2.route.RateLimit.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.route.RateLimit} returns this
 */
proto.envoy.api.v2.route.RateLimit.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.api.v2.route.HeaderMatcher.oneofGroups_ = [[4,5,11,6,7,9,10]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.route.HeaderMatcher.HeaderMatchSpecifierCase = {
  HEADER_MATCH_SPECIFIER_NOT_SET: 0,
  EXACT_MATCH: 4,
  REGEX_MATCH: 5,
  SAFE_REGEX_MATCH: 11,
  RANGE_MATCH: 6,
  PRESENT_MATCH: 7,
  PREFIX_MATCH: 9,
  SUFFIX_MATCH: 10
};

/**
 * @return {proto.envoy.api.v2.route.HeaderMatcher.HeaderMatchSpecifierCase}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.getHeaderMatchSpecifierCase = function() {
  return /** @type {proto.envoy.api.v2.route.HeaderMatcher.HeaderMatchSpecifierCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.route.HeaderMatcher.oneofGroups_[0]));
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
proto.envoy.api.v2.route.HeaderMatcher.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.HeaderMatcher.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.HeaderMatcher} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.HeaderMatcher.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    exactMatch: jspb.Message.getFieldWithDefault(msg, 4, ""),
    regexMatch: jspb.Message.getFieldWithDefault(msg, 5, ""),
    safeRegexMatch: (f = msg.getSafeRegexMatch()) && envoy_type_matcher_regex_pb.RegexMatcher.toObject(includeInstance, f),
    rangeMatch: (f = msg.getRangeMatch()) && envoy_type_range_pb.Int64Range.toObject(includeInstance, f),
    presentMatch: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    prefixMatch: jspb.Message.getFieldWithDefault(msg, 9, ""),
    suffixMatch: jspb.Message.getFieldWithDefault(msg, 10, ""),
    invertMatch: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.envoy.api.v2.route.HeaderMatcher}
 */
proto.envoy.api.v2.route.HeaderMatcher.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.HeaderMatcher;
  return proto.envoy.api.v2.route.HeaderMatcher.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.HeaderMatcher} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.HeaderMatcher}
 */
proto.envoy.api.v2.route.HeaderMatcher.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExactMatch(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegexMatch(value);
      break;
    case 11:
      var value = new envoy_type_matcher_regex_pb.RegexMatcher;
      reader.readMessage(value,envoy_type_matcher_regex_pb.RegexMatcher.deserializeBinaryFromReader);
      msg.setSafeRegexMatch(value);
      break;
    case 6:
      var value = new envoy_type_range_pb.Int64Range;
      reader.readMessage(value,envoy_type_range_pb.Int64Range.deserializeBinaryFromReader);
      msg.setRangeMatch(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPresentMatch(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefixMatch(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuffixMatch(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInvertMatch(value);
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
proto.envoy.api.v2.route.HeaderMatcher.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.HeaderMatcher.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.HeaderMatcher} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.HeaderMatcher.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSafeRegexMatch();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      envoy_type_matcher_regex_pb.RegexMatcher.serializeBinaryToWriter
    );
  }
  f = message.getRangeMatch();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      envoy_type_range_pb.Int64Range.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getInvertMatch();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.HeaderMatcher} returns this
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string exact_match = 4;
 * @return {string}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.getExactMatch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.HeaderMatcher} returns this
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.setExactMatch = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.envoy.api.v2.route.HeaderMatcher.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.HeaderMatcher} returns this
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.clearExactMatch = function() {
  return jspb.Message.setOneofField(this, 4, proto.envoy.api.v2.route.HeaderMatcher.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.hasExactMatch = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string regex_match = 5;
 * @return {string}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.getRegexMatch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.HeaderMatcher} returns this
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.setRegexMatch = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.envoy.api.v2.route.HeaderMatcher.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.HeaderMatcher} returns this
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.clearRegexMatch = function() {
  return jspb.Message.setOneofField(this, 5, proto.envoy.api.v2.route.HeaderMatcher.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.hasRegexMatch = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional envoy.type.matcher.RegexMatcher safe_regex_match = 11;
 * @return {?proto.envoy.type.matcher.RegexMatcher}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.getSafeRegexMatch = function() {
  return /** @type{?proto.envoy.type.matcher.RegexMatcher} */ (
    jspb.Message.getWrapperField(this, envoy_type_matcher_regex_pb.RegexMatcher, 11));
};


/**
 * @param {?proto.envoy.type.matcher.RegexMatcher|undefined} value
 * @return {!proto.envoy.api.v2.route.HeaderMatcher} returns this
*/
proto.envoy.api.v2.route.HeaderMatcher.prototype.setSafeRegexMatch = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.envoy.api.v2.route.HeaderMatcher.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.HeaderMatcher} returns this
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.clearSafeRegexMatch = function() {
  return this.setSafeRegexMatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.hasSafeRegexMatch = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional envoy.type.Int64Range range_match = 6;
 * @return {?proto.envoy.type.Int64Range}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.getRangeMatch = function() {
  return /** @type{?proto.envoy.type.Int64Range} */ (
    jspb.Message.getWrapperField(this, envoy_type_range_pb.Int64Range, 6));
};


/**
 * @param {?proto.envoy.type.Int64Range|undefined} value
 * @return {!proto.envoy.api.v2.route.HeaderMatcher} returns this
*/
proto.envoy.api.v2.route.HeaderMatcher.prototype.setRangeMatch = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.envoy.api.v2.route.HeaderMatcher.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.HeaderMatcher} returns this
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.clearRangeMatch = function() {
  return this.setRangeMatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.hasRangeMatch = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool present_match = 7;
 * @return {boolean}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.getPresentMatch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.route.HeaderMatcher} returns this
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.setPresentMatch = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.envoy.api.v2.route.HeaderMatcher.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.HeaderMatcher} returns this
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.clearPresentMatch = function() {
  return jspb.Message.setOneofField(this, 7, proto.envoy.api.v2.route.HeaderMatcher.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.hasPresentMatch = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string prefix_match = 9;
 * @return {string}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.getPrefixMatch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.HeaderMatcher} returns this
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.setPrefixMatch = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.envoy.api.v2.route.HeaderMatcher.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.HeaderMatcher} returns this
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.clearPrefixMatch = function() {
  return jspb.Message.setOneofField(this, 9, proto.envoy.api.v2.route.HeaderMatcher.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.hasPrefixMatch = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string suffix_match = 10;
 * @return {string}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.getSuffixMatch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.HeaderMatcher} returns this
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.setSuffixMatch = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.envoy.api.v2.route.HeaderMatcher.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.HeaderMatcher} returns this
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.clearSuffixMatch = function() {
  return jspb.Message.setOneofField(this, 10, proto.envoy.api.v2.route.HeaderMatcher.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.hasSuffixMatch = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool invert_match = 8;
 * @return {boolean}
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.getInvertMatch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.route.HeaderMatcher} returns this
 */
proto.envoy.api.v2.route.HeaderMatcher.prototype.setInvertMatch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.api.v2.route.QueryParameterMatcher.oneofGroups_ = [[5,6]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.route.QueryParameterMatcher.QueryParameterMatchSpecifierCase = {
  QUERY_PARAMETER_MATCH_SPECIFIER_NOT_SET: 0,
  STRING_MATCH: 5,
  PRESENT_MATCH: 6
};

/**
 * @return {proto.envoy.api.v2.route.QueryParameterMatcher.QueryParameterMatchSpecifierCase}
 */
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.getQueryParameterMatchSpecifierCase = function() {
  return /** @type {proto.envoy.api.v2.route.QueryParameterMatcher.QueryParameterMatchSpecifierCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.route.QueryParameterMatcher.oneofGroups_[0]));
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
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.route.QueryParameterMatcher.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.route.QueryParameterMatcher} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.QueryParameterMatcher.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    regex: (f = msg.getRegex()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    stringMatch: (f = msg.getStringMatch()) && envoy_type_matcher_string_pb.StringMatcher.toObject(includeInstance, f),
    presentMatch: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.envoy.api.v2.route.QueryParameterMatcher}
 */
proto.envoy.api.v2.route.QueryParameterMatcher.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.route.QueryParameterMatcher;
  return proto.envoy.api.v2.route.QueryParameterMatcher.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.route.QueryParameterMatcher} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.route.QueryParameterMatcher}
 */
proto.envoy.api.v2.route.QueryParameterMatcher.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setRegex(value);
      break;
    case 5:
      var value = new envoy_type_matcher_string_pb.StringMatcher;
      reader.readMessage(value,envoy_type_matcher_string_pb.StringMatcher.deserializeBinaryFromReader);
      msg.setStringMatch(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPresentMatch(value);
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
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.route.QueryParameterMatcher.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.route.QueryParameterMatcher} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.route.QueryParameterMatcher.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRegex();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getStringMatch();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      envoy_type_matcher_string_pb.StringMatcher.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.QueryParameterMatcher} returns this
 */
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.route.QueryParameterMatcher} returns this
 */
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.BoolValue regex = 4;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.getRegex = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 4));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.envoy.api.v2.route.QueryParameterMatcher} returns this
*/
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.setRegex = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.QueryParameterMatcher} returns this
 */
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.clearRegex = function() {
  return this.setRegex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.hasRegex = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional envoy.type.matcher.StringMatcher string_match = 5;
 * @return {?proto.envoy.type.matcher.StringMatcher}
 */
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.getStringMatch = function() {
  return /** @type{?proto.envoy.type.matcher.StringMatcher} */ (
    jspb.Message.getWrapperField(this, envoy_type_matcher_string_pb.StringMatcher, 5));
};


/**
 * @param {?proto.envoy.type.matcher.StringMatcher|undefined} value
 * @return {!proto.envoy.api.v2.route.QueryParameterMatcher} returns this
*/
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.setStringMatch = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.envoy.api.v2.route.QueryParameterMatcher.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.route.QueryParameterMatcher} returns this
 */
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.clearStringMatch = function() {
  return this.setStringMatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.hasStringMatch = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool present_match = 6;
 * @return {boolean}
 */
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.getPresentMatch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.route.QueryParameterMatcher} returns this
 */
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.setPresentMatch = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.envoy.api.v2.route.QueryParameterMatcher.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.route.QueryParameterMatcher} returns this
 */
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.clearPresentMatch = function() {
  return jspb.Message.setOneofField(this, 6, proto.envoy.api.v2.route.QueryParameterMatcher.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.route.QueryParameterMatcher.prototype.hasPresentMatch = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.envoy.api.v2.route);
