import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";


export const Container = styled(TextInput)`
    flex: 1;

    min-height: 56px;
    max-height: 56px;
    border: 1px solid;

    ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    background-color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.MD}px;
    border-color: ${theme.COLORS.GRAY_700} ;
    `};

    border-radius: 6px;
    padding: 16px;
`
