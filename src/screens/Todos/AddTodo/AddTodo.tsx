import { useState } from 'react';
import { Input, Button, Switch } from 'src/components';
import { useSetRecoilState } from 'recoil';
import { todoListState } from 'src/store';
import { Container, Controls, SwitchContainer } from './AddTodo.styled';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/types';
import { useNavigation } from '@react-navigation/native';
import { getUniqueId } from 'src/utils';
import { Text } from 'react-native';

type AddTodoScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Todos'
>;

export function AddTodo() {
  const navigation = useNavigation<AddTodoScreenNavigationProp>();
  const setTodoList = useSetRecoilState(todoListState);
  const [todoText, setTodoText] = useState('');

  const [completed, setCompleted] = useState(false);
  const toggleCompleted = () => setCompleted((completed) => !completed);

  const onAddTodo = () => {
    if (todoText) {
      setTodoList((todoList) => [
        ...todoList,
        {
          id: getUniqueId(),
          text: todoText,
          completed,
        },
      ]);
      navigation.navigate('Todos');
    }
  };

  const onBackToTodoList = () => navigation.navigate('Todos');

  return (
    <Container>
      <Input
        value={todoText}
        onChangeText={setTodoText}
        placeholder="Todo text"
      />
      <SwitchContainer>
        <Text>Completed:</Text>
        <Switch onValueChange={toggleCompleted} value={completed} />
      </SwitchContainer>
      <Controls>
        <Button style={{ marginRight: 16 }} onPress={onAddTodo}>
          Add Todo
        </Button>
        <Button onPress={onBackToTodoList}>Back to list</Button>
      </Controls>
    </Container>
  );
}
