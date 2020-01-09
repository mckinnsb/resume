import {getTextDimensions} from "./Main.js"

describe("getTextDimensions", () => {
  it("returns y + the height, along with x, and anchor 0,1", () => {
    let rect = {
      x: 1,
      y: 1,
      width: 5,
      height: 4,
    };

    let expected = {
      x: 1,
      y: 5,
      anchor: [0,1]
    }

    expect(getTextDimensions(rect)).toEqual(expected);
  });
});

