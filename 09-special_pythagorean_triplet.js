function getTriplet() {
  for (let i = 332; i > 0; i--) {
    for (let j = i + 1; j + i < 667; j++) {
      const h = 1000 - i - j;

      if (i ** 2 + j ** 2 === h ** 2) {
        return i * j * h;
      }
    }
  }

  return 0;
}

console.log(getTriplet());
