import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { RootStackParamList } from ".";



function _layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#0077B6" },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#ffffff",
        },
      }}
    ></Stack>
  );
}

export default _layout;
