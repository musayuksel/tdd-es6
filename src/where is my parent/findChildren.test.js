import { findChildren, countChildren } from "./findChildren";

describe("countChildren function", () => {
  it("should return an object with the count of children", () => {
    const mockString = "aAbaBbb";
    expect(countChildren(mockString)).toEqual({ A: 2, B: 3 });
  });
});

describe("findChildren function", () => {
  it("should return a string with the children sorted by mothers", () => {
    const mockString = "beeeEBb";
    expect(findChildren(mockString)).toEqual("BbbEeee");

    const mockString2 = "xXfuUuuF";
    expect(findChildren(mockString2)).toEqual("FfUuuuXx");
  });
});
