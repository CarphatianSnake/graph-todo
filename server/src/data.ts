import { TaskStatus } from './Task';

export type Data = {
  [key: string]: {
    title: string;
    status: TaskStatus;
    details: string;
  }
}

export const data: Data = {
  '3434f29dffa5522d64ba': {
    title: 'Test task',
    details: 'Lorem ipsum',
    status: 'idle',
  }
};
