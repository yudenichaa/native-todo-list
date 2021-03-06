import styled, { css } from 'styled-components/native';

export const Item = styled.View`
  margin-bottom: 16px;
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
