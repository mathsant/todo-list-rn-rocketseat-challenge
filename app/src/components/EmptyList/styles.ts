import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
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
