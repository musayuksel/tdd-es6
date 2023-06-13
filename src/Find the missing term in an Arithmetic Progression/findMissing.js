const findDiff = (numbers) =>
  (numbers[numbers.length - 1] - numbers[0]) / numbers.length;

const findMissing = (numbers) => {
  const diff = findDiff(numbers);

  const missingNumber = numbers.find(
    (number, index) => numbers[index + 1] - number !== diff
  );

  return missingNumber + diff;
};

export { findMissing, findDiff };
