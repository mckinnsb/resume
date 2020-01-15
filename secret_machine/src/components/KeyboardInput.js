// @flow
import type { DisplaySlice } from "../reducer";

import React from "react";
import { connect } from "react-redux";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { inputToDisplay, deleteLastCharacter } from "../reducer";
import { isDelete, isEnter, isText } from "../common/utils";

import RustyZ from "../common/RustyZ";

type KeyboardProps = {
  inputToDisplay: string => void,
  deleteLastCharacter: () => void,
  inputting: boolean,
  main: string
};

const InputContainer = styled.input`
  position: absolute;
  display: block;
  opacity: 0;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

export function KeyboardInput(props: KeyboardProps) {
  let { inputToDisplay, deleteLastCharacter } = props;
  let { update } = RustyZ;

  let [input, setInput] = React.useState("");

  React.useEffect(() => {
    let handleInput = (e: KeyboardEvent) => {
      if (isDelete(e)) {
        deleteLastCharacter();

        if (input.length > 0) {
          setInput(input.slice(0, -1));
        }
      } else if (isEnter(e)) {
        inputToDisplay("\n");
        update(input);

        setInput("");
      } else if (isText(e)) {
        inputToDisplay(e.key);

        setInput(input + e.key);
        return;
      }
    };

    document.addEventListener("keydown", handleInput);

    return () => {
      document.removeEventListener("keydown", handleInput);
    };
  });

  let inputEl = React.useRef(null);

  React.useEffect(() => {
    let clickFn;
    let setListeners = isMobile && input.current !== null;

    if (setListeners) {
      clickFn = () => {
        inputEl.current.focus();
      };

      document.addEventListener("click", clickFn);
      document.addEventListener("touchend", clickFn);
    }

    return setListeners
      ? () => {
          document.removeEventListener("click", clickFn);
          document.removeEventListener("touchend", clickFn);
        }
      : () => {};
  });

  return isMobile ? <InputContainer ref={inputEl} /> : null;
}

KeyboardInput.propTypes = {};

const mapStateToProps = (state: DisplaySlice) => {
  let {
    display: { main, inputting }
  } = state;
  return { main, inputting };
};

const mapDispatchToProps = {
  inputToDisplay,
  deleteLastCharacter
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyboardInput);
