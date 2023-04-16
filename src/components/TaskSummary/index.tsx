import { TaskText } from "../TaskText";
import { Container, HeaderToDo } from "./styles";

export function TaskSummary() {
    return (
        <Container>
            <HeaderToDo>
                <TaskText title="Criadas" type='SELECTED' number={0} />
                <TaskText title="Concluídas" type='UNSELECTED' number={1} />
            </HeaderToDo>
        </Container>
    )
}