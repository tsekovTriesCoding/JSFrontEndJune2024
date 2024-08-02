function solve(num1, num2) {
    const firstNumFactorial = factorial(num1);
    const secondNumFactorial = factorial(num2);

    const result = firstNumFactorial / secondNumFactorial;

    console.log(result.toFixed(2));

    function factorial(num) {

        if (num == 0) {
            return 1;
        }
    
        else {
            return num * factorial(num - 1);
        }
    }
}

solve(5, 2);
solve(6, 2);