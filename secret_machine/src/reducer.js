import {combineReducers} from 'redux';

export type DisplayState = {
  main:      string,
  left:      string,
  right:     string,
  inputting: bool
}

function displayReducer(state: DisplayState, action: Action) : DisplayState {
  return {
    left: "left from reducer",
    right: "right from reducer",
    main: "main from reducer",
  };
}

export const rootReducer = combineReducers({
  display: displayReducer
});
