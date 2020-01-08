// @flow

import { useState } from "react";
import { Observable } from "rxjs";
import { connect } from "react-redux";

import {
  setLeftDisplay,
  setRightDisplay,
  addToMainDisplay,
  focusInput
} from "../reducer";

import RustyZ from "../common/RustyZ";

// trying to deliberately do this without redux-observables

type ConnectorProps = {
  setLeftDisplay: string => void,
  setRightDisplay: string => void,
  addToMainDisplay: string => void,
  focusInput: () => void
};

export function ZMachineConnector(props: ConnectorProps) {
  const [initialized, setInitialized] = useState(false);
  let { setLeftDisplay, setRightDisplay, addToMainDisplay, focusInput } = props;

  // i'm pretty sure this is very similar to use effect, but i want to be sure
  // that it's fired only once
  if (!initialized) {
    const observer = new Observable(subscriber => {
      RustyZ.subscribe(output => {
        subscriber.next(output);
      });
    });

    observer.subscribe(x => {
      switch (x.source) {
        case "left":
          setLeftDisplay(x.content);
          break;
        case "right":
          setRightDisplay(x.content);
          break;
        case "main":
          addToMainDisplay(x.content);
          break;
        case "input":
          focusInput();
          break;
        default:
          break;
      }
    });

    setInitialized(true);
  }

  return null;
}

ZMachineConnector.propTypes = {};

const mapDispatchToProps = {
  setLeftDisplay,
  setRightDisplay,
  addToMainDisplay,
  focusInput
};

export default connect(null, mapDispatchToProps)(ZMachineConnector);
