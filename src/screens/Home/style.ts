import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'


export const Container = styled(SafeAreaView)`
  flex: 1;  

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Form = styled.View`
  z-index: 1;
  
  flex-direction: row;

  border-radius: 6px;
  padding: 24px;

`

export const TaskContainer = styled.View`
  position: relative;
  top: -50px;
  
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};  

  padding: 24px;
`