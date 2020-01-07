// @flow

import {
  addToMainDisplay,
  deleteLastCharacter,
  displayReducer,
  focusInput,
  setLeftDisplay,
  setRightDisplay
} from "./reducer.js";

import type { DisplayState } from "./reducer.js";

test("adds to main content on ADD_TO_MAIN_DISPLAY", () => {
  let state: DisplayState = {
    main: "bob",
    left: "",
    right: "",
    inputting: false,
    inputting_at: 0
  };

  let { main: _, ...untouched } = state;
  state = displayReducer(state, addToMainDisplay(" the builder"));

  let { main, ...remaining } = state;

  expect(main).toBe("bob the builder");
  expect(remaining).toEqual(untouched);
});

test("sets left content on SET_LEFT_DISPLAY", () => {
  let state: DisplayState = {
    main: "rier",
    left: "at home",
    right: "",
    inputting: false,
    inputting_at: 0
  };

  let { left: _, ...untouched } = state;
  state = displayReducer(state, setLeftDisplay("on fire"));
  let { left, ...remaining } = state;

  expect(left).toBe("on fire");
  expect(remaining).toEqual(untouched);
});

test("sets right content on SET_RIGHT_DISPLAY", () => {
  let state: DisplayState = {
    main: "holly",
    left: "jolly",
    right: "olly",
    inputting: false,
    inputting_at: 0
  };

  let { right: _, ...untouched } = state;
  state = displayReducer(state, setRightDisplay("on fire"));
  let { right, ...remaining } = state;

  expect(right).toBe("on fire");
  expect(remaining).toEqual(untouched);
});

test("sets inputting to true and inputting_at to main len on FOCUS_INPUT", () => {
  let state: DisplayState = {
    main: "elf",
    left: "tree",
    right: "bear",
    inputting: false,
    inputting_at: 0
  };

  let { inputting: _, ...untouched } = state;
  state = displayReducer(state, focusInput());
  let { inputting, ...remaining } = state;

  expect(inputting).toBe(true);
  expect(remaining).toEqual({ ...untouched, inputting_at: 3 });
});

test("sets inputting to true and inputting_at to main len on FOCUS_INPUT", () => {
  let state: DisplayState = {
    main: "elf",
    left: "tree",
    right: "bear",
    inputting: false,
    inputting_at: 0
  };

  let { inputting: _, ...untouched } = state;
  state = displayReducer(state, focusInput());
  let { inputting, ...remaining } = state;

  expect(inputting).toBe(true);
  expect(remaining).toEqual({ ...untouched, inputting_at: 3 });
});

test("just returns state on FOCUS_INPUT if inputting already true", () => {
  let state: DisplayState = {
    main: "elfs are cool",
    left: "tree",
    right: "bear",
    inputting: true,
    inputting_at: 3
  };

  let same = displayReducer(state, focusInput());

  expect(state).toBe(same);
});

test("removes last character on DELETE_LAST_CHARACTER", () => {
  let state: DisplayState = {
    main: "elfss",
    left: "",
    right: "",
    inputting: true,
    inputting_at: 3
  };

  state = displayReducer(state, deleteLastCharacter());

  expect(state.main).toEqual("elfs");
});

test("does not remove the last character on DELETE_LAST_CHARACTER if at inputting_at", () => {
  let state: DisplayState = {
    main: "elf",
    left: "",
    right: "",
    inputting: true,
    inputting_at: 3
  };

  state = displayReducer(state, deleteLastCharacter());

  expect(state.main).toEqual("elf");
});
