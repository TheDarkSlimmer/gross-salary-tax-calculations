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
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

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

  //use custom font
  const [loaded, error] = useFonts({
    "Inter-Bold": require("../assets/fonts/InterTight-Bold.ttf"),
    "Inter-ExtraBold": require("../assets/fonts/InterTight-ExtraBold.ttf"),
    "Inter-Regular": require("../assets/fonts/InterTight-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/InterTight-Medium.ttf"),
    "Inter-Light": require("../assets/fonts/InterTight-Light.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <ScrollView>
        <StatusBar backgroundColor={globalStyles.statusColor.backgroundColor} />
        <View style={mainStyles.mainContainer}>
          <Stack.Screen options={{ headerShown: false }} />
          <Text style={{ ...mainStyles.welcomeText, fontFamily: "Inter-Medium" }}>
            Welcome
          </Text>
          <View style={mainStyles.imageContainer}>
            <Image
              source={require("../assets/images/manage-money-bro 1.png")}
              style={{ width: 300, height: 300 }}
              resizeMode="cover"
              alt="Welcome-image"
            />
          </View>
          <View style={mainStyles.formContainer}>
            <Text
              style={{ ...mainStyles.formHeader, fontFamily: "Inter-Medium" }}
            >
              Gross salary calculator
            </Text>
            <Text
              style={{
                ...mainStyles.formDescription,
                fontFamily: "Inter-Light",
              }}
            >
              Please type your name below
            </Text>
            <TextInput
              placeholder="Enter your name..."
              style={{ ...mainStyles.nameInput, fontFamily: "Inter-Light" }}
              onChangeText={(text) => setInputName(text)}
              value={inputName}
            />
            <TouchableOpacity
              style={{
                ...globalStyles.buttonStyles,
                backgroundColor: !inputName ? "gray" : "#0077B6",
              }}
              onPress={handleSubmit}
              disabled={!inputName}
            >
              <Text
                style={{
                  ...globalStyles.buttonText,
                  fontFamily: "Inter",
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Main;
