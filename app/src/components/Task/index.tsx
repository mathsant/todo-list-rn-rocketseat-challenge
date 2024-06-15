import { Text, View } from "react-native";
import { Colors } from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import IconAntiDesign from "react-native-vector-icons/AntDesign";
import { ITask } from "../../screens/Home";
import { styles } from "./style";

type Props = {
  data: ITask;
  onRemove: () => void;
  onComplete: () => void;
};

export function Task({ data, onRemove, onComplete }: Props) {
  return (
    <View style={styles.card}>
      <IconAntiDesign
        name={data.isDone ? "checkcircle" : "meh"}
        size={20}
        color={Colors.product.purple}
        onPress={onComplete}
      />
      <Text style={data.isDone ? styles.descDone : styles.desc}>
        {data.title}
      </Text>
      <Icon
        name="trash"
        size={25}
        color={Colors.base.gray[300]}
        onPress={onRemove}
      />
    </View>
  );
}
