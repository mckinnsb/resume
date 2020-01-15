// @flow
import type { Dimensions } from "./types";
import { useEffect, useRef, useState } from "react";

// import {useApp} from "@inlet/react-pixi";
import { debounce } from "underscore";

export function drawScreen(g, color, position: Rectangle) {
  g.beginFill(color, 1);
  let { x, y, width, height } = position;
  g.drawRect(x, y, width, height);
  g.endFill();
}

export function getDimensions(): Dimensions {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

export function isDelete(e: KeyboardEvent) {
  return e.key === "Backspace" || e.key === "Delete";
}

export function isEnter(e: KeyboardEvent) {
  return e.key === "Enter";
}

export function isText(e: KeyboardEvent) {
  return Boolean(String.fromCharCode(e.keyCode).match(/(\w|\s)/g));
}

export function useDimensions(): [Dimensions, boolean] {
  const [dimensions, setDimensions] = useState(getDimensions());
  const [resizing, setResizing] = useState(false);

  useEffect(() => {
    let debouncedResize = () => {
      let dimensions = getDimensions();
      setDimensions(dimensions);
      setResizing(false);
    };

    debouncedResize = debounce(debouncedResize, 250);
    window.addEventListener("resize", debouncedResize);

    let onResize = () => {
      setResizing(true);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

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
