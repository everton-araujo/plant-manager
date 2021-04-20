import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

import { theme } from '../infrastructure/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  margin-top: ${theme.margins.large};
  font-size: ${theme.sizes.large};
  text-align: center;
  font-family: ${theme.fonts.mainSemiBold};
  color: ${theme.colors.heading};
`;

export const Text = styled.Text`
  text-align: center;
  font-size: ${theme.sizes.small};
  padding-horizontal: ${theme.paddings.medium};
  font-family: ${theme.fonts.main};
  color: ${theme.colors.heading}
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: ${Platform.OS === 'android' ? '20px' : '10px'};
  height: 56px;
  width: 56px;
  background: ${theme.colors.green};
`;

export const Image = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

export const ButtonIcon = styled(Icon)`
  color: ${theme.colors.white}
`;
