import { atom } from 'recoil';

export const todoListState = atom({
  key: 'TodoList',
  default: [
    {
      id: '1',
      text: 'Learn React Native',
    },
    {
      id: '2',
      text: 'Create template',
    },
    {
      id: '3',
      text: 'Create simple project',
    },
    {
      id: '4',
      text: 'Create another project',
    },
  ],
});
