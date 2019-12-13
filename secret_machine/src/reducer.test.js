// @flow

import {
  displayReducer,
  addToMainDisplay,
  focusInput,
  setLeftDisplay,
  setRightDisplay,
} from './reducer.js';

import type { DisplayState } from './reducer.js';

test('adds to main content on ADD_TO_MAIN_DISPLAY', () => {
  let state: DisplayState = {
    main: 'bob',
    left: '',
    right: '',
    inputting: false,
  };

  let {main: _, ...untouched} = state;
  state = displayReducer(state, addToMainDisplay(' the builder'));

  let {main, ...remaining} = state;

  expect(main).toBe('bob the builder');
  expect(remaining).toEqual(untouched);
});

test('sets left content on SET_LEFT_DISPLAY', () => {
  let state: DisplayState = {
    main: 'rier',
    left: 'at home',
    right: '',
    inputting: false,
  };

  let {left: _, ...untouched} = state;
  state = displayReducer(state, setLeftDisplay('on fire'));
  let {left, ...remaining} = state;

  expect(left).toBe('on fire');
  expect(remaining).toEqual(untouched);
});

test('sets right content on SET_RIGHT_DISPLAY', () => {
  let state: DisplayState = {
    main: 'holly',
    left: 'jolly',
    right: 'olly',
    inputting: false,
  };

  let {right: _, ...untouched} = state;
  state = displayReducer(state, setRightDisplay('on fire'));
  let {right, ...remaining} = state;

  expect(right).toBe('on fire');
  expect(remaining).toEqual(untouched);
});

test('sets inputting to true on FOCUS_INPUT', () => {
  let state: DisplayState = {
    main: 'elf',
    left: 'tree',
    right: 'bear',
    inputting: false,
  };

  let {inputting: _, ...untouched} = state;
  state = displayReducer(state, focusInput());
  let {inputting, ...remaining} = state;

  expect(inputting).toBe(true);
  expect(remaining).toEqual(untouched);
});
