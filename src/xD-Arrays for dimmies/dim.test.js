import { dim, createArrayFromValue } from "./dim";

describe("createArrayFromValue function", () => {
  it("should return an array of 3 elements with the value 0", () => {
    expect(createArrayFromValue(3, 0)).toEqual([0, 0, 0]);
  });

  it("should call the function if the value is a function", () => {
    const fn = jest.fn();
    createArrayFromValue(3, fn);
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it("should add the return value of the function to the array", () => {
    const fn = jest.fn(() => 5);
    expect(createArrayFromValue(3, fn)).toEqual([5, 5, 5]);
  });
});
