import { ListItem } from './components';
import { Todo } from 'src/types';
import { List } from './TodoList.styled';

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem key={todo.id} todo={todo} listNumber={index + 1} />
      ))}
    </List>
  );
}
