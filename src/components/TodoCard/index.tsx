import { TaskText } from "../TaskText";
import { Container, HeaderToDo } from "./styles";

export function TodoCard() {
    return (
        <Container>
            <HeaderToDo>
                <TaskText title="Criadas" type='SELECTED'/>
                <TaskText title="Concluídas" type='UNSELECTED' />
            </HeaderToDo>
        </Container>
    )
}