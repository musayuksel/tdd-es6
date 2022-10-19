import { isAnagram } from './anagrams';
describe('isAnagram function :', () => {
  it('should return true when the two strings are anagrams', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
  });

  it('should return false when the two strings have same letter but different length', () => {
    expect(isAnagram('listen', 'silentt')).toBe(false);
  });

  it('should return true when the arguments have spaces', () => {
    expect(isAnagram('conversation', 'voices rant on')).toBe(true);
  });

  it('should return true when the arguments have capital letters', () => {
    expect(isAnagram('Elvis', 'Lives')).toBe(true);
  });

  it('should return true when the arguments have non-alphabetic characters', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBe(true);
  });
});
