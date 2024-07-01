import { useState } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TouchableOpacity,
} from "react-native";
import { globalStyles, summaryStyles } from "@/styles/styles";
import { useNavigation } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from ".";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Summary() {
  const [previousName, setPreviousName] = useState<string>("");
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const getName = async () => {
      try {
        const storedName = await AsyncStorage.getItem("userName");
        if (storedName) {
          setPreviousName(storedName);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getName();
  }, []);
  
  //Salary states
  const [estimatedSalary, setEstimatedSalary] = useState<number>(600);
  const [basicSalary, setBasicSalary] = useState<number>(200);
  const [employeePensionContribution, setEmployeePensionContribution] =
    useState<number>(200);
  const [employeePensionAmount, setEmployeePensionAmount] =
    useState<number>(200);
  const [totalPAYETax, setTotalPAYETax] = useState<number>(200);

  //Calculation functions for summary

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar backgroundColor={globalStyles.statusColor.backgroundColor} />
        <View style={summaryStyles.extimatedSalaryContainer}>
          <Text style={summaryStyles.extimatedSalaryText}>
            Your extimated salary is
          </Text>
          <Text
            style={summaryStyles.exttimatedSalaryNumber}
          >{`GHC${estimatedSalary}`}</Text>
        </View>
        <View style={summaryStyles.valuesContainer}>
          <View style={summaryStyles.valuesTextContainer}>
            <Text
              style={{
                width: "50%",
                lineHeight: 20,
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Basic Salary
            </Text>
            <Text
              style={{ fontWeight: 600, fontSize: 15 }}
            >{`GHC${basicSalary}`}</Text>
          </View>
          <View style={summaryStyles.valuesTextContainer}>
            <Text
              style={{
                width: "50%",
                lineHeight: 20,
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Employee Pension Contribution Amount
            </Text>
            <Text
              style={{ fontWeight: 600, fontSize: 15 }}
            >{`GHC${employeePensionContribution}`}</Text>
          </View>
          <View style={summaryStyles.valuesTextContainer}>
            <Text
              style={{
                width: "50%",
                lineHeight: 20,
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Employee Pension Amount
            </Text>
            <Text
              style={{ fontWeight: 600, fontSize: 15 }}
            >{`GHC${employeePensionAmount}`}</Text>
          </View>
          <View style={summaryStyles.valuesTextContainer}>
            <Text
              style={{
                width: "50%",
                lineHeight: 20,
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Total PAYE Tax
            </Text>
            <Text
              style={{ fontWeight: 600, fontSize: 15 }}
            >{`GHC${totalPAYETax}`}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={globalStyles.buttonStyles}
          onPress={() => navigation.navigate("Home", { name: previousName })}
        >
          <Text style={globalStyles.buttonText}>Calculate again</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Summary;
