import { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyledButton, ButtonText } from './Button.styled';

interface ButtonProps {
  onPress: VoidFunction;
  children: ReactNode;
}

export function Button({ onPress, children }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledButton>
        {typeof children === 'string' ? (
          <ButtonText>{children}</ButtonText>
        ) : (
          children
        )}
      </StyledButton>
    </TouchableOpacity>
  );
}
