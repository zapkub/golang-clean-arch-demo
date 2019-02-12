// package: agent
// file: todo.proto

import * as jspb from 'google-protobuf';

export class TodoItem extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getIschecked(): boolean;
  setIschecked(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoItem.AsObject;
  static toObject(includeInstance: boolean, msg: TodoItem): TodoItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TodoItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoItem;
  static deserializeBinaryFromReader(message: TodoItem, reader: jspb.BinaryReader): TodoItem;
}

export namespace TodoItem {
  export type AsObject = {
    id: string,
    description: string,
    userid: string,
    ischecked: boolean,
  }
}

export class CheckTodoInput extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckTodoInput.AsObject;
  static toObject(includeInstance: boolean, msg: CheckTodoInput): CheckTodoInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckTodoInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckTodoInput;
  static deserializeBinaryFromReader(message: CheckTodoInput, reader: jspb.BinaryReader): CheckTodoInput;
}

export namespace CheckTodoInput {
  export type AsObject = {
    id: string,
  }
}

export class CheckTodoOutput extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): TodoItem | undefined;
  setResult(value?: TodoItem): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckTodoOutput.AsObject;
  static toObject(includeInstance: boolean, msg: CheckTodoOutput): CheckTodoOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckTodoOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckTodoOutput;
  static deserializeBinaryFromReader(message: CheckTodoOutput, reader: jspb.BinaryReader): CheckTodoOutput;
}

export namespace CheckTodoOutput {
  export type AsObject = {
    result?: TodoItem.AsObject,
  }
}

export class CreateTodoInput extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTodoInput.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTodoInput): CreateTodoInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTodoInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTodoInput;
  static deserializeBinaryFromReader(message: CreateTodoInput, reader: jspb.BinaryReader): CreateTodoInput;
}

export namespace CreateTodoInput {
  export type AsObject = {
    description: string,
    userid: string,
  }
}

export class CreateTodoOutput extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): TodoItem | undefined;
  setResult(value?: TodoItem): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTodoOutput.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTodoOutput): CreateTodoOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTodoOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTodoOutput;
  static deserializeBinaryFromReader(message: CreateTodoOutput, reader: jspb.BinaryReader): CreateTodoOutput;
}

export namespace CreateTodoOutput {
  export type AsObject = {
    result?: TodoItem.AsObject,
  }
}

export class GetTodosInput extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodosInput.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodosInput): GetTodosInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTodosInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodosInput;
  static deserializeBinaryFromReader(message: GetTodosInput, reader: jspb.BinaryReader): GetTodosInput;
}

export namespace GetTodosInput {
  export type AsObject = {
    userid: string,
  }
}

export class GetTodosOutput extends jspb.Message {
  clearResultList(): void;
  getResultList(): Array<TodoItem>;
  setResultList(value: Array<TodoItem>): void;
  addResult(value?: TodoItem, index?: number): TodoItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodosOutput.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodosOutput): GetTodosOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTodosOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodosOutput;
  static deserializeBinaryFromReader(message: GetTodosOutput, reader: jspb.BinaryReader): GetTodosOutput;
}

export namespace GetTodosOutput {
  export type AsObject = {
    resultList: Array<TodoItem.AsObject>,
  }
}

