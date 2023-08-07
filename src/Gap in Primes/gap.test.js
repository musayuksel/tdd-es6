import { gap, isPrime } from './gap';

describe('isPrime function', () => {
  it('should return true if number is prime', () => {
    expect(isPrime(2)).toBe(false);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
  });
  it('should return false if number is not prime', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
  });
});
