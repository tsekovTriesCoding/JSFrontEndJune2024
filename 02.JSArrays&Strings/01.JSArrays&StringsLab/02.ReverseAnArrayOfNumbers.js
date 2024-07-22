function solve(n, array) {
    let newArrayReversed = [];
    for (let i = 0; i < n; i++) {
        newArrayReversed[i] = array[i];
    }

    let output = "";
    for (let i = newArrayReversed.length - 1; i >= 0; i--) {
        output += `${newArrayReversed[i]} `
    }

    console.log(output);
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);