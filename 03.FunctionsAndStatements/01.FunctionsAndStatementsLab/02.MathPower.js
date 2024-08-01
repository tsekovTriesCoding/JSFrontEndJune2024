function solve(number, power) {
    const numberInPower = getNumberInPower(number, power);

    console.log(numberInPower);

    function getNumberInPower(number, power) {
        return number ** power;
    }
}

solve(2, 8);
solve(3, 4);