// package: agent
// file: todo.proto

import * as grpc from 'grpc';
import * as todo_pb from './todo_pb';

interface ITodoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getTodos: ITodoService_IGetTodos;
  createTodo: ITodoService_ICreateTodo;
  checkTodo: ITodoService_ICheckTodo;
}

interface ITodoService_IGetTodos {
  path: string; // "/agent.Todo/GetTodos"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<todo_pb.GetTodosInput>;
  requestDeserialize: grpc.deserialize<todo_pb.GetTodosInput>;
  responseSerialize: grpc.serialize<todo_pb.GetTodosOutput>;
  responseDeserialize: grpc.deserialize<todo_pb.GetTodosOutput>;
}

interface ITodoService_ICreateTodo {
  path: string; // "/agent.Todo/CreateTodo"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<todo_pb.CreateTodoInput>;
  requestDeserialize: grpc.deserialize<todo_pb.CreateTodoInput>;
  responseSerialize: grpc.serialize<todo_pb.CreateTodoOutput>;
  responseDeserialize: grpc.deserialize<todo_pb.CreateTodoOutput>;
}

interface ITodoService_ICheckTodo {
  path: string; // "/agent.Todo/CheckTodo"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<todo_pb.CheckTodoInput>;
  requestDeserialize: grpc.deserialize<todo_pb.CheckTodoInput>;
  responseSerialize: grpc.serialize<todo_pb.CheckTodoOutput>;
  responseDeserialize: grpc.deserialize<todo_pb.CheckTodoOutput>;
}

export const TodoService: ITodoService;
export interface ITodoServer {
  getTodos: grpc.handleUnaryCall<todo_pb.GetTodosInput, todo_pb.GetTodosOutput>;
  createTodo: grpc.handleUnaryCall<todo_pb.CreateTodoInput, todo_pb.CreateTodoOutput>;
  checkTodo: grpc.handleUnaryCall<todo_pb.CheckTodoInput, todo_pb.CheckTodoOutput>;
}

export interface ITodoClient {
  getTodos(request: todo_pb.GetTodosInput, callback: (error: Error | null, response: todo_pb.GetTodosOutput) => void): grpc.ClientUnaryCall;
  getTodos(request: todo_pb.GetTodosInput, metadata: grpc.Metadata, callback: (error: Error | null, response: todo_pb.GetTodosOutput) => void): grpc.ClientUnaryCall;
  createTodo(request: todo_pb.CreateTodoInput, callback: (error: Error | null, response: todo_pb.CreateTodoOutput) => void): grpc.ClientUnaryCall;
  createTodo(request: todo_pb.CreateTodoInput, metadata: grpc.Metadata, callback: (error: Error | null, response: todo_pb.CreateTodoOutput) => void): grpc.ClientUnaryCall;
  checkTodo(request: todo_pb.CheckTodoInput, callback: (error: Error | null, response: todo_pb.CheckTodoOutput) => void): grpc.ClientUnaryCall;
  checkTodo(request: todo_pb.CheckTodoInput, metadata: grpc.Metadata, callback: (error: Error | null, response: todo_pb.CheckTodoOutput) => void): grpc.ClientUnaryCall;
}

export class TodoClient extends grpc.Client implements ITodoClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public getTodos(request: todo_pb.GetTodosInput, callback: (error: Error | null, response: todo_pb.GetTodosOutput) => void): grpc.ClientUnaryCall;
  public getTodos(request: todo_pb.GetTodosInput, metadata: grpc.Metadata, callback: (error: Error | null, response: todo_pb.GetTodosOutput) => void): grpc.ClientUnaryCall;
  public createTodo(request: todo_pb.CreateTodoInput, callback: (error: Error | null, response: todo_pb.CreateTodoOutput) => void): grpc.ClientUnaryCall;
  public createTodo(request: todo_pb.CreateTodoInput, metadata: grpc.Metadata, callback: (error: Error | null, response: todo_pb.CreateTodoOutput) => void): grpc.ClientUnaryCall;
  public checkTodo(request: todo_pb.CheckTodoInput, callback: (error: Error | null, response: todo_pb.CheckTodoOutput) => void): grpc.ClientUnaryCall;
  public checkTodo(request: todo_pb.CheckTodoInput, metadata: grpc.Metadata, callback: (error: Error | null, response: todo_pb.CheckTodoOutput) => void): grpc.ClientUnaryCall;
}

