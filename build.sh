#!/usr/bin/env bash

cd "$(dirname "$0")"
rm -rf ./vendor 
mkdir ./vendor

# envoy
git clone git@github.com:envoyproxy/data-plane-api.git
cp -R data-plane-api/envoy ./vendor/envoy
rm -rf data-plane-api

# validate
git clone git@github.com:envoyproxy/protoc-gen-validate.git
cp -R protoc-gen-validate/validate ./vendor/validate
rm -rf protoc-gen-validate

# google apis
git clone git@github.com:googleapis/googleapis.git
cp -R googleapis/google ./vendor/google
rm -rf googleapis

#git clone git@github.com:protocolbuffers/protobuf.git
#cp -R protobuf/src/google/protobuf ./vendor/google/protobuf
#rm -rf protobuf

# udpa
git clone git@github.com:cncf/udpa.git
cp -R udpa/udpa ./vendor/udpa
rm -rf udpa

# opencensus trace
git clone git@github.com:census-instrumentation/opencensus-proto.git
cp -R opencensus-proto/src/opencensus ./vendor/opencensus
rm -rf opencensus-proto

# prometheus metrics
git clone git@github.com:prometheus/client_model.git
cp client_model/metrics.proto ./vendor/metrics.proto
rm -rf client_model

bash ./gen.sh
