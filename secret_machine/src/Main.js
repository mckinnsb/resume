import React from 'react';
import { Text } from '@inlet/react-pixi';
import PropTypes from 'prop-types';

// main display, not main class

function Main(props) {
  let { main } = props;

  return (
    <Text text={main}/>
  );
}

Main.propTypes = {
  main: PropTypes.string,
}

export default Main;
