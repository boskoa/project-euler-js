function getLargestPalindrome(digits) {
  const largest = Number("9".repeat(digits));
  const smallest = Number("1" + "0".repeat(digits - 1));
  let currentLargestPalindrome = 0;

  for (let i = largest; i >= smallest; i--) {
    for (let j = i; j >= smallest; j--) {
      if (i * j < currentLargestPalindrome) break;
      const product = (i * j).toString();
      const reversedProduct = product.split("").reverse().join("");

      if (product === reversedProduct) {
        currentLargestPalindrome = product;
      }
    }
  }

  return currentLargestPalindrome;
}

console.log(getLargestPalindrome(3));
