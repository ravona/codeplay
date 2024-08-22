const wordToSymbolDict: { [key: string]: string } = {
  plus: "+",
  minus: "-",
};

const regex = new RegExp(Object.keys(wordToSymbolDict).join("|"), "g");

const solution = (S: string): string => {
  return S.replace(regex, (match) => wordToSymbolDict[match]);
};

// Test cases
console.log(solution("minusplusminus")); // Expected output: "-+-"
console.log(solution("plusminusminusplus")); // Expected output: "+--+"
