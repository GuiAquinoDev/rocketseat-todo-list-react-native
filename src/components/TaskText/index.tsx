import { ButtonTypeStyleProps, TaskNumber, Text, Container } from "./styles";

type Props = {
  title: string;
  type?: ButtonTypeStyleProps;
  number?: number;
};

export function TaskText({ title, type = "SELECTED", number }: Props) {
  return (
    <Container>
      <Text type={type}>{title}</Text>
      <TaskNumber>{number}</TaskNumber>
    </Container>
  );
}
