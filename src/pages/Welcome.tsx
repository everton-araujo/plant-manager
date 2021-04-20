import React from 'react';

import wateringImage from '../assets/watering.png';

import { 
  Container,
  Title,
  Text,
  Button,
  Image,
  ButtonIcon
} from './welcome.style';

export function Welcome() {
  return (
    <Container>
      <Title>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Title>

      <Image
        source={wateringImage}
        resizeMode='contain'
      />

      <Text>
        Nunca mais esqueça de regar suas plantas.
        Nós cuidamos de lembra-lo sempre que precisar.
      </Text>

      <Button>
        <ButtonIcon
          name='chevron-right'
          size={32} 
        />
      </Button>
    </Container>
  );
}
