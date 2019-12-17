// @flow
import type {Rectangle} from './types.js';

import React from 'react';
import './App.css';
import {Stage} from '@inlet/react-pixi';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './reducer.js';
import {useDimensions, useFrameTime} from './utils.js';

import {CRTFilterContainer, getCRTEffects} from './CRTContainer.js'
import Header from './Header.js';
import Main from './Main.js';
import ZMachineConnector from './ZMachineConnector.js';
import KeyboardInput from './KeyboardInput.js';

const store = createStore(rootReducer);

function getHeaderDimensions(size): Rectangle {
  const {width, height} = size;

  return {
    x: 0,
    y: 0,
    width: width,
    height: height,
  };
}

function getMainDimensions(size): Rectangle {
  const {width, height} = size;

  const getHeight = (height, headerHeight) => {
    return height - headerHeight;
  };

  let {height: headerHeight} = getHeaderDimensions(size);

  return {
    x: 0,
    y: headerHeight,
    height: getHeight(height, headerHeight),
    width: width,
  };
}

function getStageOptions() {
  return {
    // PixiJS is kinda interesting, it doesn't
    // take strings for color values, it only takes
    // literal hex values. Probably the only time
    // I've seen that in Js.
    backgroundColor: 0x272727
  }
}

function App() {
  const size = useDimensions();
  let {width} = size;

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
  let dims = getHeaderDimensions({width, height: font_size + top_padding});
  ({width} = dims);
  let {x, y, height} = dims;
  const header = {x, y, width, height};

  ({x, y, width, height} = getMainDimensions(size));
  const main = {x, y, width, height};

  let time = useFrameTime() / 2.71;

  let crtEffects = getCRTEffects(time);
  let stageOptions = getStageOptions();

  // Stage is also kinda strange in that it accepts an object
  // in "options", but doesn't expose all of those props
  // to the component (but as far as I'm aware, it could)
  return (
    <Stage {...size} options={stageOptions} >
      <Provider store={store}>
        <CRTFilterContainer {...crtEffects}>
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
