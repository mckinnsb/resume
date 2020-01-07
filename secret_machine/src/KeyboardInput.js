// @flow
import type { DisplaySlice } from "./reducer.js";

import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { inputToDisplay, deleteLastCharacter } from "./reducer.js";

import RustyZ from "./RustyZ.js";

type KeyboardProps = {
  inputToDisplay: string => void,
  deleteLastCharacter: () => void,
  inputting: boolean,
  main: string
};

export function KeyboardInput(props: KeyboardProps) {
  let { inputToDisplay, deleteLastCharacter } = props;

  let [input, setInput] = useState("");

  let { update } = RustyZ;

  useEffect(() => {
    let handleInput = (e: KeyboardEvent) => {
      if (e.key === "Backspace" || e.key === "Delete") {
        deleteLastCharacter();

        if (input.length > 0) {
          setInput(input.slice(0, -1));
        }

        return;
      }

      if (e.key === "Enter") {
        inputToDisplay("\n");
        update(input);
        setInput("");
        return;
      }

      // sometimes, stack overflow does have a very nice solution
      // this matches the keycode against word/string characters
      // and only outputs to string if it is a visible char
      //
      // we can't use "key" here because they are all strings,
      // but we can get the literal string and match the escaped
      // chars against a regex. that would have taken me a while to think
      // of
      if (String.fromCharCode(e.keyCode).match(/(\w|\s)/g)) {
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
