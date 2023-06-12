function findTotalPower(army, side) {
  const powers = {
    good: [1, 2, 3, 3, 4, 10], // powers' of good side with order
    evil: [1, 2, 2, 2, 3, 5, 10], // powers' of evil side with order
  };

  return army
    .split(" ")
    .reduce(
      (total, amount, index) => (total += powers[side][index] * +amount),
      0
    );
}

function goodVsEvil(good, evil) {}

export { findTotalPower, goodVsEvil };
