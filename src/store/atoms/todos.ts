import { atom } from 'recoil';
import { Todo } from 'src/types';

export const todoListState = atom({
  key: 'TodoList',
  default: [
    {
      id: '1',
      text: 'Learn React Native',
      completed: false,
    },
    {
      id: '2',
      text: 'Create template',
      completed: false,
    },
    {
      id: '3',
      text: 'Create simple project',
      completed: false,
    },
    {
      id: '4',
      text: 'Create another project',
      completed: false,
    },
  ] as Todo[],
});
