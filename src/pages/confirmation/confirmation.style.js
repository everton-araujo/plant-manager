import styled from 'styled-components/native';

import { theme } from '../../infrastructure/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${theme.fonts.heading};
  text-align: center;
  line-height: 38px;
  margin-top: 15px;
  color: ${theme.colors.heading};
`;

export const SubTitle = styled.Text`
  font-family: ${theme.fonts.text};
  text-align: center;
  font-size: 17px;
  padding-top: 20px;
  padding-bottom: 40px;
  color: ${theme.colors.heading}
`;

export const Footer = styled.View`
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
`;
