import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { theme } from '../../infrastructure/theme';

export const Button = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  padding-top: 10px;
  margin: 10px;
  align-items: center;
  background: ${theme.colors.shape};
  border-radius: 20px;
`;

export const Title = styled.Text`
  margin: 16px 0; 
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.green_dark};
`;
