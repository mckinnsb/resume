import React, {useEffect, useRef, useState} from 'react';

function getDimensions(): Dimensions {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function useDimensions() {
  const [dimensions] = useState(getDimensions());

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
