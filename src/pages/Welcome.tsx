import React from 'react';

import { Button } from '../components/Button/button.components';

import wateringImage from '../assets/watering.png';

import { 
  Container, 
  Title, 
  Text, 
  Image
} from './styles';

export function Welcome() {
  return (
    <Container>
      <Title>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Title>

      <Image source={wateringImage} />

      <Text>
        Nunca mais esqueça de regar suas plantas.
        Nós cuidamos de lembra-lo sempre que precisar.  
      </Text>

      <Button title='>' />
    </Container>
  );
}
