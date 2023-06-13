import { findMissing, findDiff } from "./findMissing.js";

describe("findDiff function", () => {
  it("should return difference between first and last number divided by length of array", () => {
    const mockNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
    expect(findDiff(mockNumbers)).toEqual(1);

    const mockNumbers2 = [1, 3, 5, 9, 11];
    expect(findDiff(mockNumbers2)).toEqual(2);
  });
});

describe("findMissing function", () => {
  it("should return missing number", () => {
    const mockNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
    expect(findMissing(mockNumbers)).toEqual(9);

    const mockNumbers2 = [1, 3, 5, 9, 11];
    expect(findMissing(mockNumbers2)).toEqual(7);
  });
});
