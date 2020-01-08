import React from "react";
import { shallow } from "enzyme";
import { KeyboardInput } from "./KeyboardInput";

jest.mock("../common/RustyZ");
import RustyZ from "../common/RustyZ";

jest.mock("../common/utils", () => {
  return {
    isDelete: () => false,
    isEnter: () => false,
    isText: () => false
  };
});

import mock from "../common/utils";

describe("handleInput", () => {
  let deleteLastCharacterSpy,
    input,
    inputToDisplaySpy,
    updateSpy,
    setInputSpy,
    stateSpy,
    inputFn;

  beforeEach(() => {
    deleteLastCharacterSpy = jest.fn();
    inputToDisplaySpy = jest.fn();

    updateSpy = jest.spyOn(RustyZ, "update");

    input = "";

    setInputSpy = jest.fn(x => (input = x));
    jest
      .spyOn(React, "useState")
      .mockImplementation(() => [input, setInputSpy]);

    // normally use effect happens after render, but in this case we don't
    // care about this test occuring after render because the behavior
    // wouldn't depend on it anyway
    jest.spyOn(React, "useEffect").mockImplementation(fn => fn());

    jest.spyOn(document, "addEventListener").mockImplementation((ev, fn) => {
      inputFn = fn;
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("delete", () => {
    beforeEach(() => {
      jest.spyOn(mock, "isDelete").mockReturnValue(true);
    });

    it("should delete last character", () => {
      shallow(<KeyboardInput deleteLastCharacter={deleteLastCharacterSpy} />);

      inputFn({});
      expect(deleteLastCharacterSpy).toHaveBeenCalled();
    });

    it("should not delete last character if input is blank", () => {
      shallow(<KeyboardInput deleteLastCharacter={deleteLastCharacterSpy} />);

      inputFn({});
      expect(setInputSpy).not.toHaveBeenCalled();
    });

    it("should delete last character if present", () => {
      input = "look";

      shallow(<KeyboardInput deleteLastCharacter={deleteLastCharacterSpy} />);

      inputFn({});
      expect(setInputSpy).toHaveBeenCalled();
      expect(input).toEqual("loo");
    });
  });

  describe("enter", () => {
    beforeEach(() => {
      jest.spyOn(mock, "isEnter").mockReturnValue(true);
    });

    it("should send carriage return to display", () => {
      shallow(<KeyboardInput inputToDisplay={inputToDisplaySpy} />);

      inputFn({});
      expect(inputToDisplaySpy).toHaveBeenCalledWith("\n");
    });

    it("should call update with inputs value", () => {
      input = "west";

      shallow(<KeyboardInput inputToDisplay={inputToDisplaySpy} />);

      inputFn({});
      expect(updateSpy).toHaveBeenCalledWith("west");
    });

    it("should set input to blank", () => {
      input = "west";

      shallow(<KeyboardInput inputToDisplay={inputToDisplaySpy} />);

      inputFn({});
      expect(input).toBe("");
    });
  });

  describe("any other alphanumeric key", () => {
    beforeEach(() => {
      jest.spyOn(mock, "isText").mockReturnValue(true);
    });

    it("should send it to display", () => {
      shallow(<KeyboardInput inputToDisplay={inputToDisplaySpy} />);

      inputFn({ key: "f" });
      expect(inputToDisplaySpy).toBeCalledWith("f");
    });

    it("should send it to input", () => {
      input = "scar";

      shallow(<KeyboardInput inputToDisplay={inputToDisplaySpy} />);

      inputFn({ key: "f" });
      expect(input).toBe("scarf");
    });
  });

  describe("non alpha-numeric keys that are not enter", () => {
    it("should do nothing", () => {
      input = "loo";
      shallow(<KeyboardInput />);
      // it will throw because we aren't providing it dispatch props
      // if it tries to do something; if it does nothing, it wont throw
      expect(() => inputFn({})).not.toThrow();
    });
  });
});
