export const FizzBuzzFunction = (start, end) => {
  const arrayNumbers = [];
  for (start; start <= end; start++) {
    arrayNumbers.push(start);
    if (start % 3 === 0) {
      arrayNumbers[start] = "fizz";
    }

    if (start % 5 === 0) {
      arrayNumbers[start] = "buzz";
    }

    if (start % 3 === 0 && start % 5 === 0) {
      arrayNumbers[start] = "fizzbuzz";
    }
  }

  return arrayNumbers;
};
