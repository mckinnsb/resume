// @flow
import type {Dimensions, Rectangle} from './common/types';

import React from 'react';
import {Graphics, Stage, Sprite} from '@inlet/react-pixi';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './reducer';

import {
  CRTFilterContainer,
  Header,
  Main,
  ZMachineConnector,
  KeyboardInput,
  FontFix,
} from './components';
import {drawScreen, useDimensions} from './common/utils';
import {DeadBlack} from './common/styles';

// unfortunately, firefox does not support SVGs on canvas
// unless they have explicit w/h set in the meta-attributes
//
// additionally it renders exactly like a PNG, anyway.

import frame from './images/monitor.svg';
import lamp from './images/desklamp.svg';

import './fonts/commodore.woff';
import './App.css';

const store = createStore(rootReducer);

// assumes you are giving it the inner frame
// this is similar to getInnerFrame
function getCRTBlackDimensions(size: Dimensions): Rectangle {
  let {width: frameWidth, height: frameHeight, x, y} = size;
  const scale = 1.05;

  let width = frameWidth * scale;
  let height = frameHeight * scale;
  //x -= (frameWidth - width) / 2;
  //y -= (frameHeight - height) / 2;

  return { height, width, x, y };
}

function getFrameDimensions(size: Dimensions): Rectangle {
  let {width, height} = size;
  let diff = Math.abs(width - height);

  let x = 0,
    y = 0;
  if (width > height) {
    x += diff / 2;
  } else {
    y += diff / 2;
  }

  width = height = Math.min(width, height);
  return {width, height, x, y};
}

function getHeaderDimensions(size: Rectangle): Rectangle {
  const {width, x, y} = size;

  // 26px is the default text size,
  //
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

  let font_size = 26;
  let top_padding = 4;

  return {
    x: x,
    y: y,
    width: width,
    height: font_size + top_padding,
  };
}

// this is highly dependent on the image we are using and there's
// no real way to autocalculate it; we scale based on expected aspect
// ratio and image w/h
//  right now:
//
//  tv frame width: 773px
//  tv frame height: 543px
//
//  this is roughly 10:7 aspect ratio
function getInnerFrame(size): Rectangle {
  let {width, height, x, y} = size;

  // these values are pulled from the image utility used to create the frame
  // we scale the offsets based on the ratio and pray its close
  return {
    x: 112 * (width / 800.0) + x,
    y: 120 * (height / 800.0) + y,
    width: 578 * (width / 800.0),
    height: 400 * (height / 800.0),
  };
}

function getMainDimensions(size: Rectangle): Rectangle {
  const {width, height, x, y} = size;

  let {height: header_height} = getHeaderDimensions(size);

  return {
    x: x,
    y: y + header_height,
    height: height,
    width: width,
  };
}

function getLampDimensions(size: Rectangle, scale: number): Rectangle {
  let {x, y, width, height: monitorHeight} = size;
  x = 0;
  let height = monitorHeight * scale;
  y += monitorHeight - height;
  width *= scale;

  return {x, y, width, height};
}

function getStageOptions() {
  return {
    // PixiJS is kinda interesting, it doesn't
    // take strings for color values, it only takes
    // literal hex values. Probably the only time
    // I've seen that in Js.
    backgroundColor: 0x000000,
  };
}

function App() {
  const [size, resizing] = useDimensions();

  let frame_size = getFrameDimensions(size);

  //  all of these are size relative to the monitor (frame size)
  let lamp_size = getLampDimensions(frame_size, 0.6);
  let inner_size = getInnerFrame(frame_size);
  let crt_black_size = getCRTBlackDimensions(inner_size);

  // these are sized relative to the "actual" game display (inner frame);
  let {x, y, width, height} = getHeaderDimensions(inner_size);
  const header = {x, y, width, height};

  ({x, y, width, height} = getMainDimensions(inner_size));
  const main = {x, y, width, height};

  let stage_options = getStageOptions();

  // Stage is strange in that it accepts an object
  // in "options", but doesn't expose all of those props
  // to the component (but as far as I'm aware, it could)
  return resizing ? null : (
    <Stage {...size} options={stage_options}>
      <Provider store={store}>
        {/* <Sprite image={lamp} anchor={(0, 0)} {...lamp_size} /> */}
        <CRTFilterContainer zIndex={1}>
          <Header {...header}></Header>
          <Main {...main}></Main>
          <ZMachineConnector />
          <KeyboardInput />
          <FontFix css="./App.css" font="Commodore" />
        </CRTFilterContainer>
        {/*<Graphics draw={g => drawScreen(g, DeadBlack, crt_black_size)} />*/}
        <Sprite image={frame} anchor={(0, 0)} {...frame_size} />
      </Provider>
    </Stage>
  );
}

export default App;
