import { findChildren, countChildren } from "./findChildren";

describe("countChildren function", () => {
  it("should return an object with the count of children", () => {
    const mockString = "aAbaBbb";
    expect(countChildren(mockString)).toEqual({ A: 2, B: 3 });
  });
});
