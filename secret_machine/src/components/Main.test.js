import { getTextDimensions } from "./Main.js";

describe("getTextDimensions", () => {
  it("returns x = 0, y = the height, along with anchor 0,1", () => {
    let rect = {
      x: 1,
      y: 1,
      width: 5,
      height: 4
    };

    let expected = {
      x: 0,
      y: 4,
      anchor: [0, 1]
    };

    expect(getTextDimensions(rect)).toEqual(expected);
  });
});
