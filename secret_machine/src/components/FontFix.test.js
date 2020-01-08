import React from "react";
import { shallow } from "enzyme";
import { FontFix } from "./FontFix";
import WebFont from "webfontloader";

describe("<FontFix />", () => {
  describe("WebFont integration", () => {
    let fontSpy, stateSpy;

    beforeEach(() => {
      fontSpy = jest.spyOn(WebFont, "load");
      stateSpy = jest.spyOn(React, "useState");
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("calls load when not initialized and sets initialized to false", () => {
      let result = true;
      let setFn = x => (result = x);

      stateSpy.mockImplementation(() => [false, setFn]);
      const fontFix = shallow(<FontFix />);

      expect(fontSpy).toHaveBeenCalled();
    });

    it("does not call load when initialized and does not call the setter", () => {
      let setter = jest.fn();
      stateSpy.mockImplementation(() => [true, setter]);
      const fontFix = shallow(<FontFix />);

      expect(fontSpy).not.toHaveBeenCalled();
      expect(setter).not.toHaveBeenCalled();
    });
  });
});
