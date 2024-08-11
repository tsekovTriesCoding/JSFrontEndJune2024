function solve(input) {
    let validArrays = [];
    const isValidArray = function (validArrays, parsedArray) {
        for (const array of validArrays) {
            if (array.toString() === parsedArray.toString()) {
                return false;
            }
        }

        return true;
    };

    for (const array of input) {
        const parsedArray = JSON.parse(array).sort((a, b) => b - a);

        if (isValidArray(validArrays, parsedArray)) {
            validArrays.push(parsedArray);
        }
    }

    validArrays.sort((ar1, ar2) => ar1.length - ar2.length)
        .forEach(array => {
            console.log(`[${array.join(', ')}]`);
        })
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",

    "[10, 1, -17, 0, 2, 13]",

    "[4, -3, 3, -2, 2, -1, 1, 0]"]);

solve(["[7.14, 7.180, 7.339, 80.099]",

    "[7.339, 80.0990, 7.140000, 7.18]",

    "[7.339, 7.180, 7.14, 80.099]"]);