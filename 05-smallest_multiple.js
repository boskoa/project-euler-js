function minimizeFactors(num) {
  const subFactors = Object.fromEntries([
    ...Array(num)
      .keys()
      .map((i) => [i + 1, []]),
  ]);

  for (const key in subFactors) {
    const singleFactors = [];
    let n = Number(key);
    let divisor = 2;

    while (n > 1) {
      if (n % divisor === 0) {
        singleFactors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }

    subFactors[key] = singleFactors;
  }

  const minimizedFactors = [];

  for (const f of Object.values(subFactors)) {
    const copyMF = [...minimizedFactors];
    for (const sf of f) {
      if (copyMF.includes(sf)) {
        const index = copyMF.indexOf(sf);
        copyMF.splice(index, 1);
      } else {
        minimizedFactors.push(sf);
      }
    }
  }

  return minimizedFactors;
}

function multiplyFactors(num) {
  return minimizeFactors(num).reduce((p, c) => p * c, 1);
}

console.log(minimizeFactors(20));
console.log(multiplyFactors(20));
