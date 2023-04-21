import React, { useState } from 'react';
import theme from '../../theme';
import { ButtonIcon } from '../ButtonIcon ';
import { Text } from "./styles";
import {Container, TaskCheckBox} from "./styles";


type Props = {
  title: string;
}

export function TaskBox({ title }: Props) {

  const [isChecked, setChecked] = useState(false);

  return (
    <Container>
      <TaskCheckBox
        value={isChecked}
        onValueChange={setChecked}    
        />
      <Text isChecked={isChecked}>
        {title}
      </Text>

      <ButtonIcon icon="ios-trash-outline" iconType="ionic"/>
    </Container>
  )
}