// @flow
import type {Dimensions, Rectangle} from './types.js';

import React from 'react';
import {Stage, Sprite} from '@inlet/react-pixi';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './reducer.js';

import CRTFilterContainer from './CRTContainer.js';
import Header from './Header.js';
import Main from './Main.js';
import ZMachineConnector from './ZMachineConnector.js';
import KeyboardInput from './KeyboardInput.js';

import {useDimensions} from './utils.js';

// unfortunately, firefox does not support SVGs on canvas
// unless they have explicit w/h set in the meta-attributes
//
// additionally it renders exactly like a PNG, anyway.

import frame from './trial.png';
import './App.css';

const store = createStore(rootReducer);

function getFrameDimensions(size: Dimensions): Rectangle {
  let {width, height} = size;
  return {width, height, x: 0, y: 0};
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
//  width: 773px
//  height: 543px
//
//  this is roughly 10:7 aspect ratio
function getInnerFrame(size): Rectangle {
  let {width, height} = size;

  return {
    x: 44 * (width / 773.0),
    y: 44 * (height / 543.0),
    width: 450 * (width / 773.0),
    height: 310 * (height / 543.0),
  }
}

function getMainDimensions(size: Rectangle): Rectangle {
  const {width, height, x, y} = size;

  let {height: header_height} = getHeaderDimensions(size);

  return {
    x: x,
    y: y + header_height / 2,
    height: height,
    width: width,
  };
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
  const size = useDimensions();
  let frame_size = getFrameDimensions(size);
  let inner_size = getInnerFrame(frame_size);

  let {x, y, width, height} = getHeaderDimensions(inner_size);
  const header = {x, y, width, height};

  ({x, y, width, height} = getMainDimensions(inner_size));
  const main = {x, y, width, height};

  let stage_options = getStageOptions();

  // Stage is also kinda strange in that it accepts an object
  // in "options", but doesn't expose all of those props
  // to the component (but as far as I'm aware, it could)
  return (
    <Stage {...size} options={stage_options}>
      <Provider store={store}>
        <Sprite
          image={frame}
          anchor={(0, 0)}
          height={frame_size.height}
          width={frame_size.width}
          zIndex={2}
        />
        <CRTFilterContainer zIndex={1}>
          <Header {...header}></Header>
          <Main {...main}></Main>
          <ZMachineConnector />
          <KeyboardInput />
        </CRTFilterContainer>
      </Provider>
    </Stage>
  );
}

export default App;
