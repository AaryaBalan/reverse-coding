export function easyFunction(n) {
    return n * (n + 1) / 2
}

export function mediumFunction(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[fib.length - 1]; // Return the nth Fibonacci number
}

export function hardFunction(n) {
    // Check if n is an Armstrong number
    const digits = n.toString().split('').map(Number);
    const numDigits = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, numDigits), 0);
    return sum === n;
}