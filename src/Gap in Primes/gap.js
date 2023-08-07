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

const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

export { gap, isPrime };
