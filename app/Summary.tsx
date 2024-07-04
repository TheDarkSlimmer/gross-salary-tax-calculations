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
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCalculationFunction } from "@/helpers/CalculationFunction";

function Summary() {
  const [previousName, setPreviousName] = useState<string>("");
  let { salary, allowance } = useLocalSearchParams<{
    salary: string;
    allowance: string;
  }>();
  salary = salary ? salary : "0";
  allowance = allowance ? allowance : "0";
// 
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

  //Calculation function
  const {
    calculateSalaryDetails,
    estimatedGrossSalary,
    totalPAYETax,
    employeePensionContribution,
    employerPensionAmount,
    basicSalary,
  } = useCalculationFunction();

  //Run the function
  useEffect(() => {
      calculateSalaryDetails(Number(salary), Number(allowance));
    
  }, [salary, allowance]);
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar backgroundColor={globalStyles.statusColor.backgroundColor} />
        <View style={summaryStyles.extimatedSalaryContainer}>
          <Text style={summaryStyles.extimatedSalaryText}>
            Your extimated gross salary is
          </Text>
          <Text
            style={summaryStyles.exttimatedSalaryNumber}
          >{`GHS${estimatedGrossSalary.toFixed(2)}`}</Text>
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
            >{`GHS${basicSalary.toFixed(2)}`}</Text>
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
            >{`GHS${employeePensionContribution.toFixed(2)}`}</Text>
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
              Employer Pension Amount
            </Text>
            <Text
              style={{ fontWeight: 600, fontSize: 15 }}
            >{`GHS${employerPensionAmount.toFixed(2)}`}</Text>
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
            >{`GHS${totalPAYETax.toFixed(2)}`}</Text>
          </View>
        </View>
        <Link
          href={{ pathname: "/Home", params: { name: previousName } }}
          style={globalStyles.buttonStyles}
          asChild
        >
          <TouchableOpacity style={globalStyles.buttonStyles}>
            <Text style={globalStyles.buttonText}>Calculate again</Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Summary;
