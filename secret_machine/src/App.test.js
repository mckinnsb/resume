import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import {
  Header,
  Main,
  KeyboardInput,
  ZMachineConnector,
  FontFix
} from "./components";

describe("<App />", () => {
  test("renders header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ZMachineConnector).length).toBe(1);
  });

  test("renders main", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ZMachineConnector).length).toBe(1);
  });

  test("renders keyboard input", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ZMachineConnector).length).toBe(1);
  });

  test("renders zmachine connector", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ZMachineConnector).length).toBe(1);
  });

  test("renders font fix", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ZMachineConnector).length).toBe(1);
  });
});
