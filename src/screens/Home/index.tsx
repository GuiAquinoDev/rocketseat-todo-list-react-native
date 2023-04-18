import { useState } from "react";
import { FlatList } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon ";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TaskBox } from "../../components/TaskBox";
import { TaskSummary } from "../../components/TaskSummary";
import { Container, Form, TaskContainer } from "./style";

export function Home() {

  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState<string[]>([])

  function handleNewTask() {
    if (task.length > 0) {
      setTaskList([...taskList, task]);
      setTask("");
    }
  }

  return (
    <Container>
      <Header />

      <Form>
        <Input
          placeholder="Adicione uma nova tarefa"
          value={task}
          onChangeText={setTask}
          onSubmitEditing={handleNewTask}
        />
        <ButtonIcon
          icon="add-circle-outline"
          onPress={handleNewTask}
        />
      </Form>

      <TaskContainer>
          
        <TaskSummary />

        <FlatList
        data={taskList}
        keyExtractor={item => item}
        renderItem={({ item }) => <TaskBox
        key={item}
        title={item} />}
        />
      </TaskContainer>

      
    </Container>
  );
}

