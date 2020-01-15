import { getLeftDimensions, getRightDimensions } from "./Header.js";

describe("getRightDimensions", () => {
  it("returns x = width, along with y = 0, and anchor 1,0", () => {
    let rect = {
      x: 1,
      y: 1,
      width: 5,
      height: 4
    };

    let expected = {
      x: 5,
      y: 0,
      anchor: [1, 0]
    };

    expect(getRightDimensions(rect)).toEqual(expected);
  });
});

describe("getLeftDimensions", () => {
  it("returns 0, 0, along with anchor 0, 0", () => {
    let rect = {
      x: 1,
      y: 1,
      width: 5,
      height: 4
    };

    let expected = {
      x: 0,
      y: 0,
      anchor: [0, 0]
    };

    expect(getLeftDimensions(rect)).toEqual(expected);
  });
});
