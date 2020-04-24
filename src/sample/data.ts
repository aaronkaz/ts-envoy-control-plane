export const _eds_bbc = {
  'cluster_name': 'bbc',
  'endpoints': [
    {
      'lb_endpoints': [
        {
          'endpoint': {
            'address': {
              'socket_address': {
                'address': '199.232.32.81',
                'port_value': '80'
              }
            }
          }
        }
      ]
    }
  ]
}

export const _edge = {
  'cluster_name': 'edge',
  'endpoints': [
    {
      'lb_endpoints': [
        {
          'endpoint': {
            'address': {
              'socket_address': {
                'address': '3.89.108.241',
                'port_value': '47376'
              }
            }
          }
        }
      ]
    }
  ]
}

export const _cluster1 = {
  'name': 'edge',
  'connect_timeout': '.25s',
  'type': 'EDS',
  'eds_cluster_config': {
    'eds_config': {
      'api_config_source': {
        'api_type': 'GRPC',
        'grpc_services': [{
          'envoy_grpc': {
            'cluster_name': 'xds_cluster'
          }
        }]
      }
    }
  }
}

export const _cluster2 = {
  'name': 'edge',
  'connect_timeout': '.25s',
  'type': 'EDS',
  'eds_cluster_config': {
    'eds_config': {
      'ads': {}
    }
  }
}

export const _route1 = {
  'name': 'local_route',
  'virtual_hosts': [
    {
      'name': 'service',
      'domains': [ '*' ],
      'routes': [
        {
          'match': {
            'prefix': '/service-a'
          },
          'route': {
            'cluster': 'service-a'
          }
        },
        {
          'match': {
            'prefix': '/edge'
          },
          'route': {
            'cluster': 'edge'
          }
        }
      ]
    }
  ]
}

export const _listener1 = {
  'name': 'proxy-2-listener',
  'address': {
    'socket_address': {
      'address': '0.0.0.0',
      'port_value': '80'
    }
  },
  'filter_chains': [
    {
      'filters': [
        {
          'name': 'envoy.http_connection_manager',
          'typed_config': {
            '@type': 'type.googleapis.com/envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager',
            'codec_type': 'AUTO',
            'stat_prefix': 'ingress_http',
            'http_filters': [
              {
                'name': 'envoy.router',
                'config': {}
              }
            ],
            'rds': {
              'route_config_name': 'local_route',
              'config_source': {
                'api_config_source': {
                  'api_type': 'GRPC',
                  'grpc_services': [{
                    'envoy_grpc': {
                      'cluster_name': 'xds_cluster'
                    }
                  }]
                }
              }
            }
          }
        }
      ]
    }
  ]
}

export const _route2 = {
  'name': 'local_route',
  'virtual_hosts': [
    {
      'name': 'service',
      'domains': [ '*' ],
      'routes': [
        {
          'match': {
            'prefix': '/edge'
          },
          'route': {
            'cluster': 'edge'
          }
        }
      ]
    }
  ]
}

export const _listener2 = {
  'name': 'proxy-3-listener',
  'address': {
    'socket_address': {
      'address': '0.0.0.0',
      'port_value': '80'
    }
  },
  'filter_chains': [
    {
      'filters': [
        {
          'name': 'envoy.http_connection_manager',
          'typed_config': {
            '@type': 'type.googleapis.com/envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager',
            'codec_type': 'AUTO',
            'stat_prefix': 'ingress_http',
            'http_filters': [
              {
                'name': 'envoy.router',
                'config': {}
              }
            ],
            'rds': {
              'route_config_name': 'local_route',
              'config_source': {
                'ads':{}
              }
            }
          }
        }
      ]
    }
  ]
}
