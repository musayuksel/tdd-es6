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

function goodVsEvil(good, evil) {
  const goodsTotalPower = findTotalPower(good, "good");
  const evilsTotalPower = findTotalPower(evil, "evil");

  if (goodsTotalPower > evilsTotalPower) {
    return "Battle Result: Good triumphs over Evil";
  } else if (goodsTotalPower < evilsTotalPower) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }
}

export { findTotalPower, goodVsEvil };
