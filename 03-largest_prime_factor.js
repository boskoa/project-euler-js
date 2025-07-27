function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function getLargestPrimeFactor(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i !== 0) continue;
    if (isPrime(num / i)) return num / i;
  }

  return null;
}

console.log(getLargestPrimeFactor(600851475143));
