// @flow

import {combineReducers} from 'redux';
import type { Action } from './types.js';


export const SET_LEFT_DISPLAY = 'DISPLAY.SET_LEFT_DISPLAY';
export const SET_RIGHT_DISPLAY = 'DISPLAY.SET_RIGHT_DISPLAY';
export const ADD_TO_MAIN_DISPLAY = 'DISPLAY.ADD_TO_MAIN_DISPLAY';
export const FOCUS_INPUT = 'DISPLAY.FOCUS_INPUT';

export type DisplayState = {
  main: string,
  left: string,
  right: string,
  inputting: boolean,
};

type DisplayUpdate = {
  message: string,
};

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

export function addToMainDisplay(main: string) {
  return {
    type: ADD_TO_MAIN_DISPLAY,
    payload: {message: main},
  };
}

export function focusInput() {
  return {
    type: FOCUS_INPUT,
    payload: {message: 'focus'},
  };
}

const defaultState : DisplayState = {
  main: "",
  left: "Loading..",
  right: "",
  inputting: false
}

export function displayReducer(
  state: DisplayState = defaultState,
  action: Action<DisplayUpdate>,
): DisplayState {
  switch (action.type) {

    case SET_LEFT_DISPLAY:
      let {message: left} = action.payload;
      return {...state, left};
    case SET_RIGHT_DISPLAY:
      let {message: right} = action.payload;
      return {...state, right};
    case ADD_TO_MAIN_DISPLAY:
      let {message: add} = action.payload;
      let {main} = state;
      main += add;
      return {...state, main};
    case FOCUS_INPUT:
      return {...state, inputting: true};
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  display: displayReducer,
});
