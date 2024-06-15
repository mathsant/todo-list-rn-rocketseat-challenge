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
import { useState } from "react";
import IconIoni from "react-native-vector-icons/Ionicons";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState("");

  function handleTaskAdd() {
    if (taskName === "") {
      return Alert.alert(
        "Task inválida",
        "Não é possivel criar uma task em branco, por gentileza adicione uma descrição."
      );
    }
    setTasks((prevState) => [...prevState, taskName]);
    setTaskName("");
  }

  function removeTask(name: string) {
    return Alert.alert("Remover", `Deseja remover a task ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((task) => task !== name)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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
            <Text style={styles.textNumberCreatedTasks}>0</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task title={item} isDone={false} onRemove={() => removeTask(item)} />
        )}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
}
