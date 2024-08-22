// Factorial - עצרת
const getFactorial = (n: number): number => {
  if (n === 1) {
    return 1;
  }

  return n * getFactorial(n - 1);
};

console.log(getFactorial(6));
