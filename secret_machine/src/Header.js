// @flow
import type {ObjectPosition, Rectangle} from './types.js';

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {Container, Text} from '@inlet/react-pixi';

import {BrightGreenText} from './styles.js';

function getLeftDimensions(size: Rectangle): ObjectPosition {
  return {
    x: 0,
    y: 0,
    anchor: [0, 0],
  };
}

function getRightDimensions(size: Rectangle): ObjectPosition {
  let {width} = size;

  return {
    x: width,
    y: 0,
    anchor: [1, 0],
  };
}

type DisplayProps = {
  left?: string,
  right?: string,
};

type HeaderProps = Rectangle & DisplayProps;

function Header(props: HeaderProps) {
  const {left, right, x, y, height, width} = props;

  let size = {x, y, height, width};

  const leftDim = getLeftDimensions(size);
  const rightDim = getRightDimensions(size);

  return (
    <Container {...size}>
      <Text {...leftDim} text={left} style={BrightGreenText} />
      <Text {...rightDim} text={right} style={BrightGreenText} />
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

function mapStateToProps({display}): DisplayProps {
  let {left, right} = display;
  return {left, right};
}

export default connect(mapStateToProps)(Header);
