import { globalStyles, homeStyles, mainStyles } from "@/styles/styles";
import { Stack, useNavigation } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from ".";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

export type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;
function Home() {
  const [desiredNetSalary, setDesiredNetSalary] = useState<string>("");
  const [desiredAllowance, setDesiredAllowance] = useState<string>("");
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  //calling name
  const route = useRoute<HomeScreenRouteProp>();
  const { name } = route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar backgroundColor={globalStyles.statusColor.backgroundColor} />
        <Text style={homeStyles.helloText}>{`Hello ${name},`}</Text>
        <View style={homeStyles.homeImageContainer}>
          <Image
            source={require("../assets/images/money-income-amico.png")}
            style={{ width: 250, height: 250 }}
            resizeMode="cover"
            alt="Welcome-image"
          />
        </View>
        <View style={homeStyles.homeInputsContainer}>
          <Text style={mainStyles.formDescription}>
            Please enter the details below to get your salary summary
          </Text>
          <TextInput
            placeholder="Enter your desired net salary..."
            style={homeStyles.homeInput}
            onChangeText={(text) => setDesiredNetSalary(text)}
          />
          <TextInput
            placeholder="Enter your desired allowance..."
            style={homeStyles.homeInput}
            onChangeText={(text) => setDesiredAllowance(text)}
          />
          <TouchableOpacity
            style={globalStyles.buttonStyles}
            onPress={() =>
              navigation.navigate("Summary", {
                salary: desiredNetSalary,
                allowance: desiredAllowance,
              })
            }
          >
            <Text style={globalStyles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
