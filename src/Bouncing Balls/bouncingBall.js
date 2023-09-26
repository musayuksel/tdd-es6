const isInputValid = (h, bounce, window) =>
  h > 0 && bounce > 0 && bounce < 1 && window < h;

export { isInputValid };
