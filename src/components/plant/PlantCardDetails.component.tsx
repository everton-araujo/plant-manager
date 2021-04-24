import React from 'react';
import { Animated, View } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/Feather';

import {
  RemoveButton,
  Button,
  Title,
  Details,
  TimeLabel,
  Time
} from './PlantCardDetails.style';
import { theme } from '../../infrastructure/theme';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemovePlantCard: () => void;
}

export const PlantCardDetails = ({data, handleRemovePlantCard, ...rest}: PlantProps) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <RemoveButton onPress={handleRemovePlantCard}>
            <Icon name='trash' size={32} color={theme.colors.white} />
          </RemoveButton>
        </Animated.View>
      )}
    >
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
    </Swipeable>
  );
}
