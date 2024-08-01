function solve(num1, num2, operator) {
    const result = (num1, num2, operator) => {
        switch (operator) {
            case 'multiply':
                return num1 * num2;
            case 'divide':
                return num1 / num2;
            case 'add':
                return num1 + num2;
            case 'subtract':
                return num1 - num2;
        }
    }

    console.log(result(num1, num2, operator));
}

solve(5, 5, 'multiply');
solve(40, 8, 'divide')
solve(12, 19, 'add');
solve(50, 13, 'subtract');
