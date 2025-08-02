function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function getNthPrime(n) {
  let counter = 0;
  let currentPrime = 2;

  for (let i = 2; counter < n; i++) {
    if (isPrime(i)) {
      counter++;
      currentPrime = i;
    }
  }

  return currentPrime;
}

console.log(getNthPrime(10001));
