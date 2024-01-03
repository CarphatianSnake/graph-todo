import crypto from 'crypto';
import { Message, MessageInput } from './Message';
import { data } from './data';

export const rootValue = {
  getAllMessages: () => Object.keys(data).map((key) => new Message(key, data[key])),
  getMessage: ({ id }: { id: string }) => {
    if (data[id]) {
      return new Message(id, data[id]);
    }
    throw new Error('no message exists with id ' + id);
  },
  createMessage: ({ input }: { input: MessageInput }) => {
    const id = crypto.randomBytes(10).toString('hex');
    data[id] = input;
    return new Message(id, input)
  },
  updateMessage: ({ id, input }: { id: string; input: MessageInput }) => {
    if (data[id]) {
      data[id] = input;
      return new Message(id, input);
    }
    throw new Error('no message exists with id ' + id);
  }
};
