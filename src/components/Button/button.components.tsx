import React from 'react';
import { TouchableOpacityProps, Text } from 'react-native';

import { ButtonStyle } from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonStyle
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={{ color: '#FFF' }}>
        {title}
      </Text>
    </ButtonStyle>
  );
}
