// @flow
import type {Dimensions} from './types.js';
import {useEffect, useRef, useState} from 'react';

function getDimensions(): Dimensions {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function useDimensions(): Dimensions {
  const [dimensions] = useState(getDimensions());

  /**
  useEffect(() => {
    let onResize = () => {
      setDimensions(getDimensions());
    };

    onResize = debounce(onResize, 250);
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener(onResize);
  }, [])
  **/

  return dimensions;
}

export function useFrameTime() {
  let [time, setTime] = useState(0);

  let cb = useRef(0);

  useEffect(() => {
    let draw = _ => {
      setTime(t => t + 1);
      cb.current = window.requestAnimationFrame(draw);
    };

    cb.current = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(cb.current);
    };
  }, []);

  return time;
}
