export type TaskStatus = 'idle' | 'in progress' | 'done';

export type TaskInput = {
  title: string;
  status: TaskStatus;
  details: string;
}

export class Task {
  id: string;
  title: string;
  status: TaskStatus;
  details: string;

  constructor(id: string, { title, status = 'idle', details = '' }: TaskInput) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.details = details;
  }
}
