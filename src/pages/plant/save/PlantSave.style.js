import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../../infrastructure/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background: ${theme.colors.shape}
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding: 50px 30px;
  align-items: center;
  justify-content: center;
`;

export const PlantName = styled.Text`
  font-family: ${theme.fonts.heading};
  font-size: 24px;
  margin-top: 14px;
  color: ${theme.colors.heading};
`;

export const PlantDescription = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.text};
  font-size: 17px;
  margin-top: 10px;
  color: ${theme.colors.heading}
`;

export const Controller = styled.View`
  padding: 20px 20px ${getBottomSpace() || 20}px 20px;
  background: ${theme.colors.white};
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
  background: ${theme.colors.blue_light};
`;

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-size: 17px;
  font-family: ${theme.fonts.text};
  text-align: justify;
`;

export const AlertLabel = styled.Text`
  text-align: center;
  font-size: 14px;
  margin-bottom: 5px;
  font-family: ${theme.fonts.text};
  color: ${theme.colors.heading};
`;

export const DateTimePickerButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 40px 0;
`;

export const DateTimePickerButtonText = styled.Text`
  font-size: 24px;
  font-family: ${theme.fonts.text};
  color: ${theme.colors.heading};
`;
