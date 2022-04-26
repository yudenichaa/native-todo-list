import { StyledInput } from './Input.styled';
import { TextInputProps } from 'react-native';

export function Input(props: TextInputProps) {
  return <StyledInput {...props} />;
}
