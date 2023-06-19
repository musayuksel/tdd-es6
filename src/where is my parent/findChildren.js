const findChildren = (letters) => {};

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
