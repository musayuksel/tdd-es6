import { createSubArray } from "./pyramidArray";

describe("createSubArray function", () => {
  it("should return array with number of length and filled with ones", () => {
    const mockNumber = 4;
    expect(createSubArray(mockNumber)).toEqual([1, 1, 1, 1]);
  });
});
