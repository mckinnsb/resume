import { KeyboardInput, isDelete, isEnter, isText } from "./utils";

describe("isDelete", () => {
  it("returns true if e.key is 'Backspace'", () => {
    expect(isDelete({ key: "Backspace" })).toBeTruthy();
  });

  it("returns true if e.key is 'Delete'", () => {
    expect(isDelete({ key: "Delete" })).toBeTruthy();
  });

  it("returns false if e.key is anything else", () => {
    expect(isDelete({ key: "Enter" })).toBeFalsy();
  });
});

describe("isEnter", () => {
  it("returns true if e.key is 'Enter'", () => {
    expect(isEnter({ key: "Enter" })).toBeTruthy();
  });

  it("returns false if e.key is anything else", () => {
    expect(isEnter({ key: "Backspace" })).toBeFalsy();
  });
});

describe("isText", () => {
  // any word character or any whitespace character (any printable char basically)
  it("returns true if e.keyCode produces a char that matches \\w or \\s", () => {
    // 1
    expect(isText({ keyCode: 49 })).toBeTruthy();
    // Z
    expect(isText({ keyCode: 90 })).toBeTruthy();
  });

  it("returns false if e.key is anything else", () => {
    // alt key
    expect(isText({ keyCode: 18 })).toBeFalsy();
  });
});
