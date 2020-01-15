import { TextStyle } from "pixi.js";
import { isMobile } from "react-device-detect";

const MOBILE_SIZE = 11;
const DESKTOP_SIZE = 24;

export const BrightGreen = isMobile ? 0xFFFFFF : 0x7c71da;

export const BrightGreenText = new TextStyle({
  fill: BrightGreen,
  fontFamily: "Commodore"
});

export const fontSize = () => {
  return isMobile ? MOBILE_SIZE : DESKTOP_SIZE;
};

export const ScreenBlack = isMobile ? 0x383838 : 0x3e32a2;
export const DeadBlack = 0x272727;
export const SeventiesBrown = 0x643e29;
