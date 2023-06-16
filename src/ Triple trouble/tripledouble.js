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

const tripledouble = (num1, num2) => {
  const num1Triples = findStraightTriples(num1.toString());
  const num2Doubles = findStraightDoubles(num2.toString());

  const triplesAndDoubles = num1Triples.some((triple) => {
    const doubled = triple.slice(0, 2);
    return num2Doubles.includes(doubled);
  });

  return triplesAndDoubles > 0 ? 1 : 0;
};

export { findStraightTriples, findStraightDoubles, tripledouble };
