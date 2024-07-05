import React from "react";
import { render } from "@testing-library/react-native";
import Home from "../app/Home";

test("renders correctly", () => {
  const tree = render(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
