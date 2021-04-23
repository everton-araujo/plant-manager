import React from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Button,
  ActiveButton,
  Text,
  ActiveText,
} from './environmentButton.style';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnvironmentButton({
  title, 
  active = false,
  ...rest
}: EnvironmentButtonProps) {
  return (
    <View>
      {
        active
        ? (
          <ActiveButton {...rest}>
            <ActiveText>{title}</ActiveText>
          </ActiveButton>
        ) : (
          <Button {...rest}>
            <Text>{title}</Text>
          </Button>
        )
      }
    </View>
  );
}
