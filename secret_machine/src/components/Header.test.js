import {getLeftDimensions, getRightDimensions} from "./Header.js"

describe("getRightDimensions", () => {
  it("returns x + the width, along with y, and anchor 1,0", () => {
    let rect = {
      x: 1,
      y: 1,
      width: 5,
      height: 4,
    };

    let expected = {
      x: 6,
      y: 1,
      anchor: [1,0]
    }

    expect(getRightDimensions(rect)).toEqual(expected);
  });
});

describe("getLeftDimensions", () => {
  it("returns x, along with y, and anchor 0,0", () => {
    let rect = {
      x: 1,
      y: 1,
      width: 5,
      height: 4,
    };

    let expected = {
      x: 1,
      y: 1,
      anchor: [0,0]
    }

    expect(getLeftDimensions(rect)).toEqual(expected);
  });
});
