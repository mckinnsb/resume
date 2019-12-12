// @flow
import type { Dimensions, Rectangle } from "./types.js";

import React from 'react';
import {Text} from '@inlet/react-pixi';
import PropTypes from 'prop-types';

// main display, not main class
type MainProps = Rectangle & {
  main: string,
}

function Main(props: MainProps) {
  const {main, ...size} = props;

  return <Text {...size} text={main} />;
}

Main.propTypes = {
  main: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
};

export default Main;
