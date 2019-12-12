// @flow
import type {ObjectPosition, Rectangle} from './types.js';

import React from 'react';
import PropTypes from 'prop-types';

import {Container, Text} from '@inlet/react-pixi';
import {TextStyle} from 'pixi.js';


const HeaderStyle = new TextStyle({
  fill: '#ffffff',
});

function getLeftDimensions(size: Rectangle): ObjectPosition {
  return {
    x: 0,
    y: 0,
    anchor: [0, 0]
  };
}

function getRightDimensions(size: Rectangle): ObjectPosition {
  let { width } = size;

  return {
    x: width,
    y: 0,
    anchor: [1, 0]
  };
}

type HeaderProps = {
  ...Rectangle,
  left: string,
  right: string,
};

function Header(props: HeaderProps) {
  const {left, right, ...size} = props;

  const leftDim = getLeftDimensions(size);
  const rightDim = getRightDimensions(size);

  return (
    <Container {...size}>
      <Text {...leftDim} text={left} style={HeaderStyle} />
      <Text {...rightDim} text={right} style={HeaderStyle} />
    </Container>
  );
}

Header.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,

  height: PropTypes.number,
  width: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
};

export default Header;
