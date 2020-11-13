#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail
shopt -s nullglob

cd "$(dirname "$0")"

root="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
vendor=${root}/vendor

# generators
protoc=$(which protoc)
$protoc --version
#grpc_tools_node_protoc=$(which ./node_modules/.bin/grpc_tools_node_protoc)
#$grpc_tools_node_protoc --version

# plugins
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
JS_PLUGIN_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"

# directories to compile
imports=(
  "${vendor}/envoy/annotations"
  "${vendor}/envoy/api/v2"
  "${vendor}/envoy/config/filter/accesslog/v2"
  "${vendor}/envoy/config/filter/http/aws_lambda/v2alpha"
  "${vendor}/envoy/config/filter/http/ext_authz/v2"
  "${vendor}/envoy/config/filter/http/lua/v2"
  "${vendor}/envoy/config/filter/network/ext_authz/v2"
  "${vendor}/envoy/config/filter/network/http_connection_manager/v2"
  "${vendor}/envoy/config/filter/network/mysql_proxy"
  "${vendor}/envoy/config/filter/network/tcp_proxy/v2"
  "${vendor}/envoy/config/listener/v2"
  "${vendor}/envoy/config/trace/v2"
  "${vendor}/envoy/service/auth/v2"
  "${vendor}/envoy/service/discovery/v2"
  "${vendor}/envoy/type"
  "${vendor}/opencensus/proto/resource"
  "${vendor}/opencensus/proto/trace"
  "${vendor}/udpa/annotations"
  "${vendor}/validate"
)

# individual files to compile
importsi=(
  "${vendor}/google/api/expr/v1alpha1/syntax.proto"
  "${vendor}/google/api/annotations.proto"
  "${vendor}/google/api/http.proto"
  "${vendor}/google/rpc/status.proto"
  "${vendor}/metrics.proto"
)

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./lib"

for i in "${imports[@]}"
do
  for path in $(find ${i} -type d)
  do
    path_protos=(${path}/*.proto)
    if [[ ${#path_protos[@]} > 0 ]]
    then
      echo "${path} ..."
      $protoc --proto_path=${vendor} \
        --js_out="import_style=commonjs,binary:${OUT_DIR}" \
        --grpc_out=$OUT_DIR \
        --plugin="protoc-gen-grpc=$JS_PLUGIN_PATH" \
        ${path}/*.proto 

      $protoc --proto_path=${vendor} \
        --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
        --ts_out="${OUT_DIR}" \
        ${path}/*.proto 
    fi
  done
done

for i in "${importsi[@]}"
do
  echo "${i} ..."
  $protoc --proto_path=${vendor} \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --grpc_out=$OUT_DIR \
    --plugin="protoc-gen-grpc=$JS_PLUGIN_PATH" \
    ${i}

  $protoc --proto_path=${vendor} \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --ts_out="${OUT_DIR}" \
    ${i}
done
