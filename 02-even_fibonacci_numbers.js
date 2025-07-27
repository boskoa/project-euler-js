function fibonacciEvenSum(limit) {
  const lastTwo = [1, 2];
  let sum = 2;

  while (lastTwo[1] < limit) {
    lastTwo.push(lastTwo[0] + lastTwo[1]);
    lastTwo.shift();
    if (lastTwo[1] % 2 === 0) {
      sum += lastTwo[1];
    }
  }

  return sum;
}

console.log(fibonacciEvenSum(4000000));
