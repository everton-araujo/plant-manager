import React, { useState } from 'react';
import { Alert, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/core';

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

  const navigation = useNavigation();

  function handleSubmit() {
    if (isFilled) {
      navigation.navigate('Confirmation');
      return;
    }

    Alert.alert('Preencha o nome');
  }

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                <Button 
                  title='Confirmar'
                  onPress={handleSubmit}
                />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
}
