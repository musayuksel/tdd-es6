const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  let divisor = 5;
  while (divisor * divisor <= num) {
    if (num % divisor === 0 || num % (divisor + 2) === 0) return false;
    divisor += 6;
  }

  return true;
};

const gap = (gap, start, end) => {
  let lastPrime = 2;
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      if (i - lastPrime === gap) return [lastPrime, i];
      lastPrime = i;
    }
  }
  return null;
};

export { gap, isPrime };
