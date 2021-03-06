// @flow
import type { ObjectPosition, Rectangle } from "../common/types";

import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { Container, Graphics, Text } from "@inlet/react-pixi";

import { fontSize, BrightGreen, BrightGreenText } from "../common/styles";

export function getLeftDimensions(size: Rectangle): ObjectPosition {
  return {
    x: 0,
    y: 0,
    anchor: [0, 0]
  };
}

export function getRightDimensions(size: Rectangle): ObjectPosition {
  let { width } = size;

  return {
    x: width,
    y: 0,
    anchor: [1, 0]
  };
}

type DisplayProps = {|
  left?: string,
  right?: string
|};

type HeaderProps = Rectangle & DisplayProps;
const HeaderText = BrightGreenText.clone();
HeaderText.fill = 0x000000;

// "g" is the PIXI.Graphics object, which is kind of a light weight wrapper
// around GL (hence clear/drawRect/beginFill) - i'm not going to type
// it because that would be a nightmare
//
// as it turns out, one hitch I don't like about this library is that when
// you ask TextStyle for colors, it will give you a hex string; the GL
// API expects literal hex values only, hence why I'm using them and exporting
// them directly

function drawTop(g, color, position: Rectangle) {
  g.beginFill(color, 1);
  let { x, y, width, height } = position;
  g.drawRect(x, y, width, height);
  g.endFill();
}

function Header(props: HeaderProps) {
  const { left, right, x, y, height, width } = props;

  const size = { x, y, height, width };
  const header_bar = { height, width };

  const leftDim = getLeftDimensions(header_bar);
  const rightDim = getRightDimensions(header_bar);
  HeaderText.fontSize = fontSize();

  return (
    <Container {...size}>
      <Graphics draw={g => drawTop(g, BrightGreen, header_bar)} />
      <Text {...leftDim} text={left} style={HeaderText} />
      <Text {...rightDim} text={right} style={HeaderText} />
    </Container>
  );
}

Header.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,

  height: PropTypes.number,
  width: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number
};

function mapStateToProps({ display }): DisplayProps {
  let { left, right } = display;
  return { left, right };
}

export default connect(mapStateToProps)(Header);
