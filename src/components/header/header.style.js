import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../infrastructure/theme';

export const Container = styled.SafeAreaView`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;
`;

export const GreetingText = styled.Text`
  font-size: 32px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text};
`;

export const UserNameText = styled.Text`
  font-size: 32px;
  line-height: 40px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.heading};
`;

export const Image = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;
