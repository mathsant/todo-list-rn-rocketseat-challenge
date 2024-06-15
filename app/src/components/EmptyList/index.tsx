import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../constants";
import { StyleSheet, Text, View } from "react-native";

export function EmptyList() {
  return (
    <>
      <View style={styles.container}>
        <Icon name="file-o" color={Colors.base.gray[300]} size={50} />
        <Text style={styles.firtsEmptyText}>
          Você ainda não tem tarefas cadastradas.
        </Text>
        <Text style={styles.secondEmptyText}>
          Crie tarefas e organize seus itens a fazer.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  firtsEmptyText: {
    color: Colors.base.gray[300],
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  secondEmptyText: {
    color: Colors.base.gray[300],
    textAlign: "center",
  },
});
