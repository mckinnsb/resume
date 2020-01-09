import React from 'react';
import {act} from 'react-dom/test-utils';
import {mount, shallow} from 'enzyme';
import {
  KeyboardInput,
  getDimensions,
  isDelete,
  isEnter,
  isText,
  useDimensions,
  useFrameTime,
} from './utils';

describe('getDimensions', () => {
  it('gets window inner width and height', () => {
    let width, height;
    width = height = 20;

    window.innerWidth = width;
    window.innerHeight = height;
    expect(getDimensions()).toEqual({width, height});
  });
});

describe('isDelete', () => {
  it("returns true if e.key is 'Backspace'", () => {
    expect(isDelete({key: 'Backspace'})).toBeTruthy();
  });

  it("returns true if e.key is 'Delete'", () => {
    expect(isDelete({key: 'Delete'})).toBeTruthy();
  });

  it('returns false if e.key is anything else', () => {
    expect(isDelete({key: 'Enter'})).toBeFalsy();
  });
});

describe('isEnter', () => {
  it("returns true if e.key is 'Enter'", () => {
    expect(isEnter({key: 'Enter'})).toBeTruthy();
  });

  it('returns false if e.key is anything else', () => {
    expect(isEnter({key: 'Backspace'})).toBeFalsy();
  });
});

describe('isText', () => {
  // any word character or any whitespace character (any printable char basically)
  it('returns true if e.keyCode produces a char that matches \\w or \\s', () => {
    // 1
    expect(isText({keyCode: 49})).toBeTruthy();
    // Z
    expect(isText({keyCode: 90})).toBeTruthy();
  });

  it('returns false if e.key is anything else', () => {
    // alt key
    expect(isText({keyCode: 18})).toBeFalsy();
  });
});

describe('useFrameTime', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns the current frametime', () => {
    let drawFn;

    jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation(fn => (drawFn = fn));

    let count = 0;

    function MockComponent() {
      count = useFrameTime();
      return null;
    }

    mount(<MockComponent />);

    act(() => {
      drawFn();
    });

    expect(count).toEqual(1);
  });
});

describe('useDimensions', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns the current dimensions and if it is resizing', () => {
    // im not going to mock this, otherwise i would have to partially mock
    let width, height;
    width = height = 10;
    window.innerWidth = width;
    window.innerHeight = height;

    let dimensions, resizing;

    function MockComponent() {
      [dimensions, resizing] = useDimensions();
      return null;
    }

    shallow(<MockComponent />);
    expect(dimensions).toEqual({ width: 10, height: 10 });
    expect(resizing).toEqual(false);
  });

  it('sets resizing when resizing', () => {
    let dimensions, resizing;

    function MockComponent() {
      [dimensions, resizing] = useDimensions();
      return null;
    }

    mount(<MockComponent />);

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    expect(resizing).toBeTruthy();
  });

  it('sets dimensions when resizing', () => {
    let dimensions, resizing;

    let width, height;
    width = height = 70;
    window.innerWidth = width;
    window.innerHeight = height;

    function MockComponent() {
      [dimensions, resizing] = useDimensions();
      return null;
    }

    mount(<MockComponent />);

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    expect(dimensions).toEqual({width, height});
  });
});
