import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../constants";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";

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
