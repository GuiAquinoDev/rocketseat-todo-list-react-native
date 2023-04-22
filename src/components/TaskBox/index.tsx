import React, { useState } from "react";
import { ButtonIcon } from "../ButtonIcon ";
import { Text } from "./styles";
import { Container, TaskCheckBox } from "./styles";

type Props = {
  title: string;
  isChecked: boolean;
  onRemove: () => void;
  onCompleted: (taskItem: boolean) => void;
};

export function TaskBox({ title, onRemove, isChecked, onCompleted }: Props) {

  return (
    <Container>
      <TaskCheckBox
        value={isChecked}
        onValueChange={onCompleted}
      />
      <Text isChecked={isChecked}>{title}</Text>

      <ButtonIcon
        icon="ios-trash-outline"
        iconType="ionic"
        onPress={onRemove}
      />
    </Container>
  );
}
