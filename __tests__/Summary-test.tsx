import React from "react";
import Summary from "../app/Summary";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { render, waitFor } from "@testing-library/react-native";

test("renders correctly", () => {
  const tree = render(<Summary />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

// Extend the type of AsyncStorage with Jest mock methods
const mockedAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

beforeEach(() => {
  jest.clearAllMocks();
});


test("retrieves userName from AsyncStorage and renders correctly", async () => {
  // Mock AsyncStorage getItem to return a specific value
  mockedAsyncStorage.getItem.mockResolvedValueOnce("mockedUserName");

  const { toJSON } = render(<Summary />);

  await waitFor(() => {
    expect(mockedAsyncStorage.getItem).toHaveBeenCalledWith("userName");
    expect(mockedAsyncStorage.getItem).toHaveBeenCalledTimes(1);
    expect(toJSON()).toMatchSnapshot();
  });
});