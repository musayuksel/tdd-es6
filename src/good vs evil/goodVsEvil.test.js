import { findTotalPower, goodVsEvil } from "./goodVsEvil.js";

describe("findTotalPower function", () => {
  it("should return total power of army", () => {
    const mockArmy = "1 1 1 1 1 1";
    const mockSide = "good";
    expect(findTotalPower(mockArmy, mockSide)).toEqual(23);
  });

  it("should return total power of army", () => {
    const mockArmy = "1 1 1 1 1 1 1";
    const mockSide = "evil";
    expect(findTotalPower(mockArmy, mockSide)).toEqual(25);
  });
});

describe("goodVsEvil function", () => {
  it("should return good wins", () => {
    const goods = "0 0 0 0 0 10";
    const evils = "0 1 1 1 1 0 0";
    expect(goodVsEvil(goods, evils)).toEqual(
      "Battle Result: Good triumphs over Evil"
    );
  });

  it("should return evil wins", () => {
    const goods = "1 1 1 1 1 1";
    const evils = "1 1 1 1 1 1 1";
    expect(goodVsEvil(goods, evils)).toEqual(
      "Battle Result: Evil eradicates all trace of Good"
    );
  });

  it("should return no victor", () => {
    const goods = "1 0 0 0 0 0";
    const evils = "1 0 0 0 0 0 0";
    expect(goodVsEvil(goods, evils)).toEqual(
      "Battle Result: No victor on this battle field"
    );
  });
});
