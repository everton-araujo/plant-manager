import React from 'react';

import loadAnimation from '../../assets/load.json';

import {
  Container,
  LoadImage
} from './Load.style';

export function Load() {
  return (
    <Container>
      <LoadImage 
        source={loadAnimation}
        autoPlay
        loop
      />
    </Container>
  )
}
