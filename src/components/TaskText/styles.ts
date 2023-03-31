import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'SELECTED' | 'UNSELECTED';

type Props = {
    type: ButtonTypeStyleProps;

}

export const Text = styled.Text<Props>`
    color: ${ ({ theme, type }) => type === 'SELECTED' ? theme.COLORS.BLUE : theme.COLORS.PURPLE };
    font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD };
    font-size: ${({ theme }) => theme.FONT_SIZE.SM} ;
`