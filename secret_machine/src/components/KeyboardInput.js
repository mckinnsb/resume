// @flow
import type { DisplaySlice } from "../reducer";

import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { inputToDisplay, deleteLastCharacter } from "../reducer";
import { isDelete, isEnter, isText } from "../common/utils";

import RustyZ from "../common/RustyZ";

type KeyboardProps = {
  inputToDisplay: string => void,
  deleteLastCharacter: () => void,
  inputting: boolean,
  main: string
};

export function KeyboardInput(props: KeyboardProps) {
  let { inputToDisplay, deleteLastCharacter } = props;
  let { update } = RustyZ;

  let [input, setInput] = useState("");

  useEffect(() => {
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
  return null;
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
