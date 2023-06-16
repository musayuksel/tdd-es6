import { findStraightTriples } from "./tripledouble";

describe("findStraightTriples function", () => {
  it("should return an array of triple numbers", () => {
    const mockString = "111234";
    expect(findStraightTriples(mockString)).toEqual([111]);
  });
});
