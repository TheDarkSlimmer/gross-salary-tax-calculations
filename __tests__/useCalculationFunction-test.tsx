import { renderHook, act } from "@testing-library/react-native";
import { useCalculationFunction } from "./../helpers/CalculationFunction";

describe("useCalculationFunction", () => {
  test("initial state values", () => {
    const { result } = renderHook(() => useCalculationFunction());

    expect(result.current.estimatedGrossSalary).toBe(0);
    expect(result.current.basicSalary).toBe(0);
    expect(result.current.employeePensionContribution).toBe(0);
    expect(result.current.employerPensionAmount).toBe(0);
    expect(result.current.totalPAYETax).toBe(0);
  });

  test("calculateSalaryDetails updates state correctly", async () => {
    const { result } = renderHook(() => useCalculationFunction());

    await act(async () => {
      result.current.calculateSalaryDetails(10000, 2000);
    });

    expect(result.current.estimatedGrossSalary).toBeGreaterThan(0);
    expect(result.current.basicSalary).toBeGreaterThan(0);
    expect(result.current.employeePensionContribution).toBeGreaterThan(0);
    expect(result.current.employerPensionAmount).toBeGreaterThan(0);
    expect(result.current.totalPAYETax).toBeGreaterThan(0);
  });

  test("calculateSalaryDetails calculates correct values for known inputs", async () => {
    const { result } = renderHook(() => useCalculationFunction());

    await act(async () => {
      result.current.calculateSalaryDetails(10000, 2000);
    });

    //Expected values based on the calculation logic in the hook
    expect(result.current.estimatedGrossSalary).toBeCloseTo(13145.69, 2)
    expect(result.current.basicSalary).toBeCloseTo(11145.69, 2);
    expect(result.current.employeePensionContribution).toBeCloseTo(1170.3, 2); 
    expect(result.current.employerPensionAmount).toBeCloseTo(2006.22, 2);
    expect(result.current.totalPAYETax).toBeCloseTo(1975.76, 2);
  });
});
