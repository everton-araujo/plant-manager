import React from 'react';
import { SvgFromUri } from 'react-native-svg';

import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Button,
  Title,
  Details,
  TimeLabel,
  Time
} from './PlantCardDetails.style';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  }
}

export const PlantCardDetails = ({data, ...rest}: PlantProps) => {
  return (
    <Button {...rest}>
      <SvgFromUri 
        uri={data.photo}
        width={50}
        height={50}
      />
      <Title>{data.name}</Title>

      <Details>
        <TimeLabel>
          Regar às
        </TimeLabel>

        <Time>
          {data.hour}
        </Time>
      </Details>
    </Button>
  );
}
