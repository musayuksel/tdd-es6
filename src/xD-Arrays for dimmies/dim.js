function dim() {
  return true;
}

function createArrayFromValue(number, value) {
  if (typeof value === "function") {
    //fill the array wih the value of the function
    return new Array(number).fill(0).map(value);
  }
  return new Array(number).fill(value);
}

export { dim, createArrayFromValue };
