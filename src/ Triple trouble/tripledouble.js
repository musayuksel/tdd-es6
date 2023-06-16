const findStraightTriples = (str) => {
  const triples = [];

  str.split("").forEach((num, i, strArr) => {
    if (num === strArr[i + 1] && num === strArr[i + 2]) {
      triples.push(parseInt(num.repeat(3)));
    }
  });
  return [...new Set(triples)];
};

export { findStraightTriples };
