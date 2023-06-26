import { dim, createArrayFromValue } from "./dim";

describe("createArrayFromValue function", () => {
  it("should return an array of 3 elements with the value 0", () => {
    expect(createArrayFromValue(3, 0)).toEqual([0, 0, 0]);
  });
});
