const getFibonacciNumByIndex = (i: number): number => {
  if (i === 1 || i === 2) {
    return 1;
  }

  return getFibonacciNumByIndex(i - 1) + getFibonacciNumByIndex(i - 2);
};

console.log(getFibonacciNumByIndex(5)); // 5
console.log(getFibonacciNumByIndex(6)); // 8
console.log(getFibonacciNumByIndex(7)); // 13   8 + 5
