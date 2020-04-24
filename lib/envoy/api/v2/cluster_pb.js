// source: envoy/api/v2/cluster.proto
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

var envoy_api_v2_auth_cert_pb = require('../../../envoy/api/v2/auth/cert_pb.js');
goog.object.extend(proto, envoy_api_v2_auth_cert_pb);
var envoy_api_v2_cluster_circuit_breaker_pb = require('../../../envoy/api/v2/cluster/circuit_breaker_pb.js');
goog.object.extend(proto, envoy_api_v2_cluster_circuit_breaker_pb);
var envoy_api_v2_cluster_filter_pb = require('../../../envoy/api/v2/cluster/filter_pb.js');
goog.object.extend(proto, envoy_api_v2_cluster_filter_pb);
var envoy_api_v2_cluster_outlier_detection_pb = require('../../../envoy/api/v2/cluster/outlier_detection_pb.js');
goog.object.extend(proto, envoy_api_v2_cluster_outlier_detection_pb);
var envoy_api_v2_core_address_pb = require('../../../envoy/api/v2/core/address_pb.js');
goog.object.extend(proto, envoy_api_v2_core_address_pb);
var envoy_api_v2_core_base_pb = require('../../../envoy/api/v2/core/base_pb.js');
goog.object.extend(proto, envoy_api_v2_core_base_pb);
var envoy_api_v2_core_config_source_pb = require('../../../envoy/api/v2/core/config_source_pb.js');
goog.object.extend(proto, envoy_api_v2_core_config_source_pb);
var envoy_api_v2_core_health_check_pb = require('../../../envoy/api/v2/core/health_check_pb.js');
goog.object.extend(proto, envoy_api_v2_core_health_check_pb);
var envoy_api_v2_core_protocol_pb = require('../../../envoy/api/v2/core/protocol_pb.js');
goog.object.extend(proto, envoy_api_v2_core_protocol_pb);
var envoy_api_v2_endpoint_pb = require('../../../envoy/api/v2/endpoint_pb.js');
goog.object.extend(proto, envoy_api_v2_endpoint_pb);
var envoy_type_percent_pb = require('../../../envoy/type/percent_pb.js');
goog.object.extend(proto, envoy_type_percent_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var envoy_annotations_deprecation_pb = require('../../../envoy/annotations/deprecation_pb.js');
goog.object.extend(proto, envoy_annotations_deprecation_pb);
var udpa_annotations_migrate_pb = require('../../../udpa/annotations/migrate_pb.js');
goog.object.extend(proto, udpa_annotations_migrate_pb);
var udpa_annotations_status_pb = require('../../../udpa/annotations/status_pb.js');
goog.object.extend(proto, udpa_annotations_status_pb);
var validate_validate_pb = require('../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.api.v2.Cluster', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.ClusterDiscoveryTypeCase', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.ClusterProtocolSelection', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.CommonLbConfig', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityConfigSpecifierCase', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.CustomClusterType', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.DiscoveryType', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.DnsLookupFamily', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.EdsClusterConfig', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.LbConfigCase', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.LbPolicy', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.LbSubsetConfig', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetFallbackPolicy', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.LbSubsetSelectorFallbackPolicy', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.LeastRequestLbConfig', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.OriginalDstLbConfig', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.RefreshRate', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.RingHashLbConfig', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.RingHashLbConfig.HashFunction', null, global);
goog.exportSymbol('proto.envoy.api.v2.Cluster.TransportSocketMatch', null, global);
goog.exportSymbol('proto.envoy.api.v2.LoadBalancingPolicy', null, global);
goog.exportSymbol('proto.envoy.api.v2.LoadBalancingPolicy.Policy', null, global);
goog.exportSymbol('proto.envoy.api.v2.UpstreamBindConfig', null, global);
goog.exportSymbol('proto.envoy.api.v2.UpstreamConnectionOptions', null, global);
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
proto.envoy.api.v2.Cluster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.Cluster.repeatedFields_, proto.envoy.api.v2.Cluster.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.Cluster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.Cluster.displayName = 'proto.envoy.api.v2.Cluster';
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
proto.envoy.api.v2.Cluster.TransportSocketMatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.Cluster.TransportSocketMatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.Cluster.TransportSocketMatch.displayName = 'proto.envoy.api.v2.Cluster.TransportSocketMatch';
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
proto.envoy.api.v2.Cluster.CustomClusterType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.Cluster.CustomClusterType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.Cluster.CustomClusterType.displayName = 'proto.envoy.api.v2.Cluster.CustomClusterType';
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
proto.envoy.api.v2.Cluster.EdsClusterConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.Cluster.EdsClusterConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.Cluster.EdsClusterConfig.displayName = 'proto.envoy.api.v2.Cluster.EdsClusterConfig';
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
proto.envoy.api.v2.Cluster.LbSubsetConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.Cluster.LbSubsetConfig.repeatedFields_, null);
};
goog.inherits(proto.envoy.api.v2.Cluster.LbSubsetConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.Cluster.LbSubsetConfig.displayName = 'proto.envoy.api.v2.Cluster.LbSubsetConfig';
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
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.repeatedFields_, null);
};
goog.inherits(proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.displayName = 'proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector';
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
proto.envoy.api.v2.Cluster.LeastRequestLbConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.Cluster.LeastRequestLbConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.Cluster.LeastRequestLbConfig.displayName = 'proto.envoy.api.v2.Cluster.LeastRequestLbConfig';
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
proto.envoy.api.v2.Cluster.RingHashLbConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.Cluster.RingHashLbConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.Cluster.RingHashLbConfig.displayName = 'proto.envoy.api.v2.Cluster.RingHashLbConfig';
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
proto.envoy.api.v2.Cluster.OriginalDstLbConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.Cluster.OriginalDstLbConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.Cluster.OriginalDstLbConfig.displayName = 'proto.envoy.api.v2.Cluster.OriginalDstLbConfig';
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
proto.envoy.api.v2.Cluster.CommonLbConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.api.v2.Cluster.CommonLbConfig.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.Cluster.CommonLbConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.Cluster.CommonLbConfig.displayName = 'proto.envoy.api.v2.Cluster.CommonLbConfig';
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
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.displayName = 'proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig';
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
proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig.displayName = 'proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig';
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
proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig.displayName = 'proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig';
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
proto.envoy.api.v2.Cluster.RefreshRate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.Cluster.RefreshRate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.Cluster.RefreshRate.displayName = 'proto.envoy.api.v2.Cluster.RefreshRate';
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
proto.envoy.api.v2.LoadBalancingPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.LoadBalancingPolicy.repeatedFields_, null);
};
goog.inherits(proto.envoy.api.v2.LoadBalancingPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.LoadBalancingPolicy.displayName = 'proto.envoy.api.v2.LoadBalancingPolicy';
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
proto.envoy.api.v2.LoadBalancingPolicy.Policy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.LoadBalancingPolicy.Policy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.LoadBalancingPolicy.Policy.displayName = 'proto.envoy.api.v2.LoadBalancingPolicy.Policy';
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
proto.envoy.api.v2.UpstreamBindConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.UpstreamBindConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.UpstreamBindConfig.displayName = 'proto.envoy.api.v2.UpstreamBindConfig';
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
proto.envoy.api.v2.UpstreamConnectionOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.UpstreamConnectionOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.UpstreamConnectionOptions.displayName = 'proto.envoy.api.v2.UpstreamConnectionOptions';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.Cluster.repeatedFields_ = [43,7,8,18,40];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.api.v2.Cluster.oneofGroups_ = [[2,38],[23,34,37]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.Cluster.ClusterDiscoveryTypeCase = {
  CLUSTER_DISCOVERY_TYPE_NOT_SET: 0,
  TYPE: 2,
  CLUSTER_TYPE: 38
};

/**
 * @return {proto.envoy.api.v2.Cluster.ClusterDiscoveryTypeCase}
 */
proto.envoy.api.v2.Cluster.prototype.getClusterDiscoveryTypeCase = function() {
  return /** @type {proto.envoy.api.v2.Cluster.ClusterDiscoveryTypeCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.Cluster.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.envoy.api.v2.Cluster.LbConfigCase = {
  LB_CONFIG_NOT_SET: 0,
  RING_HASH_LB_CONFIG: 23,
  ORIGINAL_DST_LB_CONFIG: 34,
  LEAST_REQUEST_LB_CONFIG: 37
};

/**
 * @return {proto.envoy.api.v2.Cluster.LbConfigCase}
 */
proto.envoy.api.v2.Cluster.prototype.getLbConfigCase = function() {
  return /** @type {proto.envoy.api.v2.Cluster.LbConfigCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.Cluster.oneofGroups_[1]));
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
proto.envoy.api.v2.Cluster.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.Cluster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.Cluster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.toObject = function(includeInstance, msg) {
  var f, obj = {
    transportSocketMatchesList: jspb.Message.toObjectList(msg.getTransportSocketMatchesList(),
    proto.envoy.api.v2.Cluster.TransportSocketMatch.toObject, includeInstance),
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    altStatName: jspb.Message.getFieldWithDefault(msg, 28, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    clusterType: (f = msg.getClusterType()) && proto.envoy.api.v2.Cluster.CustomClusterType.toObject(includeInstance, f),
    edsClusterConfig: (f = msg.getEdsClusterConfig()) && proto.envoy.api.v2.Cluster.EdsClusterConfig.toObject(includeInstance, f),
    connectTimeout: (f = msg.getConnectTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    perConnectionBufferLimitBytes: (f = msg.getPerConnectionBufferLimitBytes()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    lbPolicy: jspb.Message.getFieldWithDefault(msg, 6, 0),
    hostsList: jspb.Message.toObjectList(msg.getHostsList(),
    envoy_api_v2_core_address_pb.Address.toObject, includeInstance),
    loadAssignment: (f = msg.getLoadAssignment()) && envoy_api_v2_endpoint_pb.ClusterLoadAssignment.toObject(includeInstance, f),
    healthChecksList: jspb.Message.toObjectList(msg.getHealthChecksList(),
    envoy_api_v2_core_health_check_pb.HealthCheck.toObject, includeInstance),
    maxRequestsPerConnection: (f = msg.getMaxRequestsPerConnection()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    circuitBreakers: (f = msg.getCircuitBreakers()) && envoy_api_v2_cluster_circuit_breaker_pb.CircuitBreakers.toObject(includeInstance, f),
    tlsContext: (f = msg.getTlsContext()) && envoy_api_v2_auth_cert_pb.UpstreamTlsContext.toObject(includeInstance, f),
    upstreamHttpProtocolOptions: (f = msg.getUpstreamHttpProtocolOptions()) && envoy_api_v2_core_protocol_pb.UpstreamHttpProtocolOptions.toObject(includeInstance, f),
    commonHttpProtocolOptions: (f = msg.getCommonHttpProtocolOptions()) && envoy_api_v2_core_protocol_pb.HttpProtocolOptions.toObject(includeInstance, f),
    httpProtocolOptions: (f = msg.getHttpProtocolOptions()) && envoy_api_v2_core_protocol_pb.Http1ProtocolOptions.toObject(includeInstance, f),
    http2ProtocolOptions: (f = msg.getHttp2ProtocolOptions()) && envoy_api_v2_core_protocol_pb.Http2ProtocolOptions.toObject(includeInstance, f),
    extensionProtocolOptionsMap: (f = msg.getExtensionProtocolOptionsMap()) ? f.toObject(includeInstance, proto.google.protobuf.Struct.toObject) : [],
    typedExtensionProtocolOptionsMap: (f = msg.getTypedExtensionProtocolOptionsMap()) ? f.toObject(includeInstance, proto.google.protobuf.Any.toObject) : [],
    dnsRefreshRate: (f = msg.getDnsRefreshRate()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    dnsFailureRefreshRate: (f = msg.getDnsFailureRefreshRate()) && proto.envoy.api.v2.Cluster.RefreshRate.toObject(includeInstance, f),
    respectDnsTtl: jspb.Message.getBooleanFieldWithDefault(msg, 39, false),
    dnsLookupFamily: jspb.Message.getFieldWithDefault(msg, 17, 0),
    dnsResolversList: jspb.Message.toObjectList(msg.getDnsResolversList(),
    envoy_api_v2_core_address_pb.Address.toObject, includeInstance),
    useTcpForDnsLookups: jspb.Message.getBooleanFieldWithDefault(msg, 45, false),
    outlierDetection: (f = msg.getOutlierDetection()) && envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection.toObject(includeInstance, f),
    cleanupInterval: (f = msg.getCleanupInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    upstreamBindConfig: (f = msg.getUpstreamBindConfig()) && envoy_api_v2_core_address_pb.BindConfig.toObject(includeInstance, f),
    lbSubsetConfig: (f = msg.getLbSubsetConfig()) && proto.envoy.api.v2.Cluster.LbSubsetConfig.toObject(includeInstance, f),
    ringHashLbConfig: (f = msg.getRingHashLbConfig()) && proto.envoy.api.v2.Cluster.RingHashLbConfig.toObject(includeInstance, f),
    originalDstLbConfig: (f = msg.getOriginalDstLbConfig()) && proto.envoy.api.v2.Cluster.OriginalDstLbConfig.toObject(includeInstance, f),
    leastRequestLbConfig: (f = msg.getLeastRequestLbConfig()) && proto.envoy.api.v2.Cluster.LeastRequestLbConfig.toObject(includeInstance, f),
    commonLbConfig: (f = msg.getCommonLbConfig()) && proto.envoy.api.v2.Cluster.CommonLbConfig.toObject(includeInstance, f),
    transportSocket: (f = msg.getTransportSocket()) && envoy_api_v2_core_base_pb.TransportSocket.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && envoy_api_v2_core_base_pb.Metadata.toObject(includeInstance, f),
    protocolSelection: jspb.Message.getFieldWithDefault(msg, 26, 0),
    upstreamConnectionOptions: (f = msg.getUpstreamConnectionOptions()) && proto.envoy.api.v2.UpstreamConnectionOptions.toObject(includeInstance, f),
    closeConnectionsOnHostHealthFailure: jspb.Message.getBooleanFieldWithDefault(msg, 31, false),
    drainConnectionsOnHostRemoval: jspb.Message.getBooleanFieldWithDefault(msg, 32, false),
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    envoy_api_v2_cluster_filter_pb.Filter.toObject, includeInstance),
    loadBalancingPolicy: (f = msg.getLoadBalancingPolicy()) && proto.envoy.api.v2.LoadBalancingPolicy.toObject(includeInstance, f),
    lrsServer: (f = msg.getLrsServer()) && envoy_api_v2_core_config_source_pb.ConfigSource.toObject(includeInstance, f),
    trackTimeoutBudgets: jspb.Message.getBooleanFieldWithDefault(msg, 47, false)
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
 * @return {!proto.envoy.api.v2.Cluster}
 */
proto.envoy.api.v2.Cluster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.Cluster;
  return proto.envoy.api.v2.Cluster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.Cluster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.Cluster}
 */
proto.envoy.api.v2.Cluster.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 43:
      var value = new proto.envoy.api.v2.Cluster.TransportSocketMatch;
      reader.readMessage(value,proto.envoy.api.v2.Cluster.TransportSocketMatch.deserializeBinaryFromReader);
      msg.addTransportSocketMatches(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.setAltStatName(value);
      break;
    case 2:
      var value = /** @type {!proto.envoy.api.v2.Cluster.DiscoveryType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 38:
      var value = new proto.envoy.api.v2.Cluster.CustomClusterType;
      reader.readMessage(value,proto.envoy.api.v2.Cluster.CustomClusterType.deserializeBinaryFromReader);
      msg.setClusterType(value);
      break;
    case 3:
      var value = new proto.envoy.api.v2.Cluster.EdsClusterConfig;
      reader.readMessage(value,proto.envoy.api.v2.Cluster.EdsClusterConfig.deserializeBinaryFromReader);
      msg.setEdsClusterConfig(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setConnectTimeout(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setPerConnectionBufferLimitBytes(value);
      break;
    case 6:
      var value = /** @type {!proto.envoy.api.v2.Cluster.LbPolicy} */ (reader.readEnum());
      msg.setLbPolicy(value);
      break;
    case 7:
      var value = new envoy_api_v2_core_address_pb.Address;
      reader.readMessage(value,envoy_api_v2_core_address_pb.Address.deserializeBinaryFromReader);
      msg.addHosts(value);
      break;
    case 33:
      var value = new envoy_api_v2_endpoint_pb.ClusterLoadAssignment;
      reader.readMessage(value,envoy_api_v2_endpoint_pb.ClusterLoadAssignment.deserializeBinaryFromReader);
      msg.setLoadAssignment(value);
      break;
    case 8:
      var value = new envoy_api_v2_core_health_check_pb.HealthCheck;
      reader.readMessage(value,envoy_api_v2_core_health_check_pb.HealthCheck.deserializeBinaryFromReader);
      msg.addHealthChecks(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setMaxRequestsPerConnection(value);
      break;
    case 10:
      var value = new envoy_api_v2_cluster_circuit_breaker_pb.CircuitBreakers;
      reader.readMessage(value,envoy_api_v2_cluster_circuit_breaker_pb.CircuitBreakers.deserializeBinaryFromReader);
      msg.setCircuitBreakers(value);
      break;
    case 11:
      var value = new envoy_api_v2_auth_cert_pb.UpstreamTlsContext;
      reader.readMessage(value,envoy_api_v2_auth_cert_pb.UpstreamTlsContext.deserializeBinaryFromReader);
      msg.setTlsContext(value);
      break;
    case 46:
      var value = new envoy_api_v2_core_protocol_pb.UpstreamHttpProtocolOptions;
      reader.readMessage(value,envoy_api_v2_core_protocol_pb.UpstreamHttpProtocolOptions.deserializeBinaryFromReader);
      msg.setUpstreamHttpProtocolOptions(value);
      break;
    case 29:
      var value = new envoy_api_v2_core_protocol_pb.HttpProtocolOptions;
      reader.readMessage(value,envoy_api_v2_core_protocol_pb.HttpProtocolOptions.deserializeBinaryFromReader);
      msg.setCommonHttpProtocolOptions(value);
      break;
    case 13:
      var value = new envoy_api_v2_core_protocol_pb.Http1ProtocolOptions;
      reader.readMessage(value,envoy_api_v2_core_protocol_pb.Http1ProtocolOptions.deserializeBinaryFromReader);
      msg.setHttpProtocolOptions(value);
      break;
    case 14:
      var value = new envoy_api_v2_core_protocol_pb.Http2ProtocolOptions;
      reader.readMessage(value,envoy_api_v2_core_protocol_pb.Http2ProtocolOptions.deserializeBinaryFromReader);
      msg.setHttp2ProtocolOptions(value);
      break;
    case 35:
      var value = msg.getExtensionProtocolOptionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Struct.deserializeBinaryFromReader, "", new proto.google.protobuf.Struct());
         });
      break;
    case 36:
      var value = msg.getTypedExtensionProtocolOptionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Any.deserializeBinaryFromReader, "", new proto.google.protobuf.Any());
         });
      break;
    case 16:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDnsRefreshRate(value);
      break;
    case 44:
      var value = new proto.envoy.api.v2.Cluster.RefreshRate;
      reader.readMessage(value,proto.envoy.api.v2.Cluster.RefreshRate.deserializeBinaryFromReader);
      msg.setDnsFailureRefreshRate(value);
      break;
    case 39:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRespectDnsTtl(value);
      break;
    case 17:
      var value = /** @type {!proto.envoy.api.v2.Cluster.DnsLookupFamily} */ (reader.readEnum());
      msg.setDnsLookupFamily(value);
      break;
    case 18:
      var value = new envoy_api_v2_core_address_pb.Address;
      reader.readMessage(value,envoy_api_v2_core_address_pb.Address.deserializeBinaryFromReader);
      msg.addDnsResolvers(value);
      break;
    case 45:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseTcpForDnsLookups(value);
      break;
    case 19:
      var value = new envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection;
      reader.readMessage(value,envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection.deserializeBinaryFromReader);
      msg.setOutlierDetection(value);
      break;
    case 20:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setCleanupInterval(value);
      break;
    case 21:
      var value = new envoy_api_v2_core_address_pb.BindConfig;
      reader.readMessage(value,envoy_api_v2_core_address_pb.BindConfig.deserializeBinaryFromReader);
      msg.setUpstreamBindConfig(value);
      break;
    case 22:
      var value = new proto.envoy.api.v2.Cluster.LbSubsetConfig;
      reader.readMessage(value,proto.envoy.api.v2.Cluster.LbSubsetConfig.deserializeBinaryFromReader);
      msg.setLbSubsetConfig(value);
      break;
    case 23:
      var value = new proto.envoy.api.v2.Cluster.RingHashLbConfig;
      reader.readMessage(value,proto.envoy.api.v2.Cluster.RingHashLbConfig.deserializeBinaryFromReader);
      msg.setRingHashLbConfig(value);
      break;
    case 34:
      var value = new proto.envoy.api.v2.Cluster.OriginalDstLbConfig;
      reader.readMessage(value,proto.envoy.api.v2.Cluster.OriginalDstLbConfig.deserializeBinaryFromReader);
      msg.setOriginalDstLbConfig(value);
      break;
    case 37:
      var value = new proto.envoy.api.v2.Cluster.LeastRequestLbConfig;
      reader.readMessage(value,proto.envoy.api.v2.Cluster.LeastRequestLbConfig.deserializeBinaryFromReader);
      msg.setLeastRequestLbConfig(value);
      break;
    case 27:
      var value = new proto.envoy.api.v2.Cluster.CommonLbConfig;
      reader.readMessage(value,proto.envoy.api.v2.Cluster.CommonLbConfig.deserializeBinaryFromReader);
      msg.setCommonLbConfig(value);
      break;
    case 24:
      var value = new envoy_api_v2_core_base_pb.TransportSocket;
      reader.readMessage(value,envoy_api_v2_core_base_pb.TransportSocket.deserializeBinaryFromReader);
      msg.setTransportSocket(value);
      break;
    case 25:
      var value = new envoy_api_v2_core_base_pb.Metadata;
      reader.readMessage(value,envoy_api_v2_core_base_pb.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 26:
      var value = /** @type {!proto.envoy.api.v2.Cluster.ClusterProtocolSelection} */ (reader.readEnum());
      msg.setProtocolSelection(value);
      break;
    case 30:
      var value = new proto.envoy.api.v2.UpstreamConnectionOptions;
      reader.readMessage(value,proto.envoy.api.v2.UpstreamConnectionOptions.deserializeBinaryFromReader);
      msg.setUpstreamConnectionOptions(value);
      break;
    case 31:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCloseConnectionsOnHostHealthFailure(value);
      break;
    case 32:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDrainConnectionsOnHostRemoval(value);
      break;
    case 40:
      var value = new envoy_api_v2_cluster_filter_pb.Filter;
      reader.readMessage(value,envoy_api_v2_cluster_filter_pb.Filter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    case 41:
      var value = new proto.envoy.api.v2.LoadBalancingPolicy;
      reader.readMessage(value,proto.envoy.api.v2.LoadBalancingPolicy.deserializeBinaryFromReader);
      msg.setLoadBalancingPolicy(value);
      break;
    case 42:
      var value = new envoy_api_v2_core_config_source_pb.ConfigSource;
      reader.readMessage(value,envoy_api_v2_core_config_source_pb.ConfigSource.deserializeBinaryFromReader);
      msg.setLrsServer(value);
      break;
    case 47:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrackTimeoutBudgets(value);
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
proto.envoy.api.v2.Cluster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.Cluster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.Cluster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransportSocketMatchesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      43,
      f,
      proto.envoy.api.v2.Cluster.TransportSocketMatch.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAltStatName();
  if (f.length > 0) {
    writer.writeString(
      28,
      f
    );
  }
  f = /** @type {!proto.envoy.api.v2.Cluster.DiscoveryType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getClusterType();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto.envoy.api.v2.Cluster.CustomClusterType.serializeBinaryToWriter
    );
  }
  f = message.getEdsClusterConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.envoy.api.v2.Cluster.EdsClusterConfig.serializeBinaryToWriter
    );
  }
  f = message.getConnectTimeout();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getPerConnectionBufferLimitBytes();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getLbPolicy();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getHostsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      envoy_api_v2_core_address_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getLoadAssignment();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      envoy_api_v2_endpoint_pb.ClusterLoadAssignment.serializeBinaryToWriter
    );
  }
  f = message.getHealthChecksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      envoy_api_v2_core_health_check_pb.HealthCheck.serializeBinaryToWriter
    );
  }
  f = message.getMaxRequestsPerConnection();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getCircuitBreakers();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      envoy_api_v2_cluster_circuit_breaker_pb.CircuitBreakers.serializeBinaryToWriter
    );
  }
  f = message.getTlsContext();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      envoy_api_v2_auth_cert_pb.UpstreamTlsContext.serializeBinaryToWriter
    );
  }
  f = message.getUpstreamHttpProtocolOptions();
  if (f != null) {
    writer.writeMessage(
      46,
      f,
      envoy_api_v2_core_protocol_pb.UpstreamHttpProtocolOptions.serializeBinaryToWriter
    );
  }
  f = message.getCommonHttpProtocolOptions();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      envoy_api_v2_core_protocol_pb.HttpProtocolOptions.serializeBinaryToWriter
    );
  }
  f = message.getHttpProtocolOptions();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      envoy_api_v2_core_protocol_pb.Http1ProtocolOptions.serializeBinaryToWriter
    );
  }
  f = message.getHttp2ProtocolOptions();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      envoy_api_v2_core_protocol_pb.Http2ProtocolOptions.serializeBinaryToWriter
    );
  }
  f = message.getExtensionProtocolOptionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(35, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Struct.serializeBinaryToWriter);
  }
  f = message.getTypedExtensionProtocolOptionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(36, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Any.serializeBinaryToWriter);
  }
  f = message.getDnsRefreshRate();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getDnsFailureRefreshRate();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      proto.envoy.api.v2.Cluster.RefreshRate.serializeBinaryToWriter
    );
  }
  f = message.getRespectDnsTtl();
  if (f) {
    writer.writeBool(
      39,
      f
    );
  }
  f = message.getDnsLookupFamily();
  if (f !== 0.0) {
    writer.writeEnum(
      17,
      f
    );
  }
  f = message.getDnsResolversList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      envoy_api_v2_core_address_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getUseTcpForDnsLookups();
  if (f) {
    writer.writeBool(
      45,
      f
    );
  }
  f = message.getOutlierDetection();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection.serializeBinaryToWriter
    );
  }
  f = message.getCleanupInterval();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getUpstreamBindConfig();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      envoy_api_v2_core_address_pb.BindConfig.serializeBinaryToWriter
    );
  }
  f = message.getLbSubsetConfig();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.envoy.api.v2.Cluster.LbSubsetConfig.serializeBinaryToWriter
    );
  }
  f = message.getRingHashLbConfig();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.envoy.api.v2.Cluster.RingHashLbConfig.serializeBinaryToWriter
    );
  }
  f = message.getOriginalDstLbConfig();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.envoy.api.v2.Cluster.OriginalDstLbConfig.serializeBinaryToWriter
    );
  }
  f = message.getLeastRequestLbConfig();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.envoy.api.v2.Cluster.LeastRequestLbConfig.serializeBinaryToWriter
    );
  }
  f = message.getCommonLbConfig();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.envoy.api.v2.Cluster.CommonLbConfig.serializeBinaryToWriter
    );
  }
  f = message.getTransportSocket();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      envoy_api_v2_core_base_pb.TransportSocket.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      envoy_api_v2_core_base_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getProtocolSelection();
  if (f !== 0.0) {
    writer.writeEnum(
      26,
      f
    );
  }
  f = message.getUpstreamConnectionOptions();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.envoy.api.v2.UpstreamConnectionOptions.serializeBinaryToWriter
    );
  }
  f = message.getCloseConnectionsOnHostHealthFailure();
  if (f) {
    writer.writeBool(
      31,
      f
    );
  }
  f = message.getDrainConnectionsOnHostRemoval();
  if (f) {
    writer.writeBool(
      32,
      f
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      40,
      f,
      envoy_api_v2_cluster_filter_pb.Filter.serializeBinaryToWriter
    );
  }
  f = message.getLoadBalancingPolicy();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto.envoy.api.v2.LoadBalancingPolicy.serializeBinaryToWriter
    );
  }
  f = message.getLrsServer();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      envoy_api_v2_core_config_source_pb.ConfigSource.serializeBinaryToWriter
    );
  }
  f = message.getTrackTimeoutBudgets();
  if (f) {
    writer.writeBool(
      47,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.api.v2.Cluster.DiscoveryType = {
  STATIC: 0,
  STRICT_DNS: 1,
  LOGICAL_DNS: 2,
  EDS: 3,
  ORIGINAL_DST: 4
};

/**
 * @enum {number}
 */
proto.envoy.api.v2.Cluster.LbPolicy = {
  ROUND_ROBIN: 0,
  LEAST_REQUEST: 1,
  RING_HASH: 2,
  RANDOM: 3,
  ORIGINAL_DST_LB: 4,
  MAGLEV: 5,
  CLUSTER_PROVIDED: 6,
  LOAD_BALANCING_POLICY_CONFIG: 7
};

/**
 * @enum {number}
 */
proto.envoy.api.v2.Cluster.DnsLookupFamily = {
  AUTO: 0,
  V4_ONLY: 1,
  V6_ONLY: 2
};

/**
 * @enum {number}
 */
proto.envoy.api.v2.Cluster.ClusterProtocolSelection = {
  USE_CONFIGURED_PROTOCOL: 0,
  USE_DOWNSTREAM_PROTOCOL: 1
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
proto.envoy.api.v2.Cluster.TransportSocketMatch.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.Cluster.TransportSocketMatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.Cluster.TransportSocketMatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.TransportSocketMatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    match: (f = msg.getMatch()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    transportSocket: (f = msg.getTransportSocket()) && envoy_api_v2_core_base_pb.TransportSocket.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.Cluster.TransportSocketMatch}
 */
proto.envoy.api.v2.Cluster.TransportSocketMatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.Cluster.TransportSocketMatch;
  return proto.envoy.api.v2.Cluster.TransportSocketMatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.Cluster.TransportSocketMatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.Cluster.TransportSocketMatch}
 */
proto.envoy.api.v2.Cluster.TransportSocketMatch.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setMatch(value);
      break;
    case 3:
      var value = new envoy_api_v2_core_base_pb.TransportSocket;
      reader.readMessage(value,envoy_api_v2_core_base_pb.TransportSocket.deserializeBinaryFromReader);
      msg.setTransportSocket(value);
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
proto.envoy.api.v2.Cluster.TransportSocketMatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.Cluster.TransportSocketMatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.Cluster.TransportSocketMatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.TransportSocketMatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMatch();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getTransportSocket();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      envoy_api_v2_core_base_pb.TransportSocket.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.api.v2.Cluster.TransportSocketMatch.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.Cluster.TransportSocketMatch} returns this
 */
proto.envoy.api.v2.Cluster.TransportSocketMatch.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct match = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.envoy.api.v2.Cluster.TransportSocketMatch.prototype.getMatch = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.TransportSocketMatch} returns this
*/
proto.envoy.api.v2.Cluster.TransportSocketMatch.prototype.setMatch = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.TransportSocketMatch} returns this
 */
