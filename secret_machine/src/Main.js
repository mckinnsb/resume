// @flow
import type {ObjectPosition, Rectangle} from './types.js';

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {Container, Text} from '@inlet/react-pixi';

import {BrightGreenText} from './styles.js';

// main display, not main class
type MainProps = Rectangle & {
  main?: string,
};

function getTextDimensions(size: Rectangle): ObjectPosition {
  let {height} = size;

  return {
    x: 0,
    y: height,
    anchor: [0, 1],
  };
}

type DisplayProps = {
  main?: string,
};

export function Main(props: MainProps) {
  const {main, x, y, height, width} = props;
  const size = {x, y, height, width};
  const pos = getTextDimensions(size);

  return (
    <Container {...size}>
      <Text {...pos} style={BrightGreenText} text={main} />
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

function mapStateToProps({display}): DisplayProps {
  let {main} = display;
  return {main};
}

export default connect(mapStateToProps)(Main);
