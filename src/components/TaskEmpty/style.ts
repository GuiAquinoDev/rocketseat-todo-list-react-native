import styled from "styled-components/native";
import {MaterialCommunityIcons} from '@expo/vector-icons'

export const Container = styled.View`
    flex:1;

    justify-content:center;
    align-items: center;
    flex-direction: column;

    border-top-width: 1px;
    border-top-color: ${({ theme }) => theme.COLORS.GRAY_400};
`
  
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const SubTitle = styled.Text`
    text-align: center;

    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
    size: 56,
    color: theme.COLORS.GRAY_300,
    weight: 'thin',
}))`
    margin-bottom: 16px;
`
