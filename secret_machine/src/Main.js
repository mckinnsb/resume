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
  let {height, x, y} = size;

  return {
    x: x,
    y: y + height,
    anchor: [0, 1],
  };
}

type DisplayProps = {
  main?: string,
};

const MainText = BrightGreenText.clone();

export function Main(props: MainProps) {
  const {main, x, y, height, width} = props;
  const size = {x, y, height, width};
  const pos = getTextDimensions(size);

  MainText.wordWrap = true;
  MainText.wordWrapWidth = width;

  return (
    <Container {...size}>
      <Text {...pos} style={MainText} text={main} />
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
