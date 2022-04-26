import { Button } from 'src/components';
import { TodoList } from './components';
import { RootStackParamList } from 'src/types';
import { Container, Controls } from './Todos.styled';
import { useNavigation } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';
import { todoListState } from 'src/store';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type TodosScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Todos'
>;

export function Todos() {
  const navigation = useNavigation<TodosScreenNavigationProp>();
  const todos = useRecoilValue(todoListState);

  return (
    <Container>
      <TodoList todos={todos} />
      <Controls>
        <Button onPress={() => navigation.navigate('AddTodo')}>Add Todo</Button>
      </Controls>
    </Container>
  );
}
