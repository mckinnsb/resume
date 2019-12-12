// @flow
import type {
  Dimensions,
  ObjectPosition,
  Rectangle
} from "./types.js";

import React from 'react';
import PropTypes from 'prop-types';

import {Container, Text} from '@inlet/react-pixi';
import {TextStyle} from 'pixi.js';


// main display, not main class
type MainProps = Rectangle & {
  main: string,
}

const MainStyle = new TextStyle({
  fill: '#ffffff',
});

function getTextDimensions(size: Rectangle): ObjectPosition {
  let { height } = size;

  return {
    x: 0,
    y: height,
    anchor: [0, 1]
  }
}

function Main(props: MainProps) {
  const {main, x, y, height, width} = props;
  const size = {x, y, height, width};
  const pos = getTextDimensions(size);

  return (
    <Container {...size}>
      <Text {...pos} style={MainStyle} text={main} />
    </Container>
  );
}

Main.propTypes = {
  main: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
};

export default Main;
