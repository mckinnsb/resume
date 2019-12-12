// @flow
import type { Dimensions, Rectangle } from "./types.js";

import React, {useState} from 'react';
import './App.css';
import {Stage} from '@inlet/react-pixi';

import Header from './Header.js';
import Main from './Main.js';


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

function getHeaderDimensions(size) : Rectangle {
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

function getMainDimensions(size) : Rectangle {
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

function App() {
  const size = useDimensions();
  let { x, y, width, height } = getHeaderDimensions(size);
  const header = { x, y, width, height };

  ({ x, y, width, height } = getMainDimensions(size));
  const main = { x, y, width, height };

  return (
    <Stage {...size}>
      <Header left="left" right="right" {...header} ></Header>
      <Main main="main" {...main} ></Main>
    </Stage>
  );
}

export default App;
