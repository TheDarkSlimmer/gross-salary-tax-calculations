import { globalStyles, homeStyles, mainStyles } from "@/styles/styles";
import { Stack } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Home",
            headerStyle: { backgroundColor: "#023E8A" },
          }}
        />
        <Text style={homeStyles.helloText}>Hello, Ama</Text>
        <View style={homeStyles.homeImageContainer}>
          <Image
            source={require("../assets/images/money-income-amico.png")}
            style={{ width: 300, height: 300 }}
            resizeMode="cover"
            alt="Welcome-image"
          />
        </View>
        <View style={homeStyles.homeInputsContainer}>
          <Text style={mainStyles.formDescription}>Please enter the details below to get your salary summary</Text>
          <TextInput
            placeholder="Enter your desired net salary..."
            style={homeStyles.homeInput}
          />
          <TextInput
            placeholder="Enter your desired allowance..."
            style={homeStyles.homeInput}
          />
          <TouchableOpacity style={globalStyles.buttonStyles}>
            <Text style={globalStyles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
