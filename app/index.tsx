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
import AsyncStorage from "@react-native-async-storage/async-storage";

export type RootStackParamList = {
  Summary: { salary: string; allowance: string };
  Main: { name: string };
  Home: { name: string };
};

function Main() {
  const [inputName, setInputName] = useState<string>("");

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  //submit input name
  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem("userName", inputName);
      navigation.navigate("Home", { name: inputName });
    } catch (error) {
      console.log(error);
    }
  };

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
              onChangeText={(text) => setInputName(text)}
              value={inputName}
            />
            <TouchableOpacity
              style={globalStyles.buttonStyles}
              onPress={handleSubmit}
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
