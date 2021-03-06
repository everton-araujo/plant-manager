import React from 'react';
import { SvgFromUri } from 'react-native-svg';

import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Button,
  Title
} from './PlantCard.style';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

export const PlantCard = ({data, ...rest}: PlantProps) => {
  return (
    <Button {...rest}>
      <SvgFromUri 
        uri={data.photo}
        width={70}
        height={70}
      />
      <Title>{data.name}</Title>
    </Button>
  );
}
