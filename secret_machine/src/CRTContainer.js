import React from 'react';
import {Container, withFilters} from '@inlet/react-pixi';
import {CRTFilter} from 'pixi-filters';

import {useFrameTime} from './utils.js';

function getCRTEffects(time: number) {
  return {
    vignettingAlpha: 0.5,
    noise: 0.1,
    noiseSize: 3.3,
    seed: Math.random(),
    time: time,
    lineWidth: 5,
    lineContrast: 0.05,
    animating: true,
  };
}

const CRTFilterContainer = withFilters(Container, [CRTFilter]);

export default function CRTContainer (props) {
  let time = useFrameTime() / 2.71;
  let effects = getCRTEffects(time);

  return (
    <CRTFilterContainer {...effects} {...props} />
  )
}
