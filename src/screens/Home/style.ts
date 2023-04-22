import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'


export const Container = styled(SafeAreaView)`
  flex: 1;  

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const TaskContainer = styled.View`
  flex: 1;

  justify-content: center;
  padding: 24px;
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

export const TaskSummaryList = styled.View`
    width: 100%;
    
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`