function getDifference(range) {
  let sumOfSquares = 0;
  let sum = 0;

  for (let i = 1; i <= range; i++) {
    sumOfSquares += i ** 2;
    sum += i;
  }

  return sum ** 2 - sumOfSquares;
}

console.log(getDifference(100));