proto.envoy.api.v2.Cluster.TransportSocketMatch.prototype.clearMatch = function() {
  return this.setMatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.TransportSocketMatch.prototype.hasMatch = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional core.TransportSocket transport_socket = 3;
 * @return {?proto.envoy.api.v2.core.TransportSocket}
 */
proto.envoy.api.v2.Cluster.TransportSocketMatch.prototype.getTransportSocket = function() {
  return /** @type{?proto.envoy.api.v2.core.TransportSocket} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.TransportSocket, 3));
};


/**
 * @param {?proto.envoy.api.v2.core.TransportSocket|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.TransportSocketMatch} returns this
*/
proto.envoy.api.v2.Cluster.TransportSocketMatch.prototype.setTransportSocket = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.TransportSocketMatch} returns this
 */
proto.envoy.api.v2.Cluster.TransportSocketMatch.prototype.clearTransportSocket = function() {
  return this.setTransportSocket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.TransportSocketMatch.prototype.hasTransportSocket = function() {
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
proto.envoy.api.v2.Cluster.CustomClusterType.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.Cluster.CustomClusterType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.Cluster.CustomClusterType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.CustomClusterType.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.envoy.api.v2.Cluster.CustomClusterType}
 */
proto.envoy.api.v2.Cluster.CustomClusterType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.Cluster.CustomClusterType;
  return proto.envoy.api.v2.Cluster.CustomClusterType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.Cluster.CustomClusterType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.Cluster.CustomClusterType}
 */
proto.envoy.api.v2.Cluster.CustomClusterType.deserializeBinaryFromReader = function(msg, reader) {
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
proto.envoy.api.v2.Cluster.CustomClusterType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.Cluster.CustomClusterType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.Cluster.CustomClusterType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.CustomClusterType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTypedConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.api.v2.Cluster.CustomClusterType.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.Cluster.CustomClusterType} returns this
 */
proto.envoy.api.v2.Cluster.CustomClusterType.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Any typed_config = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.envoy.api.v2.Cluster.CustomClusterType.prototype.getTypedConfig = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.CustomClusterType} returns this
*/
proto.envoy.api.v2.Cluster.CustomClusterType.prototype.setTypedConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.CustomClusterType} returns this
 */
