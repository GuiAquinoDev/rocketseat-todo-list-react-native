import { ButtonIcon } from "../../components/ButtonIcon ";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TodoCard } from "../../components/TodoCard";
import { Container, Form } from "./style";

export function Home() {
  return (
    <Container>
      <Header />

      <Form>
        <Input placeholder="Adicione uma nova tarefa" />
        <ButtonIcon icon="add-circle-outline" />
      </Form>

      <TodoCard/>
    </Container>
  );
}
