import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'


export const Container = styled(SafeAreaView)`
  flex: 1;  

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Form = styled.View`
  width: 100%;
  z-index: 1;
  
  position: relative;
  top: -50px;
  flex-direction: row;
  justify-content: center;

  border-radius: 6px;
`

export const TaskContainer = styled.View`
  padding: 24px;
`

export const TaskSummaryList = styled.View`

    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 20px 0;
`