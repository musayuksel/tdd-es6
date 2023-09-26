const isInputValid = (h, bounce, window) =>
  h > 0 && bounce > 0 && bounce < 1 && window < h;

const bouncingBall = (h, bounce, window) => {
  if (!isInputValid(h, bounce, window)) return -1;

  let bounceCount = 1;

  while (h * bounce > window) {
    bounceCount += 2;
    h *= bounce;
  }
  return bounceCount;
};

export { isInputValid, bouncingBall };
