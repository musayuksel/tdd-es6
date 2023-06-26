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

describe("dim function", () => {
  it("should return array of value for 2 args", () => {
    expect(dim(3, 0)).toEqual([0, 0, 0]);
  });

  it("should return array of value for 3 args", () => {
    expect(dim(2, 3, 0)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it("should return array of value for 4 args", () => {
    expect(dim(2, 3, 4, 0)).toEqual([
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    ]);
  });

  it("should return array of function that returns 0 for 2 args", () => {
    const fn = jest.fn(() => 0);
    expect(dim(3, fn)).toEqual([0, 0, 0]);
    expect(fn).toHaveBeenCalledTimes(3);
  });
});
