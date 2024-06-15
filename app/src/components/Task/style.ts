import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
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
