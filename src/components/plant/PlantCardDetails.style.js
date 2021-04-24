import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../infrastructure/theme';

export const RemoveButton = styled(RectButton)`
  width: 100px;
  height: 85px;
  margin-top: 12px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 20px;
  padding-left: 15px;
  background: ${theme.colors.red};
`;

export const Button = styled(RectButton)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 25px 10px;
  margin: 5px 0;
  border-radius: 20px;
  background: ${theme.colors.shape};
`;

export const Title = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-size: 17px;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.heading};
`;

export const Details = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.text};
  color: ${theme.colors.body_light};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.body_dark};
`;
