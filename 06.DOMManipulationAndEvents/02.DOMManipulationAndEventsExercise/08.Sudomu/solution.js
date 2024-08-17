function solve() {
    const trElements = document.querySelectorAll('table tbody tr');
    const quickCheckButtonElement = document.querySelector('button');
    const clearButtonElement = document.querySelector('button:last-of-type');
    const tableElement = document.querySelector('table');
    const pInDivElement = document.querySelector('#check p');

    quickCheckButtonElement.addEventListener('click', (e) => {
        let matrix = [];
        let sudokuIsTrue = true;

        Array.from(trElements)
            .forEach(trElement => {
                const inputElements = trElement.querySelectorAll('td input')

                const currentRowValues = Array.from(inputElements)
                    .map(inputElement => Number(inputElement.value));

                matrix.push(currentRowValues);
            });

        for (const row of matrix) {
            const rowSum = row.reduce((accumulator, currentValue) => accumulator + currentValue);
            if (rowSum !== 6) {
                sudokuIsTrue = false;
                break;
            }
        }

        const col1 = matrix.map(d => d[0]);
        const col2 = matrix.map(d => d[1]);
        const col3 = matrix.map(d => d[2]);

        if (col1.reduce((accumulator, currentValue) => accumulator + currentValue) !== 6 ||
            col2.reduce((accumulator, currentValue) => accumulator + currentValue) !== 6 ||
            col3.reduce((accumulator, currentValue) => accumulator + currentValue) !== 6) {
            sudokuIsTrue = false;
        }

        if (sudokuIsTrue) {
            tableElement.style.border = '2px solid green';
            pInDivElement.textContent = 'You solve it! Congratulations!';
            pInDivElement.style.color = 'green';
        } else {
            tableElement.style.border = '2px solid red';
            pInDivElement.textContent = 'NOP! You are not done yet...';
            pInDivElement.style.color = 'red';
        }
    });

    clearButtonElement.addEventListener('click', (e) => {
        Array.from(trElements).forEach(trElement => {
            const rowInputElements = trElement.querySelectorAll('input');
            Array.from(rowInputElements).forEach(input => input.value = '');
        });

        tableElement.style.border = '';
        pInDivElement.textContent = '';
        pInDivElement.style.color = '';
    });
}