import {
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Colors } from "../../constants";
import { Task } from "../../components/Task";
import { EmptyList } from "../../components/EmptyList";
import { useMemo, useState } from "react";
import IconIoni from "react-native-vector-icons/Ionicons";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import { styles } from "./styles";

export interface ITask {
  title: string;
  isDone: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskName, setTaskName] = useState("");

  function handleTaskAdd() {
    if (taskName === "") {
      return Alert.alert(
        "Task inválida",
        "Não é possivel criar uma task em branco, por gentileza adicione uma descrição."
      );
    }

    const task: ITask = {
      title: taskName,
      isDone: false,
    };

    setTasks((prevState) => [...prevState, task]);
    setTaskName("");
  }

  function removeTask(name: string) {
    return Alert.alert("Remover", `Deseja remover a task ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task.title !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  const countCompletedTasks = useMemo(() => {
    return tasks.filter((task) => !!task.isDone).length;
  }, [tasks]);

  function handleCompleteTask(task: ITask) {
    const findIndex = tasks.findIndex((t) => t.title === task.title);
    const taskList = [...tasks];

    taskList[findIndex] = {
      ...taskList[findIndex],
      isDone: !taskList[findIndex].isDone,
    };

    setTasks(taskList);
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <IconIoni
          name="rocket-outline"
          color={Colors.product.purple}
          size={30}
        />
        <Text style={styles.titleText}>TO-DO</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={Colors.base.gray[300]}
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleTaskAdd}>
          <IconAntDesign name="pluscircleo" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoTexts}>
        <View style={styles.infoCreatedTasks}>
          <Text style={styles.textCreatedTasks}>Criadas</Text>
          <View style={styles.badgeContainer}>
            <Text style={styles.textNumberCreatedTasks}>{tasks.length}</Text>
          </View>
        </View>

        <View style={styles.infoCreatedTasks}>
          <Text style={styles.textSolvedTasks}>Concluídas</Text>
          <View style={styles.badgeContainer}>
            <Text style={styles.textNumberCreatedTasks}>
              {countCompletedTasks}
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Task
            data={item}
            onRemove={() => removeTask(item.title)}
            onComplete={() => handleCompleteTask(item)}
          />
        )}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
}
