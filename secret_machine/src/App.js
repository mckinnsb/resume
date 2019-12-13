// @flow
import type {Dimensions, Rectangle} from './types.js';

import React, {useState} from 'react';
import './App.css';
import {Container, Stage, withFilters} from '@inlet/react-pixi';
import {CRTFilter} from 'pixi-filters';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './reducer.js';

import Header from './Header.js';
import Main from './Main.js';
import ZMachineConnector from './ZMachineConnector.js';

const store = createStore(rootReducer);

function getDimensions(): Dimensions {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function useDimensions() {
  const [dimensions] = useState(getDimensions());

  return dimensions;
}

function getHeaderDimensions(size): Rectangle {
  const {width, height} = size;

  const getHeight = height => {
    return parseInt(height * 0.1, 10);
  };

  return {
    x: 0,
    y: 0,
    width: width,
    height: getHeight(height),
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

const CRTFilterContainer = withFilters(Container, [CRTFilter]);

function App() {
  const size = useDimensions();
  let {x, y, width, height} = getHeaderDimensions(size);
  const header = {x, y, width, height};

  ({x, y, width, height} = getMainDimensions(size));
  const main = {x, y, width, height};

  return (
    <Stage {...size}>
      <Provider store={store}>
        <CRTFilterContainer vignettingAlpha={0.5} noise={0.5}>
          <Header {...header}></Header>
          <Main {...main}></Main>
          <ZMachineConnector/>
        </CRTFilterContainer>
      </Provider>
    </Stage>
  );
}

export default App;
