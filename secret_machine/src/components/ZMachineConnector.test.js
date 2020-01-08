import React from "react";
import { shallow } from "enzyme";
import { ZMachineConnector } from "./ZMachineConnector";

jest.mock("../common/RustyZ");
import RustyZ from "../common/RustyZ";

describe("<ZMachineConnector />", () => {
  let rustySpy, stateSpy;

  beforeEach(() => {
    rustySpy = jest.spyOn(RustyZ, "subscribe");
    stateSpy = jest.spyOn(React, "useState");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("initialization", () => {
    it("should call RustyZ subscribe if not initialized", () => {
      let sub = jest.fn();
      stateSpy.mockImplementation(() => [false, sub]);
      let machine = shallow(<ZMachineConnector />);
      expect(sub).toHaveBeenCalledWith(true);
      expect(rustySpy).toHaveBeenCalled();
    });

    it("should not call RustyZ subscribe if initialized", () => {
      let sub = jest.fn();
      stateSpy.mockImplementation(() => [true, sub]);
      let machine = shallow(<ZMachineConnector />);
      expect(rustySpy).not.toHaveBeenCalled();
    });
  });

  describe("observer", () => {
    let pipe,
      mock = jest.fn();

    beforeEach(() => {
      stateSpy.mockImplementation(() => [false, jest.fn()]);

      rustySpy.mockImplementation(fn => {
        pipe = output => fn(output);
      });
    });

    it("should call setLeftDisplay on source == 'left'", () => {
      shallow(<ZMachineConnector setLeftDisplay={mock} />);
      pipe({ source: "left" });
      expect(mock).toHaveBeenCalled();
    });

    it("should call setLeftDisplay on source == 'right'", () => {
      shallow(<ZMachineConnector setRightDisplay={mock} />);
      pipe({ source: "right" });
      expect(mock).toHaveBeenCalled();
    });

    it("should call addToMainDisplay on source == 'main'", () => {
      shallow(<ZMachineConnector addToMainDisplay={mock} />);
      pipe({ source: "main" });
      expect(mock).toHaveBeenCalled();
    });

    it("should call focusInput on source == 'input'", () => {
      shallow(<ZMachineConnector focusInput={mock} />);
      pipe({ source: "input" });
      expect(mock).toHaveBeenCalled();
    });
  });
});
