import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';

import { Button } from '../../components/button/Button.component';

import {
  Container,
  Content,
  Emoji,
  Title,
  SubTitle,
  Footer,
} from './confirmation.style';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄'
}

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = routes.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }

  return (
    <Container>
      <Content>
        <Emoji>
          {emojis[icon]}
        </Emoji>

        <Title>
          {title}
        </Title>

        <SubTitle>
          {subtitle}
        </SubTitle>

        <Footer>
          <Button
            title='Começar'
            onPress={handleMoveOn}
          />
        </Footer>
      </Content>
    </Container>
  );
}
