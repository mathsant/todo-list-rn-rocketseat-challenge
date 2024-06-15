import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.base.gray[500],
    padding: 24,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 70,
    marginLeft: 110,
    marginBottom: 30,
    padding: 1,
  },
  buttonAdd: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: Colors.product.blueDark,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    height: 56,
    width: 56,
    backgroundColor: Colors.base.gray[400],
    borderRadius: 5,
    alignItems: "center",
    marginRight: 10,
    padding: 10,
    color: "#fff",
  },
  titleText: {
    color: Colors.product.blue,
    fontWeight: "bold",
    marginLeft: 7,
    fontSize: 20,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 20,
  },
  infoTexts: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  infoCreatedTasks: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoSolvedTasks: {
    flexDirection: "row",
  },
  textCreatedTasks: {
    color: Colors.product.blue,
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 10,
  },
  textSolvedTasks: {
    color: Colors.product.purple,
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 10,
  },

  textNumberCreatedTasks: {
    color: "#fff",
    fontSize: 15,
  },
  badgeContainer: {
    backgroundColor: Colors.base.gray[300],
    padding: 1,
    borderRadius: 20,
    minWidth: 20,
    minHeight: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
