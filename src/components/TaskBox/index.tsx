import { Text } from "react-native";
import {Container} from "./styles";


type Props = {
  title: string;
}

export function TaskBox({ title }: Props) {
  return (
    <Container>
      <Text>
        {title}
      </Text>
    </Container>
  )
}