proto.envoy.api.v2.Cluster.CustomClusterType.prototype.clearTypedConfig = function() {
  return this.setTypedConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.CustomClusterType.prototype.hasTypedConfig = function() {
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
proto.envoy.api.v2.Cluster.EdsClusterConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.Cluster.EdsClusterConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.Cluster.EdsClusterConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.EdsClusterConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    edsConfig: (f = msg.getEdsConfig()) && envoy_api_v2_core_config_source_pb.ConfigSource.toObject(includeInstance, f),
    serviceName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.envoy.api.v2.Cluster.EdsClusterConfig}
 */
proto.envoy.api.v2.Cluster.EdsClusterConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.Cluster.EdsClusterConfig;
  return proto.envoy.api.v2.Cluster.EdsClusterConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.Cluster.EdsClusterConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.Cluster.EdsClusterConfig}
 */
proto.envoy.api.v2.Cluster.EdsClusterConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_api_v2_core_config_source_pb.ConfigSource;
      reader.readMessage(value,envoy_api_v2_core_config_source_pb.ConfigSource.deserializeBinaryFromReader);
      msg.setEdsConfig(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceName(value);
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
proto.envoy.api.v2.Cluster.EdsClusterConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.Cluster.EdsClusterConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.Cluster.EdsClusterConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.EdsClusterConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEdsConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      envoy_api_v2_core_config_source_pb.ConfigSource.serializeBinaryToWriter
    );
  }
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional core.ConfigSource eds_config = 1;
 * @return {?proto.envoy.api.v2.core.ConfigSource}
 */
