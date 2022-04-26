import { useState } from 'react';
import { Input, Button } from 'src/components';
import { useSetRecoilState } from 'recoil';
import { todoListState } from 'src/store';
import { v4 as uuidv4 } from 'uuid';
import { Container, Controls } from './AddTodo.styled';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/types';
import { useNavigation } from '@react-navigation/native';

type AddTodoScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Todos'
>;

export function AddTodo() {
  const navigation = useNavigation<AddTodoScreenNavigationProp>();
  const setTodoList = useSetRecoilState(todoListState);
  const [todoText, setTodoText] = useState('');

  const onAddTodo = () => {
    if (todoText) {
      setTodoList((todoList) => [
        ...todoList,
        {
          id: uuidv4(),
          text: todoText,
        },
      ]);
      navigation.navigate('Todos');
    }
  };

  return (
    <Container>
      <Input
        value={todoText}
        onChangeText={setTodoText}
        placeholder="Todo text"
      />
      <Controls>
        <Button onPress={onAddTodo}>Add Todo</Button>
      </Controls>
    </Container>
  );
}
