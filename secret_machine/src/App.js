import React from 'react';
import './App.css';
import { Stage } from '@inlet/react-pixi';

import Header from './Header.js';
import Main from './Main.js';

function App() {
  return (
    <Stage>
      <Header left="left" right="right"></Header>
      <Main main="main"></Main>
    </Stage>
  );
}

export default App;
