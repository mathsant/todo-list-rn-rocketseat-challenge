import { registerRootComponent } from "expo";
import { StatusBar, Text } from "react-native";
import { Home } from "./screens/Home";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" translucent />
      <Home />
    </>
  );
}

registerRootComponent(App);
