import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Observable} from 'rxjs';
import {connect} from 'react-redux';

import {
  setLeftDisplay,
  setRightDisplay,
  addToMainDisplay,
  focusInput,
} from './reducer.js';

import RustyZ from './RustyZ.js';

// trying to deliberately do this without redux-observables

export function ZMachineConnector(props) {
  const [initialized, setInitialized] = useState(false);
  let {setLeftDisplay, setRightDisplay, addToMainDisplay, focusInput} = props;

  if (!initialized) {
    const observer = new Observable(subscriber => {
      RustyZ.subscribe(output => {
        subscriber.next(output);
      });
    });

    observer.subscribe(x => {
      switch (x.source) {
        case 'left': setLeftDisplay(x.content);
          break;
        case 'right': setRightDisplay(x.content);
          break;
        case 'main': addToMainDisplay(x.content);
          break;
        case 'input': focusInput();
          break;
      }
    });
  }

  return null;
}

ZMachineConnector.propTypes = {
  /**
  setLeftDisplay: PropTypes.function,
  setRightDisplay: PropTypes.function,
  addToMainDisplay: PropTypes.function,
  focusInput: PropTypes.function,
  **/
};

const mapDispatchToProps = {
  setLeftDisplay,
  setRightDisplay,
  addToMainDisplay,
  focusInput,
};

export default connect(null, mapDispatchToProps)(ZMachineConnector);
