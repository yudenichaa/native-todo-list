import { RootStackParamList } from 'src/types';
import { Text } from 'react-native';
import { Container, Controls, TodoText } from './Todo.styled';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from 'src/components';
import { useRecoilState } from 'recoil';
import { todoListState } from 'src/store';
import { useMemo } from 'react';

type TodoScreenProps = NativeStackScreenProps<RootStackParamList, 'Todo'>;

export function Todo({ route, navigation }: TodoScreenProps) {
  const todoId = route.params.todoId;
  const [todos, setTodos] = useRecoilState(todoListState);

  const todo = useMemo(() => {
    return todos.find((todo) => todo.id === todoId);
  }, [todos, todoId]);

  const onBackToTodoList = () => navigation.navigate('Todos');

  const onDeleteTodo = () => {
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
    navigation.navigate('Todos');
  };

  const onToggleComplete = () => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const onEditTodo = () => {
    navigation.navigate('EditTodo', { todoId });
  };

  return (
    <Container>
      {todo ? (
        <>
          <Text style={{ marginBottom: 4 }}>Todo text: </Text>
          <TodoText completed={todo.completed}>{todo.text}</TodoText>
          <Controls>
            <Button style={{ marginRight: 16 }} onPress={onBackToTodoList}>
              Back to list
            </Button>
            <Button onPress={onEditTodo}>Edit</Button>
          </Controls>
          <Controls>
            <Button style={{ marginRight: 16 }} onPress={onToggleComplete}>
              Toggle complete
            </Button>
            <Button onPress={onDeleteTodo}>Delete</Button>
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
