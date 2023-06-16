import {
  findStraightDoubles,
  findStraightTriples,
  tripledouble,
} from "./tripledouble";

describe("findStraightTriples function", () => {
  it("should return an array of triple numbers", () => {
    const mockString = "111234";
    expect(findStraightTriples(mockString)).toEqual(["111"]);
  });
  it("should return empty array for not valid numbers", () => {
    const mockString = "1123466";
    expect(findStraightTriples(mockString)).toEqual([]);
  });
  it("should return an array of multiple triple numbers", () => {
    const mockString = "11125555534444";
    expect(findStraightTriples(mockString)).toEqual(["111", "555", "444"]);
  });
});

describe("findStraightDoubles function", () => {
  it("should return an array of double numbers", () => {
    const mockString = "112345";
    expect(findStraightDoubles(mockString)).toEqual(["11"]);
  });
  it("should return empty array for not valid numbers", () => {
    const mockString = "12346";
    expect(findStraightDoubles(mockString)).toEqual([]);
  });
  it("should return an array of multiple double numbers", () => {
    const mockString = "11125555534444";
    expect(findStraightDoubles(mockString)).toEqual(["11", "55", "44"]);
  });
});

describe("tripledouble function", () => {
  it("should return 1 if there is a straight triple and double", () => {
    const mockNum1 = 451999277;
    const mockNum2 = 699;
    expect(tripledouble(mockNum1, mockNum2)).toEqual(1);
  });
  it("should return 0 if there is no straight triple and double", () => {
    const mockNum1 = 1222345;
    const mockNum2 = 12345;
    expect(tripledouble(mockNum1, mockNum2)).toEqual(0);
  });
});
