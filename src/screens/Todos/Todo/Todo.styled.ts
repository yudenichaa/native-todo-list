import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
`;

export const Controls = styled.View`
  margin-top: 12px;
  flex-direction: row;
  justify-content: flex-start;
`;

type TodoTextProps = {
  completed: boolean;
};

export const TodoText = styled.Text<TodoTextProps>`
  font-size: 20px;

  ${(props) =>
    props.completed &&
    css`
      text-decoration: line-through;
    `}
`;
