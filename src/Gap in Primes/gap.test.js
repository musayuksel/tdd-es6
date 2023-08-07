import { gap, isPrime } from './gap';

describe('isPrime function', () => {
  it('should return true if number is prime', () => {
    expect(isPrime(2)).toBe(true);
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

describe('gap function', () => {
  it('should return null if there are no primes in the range', () => {
    expect(gap(2, 1, 2)).toBe(null);
  });
  it('should return null if there are no primes in the range', () => {
    expect(gap(2, 1, 2)).toBe(null);
  });

  it('should return [3, 5] if gap is 2 and range is 1 to 5', () => {
    expect(gap(2, 1, 5)).toEqual([3, 5]);
  });
});
