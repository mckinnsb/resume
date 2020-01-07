// @flow
import type { Dimensions } from "./types.js";
import { useEffect, useRef, useState } from "react";

// import {useApp} from "@inlet/react-pixi";
import {debounce} from 'underscore';

function getDimensions(): Dimensions {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

export function useDimensions(): Dimensions {
  const [dimensions, setDimensions] = useState(getDimensions());
  const [resizing, setResizing] = useState(false);

  useEffect(() => {
    let debouncedResize = () => {
      let dimensions = getDimensions();
      setDimensions(dimensions);
      setResizing(false);
    };

    debouncedResize = debounce(debouncedResize, 250);
    window.addEventListener('resize', debouncedResize);

    let onResize = () => {
      setResizing(true);
    }
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener(onResize);
      window.removeEventListener(debouncedResize);
    }
  }, [])

  return [dimensions, resizing];
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
