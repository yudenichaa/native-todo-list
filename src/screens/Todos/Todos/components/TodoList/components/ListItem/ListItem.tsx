import { TouchableOpacity } from 'react-native';
import { RootStackParamList, Todo } from 'src/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Item, TodoText } from './ListItem.styled';

type ListItemNavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface ListItemProps {
  todo: Todo;
  listNumber: number;
}

export function ListItem({ todo, listNumber }: ListItemProps) {
  const navigation = useNavigation<ListItemNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Todo', { todoId: todo.id })}
    >
      <Item>
        <TodoText completed={todo.completed}>
          {listNumber}) {todo.text}
        </TodoText>
      </Item>
    </TouchableOpacity>
  );
}
