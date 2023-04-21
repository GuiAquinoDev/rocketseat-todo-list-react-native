import { useState } from "react";
import { FlatList, Alert } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon ";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TaskBox } from "../../components/TaskBox";
import { TaskText } from "../../components/TaskText";
import { Container, Form, TaskContainer, TaskSummaryList } from "./style";

export function Home() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);
  const [isChecked, setChecked] = useState(false);
  const [taskComplete, setTaskComplete] = useState(0);

  function handleNewTask() {
    if (task.length > 0) {
      setTaskList([...taskList, task]);
      setTask("");
    }
  }

  function handleTaskRemove(taskList: string) {
    Alert.alert("Remover", `Tem certeza que deseja remover esta tarefa ?`, [
      {
        text: "Sim",
        onPress: () =>
          setTaskList((prevState) =>
            prevState.filter((task) => task !== taskList)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleTaskComplete(taskItem: boolean) {
    setChecked(taskItem);

    if (taskItem) {
      setTaskComplete(taskComplete + 1)
    } else {
      setTaskComplete(taskComplete - 1)
    }
  }

  return (
    <Container>
      <Header />
      <TaskContainer>
        <Form>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={task}
            onChangeText={setTask}
            onSubmitEditing={handleNewTask}
          />
          <ButtonIcon
            icon="add-circle-outline"
            iconType="material"
            onPress={handleNewTask}
          />
        </Form>

        <TaskSummaryList>
          <TaskText title="Criadas" type="SELECTED" number={taskList.length} />
          <TaskText title="Concluídas" type="UNSELECTED" number={taskComplete} />
        </TaskSummaryList>

        <FlatList
          data={taskList}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TaskBox
              key={item}
              title={item}
              isChecked={isChecked}
              onRemove={() => handleTaskRemove(item)}
              onCompleted={(taskItem) => handleTaskComplete(taskItem)}
            />
          )}
        />
      </TaskContainer>
    </Container>
  );
}
