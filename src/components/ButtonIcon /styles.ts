
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

type ButtonTypeStyleProps = 'material' | 'ionic';

type Props = {
  type: ButtonTypeStyleProps
}


export const Container = styled(TouchableOpacity)<Props>`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  background-color: ${({ theme, type }) => type === 'material' ?
    theme.COLORS.BLUE_DARK : theme.COLORS.GRAY_500 };
  border-radius: 6px;

`;

export const MaterialIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
}))``;


export const IoniconIcon = styled(Ionicons).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.GRAY_300,
}))``;