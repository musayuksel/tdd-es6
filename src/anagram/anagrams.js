function filterLettersWithoutSpaces(string) {
    const alphabetLetters = 'abcdefghijklmnopqrstuvwxyz';
  return string
    .toLowerCase()
    .split('')
    .filter((letter) => alphabetLetters.includes(letter))
    .sort()
    .join('');
}
export function isAnagram(string1, string2) {
  return (
    filterLettersWithoutSpaces(string1) === filterLettersWithoutSpaces(string2)
  );
}
