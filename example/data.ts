export const _service_a_endpoints = {
  'cluster_name': 'service_a',
  'endpoints': [
    {
      'lb_endpoints': [
        {
          'endpoint': {
            'address': {
              'socket_address': {
                'address': `${process.env.SERVICE_A}`,
                'port_value': '3000'
              }
            }
          }
        }
      ]
    }
  ]
}

export const _service_b_endpoints = {
  'cluster_name': 'service_b',
  'endpoints': [
    {
      'lb_endpoints': [
        {
          'endpoint': {
            'address': {
              'socket_address': {
                'address': `${process.env.SERVICE_B}`,
                'port_value': '3000'
              }
            }
          }
        }
      ]
    }
  ]
}

export const _service_a_cluster = {
  'name': 'service_a',
  'connect_timeout': '.25s',
  'type': 'EDS',
  'eds_cluster_config': {
    'eds_config': {
      'ads': {}
    }
  }
}

export const _service_b_cluster = {
  'name': 'service_b',
  'connect_timeout': '.25s',
  'type': 'EDS',
  'eds_cluster_config': {
    'eds_config': {
      'ads': {}
    }
  }
}

export const _proxy_1_routes = {
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
            'cluster': 'service_a'
          }
        },
        {
          'match': {
            'prefix': '/service-b'
          },
          'route': {
            'cluster': 'service_b'
          }
        }
      ]
    }
  ]
}

export const _proxy_1_listener = {
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
