function solve(number) {
    let digitsAverage = 0;
    let firstTestNumber = number;

    let digitsSum = 0;
    while(firstTestNumber > 0) {
        let lastDigit = firstTestNumber % 10;

        digitsSum += lastDigit;
        firstTestNumber = Math.trunc(firstTestNumber / 10);
    }

    digitsAverage = digitsSum / number.toString().length;


    while (digitsAverage <= 5) {
        number = number + "9";
        digitsSum += 9;
        digitsAverage = digitsSum / number.length;
    }

    console.log(number);
}

solve(101);
solve(5835);