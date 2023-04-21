import React, { useState } from "react";
import { ButtonIcon } from "../ButtonIcon ";
import { Text } from "./styles";
import { Container, TaskCheckBox } from "./styles";

type Props = {
  title: string;
  onRemove: () => void;
};

export function TaskBox({ title, onRemove }: Props) {
  const [isChecked, setChecked] = useState(false);



  return (
    <Container>
      <TaskCheckBox value={isChecked} onValueChange={setChecked} />
      <Text isChecked={isChecked}>{title}</Text>

      <ButtonIcon
        icon="ios-trash-outline"
        iconType="ionic"
        onPress={onRemove}
      />
    </Container>
  );
}
