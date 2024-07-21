function solve(number) {
    let isSame = true;
    let numberString = number.toString();
    let prevNumber = Number(numberString[0]);

    let sum = prevNumber;
    for (let i = 1; i < numberString.length; i++) {
        if (prevNumber != numberString[i]) {
            isSame = false;
        }

        prevNumber = numberString[i];
        sum += Number(numberString[i]);
    }

    console.log(isSame);
    console.log(sum);
}

solve(2222222);
solve(1234);