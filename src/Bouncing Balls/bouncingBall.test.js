import { isInputValid, bouncingBall } from './bouncingBall';

describe('isInputValid', () => {
  it('should return true if input is valid', () => {
    expect(isInputValid(3, 0.66, 1.5)).toBe(true);
  });

  it('should return false if height is invalid', () => {
    expect(isInputValid(-3, 0.66, 1.5)).toBe(false);
  });

  it('should return false if bounce is invalid', () => {
    expect(isInputValid(3, 1.66, 1.5)).toBe(false);
  });

  it('should return false if window is invalid', () => {
    expect(isInputValid(3, 0.66, 3.5)).toBe(false);
  });
});

describe('bouncingBall', () => {
  it('should return -1 if input is invalid', () => {
    expect(bouncingBall(-3, 0.66, 1.5)).toBe(-1);
  });

  it('h = 3, bounce = 0.66, window = 1.5 should return ', () => {
    expect(bouncingBall(3, 0.66, 1.5)).toBe(3);
  });
});
