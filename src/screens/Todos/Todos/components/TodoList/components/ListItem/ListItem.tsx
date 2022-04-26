import { Text } from 'react-native';
import { Todo } from 'src/types';
import { Item } from './ListItem.styled';

interface ListItemProps {
  todo: Todo;
  listNumber: number;
}

export function ListItem({ todo, listNumber }: ListItemProps) {
  return (
    <Item>
      <Text>
        {listNumber}) {todo.text}
      </Text>
    </Item>
  );
}
