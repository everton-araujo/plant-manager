import styled from 'styled-components/native';

import { theme } from '../../infrastructure/theme';

export const ButtonStyle = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 20px;
  height: 56px;
  width: 56px;
  background: ${theme.colors.green};
`;
