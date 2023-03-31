import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const HeaderToDo = styled.View`
    width: 100%;
    padding: 24px;
    margin: 55px 0 12px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`