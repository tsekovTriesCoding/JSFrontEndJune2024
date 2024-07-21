function solve(number) {
    let sum = 0;
    while (number > 0) {
        let lastDigit = number % 10;
        sum += lastDigit;

        number = Math.trunc(number / 10);
    }

    console.log(sum);
}

solve(245678);
solve(97561);
solve(543);
