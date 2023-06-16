const findStraightTriples = (str) => {
  const triples = [];

  str.split("").forEach((num, i, strArr) => {
    if (num === strArr[i + 1] && num === strArr[i + 2]) {
      triples.push(num.repeat(3));
    }
  });
  return [...new Set(triples)];
};

const findStraightDoubles = (str) => {
  const doubles = [];

  str.split("").forEach((num, i, strArr) => {
    if (num === strArr[i + 1]) {
      doubles.push(num.repeat(2));
    }
  });
  return [...new Set(doubles)];
};

export { findStraightTriples, findStraightDoubles };

const tripledouble = (num1, num2) => {};
