import styled from 'styled-components/native';

import { theme } from '../../infrastructure/theme';

export const Container = styled.TouchableOpacity`
  height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.green};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.white};
`;
