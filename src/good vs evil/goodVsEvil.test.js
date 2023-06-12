import { findTotalPower, goodVsEvil } from "./goodVsEvil.js";

describe("findTotalPower function", () => {
  it("should return total power of army", () => {
    const mockArmy = "1 1 1 1 1 1";
    const mockSide = "good";
    expect(findTotalPower(mockArmy, mockSide)).toEqual(23);
  });

  it("should return total power of army", () => {
    const mockArmy = "1,1,1,1,1,1,1";
    const mockSide = "evil";
    expect(findTotalPower(mockArmy, mockSide)).toEqual(25);
  });
});
