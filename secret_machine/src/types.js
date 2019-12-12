// @flow
//
// usually i'd split this up by module but it's a lil small now

export type Dimensions = {
  height: number,
  width: number
};

export type Position = {
  x: number,
  y: number
}

export type Rectangle = Dimensions & Position;

export type ObjectPosition = Position & {
  anchor: number | [number, number]
}

