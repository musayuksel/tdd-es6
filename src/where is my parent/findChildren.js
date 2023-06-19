const findChildren = (letters) => {
  const mothers = countChildren(letters);

  return Object.keys(mothers)
    .sort()
    .map((letter) => letter + letter.toLowerCase().repeat(mothers[letter]))
    .join("");
};

const countChildren = (letters) => {
  return letters.split("").reduce((mothers, letter) => {
    if (letter.toUpperCase() === letter && !mothers[letter]) {
      mothers[letter] = 0;
    } else if (letter.toLowerCase() === letter) {
      const isMotherExists = mothers[letter.toUpperCase()];

      if (isMotherExists) {
        mothers[letter.toUpperCase()]++;
      } else {
        mothers[letter.toUpperCase()] = 1;
      }
    }
    return mothers;
  }, {});
};
export { findChildren, countChildren };
