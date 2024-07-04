import { globalStyles, homeStyles, mainStyles } from "@/styles/styles";
// import { Stack, useNavigation } from "expo-router";
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
  Pressable,
} from "react-native";
// import { useRoute, RouteProp } from "@react-navigation/native";
import { Link, router, useLocalSearchParams } from "expo-router";

// export type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;
function Home() {
  const [desiredNetSalary, setDesiredNetSalary] = useState<string>("");
  const [desiredAllowance, setDesiredAllowance] = useState<string>("");
  const { name } = useLocalSearchParams<{ name?: string }>();
  
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
            keyboardType="numeric"
            placeholder="Enter your desired net salary..."
            style={homeStyles.homeInput}
            onChangeText={(text) => setDesiredNetSalary(text)}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="Enter your total allowances..."
            style={homeStyles.homeInput}
            onChangeText={(text) => setDesiredAllowance(text)}
          />
          <Link
            href={{
              pathname: "/Summary",
              params: {
                salary: parseFloat(desiredNetSalary),
                allowance: parseFloat(desiredAllowance),
              },
            }}
            asChild
          >
            <Pressable
              style={{
                ...globalStyles.buttonStyles,
                backgroundColor:
                  !desiredAllowance || !desiredNetSalary ? "gray" : "#0077B6",
              }}
            >
              <Text style={globalStyles.buttonText}>Submit</Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
