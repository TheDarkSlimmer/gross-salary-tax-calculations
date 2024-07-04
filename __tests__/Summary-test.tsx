import React from "react";
import renderer from "react-test-renderer";
import Summary from "../app/Summary";
import AsyncStorage from "@react-native-async-storage/async-storage";

test("renders correctly", () => {
  const tree = renderer
    .create(<Summary />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
