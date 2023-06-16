import { findStraightTriples } from "./tripledouble";

describe("findStraightTriples function", () => {
  it("should return an array of triple numbers", () => {
    const mockString = "111234";
    expect(findStraightTriples(mockString)).toEqual([111]);
  });
  it("should return empty array for not valid numbers", () => {
    const mockString = "1123466";
    expect(findStraightTriples(mockString)).toEqual([]);
  });
  it("should return an array of multiple triple numbers", () => {
    const mockString = "11125555534444";
    expect(findStraightTriples(mockString)).toEqual([111, 555, 444]);
  });
});
