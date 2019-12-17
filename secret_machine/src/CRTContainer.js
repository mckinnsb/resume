import {Container, withFilters} from '@inlet/react-pixi';
import {CRTFilter} from 'pixi-filters';

export function getCRTEffects(time: number) {
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

export const CRTFilterContainer = withFilters(Container, [CRTFilter]);
