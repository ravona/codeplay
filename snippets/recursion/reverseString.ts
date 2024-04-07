function reverseString(input: string): string {
    const res: string[] = [];

    while (input.length > 0) {
        const char = input.charAt(input.length - 1);
        res.push(char);
        input = input.slice(0, -1);
    }

    return res.join('');
}

const input = "Hola";
const reversedString = reverseString(input);
console.log(reversedString);
