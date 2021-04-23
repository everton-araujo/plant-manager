import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  GreetingText,
  UserNameText,
  Image
} from './header.style';

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantManager:userName');

      setUserName(user || '');
    }

    loadStorageUserName();
  }, [userName]);

  return (
    <Container>
      <View>
        <GreetingText>Olá,</GreetingText>
        <UserNameText>{userName}</UserNameText>
      </View>

      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnL-6fb5PhgkCkH3odiqgPmhqoWm6HeRjwQ&usqp=CAU' }} />
    </Container>
  );
}
