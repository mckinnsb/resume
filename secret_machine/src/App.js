// @flow
import type { Dimensions, Rectangle } from "./common/types";

import React from "react";
import { Graphics, Stage, Sprite } from "@inlet/react-pixi";

import { isMobile } from "react-device-detect";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducer";

import {
  CRTFilterContainer,
  Header,
  Main,
  ZMachineConnector,
  KeyboardInput,
  FontFix
} from "./components";

import styled from "styled-components";

import { drawScreen, useDimensions } from "./common/utils";
import { fontSize, DeadBlack, SeventiesBrown } from "./common/styles";

// unfortunately, firefox does not support SVGs on canvas
// unless they have explicit w/h set in the meta-attributes
//
// additionally it renders exactly like a PNG, anyway.

import frame from "./images/monitor.svg";
// import lamp from './images/desklamp.svg';
import wood from "./images/background.jpg";

import "./fonts/commodore.woff";
import "./App.css";

const store = createStore(rootReducer);

// these are the units for the outer/inner height
// based on the image, basically the smallest "good" display size
// is used and then we roughly size the whole image (outer) and the
// size of the display area (inner)
const INNER_WIDTH = 578.0;
const INNER_HEIGHT = 400.0;

const OUTER_WIDTH = 800.0;
const OUTER_HEIGHT = 800.0;

const TABLE_SIZE = 20.0;

const Body = styled.div`
  position: absolute;
`;

function getBackdropDimensions(size: Dimensions): Rectangle {
  let { width, height: totalHeight } = size;
  let { height: monitorHeight } = getFrameDimensions(size);

  let x = 0,
    y = 0;
  let diff = (totalHeight - monitorHeight) / 2;
  let height = monitorHeight + diff;

  return { x, y, height, width };
}

// assumes you are giving it the crt frame dimensions
function getCRTBlackDimensions(size: Dimensions): Rectangle {
  let { width: frameWidth, height: frameHeight, x, y } = size;
  const padding = isMobile ? 80 : 162;

  let width = frameWidth + padding;
  let height = frameHeight + padding;

  x -= (width - frameWidth) / 2.0;
  y -= (height - frameHeight) / 2.0;

  return { width, height, x, y };
}

function getFrameDimensions(size: Dimensions): Rectangle {
  let { width, height } = size;
  let diff = Math.abs(width - height);

  let x = 0,
    y = 0;
  if (width > height) {
    x += diff / 2;
  } else {
    y += diff / 2;
  }

  width = height = Math.min(width, height);
  return { width, height, x, y };
}

function getHeaderDimensions(size: Rectangle): Rectangle {
  const { width, x, y } = size;

  // Unlike web browsers, games and graphics engines have a strict 1-1 relationship
  // between "text size" and area taken by the font including top padding.
  //
  // In other words, game engines don't consider "bottom padding" to be part of the line.
  //
  // So web browsers: text size is size from baseline to topline of capital letters,
  // this is what designers like.
  //
  // Games: text size is size from baseline to "top of line", including spacing,
  // such that if there were another text line above it, it would be the distance
  // between baselines. This is what developers like.

  let font_size = fontSize();
  let top_padding = 4;

  return {
    x: x,
    y: y,
    width: width,
    height: font_size + top_padding
  };
}

// this is highly dependent on the image we are using and there's
// no real way to autocalculate it; we scale based on expected aspect
// ratio and image w/h
function getInnerFrame(size): Rectangle {
  let { width, height, x, y } = size;

  // these values are pulled from the image utility used to create the frame
  // we scale the offsets based on the ratio and pray its near exact (it usually is very close)
  return {
    x: 112 * (width / OUTER_WIDTH) + x,
    y: 120 * (height / OUTER_HEIGHT) + y,
    width: INNER_WIDTH * (width / OUTER_WIDTH),
    height: INNER_HEIGHT * (height / OUTER_HEIGHT)
  };
}

function getMainDimensions(size: Rectangle): Rectangle {
  const { width, height, x, y } = size;

  let { height: header_height } = getHeaderDimensions(size);

  return {
    x: x,
    y: y + header_height,
    height: height - header_height,
    width: width
  };
}

/**
function getLampDimensions(size: Rectangle, scale: number): Rectangle {
  let {x, y, width, height: monitorHeight} = size;
  x = 0;
  let height = monitorHeight * scale;
  y += monitorHeight - height;
  width *= scale;

  return {x, y, width, height};
}
**/

function getStageOptions() {
  return {
    // PixiJS is kinda interesting, it doesn't
    // take strings for color values, it only takes
    // literal hex values. Probably the only time
    // I've seen that in Js.
    backgroundColor: 0x000000
  };
}

function getTableSize(background: Dimensions, view: Dimensions) {
  let { width, height, y: offset } = background;

  let y = offset + height;

  return {
    y,
    x: 0,
    height: TABLE_SIZE * (view.height / OUTER_HEIGHT),
    width
  };
}

function App() {
  const [size, resizing] = useDimensions();

  // all of these are relative to the full size window
  let frame_size = getFrameDimensions(size);
  let backdrop_size = getBackdropDimensions(size);

  // we calculate this from the backdrop, and the total size
  let table_size = getTableSize(backdrop_size, size);

  //  all of these are size relative to the monitor (frame size)
  //  let lamp_size = getLampDimensions(frame_size, 0.6);
  let inner_size = getInnerFrame(frame_size);

  // these are sized relative to the "actual" game display (inner frame);
  let crt_black_size = getCRTBlackDimensions(inner_size);
  let { x, y, width, height } = getHeaderDimensions(inner_size);
  const header = { x, y, width, height };

  ({ x, y, width, height } = getMainDimensions(inner_size));
  const main = { x, y, width, height };

  let stage_options = getStageOptions();

  // Stage is strange in that it accepts an object
  // in "options", but doesn't expose all of those props
  // to the component (but as far as I'm aware, it could)
  return resizing ? null : (
    <Body>
      <Stage {...size} options={stage_options}>
        <Provider store={store}>
          <Sprite image={wood} anchor={(0, 0)} {...backdrop_size} />
          <Graphics draw={g => drawScreen(g, DeadBlack, crt_black_size)} />
          <Graphics draw={g => drawScreen(g, SeventiesBrown, table_size)} />
          <CRTFilterContainer zIndex={1}>
            <Header {...header}></Header>
            <Main {...main}></Main>
            <ZMachineConnector />
            <FontFix css="./App.css" font="Commodore" />
          </CRTFilterContainer>
          <Sprite image={frame} anchor={(0, 0)} {...frame_size} />
        </Provider>
      </Stage>
      <Provider store={store}>
        <KeyboardInput />
      </Provider>
    </Body>
  );
}

export default App;
