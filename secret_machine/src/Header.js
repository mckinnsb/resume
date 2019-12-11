import React from 'react';
import { Container, Text } from '@inlet/react-pixi';
import PropTypes from 'prop-types';

function Header(props) {

  let { left, right } = props;

  return (
    <Container>
      <Text text={left}/>
      <Text text={right}/>
    </Container>
  );
}

Header.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,
}

export default Header;
