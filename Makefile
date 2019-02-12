

gen:
	protoc --go_out=plugins=grpc:.. pkg/delivery/grpc/proto/todo.proto

