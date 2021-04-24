import styled from 'styled-components/native';

import { theme } from '../../../infrastructure/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px 0 30px;
  background: ${theme.colors.background};
`;

export const SpotLight = styled.View`
  height: 110px;
  margin-top: 20px;
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background: ${theme.colors.blue_light};
`;

export const SpotLightImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpotLightText = styled.Text`
  flex: 1;
  padding: 0 20px;
  color: ${theme.colors.blue};
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantText = styled.Text`
  font-size: 24px;
  margin: 20px 0;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.heading};
`;

export const PlantList = styled.FlatList`
  flex: 1;
`;
