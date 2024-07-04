import { useState } from "react";

export function useCalculationFunction() {
  //Salary states
  const [estimatedGrossSalary, setEstimatedGrossSalary] = useState<number>(0);
  const [basicSalary, setBasicSalary] = useState<number>(0);
  const [employeePensionContribution, setEmployeePensionContribution] =
    useState<number>(0);
  const [employerPensionAmount, setEmployerPensionAmount] = useState<number>(0);
  const [totalPAYETax, setTotalPAYETax] = useState<number>(0);

  // Calculation function for output summary
  function calculateSalaryDetails(desiredNet: number, allowances: number) {
    let grossSalary = Number(desiredNet) * 1.3; // Initial guess for gross salary
    let netSalary = 0;
    let tax = 0;

    while (Math.abs(netSalary - Number(desiredNet)) > 1) {
      let basicSalary = grossSalary - Number(allowances);
      let tier2Pension = 0.055 * basicSalary;
      let tier3Pension = 0.05 * basicSalary;
      let taxableIncome = basicSalary - (tier2Pension + tier3Pension);

      tax = 0;
      if (taxableIncome > 20000) {
        tax += (taxableIncome - 20000) * 0.3 + 6000;
        taxableIncome = 20000;
      }
      if (taxableIncome > 16395) {
        tax += (taxableIncome - 16395) * 0.25 + 4098.75;
        taxableIncome = 16395;
      }
      if (taxableIncome > 3605) {
        tax += (taxableIncome - 3605) * 0.175 + 525;
        taxableIncome = 3605;
      }
      if (taxableIncome > 605) {
        tax += (taxableIncome - 605) * 0.1 + 13;
        taxableIncome = 605;
      }
      if (taxableIncome > 475) {
        tax += (taxableIncome - 475) * 0.05 + 5.5;
        taxableIncome = 475;
      }
      if (taxableIncome > 365) {
        tax += (taxableIncome - 365) * 0.05 + 5.5;
        taxableIncome = 365;
      }
      if (taxableIncome > 0) {
        tax += taxableIncome * 0.0;
      }

      netSalary = grossSalary - tax - tier2Pension - tier3Pension;

      // Adjust gross salary estimate
      grossSalary += (Number(desiredNet) - netSalary) * 0.5;
    }

    // Recalculate final values for output
    let finalBasicSalary = grossSalary - Number(allowances);
    let finalTier2Pension = 0.055 * finalBasicSalary;
    let finalTier3Pension = 0.05 * finalBasicSalary;
    let employerTier3Pension = finalTier3Pension;
    let employerTier1Pension = 0.13 * finalBasicSalary; // Employer contributes 13% for Tier 1

    setEstimatedGrossSalary(grossSalary);
    setBasicSalary(finalBasicSalary);
    setTotalPAYETax(tax);
    setEmployeePensionContribution(finalTier2Pension + finalTier3Pension);
    setEmployerPensionAmount(employerTier1Pension + employerTier3Pension);
  }

  return {
    calculateSalaryDetails,
    estimatedGrossSalary,
    totalPAYETax,
    basicSalary,
    employeePensionContribution,
    employerPensionAmount,
  };
}
