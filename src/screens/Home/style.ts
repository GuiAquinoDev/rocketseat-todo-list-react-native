import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'


export const Container = styled(SafeAreaView)`
  flex: 1;  

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Form = styled.View`
  width: 100%;
  position: absolute;
  top: 110px;
  z-index: 1;
  
  flex-direction: row;
  justify-content: center;

  border-radius: 6px;
  padding: 24px;

`