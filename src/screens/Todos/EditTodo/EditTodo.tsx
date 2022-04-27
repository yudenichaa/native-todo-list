import { useMemo, useState } from 'react';
import { Input, Button, Switch } from 'src/components';
import { todoListState } from 'src/store';
import { Container, Controls, SwitchContainer } from './EditTodo.styled';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/types';
import { useRecoilState } from 'recoil';
import { Text } from 'react-native';

type EditTodoScreenProps = NativeStackScreenProps<RootStackParamList, 'Todo'>;

export function EditTodo({ route, navigation }: EditTodoScreenProps) {
  const todoId = route.params.todoId;
  const [todos, setTodos] = useRecoilState(todoListState);

  const todo = useMemo(() => {
    return todos.find((todo) => todo.id === todoId);
  }, [todos, todoId]);

  const [todoText, setTodoText] = useState(todo?.text);
  const [completed, setCompleted] = useState(todo?.completed);

  const toggleCompleted = () => setCompleted((completed) => !completed);

  const onEditTodo = () => {
    if (todoText) {
      setTodos((todoList) =>
        todoList.map((todo) =>
          todo.id === todoId
            ? { ...todo, text: todoText, completed: completed! }
            : todo
        )
      );
      navigation.navigate('Todos');
    }
  };

  const onBackToTodoList = () => navigation.navigate('Todos');

  return (
    <Container>
      {todo ? (
        <>
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
            <Button style={{ marginRight: 16 }} onPress={onEditTodo}>
              Save Todo
            </Button>
            <Button onPress={onBackToTodoList}>Back to list</Button>
          </Controls>
        </>
      ) : (
        <>
          <Text>Todo with id {todoId} not found</Text>
          <Controls>
            <Button onPress={onBackToTodoList}>Back to list</Button>
          </Controls>
        </>
      )}
    </Container>
  );
}
