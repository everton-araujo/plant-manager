import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  ButtonText
} from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
