import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  input TaskInput {
    title: String
    details: String
    status: String
  }

  type Task {
    id: ID!
    title: String!
    status: String!
    details: String
  }

  type Success {
    id: ID!
    status: Int
  }

  type Mutation {
    createTask(input: TaskInput): Task
    updateTask(id: ID!, input: TaskInput): Task
    deleteTask(id: ID!): Success
  }

  type Query {
    getAllTasks: [Task]
    getTask(id: ID!): Task
  }
`);