proto.envoy.api.v2.Cluster.EdsClusterConfig.prototype.getEdsConfig = function() {
  return /** @type{?proto.envoy.api.v2.core.ConfigSource} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_config_source_pb.ConfigSource, 1));
};


/**
 * @param {?proto.envoy.api.v2.core.ConfigSource|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.EdsClusterConfig} returns this
*/
proto.envoy.api.v2.Cluster.EdsClusterConfig.prototype.setEdsConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.EdsClusterConfig} returns this
 */
proto.envoy.api.v2.Cluster.EdsClusterConfig.prototype.clearEdsConfig = function() {
  return this.setEdsConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.EdsClusterConfig.prototype.hasEdsConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string service_name = 2;
 * @return {string}
 */
proto.envoy.api.v2.Cluster.EdsClusterConfig.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.Cluster.EdsClusterConfig} returns this
 */
proto.envoy.api.v2.Cluster.EdsClusterConfig.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.repeatedFields_ = [3];



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
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.Cluster.LbSubsetConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.Cluster.LbSubsetConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    fallbackPolicy: jspb.Message.getFieldWithDefault(msg, 1, 0),
    defaultSubset: (f = msg.getDefaultSubset()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    subsetSelectorsList: jspb.Message.toObjectList(msg.getSubsetSelectorsList(),
    proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.toObject, includeInstance),
    localityWeightAware: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    scaleLocalityWeight: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    panicModeAny: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    listAsAny: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.Cluster.LbSubsetConfig;
  return proto.envoy.api.v2.Cluster.LbSubsetConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.Cluster.LbSubsetConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetFallbackPolicy} */ (reader.readEnum());
      msg.setFallbackPolicy(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setDefaultSubset(value);
      break;
    case 3:
      var value = new proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector;
      reader.readMessage(value,proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.deserializeBinaryFromReader);
      msg.addSubsetSelectors(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLocalityWeightAware(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setScaleLocalityWeight(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPanicModeAny(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setListAsAny(value);
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
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.Cluster.LbSubsetConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.Cluster.LbSubsetConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFallbackPolicy();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDefaultSubset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getSubsetSelectorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.serializeBinaryToWriter
    );
  }
  f = message.getLocalityWeightAware();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getScaleLocalityWeight();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getPanicModeAny();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getListAsAny();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetFallbackPolicy = {
  NO_FALLBACK: 0,
  ANY_ENDPOINT: 1,
  DEFAULT_SUBSET: 2
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.repeatedFields_ = [1,3];



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
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.toObject = function(includeInstance, msg) {
  var f, obj = {
    keysList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    fallbackPolicy: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fallbackKeysSubsetList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector;
  return proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeys(value);
      break;
    case 2:
      var value = /** @type {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.LbSubsetSelectorFallbackPolicy} */ (reader.readEnum());
      msg.setFallbackPolicy(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFallbackKeysSubset(value);
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
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getFallbackPolicy();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFallbackKeysSubsetList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.LbSubsetSelectorFallbackPolicy = {
  NOT_DEFINED: 0,
  NO_FALLBACK: 1,
  ANY_ENDPOINT: 2,
  DEFAULT_SUBSET: 3,
  KEYS_SUBSET: 4
};

/**
 * repeated string keys = 1;
 * @return {!Array<string>}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.prototype.getKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector} returns this
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.prototype.setKeysList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector} returns this
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.prototype.addKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector} returns this
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.prototype.clearKeysList = function() {
  return this.setKeysList([]);
};


/**
 * optional LbSubsetSelectorFallbackPolicy fallback_policy = 2;
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.LbSubsetSelectorFallbackPolicy}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.prototype.getFallbackPolicy = function() {
  return /** @type {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.LbSubsetSelectorFallbackPolicy} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.LbSubsetSelectorFallbackPolicy} value
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector} returns this
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.prototype.setFallbackPolicy = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated string fallback_keys_subset = 3;
 * @return {!Array<string>}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.prototype.getFallbackKeysSubsetList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector} returns this
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.prototype.setFallbackKeysSubsetList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector} returns this
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.prototype.addFallbackKeysSubset = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector} returns this
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector.prototype.clearFallbackKeysSubsetList = function() {
  return this.setFallbackKeysSubsetList([]);
};


/**
 * optional LbSubsetFallbackPolicy fallback_policy = 1;
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetFallbackPolicy}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.getFallbackPolicy = function() {
  return /** @type {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetFallbackPolicy} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetFallbackPolicy} value
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig} returns this
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.setFallbackPolicy = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Struct default_subset = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.getDefaultSubset = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig} returns this
*/
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.setDefaultSubset = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig} returns this
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.clearDefaultSubset = function() {
  return this.setDefaultSubset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.hasDefaultSubset = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated LbSubsetSelector subset_selectors = 3;
 * @return {!Array<!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector>}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.getSubsetSelectorsList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector, 3));
};


/**
 * @param {!Array<!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector>} value
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig} returns this
*/
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.setSubsetSelectorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.addSubsetSelectors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.envoy.api.v2.Cluster.LbSubsetConfig.LbSubsetSelector, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig} returns this
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.clearSubsetSelectorsList = function() {
  return this.setSubsetSelectorsList([]);
};


/**
 * optional bool locality_weight_aware = 4;
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.getLocalityWeightAware = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig} returns this
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.setLocalityWeightAware = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool scale_locality_weight = 5;
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.getScaleLocalityWeight = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig} returns this
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.setScaleLocalityWeight = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool panic_mode_any = 6;
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.getPanicModeAny = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig} returns this
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.setPanicModeAny = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool list_as_any = 7;
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.getListAsAny = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.Cluster.LbSubsetConfig} returns this
 */
proto.envoy.api.v2.Cluster.LbSubsetConfig.prototype.setListAsAny = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
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
proto.envoy.api.v2.Cluster.LeastRequestLbConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.Cluster.LeastRequestLbConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.Cluster.LeastRequestLbConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.LeastRequestLbConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    choiceCount: (f = msg.getChoiceCount()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.Cluster.LeastRequestLbConfig}
 */
proto.envoy.api.v2.Cluster.LeastRequestLbConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.Cluster.LeastRequestLbConfig;
  return proto.envoy.api.v2.Cluster.LeastRequestLbConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.Cluster.LeastRequestLbConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.Cluster.LeastRequestLbConfig}
 */
proto.envoy.api.v2.Cluster.LeastRequestLbConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setChoiceCount(value);
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
proto.envoy.api.v2.Cluster.LeastRequestLbConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.Cluster.LeastRequestLbConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.Cluster.LeastRequestLbConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.LeastRequestLbConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChoiceCount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.UInt32Value choice_count = 1;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.Cluster.LeastRequestLbConfig.prototype.getChoiceCount = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 1));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.LeastRequestLbConfig} returns this
*/
proto.envoy.api.v2.Cluster.LeastRequestLbConfig.prototype.setChoiceCount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.LeastRequestLbConfig} returns this
 */
