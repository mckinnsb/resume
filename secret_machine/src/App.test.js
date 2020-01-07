import React from "react";
import { shallow } from "enzyme";
import App from "./App.js";
import ZMachineConnector from "./ZMachineConnector.js";

test("renders zmachine connector", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(ZMachineConnector).length).toBe(1);
});
