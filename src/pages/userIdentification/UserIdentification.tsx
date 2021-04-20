import React, { useState } from 'react';
import { Platform } from 'react-native';

import { theme } from '../../infrastructure/theme';

import { Button } from '../../components/button/Button.component';

import {
  Container,
  KeyboardAvoidingView,
  Content,
  Form,
  IOSKeyboardAvoidingView,
  Emoji,
  Title,
  Input,
  Footer,
} from './userIdentification.style';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(inputValue: string) {
    setIsFilled(!!inputValue);
    setName(inputValue);
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' && 'padding'}
      >
        <Content>
          <Form>
            <IOSKeyboardAvoidingView>
              <Emoji>
                {
                  isFilled ? '😄' : '😃'
                }
              </Emoji>

              <Title>
                Como podemos {'\n'}
                chamar você?
              </Title>
            </IOSKeyboardAvoidingView>
            <Input
              style={
                (isFocused || isFilled) && 
                { borderColor: theme.colors.green }
              }
              placeholder='Digite o nome'
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />

            <Footer>
              <Button />
            </Footer>
          </Form>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
