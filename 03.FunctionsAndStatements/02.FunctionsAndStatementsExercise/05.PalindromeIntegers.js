function solve(numbers) {

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        let reversedCurrentNumber = getReversedNumber(currentNumber);

        if (currentNumber === reversedCurrentNumber) {
            console.log('true');
        } else {
            console.log('false');
        }
    }

    function getReversedNumber(number) {
        return parseInt(number.toString()
        .split('')
        .reverse()
        .join('')) * Math.sign(number);
    }
}



solve([123,323,421,121]);
solve([32,2,232,1010]);