import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import IconIoni from "react-native-vector-icons/Ionicons";
import { useState } from "react";

type Props = {
  title: string;
  isDone: boolean;
  onRemove: () => void;
};

export function Task({ title, onRemove }: Props) {
  const [isDoneTask, setIsDoneTask] = useState(false);

  function setTeste() {
    if (isDoneTask === false) return setIsDoneTask(true);
    return setIsDoneTask(false);
  }

  return (
    <View style={styles.card}>
      <IconIoni
        name={isDoneTask ? "checkmark-circle" : "checkmark-circle-outline"}
        size={25}
        color={Colors.product.purple}
        onPress={setTeste}
      />
      <Text style={isDoneTask ? styles.descDone : styles.desc}>{title}</Text>
      <Icon
        name="trash"
        size={25}
        color={Colors.base.gray[300]}
        onPress={onRemove}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 60,
    padding: 16,
    backgroundColor: Colors.base.gray[400],
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  desc: {
    color: Colors.base.gray[200],
    marginRight: 8,
    marginLeft: 8,
    fontSize: 16,
    flexWrap: "wrap",
  },
  descDone: {
    color: Colors.base.gray[200],
    textDecorationLine: "line-through",
    marginRight: 8,
    marginLeft: 8,
    fontSize: 16,
    flexWrap: "wrap",
  },
});
