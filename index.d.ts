declare namespace ieee754 {
    export function read(
        buffer: ArrayLike<number>, offset: number, isLE: boolean, mLen: number,
        nBytes: number): number;
    export function write(
        buffer: ArrayLike<number>, value: number, offset: number, isLE: boolean,
        mLen: number, nBytes: number): void;
  }

  export = ieee754;
