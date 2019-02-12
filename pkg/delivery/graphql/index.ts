

import { GraphQLServer } from 'graphql-yoga'
import gql from 'graphql-tag'
import {TodoClient} from "./generated/todo_grpc_pb";
import {CreateTodoInput, GetTodosInput} from "./generated/todo_pb";
const grpc = require('grpc')

interface GraphQLContext {
    client: TodoClient
}
interface TodoItem {
    userId: string
    description: string
    id: string
    isChecked: boolean
}

const server = new GraphQLServer({
    context:(ctx) => {
        return {
            ...ctx,
            client: new TodoClient("localhost:3002", grpc.credentials.createInsecure())
        }
    },
    resolvers: {
        Query: {
            todos(_, args:{userId: string}, ctx: GraphQLContext): Promise<TodoItem[]> {
                return new Promise(async (resolve, reject) => {
                    const request = new GetTodosInput()
                    request.setUserid(args.userId)
                    await ctx.client.getTodos(request, function(err, result) {
                        if (err) {
                            reject(err)
                            return
                        }
                        resolve(result.getResultList().map(i => {
                            return {
                                userId: i.getUserid(),
                                isChecked: i.getIschecked(),
                                description: i.getDescription(),
                                id: i.getId(),
                            }
                        }))
                    })
                })
            }
        },
        Mutation: {
            createTodo(_, args:{description: string, userId: string}, ctx: GraphQLContext): Promise<TodoItem> {
                return new Promise(async ( resolve,reject )=>{
                    const request = new CreateTodoInput()
                    request.setDescription(args.description)
                    request.setUserid(args.userId)
                    await ctx.client.createTodo(request, function(err, resp) {
                        if (err) {
                            reject(err)
                            return
                        }
                        const result = resp.getResult()
                        if (!result) {
                            reject(new Error("Result create error"))
                            return
                        }
                        resolve({
                            description: result.getDescription(),
                            id:result.getId(),
                            isChecked:result.getIschecked(),
                            userId:result.getUserid(),
                        })
                    })
                })
            }
        }
    },
    typeDefs:gql`
        type TodoItem {
            userId: String!
            description: String!
            id: String!
            isChecked: Boolean!
        }
        type Query {
            todos(userId: String!): [TodoItem!]!
        } 
        type Mutation {
            createTodo(description: String!, userId: String!): TodoItem!
        }
    `,
})
const PORT = 3003
server.start({
    port: 3003
}, () => {
    console.log(`GraphQL API start at :${PORT}`)
})
