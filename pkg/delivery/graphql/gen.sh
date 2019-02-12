#!/usr/bin/env bash
	yarn protoc-gen-grpc \
        --js_out="import_style=commonjs,binary:./generated" \
        --grpc_out="./generated" \
        --proto_path=../grpc/proto \
        ../grpc/proto/todo.proto

    yarn protoc-gen-grpc-ts \
        --ts_out=service=true:./generated \
        --proto_path=../grpc/proto \
        ../grpc/proto/todo.proto
