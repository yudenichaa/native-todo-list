import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { StyledButton, ButtonText } from './Button.styled';

export function Button({ children, style, ...props }: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props}>
      <StyledButton style={style}>
        {typeof children === 'string' ? (
          <ButtonText>{children}</ButtonText>
        ) : (
          children
        )}
      </StyledButton>
    </TouchableOpacity>
  );
}
