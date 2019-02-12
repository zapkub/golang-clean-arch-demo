// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var todo_pb = require('./todo_pb.js');

function serialize_agent_CheckTodoInput(arg) {
  if (!(arg instanceof todo_pb.CheckTodoInput)) {
    throw new Error('Expected argument of type agent.CheckTodoInput');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_agent_CheckTodoInput(buffer_arg) {
  return todo_pb.CheckTodoInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agent_CheckTodoOutput(arg) {
  if (!(arg instanceof todo_pb.CheckTodoOutput)) {
    throw new Error('Expected argument of type agent.CheckTodoOutput');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_agent_CheckTodoOutput(buffer_arg) {
  return todo_pb.CheckTodoOutput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agent_CreateTodoInput(arg) {
  if (!(arg instanceof todo_pb.CreateTodoInput)) {
    throw new Error('Expected argument of type agent.CreateTodoInput');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_agent_CreateTodoInput(buffer_arg) {
  return todo_pb.CreateTodoInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agent_CreateTodoOutput(arg) {
  if (!(arg instanceof todo_pb.CreateTodoOutput)) {
    throw new Error('Expected argument of type agent.CreateTodoOutput');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_agent_CreateTodoOutput(buffer_arg) {
  return todo_pb.CreateTodoOutput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agent_GetTodosInput(arg) {
  if (!(arg instanceof todo_pb.GetTodosInput)) {
    throw new Error('Expected argument of type agent.GetTodosInput');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_agent_GetTodosInput(buffer_arg) {
  return todo_pb.GetTodosInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agent_GetTodosOutput(arg) {
  if (!(arg instanceof todo_pb.GetTodosOutput)) {
    throw new Error('Expected argument of type agent.GetTodosOutput');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_agent_GetTodosOutput(buffer_arg) {
  return todo_pb.GetTodosOutput.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoService = exports.TodoService = {
  getTodos: {
    path: '/agent.Todo/GetTodos',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.GetTodosInput,
    responseType: todo_pb.GetTodosOutput,
    requestSerialize: serialize_agent_GetTodosInput,
    requestDeserialize: deserialize_agent_GetTodosInput,
    responseSerialize: serialize_agent_GetTodosOutput,
    responseDeserialize: deserialize_agent_GetTodosOutput,
  },
  createTodo: {
    path: '/agent.Todo/CreateTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.CreateTodoInput,
    responseType: todo_pb.CreateTodoOutput,
    requestSerialize: serialize_agent_CreateTodoInput,
    requestDeserialize: deserialize_agent_CreateTodoInput,
    responseSerialize: serialize_agent_CreateTodoOutput,
    responseDeserialize: deserialize_agent_CreateTodoOutput,
  },
  checkTodo: {
    path: '/agent.Todo/CheckTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.CheckTodoInput,
    responseType: todo_pb.CheckTodoOutput,
    requestSerialize: serialize_agent_CheckTodoInput,
    requestDeserialize: deserialize_agent_CheckTodoInput,
    responseSerialize: serialize_agent_CheckTodoOutput,
    responseDeserialize: deserialize_agent_CheckTodoOutput,
  },
};

exports.TodoClient = grpc.makeGenericClientConstructor(TodoService);
