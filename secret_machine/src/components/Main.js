// @flow
import type { ObjectPosition, Rectangle } from "../common/types";

import React, { useRef } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Container, Graphics, Text } from "@inlet/react-pixi";

import { fontSize, ScreenBlack, BrightGreenText } from "../common/styles";
import { drawScreen } from "../common/utils";

// main display, not main class
type MainProps = Rectangle & {
  main?: string
};

export function getTextDimensions(size: Rectangle): ObjectPosition {
  let { height } = size;

  return {
    x: 0,
    y: height,
    anchor: [0, 1]
  };
}

type DisplayProps = {
  main?: string
};

const MainText = BrightGreenText.clone();

export function Main(props: MainProps) {
  const { main, x, y, height, width } = props;
  const size = { x, y, height, width };
  const main_area = { height, width };

  const pos = getTextDimensions(main_area);
  const mask = useRef();

  MainText.wordWrap = true;
  MainText.wordWrapWidth = width;

  MainText.fontSize = fontSize();

  return (
    <Container {...size}>
      <Graphics draw={g => drawScreen(g, ScreenBlack, main_area)} />
      <Graphics draw={g => drawScreen(g, ScreenBlack, main_area)} ref={mask} />
      <Text {...pos} style={MainText} text={main} mask={mask.current} />
    </Container>
  );
}

Main.propTypes = {
  main: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number
};

function mapStateToProps({ display }): DisplayProps {
  let { main } = display;
  return { main };
}

export default connect(mapStateToProps)(Main);
