const createSubArray = (number) => Array.from({ length: number }, () => 1);

const pyramid = (number) =>
  Array.from({ length: number }, (_, index) => createSubArray(index + 1));

export { createSubArray, pyramid };
