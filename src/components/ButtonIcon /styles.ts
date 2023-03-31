
import styled from 'styled-components/native';
import { BackHandler, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'


export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
  border-radius: 6px;

`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
}))``;