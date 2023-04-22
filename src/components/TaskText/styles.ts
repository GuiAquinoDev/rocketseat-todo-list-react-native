import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'SELECTED' | 'UNSELECTED';

type Props = {
    type: ButtonTypeStyleProps;

}

export const Container = styled.View`
    flex-direction: row;
    gap: 8px;
`

export const Text = styled.Text<Props>`
    color: ${ ({ theme, type }) => type === 'SELECTED' ? theme.COLORS.BLUE : theme.COLORS.PURPLE };
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD };
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px ;
`

export const TaskNumber = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_200 };
    background: ${({ theme }) => theme.COLORS.GRAY_400};
    padding: 2px 8px;
    border-radius: 999px;
`