proto.envoy.api.v2.Cluster.LeastRequestLbConfig.prototype.clearChoiceCount = function() {
  return this.setChoiceCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.LeastRequestLbConfig.prototype.hasChoiceCount = function() {
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
proto.envoy.api.v2.Cluster.RingHashLbConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.Cluster.RingHashLbConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.Cluster.RingHashLbConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.RingHashLbConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    minimumRingSize: (f = msg.getMinimumRingSize()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f),
    hashFunction: jspb.Message.getFieldWithDefault(msg, 3, 0),
    maximumRingSize: (f = msg.getMaximumRingSize()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.Cluster.RingHashLbConfig}
 */
proto.envoy.api.v2.Cluster.RingHashLbConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.Cluster.RingHashLbConfig;
  return proto.envoy.api.v2.Cluster.RingHashLbConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.Cluster.RingHashLbConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.Cluster.RingHashLbConfig}
 */
proto.envoy.api.v2.Cluster.RingHashLbConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setMinimumRingSize(value);
      break;
    case 3:
      var value = /** @type {!proto.envoy.api.v2.Cluster.RingHashLbConfig.HashFunction} */ (reader.readEnum());
      msg.setHashFunction(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setMaximumRingSize(value);
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
proto.envoy.api.v2.Cluster.RingHashLbConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.Cluster.RingHashLbConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.Cluster.RingHashLbConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.RingHashLbConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinimumRingSize();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
  f = message.getHashFunction();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getMaximumRingSize();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.api.v2.Cluster.RingHashLbConfig.HashFunction = {
  XX_HASH: 0,
  MURMUR_HASH_2: 1
};

/**
 * optional google.protobuf.UInt64Value minimum_ring_size = 1;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.envoy.api.v2.Cluster.RingHashLbConfig.prototype.getMinimumRingSize = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 1));
};


/**
 * @param {?proto.google.protobuf.UInt64Value|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.RingHashLbConfig} returns this
*/
proto.envoy.api.v2.Cluster.RingHashLbConfig.prototype.setMinimumRingSize = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.RingHashLbConfig} returns this
 */
proto.envoy.api.v2.Cluster.RingHashLbConfig.prototype.clearMinimumRingSize = function() {
  return this.setMinimumRingSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.RingHashLbConfig.prototype.hasMinimumRingSize = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HashFunction hash_function = 3;
 * @return {!proto.envoy.api.v2.Cluster.RingHashLbConfig.HashFunction}
 */
proto.envoy.api.v2.Cluster.RingHashLbConfig.prototype.getHashFunction = function() {
  return /** @type {!proto.envoy.api.v2.Cluster.RingHashLbConfig.HashFunction} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.envoy.api.v2.Cluster.RingHashLbConfig.HashFunction} value
 * @return {!proto.envoy.api.v2.Cluster.RingHashLbConfig} returns this
 */
proto.envoy.api.v2.Cluster.RingHashLbConfig.prototype.setHashFunction = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.UInt64Value maximum_ring_size = 4;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.envoy.api.v2.Cluster.RingHashLbConfig.prototype.getMaximumRingSize = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 4));
};


/**
 * @param {?proto.google.protobuf.UInt64Value|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.RingHashLbConfig} returns this
*/
proto.envoy.api.v2.Cluster.RingHashLbConfig.prototype.setMaximumRingSize = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.RingHashLbConfig} returns this
 */
proto.envoy.api.v2.Cluster.RingHashLbConfig.prototype.clearMaximumRingSize = function() {
  return this.setMaximumRingSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.RingHashLbConfig.prototype.hasMaximumRingSize = function() {
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
proto.envoy.api.v2.Cluster.OriginalDstLbConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.Cluster.OriginalDstLbConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.Cluster.OriginalDstLbConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.OriginalDstLbConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    useHttpHeader: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.envoy.api.v2.Cluster.OriginalDstLbConfig}
 */
proto.envoy.api.v2.Cluster.OriginalDstLbConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.Cluster.OriginalDstLbConfig;
  return proto.envoy.api.v2.Cluster.OriginalDstLbConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.Cluster.OriginalDstLbConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.Cluster.OriginalDstLbConfig}
 */
proto.envoy.api.v2.Cluster.OriginalDstLbConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseHttpHeader(value);
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
proto.envoy.api.v2.Cluster.OriginalDstLbConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.Cluster.OriginalDstLbConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.Cluster.OriginalDstLbConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.OriginalDstLbConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUseHttpHeader();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool use_http_header = 1;
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.OriginalDstLbConfig.prototype.getUseHttpHeader = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.Cluster.OriginalDstLbConfig} returns this
 */
proto.envoy.api.v2.Cluster.OriginalDstLbConfig.prototype.setUseHttpHeader = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityConfigSpecifierCase = {
  LOCALITY_CONFIG_SPECIFIER_NOT_SET: 0,
  ZONE_AWARE_LB_CONFIG: 2,
  LOCALITY_WEIGHTED_LB_CONFIG: 3
};

/**
 * @return {proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityConfigSpecifierCase}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.getLocalityConfigSpecifierCase = function() {
  return /** @type {proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityConfigSpecifierCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.Cluster.CommonLbConfig.oneofGroups_[0]));
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
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.Cluster.CommonLbConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.Cluster.CommonLbConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    healthyPanicThreshold: (f = msg.getHealthyPanicThreshold()) && envoy_type_percent_pb.Percent.toObject(includeInstance, f),
    zoneAwareLbConfig: (f = msg.getZoneAwareLbConfig()) && proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.toObject(includeInstance, f),
    localityWeightedLbConfig: (f = msg.getLocalityWeightedLbConfig()) && proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig.toObject(includeInstance, f),
    updateMergeWindow: (f = msg.getUpdateMergeWindow()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    ignoreNewHostsUntilFirstHc: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    closeConnectionsOnHostSetChange: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    consistentHashingLbConfig: (f = msg.getConsistentHashingLbConfig()) && proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.Cluster.CommonLbConfig;
  return proto.envoy.api.v2.Cluster.CommonLbConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.Cluster.CommonLbConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_type_percent_pb.Percent;
      reader.readMessage(value,envoy_type_percent_pb.Percent.deserializeBinaryFromReader);
      msg.setHealthyPanicThreshold(value);
      break;
    case 2:
      var value = new proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig;
      reader.readMessage(value,proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.deserializeBinaryFromReader);
      msg.setZoneAwareLbConfig(value);
      break;
    case 3:
      var value = new proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig;
      reader.readMessage(value,proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig.deserializeBinaryFromReader);
      msg.setLocalityWeightedLbConfig(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setUpdateMergeWindow(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreNewHostsUntilFirstHc(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCloseConnectionsOnHostSetChange(value);
      break;
    case 7:
      var value = new proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig;
      reader.readMessage(value,proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig.deserializeBinaryFromReader);
      msg.setConsistentHashingLbConfig(value);
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
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.Cluster.CommonLbConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.Cluster.CommonLbConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHealthyPanicThreshold();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      envoy_type_percent_pb.Percent.serializeBinaryToWriter
    );
  }
  f = message.getZoneAwareLbConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.serializeBinaryToWriter
    );
  }
  f = message.getLocalityWeightedLbConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMergeWindow();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getIgnoreNewHostsUntilFirstHc();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCloseConnectionsOnHostSetChange();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getConsistentHashingLbConfig();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig.serializeBinaryToWriter
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
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    routingEnabled: (f = msg.getRoutingEnabled()) && envoy_type_percent_pb.Percent.toObject(includeInstance, f),
    minClusterSize: (f = msg.getMinClusterSize()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f),
    failTrafficOnPanic: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig;
  return proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_type_percent_pb.Percent;
      reader.readMessage(value,envoy_type_percent_pb.Percent.deserializeBinaryFromReader);
      msg.setRoutingEnabled(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setMinClusterSize(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFailTrafficOnPanic(value);
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
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoutingEnabled();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      envoy_type_percent_pb.Percent.serializeBinaryToWriter
    );
  }
  f = message.getMinClusterSize();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
  f = message.getFailTrafficOnPanic();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional envoy.type.Percent routing_enabled = 1;
 * @return {?proto.envoy.type.Percent}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.prototype.getRoutingEnabled = function() {
  return /** @type{?proto.envoy.type.Percent} */ (
    jspb.Message.getWrapperField(this, envoy_type_percent_pb.Percent, 1));
};


/**
 * @param {?proto.envoy.type.Percent|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig} returns this
*/
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.prototype.setRoutingEnabled = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig} returns this
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.prototype.clearRoutingEnabled = function() {
  return this.setRoutingEnabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.prototype.hasRoutingEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.UInt64Value min_cluster_size = 2;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.prototype.getMinClusterSize = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 2));
};


