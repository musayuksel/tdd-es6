function dim(...args) {
  let value = args.pop();
  while (args.length > 0) {
    const currentArg = args.pop();
    value = createArrayFromValue(currentArg, value);
  }

  return value;
}

function createArrayFromValue(number, value) {
  if (typeof value === 'function') {
    //fill the array wih the value of the function
    return new Array(number).fill(0).map(value);
  }
  return new Array(number).fill(value);
}

export { dim, createArrayFromValue };
