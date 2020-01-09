// @flow
import type { ObjectPosition, Rectangle } from "../common/types";

import React, { useRef } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Container, Graphics, Text } from "@inlet/react-pixi";

import { ScreenBlack, BrightGreenText } from "../common/styles";

// main display, not main class
type MainProps = Rectangle & {
  main?: string
};

export function getTextDimensions(size: Rectangle): ObjectPosition {
  let { height, x, y } = size;

  return {
    x: x,
    y: y + height,
    anchor: [0, 1]
  };
}

type DisplayProps = {
  main?: string
};

function drawScreen(g, color, position: Rectangle) {
  g.beginFill(color, 1);
  let { x, y, width, height } = position;
  g.drawRect(x, y, width, height);
  g.endFill();
}

const MainText = BrightGreenText.clone();

export function Main(props: MainProps) {
  const { main, x, y, height, width } = props;
  const size = { x, y, height, width };
  const pos = getTextDimensions(size);
  const mask = useRef();

  MainText.wordWrap = true;
  MainText.wordWrapWidth = width;

  return (
    <Container {...size}>
      <Graphics
        draw={g => drawScreen(g, ScreenBlack, { x, y, height, width })}
      />
      <Graphics
        draw={g => drawScreen(g, ScreenBlack, { x, y, height, width })}
        ref={mask}
      />
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
