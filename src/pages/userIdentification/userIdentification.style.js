import styled from 'styled-components/native';

import { theme } from '../../infrastructure/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-left: 54px;
  padding-right: 54px;
`;

export const IOSKeyboardAvoidingView = styled.View`
  align-items: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Title = styled.Text`
  margin-top: 20px;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.heading};
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  width: 100%;
  margin-top: 50px;
  font-size: 18px;
  padding: 10px;
  text-align: center;
  border-color: ${theme.colors.gray};
`;

export const Footer = styled.View`
  margin-top: 40px;
  width: 90%;
`;
