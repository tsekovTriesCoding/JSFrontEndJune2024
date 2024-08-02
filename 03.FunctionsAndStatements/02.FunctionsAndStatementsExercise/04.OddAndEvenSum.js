function solve(number) {
    const oddNumbersSum = getOddNumbersSum(number);
    const evenNumbersSum = getEvenNumbersSum(number);

    console.log(`Odd sum = ${oddNumbersSum}, Even sum = ${evenNumbersSum}`);

    function getOddNumbersSum(number) {
        let oddNumbersSum = 0;
    
        while (number > 0) {
            let currentDigit = number % 10;
    
            if (currentDigit % 2 != 0) {
                oddNumbersSum += currentDigit;
            }
    
            number = Math.trunc(number / 10);
        }
    
        return oddNumbersSum;
    }
    
    function getEvenNumbersSum(number) {
        let evenNumbersSum = 0;
    
        while (number > 0) {
            let currentDigit = number % 10;
    
            if (currentDigit % 2 == 0) {
                evenNumbersSum += currentDigit;
            }
    
            number = Math.trunc(number / 10);
        }
    
        return evenNumbersSum;
    }
}

solve(1000435);
solve(3495892137259234);