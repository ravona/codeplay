function getNumInFibonacciSeq(n: number) : number {
    if (n === 1 || n === 2) {
        return 1;
    }

    return getNumInFibonacciSeq(n - 1) + getNumInFibonacciSeq(n - 2);
}

console.log(getNumInFibonacciSeq(6)); // 8