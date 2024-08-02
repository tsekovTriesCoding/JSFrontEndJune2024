function solve(num1, num2, num3) {
    const sumOfFirstTwoNumbers = sum(num1, num2);
    const result = subtract(sumOfFirstTwoNumbers, num3);

    console.log(result);

    function sum(num1, num2) {
        return num1 + num2;
    }
    
    function subtract(num1, num2) {
        return num1 - num2;
    }
}

solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);