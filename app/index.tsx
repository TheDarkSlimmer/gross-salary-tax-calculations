import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Stack, useNavigation } from "expo-router";
import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { globalStyles, mainStyles } from "@/styles/styles";

export type RootStackParamList = {
  Summary: { name: string };
  Main: { name: string };
  Home: { name: string };
};
function Main() {
  const [name, setName] = useState<string>("");

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <ScrollView>
        <StatusBar backgroundColor={globalStyles.statusColor.backgroundColor} />
        <View style={mainStyles.mainContainer}>
          <Stack.Screen options={{ headerShown: false }} />
          <Text style={mainStyles.welcomeText}>Welcome</Text>
          <View style={mainStyles.imageContainer}>
            <Image
              source={require("../assets/images/manage-money-bro 1.png")}
              style={{ width: 300, height: 300 }}
              resizeMode="cover"
              alt="Welcome-image"
            />
          </View>
          <View style={mainStyles.formContainer}>
            <Text style={mainStyles.formHeader}>Gross salary calculator</Text>
            <Text style={mainStyles.formDescription}>
              Please type your name below
            </Text>
            <TextInput
              placeholder="Enter your name..."
              style={mainStyles.nameInput}
              onChangeText={(text) => setName(text)}
              value={name}
            />
            <TouchableOpacity
              style={globalStyles.buttonStyles}
              onPress={() => navigation.navigate("Home", { name })}
            >
              <Text style={globalStyles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Main;
