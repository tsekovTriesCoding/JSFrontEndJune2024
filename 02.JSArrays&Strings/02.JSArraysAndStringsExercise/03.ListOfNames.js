function solve(array) {
    // сравнява малки и големи букви localeCompare!
    array.sort((a, b) => a.localeCompare(b))
        .forEach((name, index) => console.log(`${++index}.${name}`));
}

solve(["John", "Bob", "Christina", "Ema"]);