function solve(num1, num2, num3) {
    const smallestNumber = getMinNumber(num1, num2, num3);

    console.log(smallestNumber);

    function getMinNumber(num1, num2, num3) {
        let smallestNumber = Number.MAX_SAFE_INTEGER;

        if (num1 < smallestNumber) {
            smallestNumber = num1;
        }

        if (num2 < smallestNumber) {
            smallestNumber = num2;
        }

        if (num3 < smallestNumber) {
            smallestNumber = num3;
        }

        return smallestNumber;
    }
}

solve(2, 5, 3);
solve(600, 342, 123);
solve(25, 21, 4);
solve(2, 2, 2);