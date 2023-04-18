import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 127px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Logo = styled.Image`
    width: 110.34px;
    height: 32px;
`