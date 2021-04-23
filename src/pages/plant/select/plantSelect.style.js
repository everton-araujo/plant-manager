import styled from 'styled-components/native';

import { theme } from '../../../infrastructure/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${theme.colors.background};
`;

export const TextContent = styled.View`
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  line-height: 20px;
  margin-top: 15px;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.heading};
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  line-height: 20px;
  font-family: ${theme.fonts.text};
  color: ${theme.colors.heading};
`;

export const EnvironmentList = styled.FlatList`
  height: 40px;
`;

export const PlantListContainer = styled.View`
  flex: 1;
  margin-top: -100%;
  padding: 0 32px;
  justify-content: center;
`;

export const PlantList = styled.FlatList`
  height: 40px;
`;  
