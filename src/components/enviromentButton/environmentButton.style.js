import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../infrastructure/theme';

// export const Button = styled(RectButton)`
export const Button = styled.TouchableOpacity`
  width: 76px;
  height: 40px;
  margin-right: 5px;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${theme.colors.shape};
`;

export const Text = styled.Text`
  font-family: ${theme.fonts.text};
  color: ${theme.colors.heading};
`;

// export const ActiveButton = styled(RectButton)`
export const ActiveButton = styled.TouchableOpacity`
  width: 76px;
  height: 40px;
  margin-right: 5px;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${theme.colors.green_light};
`;

export const ActiveText = styled.Text`
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.green_dark};
`;