/**
 * @param {?proto.google.protobuf.UInt64Value|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig} returns this
*/
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.prototype.setMinClusterSize = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig} returns this
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.prototype.clearMinClusterSize = function() {
  return this.setMinClusterSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.prototype.hasMinClusterSize = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool fail_traffic_on_panic = 3;
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.prototype.getFailTrafficOnPanic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig} returns this
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig.prototype.setFailTrafficOnPanic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig.toObject = function(includeInstance, msg) {
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
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig;
  return proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig.deserializeBinaryFromReader = function(msg, reader) {
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
proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig.serializeBinaryToWriter = function(message, writer) {
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
proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    useHostnameForHashing: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig;
  return proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseHostnameForHashing(value);
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
proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUseHostnameForHashing();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool use_hostname_for_hashing = 1;
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig.prototype.getUseHostnameForHashing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig} returns this
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig.prototype.setUseHostnameForHashing = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional envoy.type.Percent healthy_panic_threshold = 1;
 * @return {?proto.envoy.type.Percent}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.getHealthyPanicThreshold = function() {
  return /** @type{?proto.envoy.type.Percent} */ (
    jspb.Message.getWrapperField(this, envoy_type_percent_pb.Percent, 1));
};


/**
 * @param {?proto.envoy.type.Percent|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig} returns this
*/
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.setHealthyPanicThreshold = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig} returns this
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.clearHealthyPanicThreshold = function() {
  return this.setHealthyPanicThreshold(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.hasHealthyPanicThreshold = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ZoneAwareLbConfig zone_aware_lb_config = 2;
 * @return {?proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.getZoneAwareLbConfig = function() {
  return /** @type{?proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig, 2));
};


/**
 * @param {?proto.envoy.api.v2.Cluster.CommonLbConfig.ZoneAwareLbConfig|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig} returns this
*/
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.setZoneAwareLbConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.envoy.api.v2.Cluster.CommonLbConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig} returns this
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.clearZoneAwareLbConfig = function() {
  return this.setZoneAwareLbConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.hasZoneAwareLbConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LocalityWeightedLbConfig locality_weighted_lb_config = 3;
 * @return {?proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.getLocalityWeightedLbConfig = function() {
  return /** @type{?proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig, 3));
};


/**
 * @param {?proto.envoy.api.v2.Cluster.CommonLbConfig.LocalityWeightedLbConfig|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig} returns this
*/
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.setLocalityWeightedLbConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.envoy.api.v2.Cluster.CommonLbConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig} returns this
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.clearLocalityWeightedLbConfig = function() {
  return this.setLocalityWeightedLbConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.hasLocalityWeightedLbConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration update_merge_window = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.getUpdateMergeWindow = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig} returns this
*/
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.setUpdateMergeWindow = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig} returns this
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.clearUpdateMergeWindow = function() {
  return this.setUpdateMergeWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.hasUpdateMergeWindow = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool ignore_new_hosts_until_first_hc = 5;
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.getIgnoreNewHostsUntilFirstHc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig} returns this
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.setIgnoreNewHostsUntilFirstHc = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool close_connections_on_host_set_change = 6;
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.getCloseConnectionsOnHostSetChange = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig} returns this
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.setCloseConnectionsOnHostSetChange = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional ConsistentHashingLbConfig consistent_hashing_lb_config = 7;
 * @return {?proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.getConsistentHashingLbConfig = function() {
  return /** @type{?proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig, 7));
};


/**
 * @param {?proto.envoy.api.v2.Cluster.CommonLbConfig.ConsistentHashingLbConfig|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig} returns this
*/
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.setConsistentHashingLbConfig = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.CommonLbConfig} returns this
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.clearConsistentHashingLbConfig = function() {
  return this.setConsistentHashingLbConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.CommonLbConfig.prototype.hasConsistentHashingLbConfig = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.envoy.api.v2.Cluster.RefreshRate.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.Cluster.RefreshRate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.Cluster.RefreshRate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.RefreshRate.toObject = function(includeInstance, msg) {
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
 * @return {!proto.envoy.api.v2.Cluster.RefreshRate}
 */
proto.envoy.api.v2.Cluster.RefreshRate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.Cluster.RefreshRate;
  return proto.envoy.api.v2.Cluster.RefreshRate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.Cluster.RefreshRate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.Cluster.RefreshRate}
 */
proto.envoy.api.v2.Cluster.RefreshRate.deserializeBinaryFromReader = function(msg, reader) {
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
proto.envoy.api.v2.Cluster.RefreshRate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.Cluster.RefreshRate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.Cluster.RefreshRate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.Cluster.RefreshRate.serializeBinaryToWriter = function(message, writer) {
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
proto.envoy.api.v2.Cluster.RefreshRate.prototype.getBaseInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.RefreshRate} returns this
*/
proto.envoy.api.v2.Cluster.RefreshRate.prototype.setBaseInterval = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.RefreshRate} returns this
 */
proto.envoy.api.v2.Cluster.RefreshRate.prototype.clearBaseInterval = function() {
  return this.setBaseInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.RefreshRate.prototype.hasBaseInterval = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration max_interval = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.Cluster.RefreshRate.prototype.getMaxInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.api.v2.Cluster.RefreshRate} returns this
*/
proto.envoy.api.v2.Cluster.RefreshRate.prototype.setMaxInterval = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster.RefreshRate} returns this
 */
proto.envoy.api.v2.Cluster.RefreshRate.prototype.clearMaxInterval = function() {
  return this.setMaxInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.RefreshRate.prototype.hasMaxInterval = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated TransportSocketMatch transport_socket_matches = 43;
 * @return {!Array<!proto.envoy.api.v2.Cluster.TransportSocketMatch>}
 */
proto.envoy.api.v2.Cluster.prototype.getTransportSocketMatchesList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.Cluster.TransportSocketMatch>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.Cluster.TransportSocketMatch, 43));
};


/**
 * @param {!Array<!proto.envoy.api.v2.Cluster.TransportSocketMatch>} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setTransportSocketMatchesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 43, value);
};


/**
 * @param {!proto.envoy.api.v2.Cluster.TransportSocketMatch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.Cluster.TransportSocketMatch}
 */
proto.envoy.api.v2.Cluster.prototype.addTransportSocketMatches = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 43, opt_value, proto.envoy.api.v2.Cluster.TransportSocketMatch, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearTransportSocketMatchesList = function() {
  return this.setTransportSocketMatchesList([]);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.envoy.api.v2.Cluster.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string alt_stat_name = 28;
 * @return {string}
 */
proto.envoy.api.v2.Cluster.prototype.getAltStatName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 28, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.setAltStatName = function(value) {
  return jspb.Message.setProto3StringField(this, 28, value);
};


/**
 * optional DiscoveryType type = 2;
 * @return {!proto.envoy.api.v2.Cluster.DiscoveryType}
 */
proto.envoy.api.v2.Cluster.prototype.getType = function() {
  return /** @type {!proto.envoy.api.v2.Cluster.DiscoveryType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.envoy.api.v2.Cluster.DiscoveryType} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.setType = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.envoy.api.v2.Cluster.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearType = function() {
  return jspb.Message.setOneofField(this, 2, proto.envoy.api.v2.Cluster.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomClusterType cluster_type = 38;
 * @return {?proto.envoy.api.v2.Cluster.CustomClusterType}
 */
proto.envoy.api.v2.Cluster.prototype.getClusterType = function() {
  return /** @type{?proto.envoy.api.v2.Cluster.CustomClusterType} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.Cluster.CustomClusterType, 38));
};


/**
 * @param {?proto.envoy.api.v2.Cluster.CustomClusterType|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setClusterType = function(value) {
  return jspb.Message.setOneofWrapperField(this, 38, proto.envoy.api.v2.Cluster.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearClusterType = function() {
  return this.setClusterType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasClusterType = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional EdsClusterConfig eds_cluster_config = 3;
 * @return {?proto.envoy.api.v2.Cluster.EdsClusterConfig}
 */
proto.envoy.api.v2.Cluster.prototype.getEdsClusterConfig = function() {
  return /** @type{?proto.envoy.api.v2.Cluster.EdsClusterConfig} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.Cluster.EdsClusterConfig, 3));
};


/**
 * @param {?proto.envoy.api.v2.Cluster.EdsClusterConfig|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setEdsClusterConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearEdsClusterConfig = function() {
  return this.setEdsClusterConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasEdsClusterConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration connect_timeout = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.Cluster.prototype.getConnectTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setConnectTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearConnectTimeout = function() {
  return this.setConnectTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasConnectTimeout = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.UInt32Value per_connection_buffer_limit_bytes = 5;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.Cluster.prototype.getPerConnectionBufferLimitBytes = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 5));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setPerConnectionBufferLimitBytes = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearPerConnectionBufferLimitBytes = function() {
  return this.setPerConnectionBufferLimitBytes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasPerConnectionBufferLimitBytes = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional LbPolicy lb_policy = 6;
 * @return {!proto.envoy.api.v2.Cluster.LbPolicy}
 */
proto.envoy.api.v2.Cluster.prototype.getLbPolicy = function() {
  return /** @type {!proto.envoy.api.v2.Cluster.LbPolicy} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.envoy.api.v2.Cluster.LbPolicy} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.setLbPolicy = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * repeated core.Address hosts = 7;
 * @return {!Array<!proto.envoy.api.v2.core.Address>}
 */
proto.envoy.api.v2.Cluster.prototype.getHostsList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.core.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_core_address_pb.Address, 7));
};


/**
 * @param {!Array<!proto.envoy.api.v2.core.Address>} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setHostsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.envoy.api.v2.core.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.core.Address}
 */
proto.envoy.api.v2.Cluster.prototype.addHosts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.envoy.api.v2.core.Address, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearHostsList = function() {
  return this.setHostsList([]);
};


/**
 * optional ClusterLoadAssignment load_assignment = 33;
 * @return {?proto.envoy.api.v2.ClusterLoadAssignment}
 */
proto.envoy.api.v2.Cluster.prototype.getLoadAssignment = function() {
  return /** @type{?proto.envoy.api.v2.ClusterLoadAssignment} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_endpoint_pb.ClusterLoadAssignment, 33));
};


/**
 * @param {?proto.envoy.api.v2.ClusterLoadAssignment|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setLoadAssignment = function(value) {
  return jspb.Message.setWrapperField(this, 33, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearLoadAssignment = function() {
  return this.setLoadAssignment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasLoadAssignment = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * repeated core.HealthCheck health_checks = 8;
 * @return {!Array<!proto.envoy.api.v2.core.HealthCheck>}
 */
proto.envoy.api.v2.Cluster.prototype.getHealthChecksList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.core.HealthCheck>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_core_health_check_pb.HealthCheck, 8));
};


/**
 * @param {!Array<!proto.envoy.api.v2.core.HealthCheck>} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setHealthChecksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.envoy.api.v2.core.HealthCheck=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.core.HealthCheck}
 */
proto.envoy.api.v2.Cluster.prototype.addHealthChecks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.envoy.api.v2.core.HealthCheck, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearHealthChecksList = function() {
  return this.setHealthChecksList([]);
};


/**
 * optional google.protobuf.UInt32Value max_requests_per_connection = 9;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.Cluster.prototype.getMaxRequestsPerConnection = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 9));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setMaxRequestsPerConnection = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearMaxRequestsPerConnection = function() {
  return this.setMaxRequestsPerConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasMaxRequestsPerConnection = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional cluster.CircuitBreakers circuit_breakers = 10;
 * @return {?proto.envoy.api.v2.cluster.CircuitBreakers}
 */
proto.envoy.api.v2.Cluster.prototype.getCircuitBreakers = function() {
  return /** @type{?proto.envoy.api.v2.cluster.CircuitBreakers} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_cluster_circuit_breaker_pb.CircuitBreakers, 10));
};


/**
 * @param {?proto.envoy.api.v2.cluster.CircuitBreakers|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setCircuitBreakers = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearCircuitBreakers = function() {
  return this.setCircuitBreakers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasCircuitBreakers = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional auth.UpstreamTlsContext tls_context = 11;
 * @return {?proto.envoy.api.v2.auth.UpstreamTlsContext}
 */
proto.envoy.api.v2.Cluster.prototype.getTlsContext = function() {
  return /** @type{?proto.envoy.api.v2.auth.UpstreamTlsContext} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_auth_cert_pb.UpstreamTlsContext, 11));
};


/**
 * @param {?proto.envoy.api.v2.auth.UpstreamTlsContext|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setTlsContext = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearTlsContext = function() {
  return this.setTlsContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasTlsContext = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional core.UpstreamHttpProtocolOptions upstream_http_protocol_options = 46;
 * @return {?proto.envoy.api.v2.core.UpstreamHttpProtocolOptions}
 */
proto.envoy.api.v2.Cluster.prototype.getUpstreamHttpProtocolOptions = function() {
  return /** @type{?proto.envoy.api.v2.core.UpstreamHttpProtocolOptions} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_protocol_pb.UpstreamHttpProtocolOptions, 46));
};


/**
 * @param {?proto.envoy.api.v2.core.UpstreamHttpProtocolOptions|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setUpstreamHttpProtocolOptions = function(value) {
  return jspb.Message.setWrapperField(this, 46, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearUpstreamHttpProtocolOptions = function() {
  return this.setUpstreamHttpProtocolOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasUpstreamHttpProtocolOptions = function() {
  return jspb.Message.getField(this, 46) != null;
};


/**
 * optional core.HttpProtocolOptions common_http_protocol_options = 29;
 * @return {?proto.envoy.api.v2.core.HttpProtocolOptions}
 */
proto.envoy.api.v2.Cluster.prototype.getCommonHttpProtocolOptions = function() {
  return /** @type{?proto.envoy.api.v2.core.HttpProtocolOptions} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_protocol_pb.HttpProtocolOptions, 29));
};


/**
 * @param {?proto.envoy.api.v2.core.HttpProtocolOptions|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setCommonHttpProtocolOptions = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearCommonHttpProtocolOptions = function() {
  return this.setCommonHttpProtocolOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasCommonHttpProtocolOptions = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional core.Http1ProtocolOptions http_protocol_options = 13;
 * @return {?proto.envoy.api.v2.core.Http1ProtocolOptions}
 */
proto.envoy.api.v2.Cluster.prototype.getHttpProtocolOptions = function() {
  return /** @type{?proto.envoy.api.v2.core.Http1ProtocolOptions} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_protocol_pb.Http1ProtocolOptions, 13));
};


/**
 * @param {?proto.envoy.api.v2.core.Http1ProtocolOptions|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setHttpProtocolOptions = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearHttpProtocolOptions = function() {
  return this.setHttpProtocolOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasHttpProtocolOptions = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional core.Http2ProtocolOptions http2_protocol_options = 14;
 * @return {?proto.envoy.api.v2.core.Http2ProtocolOptions}
 */
proto.envoy.api.v2.Cluster.prototype.getHttp2ProtocolOptions = function() {
  return /** @type{?proto.envoy.api.v2.core.Http2ProtocolOptions} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_protocol_pb.Http2ProtocolOptions, 14));
};


/**
 * @param {?proto.envoy.api.v2.core.Http2ProtocolOptions|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setHttp2ProtocolOptions = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearHttp2ProtocolOptions = function() {
  return this.setHttp2ProtocolOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasHttp2ProtocolOptions = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * map<string, google.protobuf.Struct> extension_protocol_options = 35;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Struct>}
 */
proto.envoy.api.v2.Cluster.prototype.getExtensionProtocolOptionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Struct>} */ (
      jspb.Message.getMapField(this, 35, opt_noLazyCreate,
      proto.google.protobuf.Struct));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearExtensionProtocolOptionsMap = function() {
  this.getExtensionProtocolOptionsMap().clear();
  return this;};


/**
 * map<string, google.protobuf.Any> typed_extension_protocol_options = 36;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Any>}
 */
proto.envoy.api.v2.Cluster.prototype.getTypedExtensionProtocolOptionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Any>} */ (
      jspb.Message.getMapField(this, 36, opt_noLazyCreate,
      proto.google.protobuf.Any));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearTypedExtensionProtocolOptionsMap = function() {
  this.getTypedExtensionProtocolOptionsMap().clear();
  return this;};


/**
 * optional google.protobuf.Duration dns_refresh_rate = 16;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.Cluster.prototype.getDnsRefreshRate = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 16));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setDnsRefreshRate = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearDnsRefreshRate = function() {
  return this.setDnsRefreshRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasDnsRefreshRate = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional RefreshRate dns_failure_refresh_rate = 44;
 * @return {?proto.envoy.api.v2.Cluster.RefreshRate}
 */
proto.envoy.api.v2.Cluster.prototype.getDnsFailureRefreshRate = function() {
  return /** @type{?proto.envoy.api.v2.Cluster.RefreshRate} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.Cluster.RefreshRate, 44));
};


/**
 * @param {?proto.envoy.api.v2.Cluster.RefreshRate|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setDnsFailureRefreshRate = function(value) {
  return jspb.Message.setWrapperField(this, 44, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearDnsFailureRefreshRate = function() {
  return this.setDnsFailureRefreshRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasDnsFailureRefreshRate = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional bool respect_dns_ttl = 39;
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.getRespectDnsTtl = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 39, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.setRespectDnsTtl = function(value) {
  return jspb.Message.setProto3BooleanField(this, 39, value);
};


/**
 * optional DnsLookupFamily dns_lookup_family = 17;
 * @return {!proto.envoy.api.v2.Cluster.DnsLookupFamily}
 */
proto.envoy.api.v2.Cluster.prototype.getDnsLookupFamily = function() {
  return /** @type {!proto.envoy.api.v2.Cluster.DnsLookupFamily} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.envoy.api.v2.Cluster.DnsLookupFamily} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.setDnsLookupFamily = function(value) {
  return jspb.Message.setProto3EnumField(this, 17, value);
};


/**
 * repeated core.Address dns_resolvers = 18;
 * @return {!Array<!proto.envoy.api.v2.core.Address>}
 */
proto.envoy.api.v2.Cluster.prototype.getDnsResolversList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.core.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_core_address_pb.Address, 18));
};


/**
 * @param {!Array<!proto.envoy.api.v2.core.Address>} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setDnsResolversList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.envoy.api.v2.core.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.core.Address}
 */
proto.envoy.api.v2.Cluster.prototype.addDnsResolvers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.envoy.api.v2.core.Address, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearDnsResolversList = function() {
  return this.setDnsResolversList([]);
};


/**
 * optional bool use_tcp_for_dns_lookups = 45;
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.getUseTcpForDnsLookups = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 45, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.setUseTcpForDnsLookups = function(value) {
  return jspb.Message.setProto3BooleanField(this, 45, value);
};


/**
 * optional cluster.OutlierDetection outlier_detection = 19;
 * @return {?proto.envoy.api.v2.cluster.OutlierDetection}
 */
proto.envoy.api.v2.Cluster.prototype.getOutlierDetection = function() {
  return /** @type{?proto.envoy.api.v2.cluster.OutlierDetection} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection, 19));
};


/**
 * @param {?proto.envoy.api.v2.cluster.OutlierDetection|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setOutlierDetection = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearOutlierDetection = function() {
  return this.setOutlierDetection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasOutlierDetection = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional google.protobuf.Duration cleanup_interval = 20;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.Cluster.prototype.getCleanupInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 20));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setCleanupInterval = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearCleanupInterval = function() {
  return this.setCleanupInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasCleanupInterval = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional core.BindConfig upstream_bind_config = 21;
 * @return {?proto.envoy.api.v2.core.BindConfig}
 */
proto.envoy.api.v2.Cluster.prototype.getUpstreamBindConfig = function() {
  return /** @type{?proto.envoy.api.v2.core.BindConfig} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_address_pb.BindConfig, 21));
};


/**
 * @param {?proto.envoy.api.v2.core.BindConfig|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setUpstreamBindConfig = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearUpstreamBindConfig = function() {
  return this.setUpstreamBindConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasUpstreamBindConfig = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional LbSubsetConfig lb_subset_config = 22;
 * @return {?proto.envoy.api.v2.Cluster.LbSubsetConfig}
 */
proto.envoy.api.v2.Cluster.prototype.getLbSubsetConfig = function() {
  return /** @type{?proto.envoy.api.v2.Cluster.LbSubsetConfig} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.Cluster.LbSubsetConfig, 22));
};


/**
 * @param {?proto.envoy.api.v2.Cluster.LbSubsetConfig|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setLbSubsetConfig = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearLbSubsetConfig = function() {
  return this.setLbSubsetConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasLbSubsetConfig = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional RingHashLbConfig ring_hash_lb_config = 23;
 * @return {?proto.envoy.api.v2.Cluster.RingHashLbConfig}
 */
proto.envoy.api.v2.Cluster.prototype.getRingHashLbConfig = function() {
  return /** @type{?proto.envoy.api.v2.Cluster.RingHashLbConfig} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.Cluster.RingHashLbConfig, 23));
};


/**
 * @param {?proto.envoy.api.v2.Cluster.RingHashLbConfig|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setRingHashLbConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.envoy.api.v2.Cluster.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearRingHashLbConfig = function() {
  return this.setRingHashLbConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasRingHashLbConfig = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional OriginalDstLbConfig original_dst_lb_config = 34;
 * @return {?proto.envoy.api.v2.Cluster.OriginalDstLbConfig}
 */
proto.envoy.api.v2.Cluster.prototype.getOriginalDstLbConfig = function() {
  return /** @type{?proto.envoy.api.v2.Cluster.OriginalDstLbConfig} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.Cluster.OriginalDstLbConfig, 34));
};


/**
 * @param {?proto.envoy.api.v2.Cluster.OriginalDstLbConfig|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setOriginalDstLbConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.envoy.api.v2.Cluster.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearOriginalDstLbConfig = function() {
  return this.setOriginalDstLbConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasOriginalDstLbConfig = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional LeastRequestLbConfig least_request_lb_config = 37;
 * @return {?proto.envoy.api.v2.Cluster.LeastRequestLbConfig}
 */
proto.envoy.api.v2.Cluster.prototype.getLeastRequestLbConfig = function() {
  return /** @type{?proto.envoy.api.v2.Cluster.LeastRequestLbConfig} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.Cluster.LeastRequestLbConfig, 37));
};


/**
 * @param {?proto.envoy.api.v2.Cluster.LeastRequestLbConfig|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setLeastRequestLbConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 37, proto.envoy.api.v2.Cluster.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearLeastRequestLbConfig = function() {
  return this.setLeastRequestLbConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasLeastRequestLbConfig = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional CommonLbConfig common_lb_config = 27;
 * @return {?proto.envoy.api.v2.Cluster.CommonLbConfig}
 */
proto.envoy.api.v2.Cluster.prototype.getCommonLbConfig = function() {
  return /** @type{?proto.envoy.api.v2.Cluster.CommonLbConfig} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.Cluster.CommonLbConfig, 27));
};


/**
 * @param {?proto.envoy.api.v2.Cluster.CommonLbConfig|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setCommonLbConfig = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearCommonLbConfig = function() {
  return this.setCommonLbConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasCommonLbConfig = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional core.TransportSocket transport_socket = 24;
 * @return {?proto.envoy.api.v2.core.TransportSocket}
 */
proto.envoy.api.v2.Cluster.prototype.getTransportSocket = function() {
  return /** @type{?proto.envoy.api.v2.core.TransportSocket} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.TransportSocket, 24));
};


/**
 * @param {?proto.envoy.api.v2.core.TransportSocket|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setTransportSocket = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearTransportSocket = function() {
  return this.setTransportSocket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasTransportSocket = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional core.Metadata metadata = 25;
 * @return {?proto.envoy.api.v2.core.Metadata}
 */
proto.envoy.api.v2.Cluster.prototype.getMetadata = function() {
  return /** @type{?proto.envoy.api.v2.core.Metadata} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.Metadata, 25));
};


/**
 * @param {?proto.envoy.api.v2.core.Metadata|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional ClusterProtocolSelection protocol_selection = 26;
 * @return {!proto.envoy.api.v2.Cluster.ClusterProtocolSelection}
 */
proto.envoy.api.v2.Cluster.prototype.getProtocolSelection = function() {
  return /** @type {!proto.envoy.api.v2.Cluster.ClusterProtocolSelection} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {!proto.envoy.api.v2.Cluster.ClusterProtocolSelection} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.setProtocolSelection = function(value) {
  return jspb.Message.setProto3EnumField(this, 26, value);
};


/**
 * optional UpstreamConnectionOptions upstream_connection_options = 30;
 * @return {?proto.envoy.api.v2.UpstreamConnectionOptions}
 */
proto.envoy.api.v2.Cluster.prototype.getUpstreamConnectionOptions = function() {
  return /** @type{?proto.envoy.api.v2.UpstreamConnectionOptions} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.UpstreamConnectionOptions, 30));
};


/**
 * @param {?proto.envoy.api.v2.UpstreamConnectionOptions|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setUpstreamConnectionOptions = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearUpstreamConnectionOptions = function() {
  return this.setUpstreamConnectionOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasUpstreamConnectionOptions = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional bool close_connections_on_host_health_failure = 31;
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.getCloseConnectionsOnHostHealthFailure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 31, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.setCloseConnectionsOnHostHealthFailure = function(value) {
  return jspb.Message.setProto3BooleanField(this, 31, value);
};


/**
 * optional bool drain_connections_on_host_removal = 32;
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.getDrainConnectionsOnHostRemoval = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 32, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.setDrainConnectionsOnHostRemoval = function(value) {
  return jspb.Message.setProto3BooleanField(this, 32, value);
};


/**
 * repeated cluster.Filter filters = 40;
 * @return {!Array<!proto.envoy.api.v2.cluster.Filter>}
 */
proto.envoy.api.v2.Cluster.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.cluster.Filter>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_cluster_filter_pb.Filter, 40));
};


/**
 * @param {!Array<!proto.envoy.api.v2.cluster.Filter>} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 40, value);
};


/**
 * @param {!proto.envoy.api.v2.cluster.Filter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.cluster.Filter}
 */
proto.envoy.api.v2.Cluster.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 40, opt_value, proto.envoy.api.v2.cluster.Filter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};


/**
 * optional LoadBalancingPolicy load_balancing_policy = 41;
 * @return {?proto.envoy.api.v2.LoadBalancingPolicy}
 */
proto.envoy.api.v2.Cluster.prototype.getLoadBalancingPolicy = function() {
  return /** @type{?proto.envoy.api.v2.LoadBalancingPolicy} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.LoadBalancingPolicy, 41));
};


/**
 * @param {?proto.envoy.api.v2.LoadBalancingPolicy|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setLoadBalancingPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 41, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearLoadBalancingPolicy = function() {
  return this.setLoadBalancingPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasLoadBalancingPolicy = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional core.ConfigSource lrs_server = 42;
 * @return {?proto.envoy.api.v2.core.ConfigSource}
 */
proto.envoy.api.v2.Cluster.prototype.getLrsServer = function() {
  return /** @type{?proto.envoy.api.v2.core.ConfigSource} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_config_source_pb.ConfigSource, 42));
};


/**
 * @param {?proto.envoy.api.v2.core.ConfigSource|undefined} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
*/
proto.envoy.api.v2.Cluster.prototype.setLrsServer = function(value) {
  return jspb.Message.setWrapperField(this, 42, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.clearLrsServer = function() {
  return this.setLrsServer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.hasLrsServer = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional bool track_timeout_budgets = 47;
 * @return {boolean}
 */
proto.envoy.api.v2.Cluster.prototype.getTrackTimeoutBudgets = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 47, false));
};


/**
 * @param {boolean} value
 * @return {!proto.envoy.api.v2.Cluster} returns this
 */
proto.envoy.api.v2.Cluster.prototype.setTrackTimeoutBudgets = function(value) {
  return jspb.Message.setProto3BooleanField(this, 47, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.LoadBalancingPolicy.repeatedFields_ = [1];



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
proto.envoy.api.v2.LoadBalancingPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.LoadBalancingPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.LoadBalancingPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.LoadBalancingPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    policiesList: jspb.Message.toObjectList(msg.getPoliciesList(),
    proto.envoy.api.v2.LoadBalancingPolicy.Policy.toObject, includeInstance)
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
 * @return {!proto.envoy.api.v2.LoadBalancingPolicy}
 */
proto.envoy.api.v2.LoadBalancingPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.LoadBalancingPolicy;
  return proto.envoy.api.v2.LoadBalancingPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.LoadBalancingPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.LoadBalancingPolicy}
 */
proto.envoy.api.v2.LoadBalancingPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.api.v2.LoadBalancingPolicy.Policy;
      reader.readMessage(value,proto.envoy.api.v2.LoadBalancingPolicy.Policy.deserializeBinaryFromReader);
      msg.addPolicies(value);
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
proto.envoy.api.v2.LoadBalancingPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.LoadBalancingPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.LoadBalancingPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.LoadBalancingPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPoliciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.envoy.api.v2.LoadBalancingPolicy.Policy.serializeBinaryToWriter
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
proto.envoy.api.v2.LoadBalancingPolicy.Policy.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.LoadBalancingPolicy.Policy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.LoadBalancingPolicy.Policy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.LoadBalancingPolicy.Policy.toObject = function(includeInstance, msg) {
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
 * @return {!proto.envoy.api.v2.LoadBalancingPolicy.Policy}
 */
proto.envoy.api.v2.LoadBalancingPolicy.Policy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.LoadBalancingPolicy.Policy;
  return proto.envoy.api.v2.LoadBalancingPolicy.Policy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.LoadBalancingPolicy.Policy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.LoadBalancingPolicy.Policy}
 */
proto.envoy.api.v2.LoadBalancingPolicy.Policy.deserializeBinaryFromReader = function(msg, reader) {
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
proto.envoy.api.v2.LoadBalancingPolicy.Policy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.LoadBalancingPolicy.Policy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.LoadBalancingPolicy.Policy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.LoadBalancingPolicy.Policy.serializeBinaryToWriter = function(message, writer) {
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
proto.envoy.api.v2.LoadBalancingPolicy.Policy.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.envoy.api.v2.LoadBalancingPolicy.Policy} returns this
 */
proto.envoy.api.v2.LoadBalancingPolicy.Policy.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct config = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.envoy.api.v2.LoadBalancingPolicy.Policy.prototype.getConfig = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.envoy.api.v2.LoadBalancingPolicy.Policy} returns this
*/
proto.envoy.api.v2.LoadBalancingPolicy.Policy.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.LoadBalancingPolicy.Policy} returns this
 */
proto.envoy.api.v2.LoadBalancingPolicy.Policy.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.LoadBalancingPolicy.Policy.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Any typed_config = 3;
 * @return {?proto.google.protobuf.Any}
 */
proto.envoy.api.v2.LoadBalancingPolicy.Policy.prototype.getTypedConfig = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 3));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.envoy.api.v2.LoadBalancingPolicy.Policy} returns this
*/
proto.envoy.api.v2.LoadBalancingPolicy.Policy.prototype.setTypedConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.LoadBalancingPolicy.Policy} returns this
 */
proto.envoy.api.v2.LoadBalancingPolicy.Policy.prototype.clearTypedConfig = function() {
  return this.setTypedConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.LoadBalancingPolicy.Policy.prototype.hasTypedConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Policy policies = 1;
 * @return {!Array<!proto.envoy.api.v2.LoadBalancingPolicy.Policy>}
 */
proto.envoy.api.v2.LoadBalancingPolicy.prototype.getPoliciesList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.LoadBalancingPolicy.Policy>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.LoadBalancingPolicy.Policy, 1));
};


/**
 * @param {!Array<!proto.envoy.api.v2.LoadBalancingPolicy.Policy>} value
 * @return {!proto.envoy.api.v2.LoadBalancingPolicy} returns this
*/
proto.envoy.api.v2.LoadBalancingPolicy.prototype.setPoliciesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.envoy.api.v2.LoadBalancingPolicy.Policy=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.LoadBalancingPolicy.Policy}
 */
proto.envoy.api.v2.LoadBalancingPolicy.prototype.addPolicies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.envoy.api.v2.LoadBalancingPolicy.Policy, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.envoy.api.v2.LoadBalancingPolicy} returns this
 */
proto.envoy.api.v2.LoadBalancingPolicy.prototype.clearPoliciesList = function() {
  return this.setPoliciesList([]);
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
proto.envoy.api.v2.UpstreamBindConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.UpstreamBindConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.UpstreamBindConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.UpstreamBindConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourceAddress: (f = msg.getSourceAddress()) && envoy_api_v2_core_address_pb.Address.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.UpstreamBindConfig}
 */
proto.envoy.api.v2.UpstreamBindConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.UpstreamBindConfig;
  return proto.envoy.api.v2.UpstreamBindConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.UpstreamBindConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.UpstreamBindConfig}
 */
proto.envoy.api.v2.UpstreamBindConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_api_v2_core_address_pb.Address;
      reader.readMessage(value,envoy_api_v2_core_address_pb.Address.deserializeBinaryFromReader);
      msg.setSourceAddress(value);
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
proto.envoy.api.v2.UpstreamBindConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.UpstreamBindConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.UpstreamBindConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.UpstreamBindConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      envoy_api_v2_core_address_pb.Address.serializeBinaryToWriter
    );
  }
};


/**
 * optional core.Address source_address = 1;
 * @return {?proto.envoy.api.v2.core.Address}
 */
proto.envoy.api.v2.UpstreamBindConfig.prototype.getSourceAddress = function() {
  return /** @type{?proto.envoy.api.v2.core.Address} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_address_pb.Address, 1));
};


/**
 * @param {?proto.envoy.api.v2.core.Address|undefined} value
 * @return {!proto.envoy.api.v2.UpstreamBindConfig} returns this
*/
proto.envoy.api.v2.UpstreamBindConfig.prototype.setSourceAddress = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.UpstreamBindConfig} returns this
 */
proto.envoy.api.v2.UpstreamBindConfig.prototype.clearSourceAddress = function() {
  return this.setSourceAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.UpstreamBindConfig.prototype.hasSourceAddress = function() {
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
proto.envoy.api.v2.UpstreamConnectionOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.UpstreamConnectionOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.UpstreamConnectionOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.UpstreamConnectionOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    tcpKeepalive: (f = msg.getTcpKeepalive()) && envoy_api_v2_core_address_pb.TcpKeepalive.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.UpstreamConnectionOptions}
 */
proto.envoy.api.v2.UpstreamConnectionOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.UpstreamConnectionOptions;
  return proto.envoy.api.v2.UpstreamConnectionOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.UpstreamConnectionOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.UpstreamConnectionOptions}
 */
proto.envoy.api.v2.UpstreamConnectionOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_api_v2_core_address_pb.TcpKeepalive;
      reader.readMessage(value,envoy_api_v2_core_address_pb.TcpKeepalive.deserializeBinaryFromReader);
      msg.setTcpKeepalive(value);
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
proto.envoy.api.v2.UpstreamConnectionOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.UpstreamConnectionOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.UpstreamConnectionOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.UpstreamConnectionOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTcpKeepalive();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      envoy_api_v2_core_address_pb.TcpKeepalive.serializeBinaryToWriter
    );
  }
};


/**
 * optional core.TcpKeepalive tcp_keepalive = 1;
 * @return {?proto.envoy.api.v2.core.TcpKeepalive}
 */
proto.envoy.api.v2.UpstreamConnectionOptions.prototype.getTcpKeepalive = function() {
  return /** @type{?proto.envoy.api.v2.core.TcpKeepalive} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_address_pb.TcpKeepalive, 1));
};


/**
 * @param {?proto.envoy.api.v2.core.TcpKeepalive|undefined} value
 * @return {!proto.envoy.api.v2.UpstreamConnectionOptions} returns this
*/
proto.envoy.api.v2.UpstreamConnectionOptions.prototype.setTcpKeepalive = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.UpstreamConnectionOptions} returns this
 */
proto.envoy.api.v2.UpstreamConnectionOptions.prototype.clearTcpKeepalive = function() {
  return this.setTcpKeepalive(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.UpstreamConnectionOptions.prototype.hasTcpKeepalive = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.envoy.api.v2);
