function filterLettersWithoutSpaces(string) {
  return string
    .toLowerCase()
    .split('')
    .filter((letter) => letter !== ' ')
    .sort()
    .join('');
}
export function isAnagram(string1, string2) {
  return (
    filterLettersWithoutSpaces(string1) === filterLettersWithoutSpaces(string2)
  );
}
