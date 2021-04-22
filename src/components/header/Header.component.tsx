import React from 'react';
import { View } from 'react-native';

import {
  Container,
  GreetingText,
  UserNameText,
  Image
} from './header.style';

export function Header() {
  return (
    <Container>
      <View>
        <GreetingText>Olá,</GreetingText>
        <UserNameText>Usuário</UserNameText>
      </View>

      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnL-6fb5PhgkCkH3odiqgPmhqoWm6HeRjwQ&usqp=CAU' }} />
    </Container>
  );
}
