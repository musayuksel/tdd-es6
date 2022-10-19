import {isAnagram} from './anagrams';
describe('findCurrentPositionIndex function :', () => {
    it('should return true when the two strings are anagrams', () => {
        expect(isAnagram('listen', 'silent')).toBe(true);
    });
   
  });
  