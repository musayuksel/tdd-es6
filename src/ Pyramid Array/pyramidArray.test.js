import { createSubArray, pyramid } from "./pyramidArray";

describe("createSubArray function", () => {
  it("should return array with number of length and filled with ones", () => {
    let mockNumber = 1;
    expect(createSubArray(mockNumber)).toEqual([1]);

    mockNumber = 4;
    expect(createSubArray(mockNumber)).toEqual([1, 1, 1, 1]);
  });
});

describe("pyramid function", () => {
  it("should return pyramid array", () => {
    let mockNumber = 1;
    expect(pyramid(mockNumber)).toEqual([[1]]);

    mockNumber = 4;
    expect(pyramid(mockNumber)).toEqual([[1], [1, 1], [1, 1, 1], [1, 1, 1, 1]]);

    mockNumber = 0;
    expect(pyramid(mockNumber)).toEqual([]);
  });
});
