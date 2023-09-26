import { isInputValid } from './bouncingBall';

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
