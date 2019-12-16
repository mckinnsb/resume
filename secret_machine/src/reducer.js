// @flow

import {combineReducers} from 'redux';
import type {Action} from './types.js';

export const ADD_TO_MAIN_DISPLAY = 'DISPLAY.ADD_TO_MAIN_DISPLAY';
export const DELETE_LAST_CHARACTER = 'DISPLAY.DELETE_LAST_CHARACTER';
export const INPUT_TO_DISPLAY = 'DISPLAY.INPUT_TO_DISPLAY';
export const FOCUS_INPUT = 'DISPLAY.FOCUS_INPUT';
export const SET_LEFT_DISPLAY = 'DISPLAY.SET_LEFT_DISPLAY';
export const SET_RIGHT_DISPLAY = 'DISPLAY.SET_RIGHT_DISPLAY';

export type DisplayState = {
  main: string,
  left: string,
  right: string,
  inputting: boolean,
  inputting_at: number,
};

export type DisplaySlice = {
  display: DisplayState,
};

type DisplayUpdate = {
  message: string,
};

export function addToMainDisplay(main: string) {
  return {
    type: ADD_TO_MAIN_DISPLAY,
    payload: {message: main},
  };
}

export function deleteLastCharacter() {
  return {
    type: DELETE_LAST_CHARACTER,
    payload: {message: ''},
  };
}

export function inputToDisplay(input: string) {
  return {
    type: INPUT_TO_DISPLAY,
    payload: {message: input},
  };
}

export function focusInput() {
  return {
    type: FOCUS_INPUT,
    payload: {message: 'focus'},
  };
}

export function setLeftDisplay(left: string) {
  return {
    type: SET_LEFT_DISPLAY,
    payload: {message: left},
  };
}

export function setRightDisplay(right: string) {
  return {
    type: SET_RIGHT_DISPLAY,
    payload: {message: right},
  };
}

const defaultState: DisplayState = {
  main: '',
  left: 'Loading..',
  right: '',
  inputting: false,
  inputting_at: 0,
};

export function displayReducer(
  state: DisplayState = defaultState,
  action: Action<DisplayUpdate>,
): DisplayState {
  switch (action.type) {
    case ADD_TO_MAIN_DISPLAY: {
      let {message: add} = action.payload;
      let {main} = state;
      main += add;
      return {...state, main, inputting: false};
    }

    case INPUT_TO_DISPLAY: {
      let {message: add} = action.payload;
      let {main} = state;
      main += add;
      return {...state, main};
    }

    case DELETE_LAST_CHARACTER: {
      let {main, inputting_at} = state;

      if (main.length > inputting_at) {
        main = main.slice(0, -1);
      }

      return {...state, main};
    }

    case FOCUS_INPUT:
      let {inputting} = state;

      if (inputting) return state;

      let inputting_at = state.main.length;
      return {...state, inputting_at, inputting: true};

    case SET_LEFT_DISPLAY:
      let {message: left} = action.payload;
      return {...state, left};

    case SET_RIGHT_DISPLAY:
      let {message: right} = action.payload;
      return {...state, right};

    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  display: displayReducer,
});
