import styled from 'styled-components/native';

import { theme } from '../infrastructure/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  margin-top: ${theme.margins.large};
  font-size: ${theme.sizes.large};
  font-weight: bold;
  text-align: center;
  color: ${theme.colors.heading};
`;

export const Text = styled.Text`
  text-align: center;
  font-size: ${theme.sizes.small};
  padding-horizontal: ${theme.paddings.medium};
  color: ${theme.colors.heading}
`;

export const Image = styled.Image`
  width: 292px;
  height: 284px; 
`;
