function solve(numOne, numTwo, numThree) {
    let result = getResult(numOne, numTwo, numThree);

    console.log(result);

    function getResult(numOne, numTwo, numThree) {
        if (Math.sign(numOne) == 1 && Math.sign(numTwo) == 1 && Math.sign(numThree) == 1) {
            return 'Positive';
        } else if (Math.sign(numOne) == -1 && Math.sign(numTwo) == -1 && Math.sign(numThree) == 1) {
            return 'Positive';
        } else if (Math.sign(numOne) == 1 && Math.sign(numTwo) == -1 && Math.sign(numThree) == -1) {
            return 'Positive';
        } else if (Math.sign(numOne) == -1 && Math.sign(numTwo) == 1 && Math.sign(numThree) == -1) {
            return 'Positive';
        } else {
            return 'Negative'
        }
    }
}

solve(5, 12, -15);
solve(-6, -12, 14);
solve(-1, -2, -3);
solve(-5, 1, 1);