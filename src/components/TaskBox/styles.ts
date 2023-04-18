import styled from 'styled-components/native'
import { TouchableOpacity } from "react-native";


export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 64px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

    border-radius: 8px;
    flex-direction: row;
    align-items: center;
`

export const Text = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`