import styled from 'styled-components/native'
import CheckBox from 'expo-checkbox';

export const Container = styled.View`
    width: 100%;
    height: 64px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
    border-radius: 8px;

    flex-direction: row;
    align-items: center;    

    margin-bottom: 16px;
`

export const TaskCheckBox = styled(CheckBox)`
    border-radius: 50px;
    border: ${({ theme }) => theme.COLORS.BLUE};
    
    margin-right: 11px;
    margin-left:12px;
`

export const Text = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    flex: 1;
`
