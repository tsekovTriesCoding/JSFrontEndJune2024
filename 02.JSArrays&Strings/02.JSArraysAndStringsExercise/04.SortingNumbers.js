function solve(numbers) {
    const sorted = [];

    numbers.sort((a, b) => a - b);

    while (numbers.length > 0) {
        sorted.push(numbers.shift());

        if (numbers.length > 0) {
            sorted.push(numbers.pop());
        }

    }

    return sorted;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
