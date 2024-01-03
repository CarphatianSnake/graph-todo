import crypto from 'crypto';
import { Task, TaskInput } from './Task';
import { data } from './data';

export const rootValue = {
  getAllTasks: () => Object.keys(data).map((key) => new Task(key, data[key])),
  getTask: ({ id }: { id: string }) => {
    if (data[id]) {
      return new Task(id, data[id]);
    }
    throw new Error(`no task exists with id ${id}`);
  },
  createTask: ({ input }: { input: TaskInput }) => {
    const id = crypto.randomBytes(10).toString('hex');
    data[id] = input;
    return new Task(id, data[id]);
  },
  updateTask: ({ id, input }: { id: string; input: TaskInput }) => {
    if (data[id]) {
      data[id] = {
        ...data[id],
        ...input,
      };
      return new Task(id, data[id]);
    }
    throw new Error(`no task exists with id ${id}`);
  },
  deleteTask: ({ id }: { id: string }) => {
    if (data[id]) {
      delete data[id];
      return { status: 200, id };
    }
    throw new Error(`no task exists with id ${id}`);
  }
};
