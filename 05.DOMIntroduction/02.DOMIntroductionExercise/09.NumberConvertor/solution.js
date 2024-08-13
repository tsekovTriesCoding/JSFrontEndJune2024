function solve() {
    const numberInputElement = document.getElementById('input');

    const selectMenuToElement = document.getElementById('selectMenuTo');

    const binaryOptionElement = selectMenuToElement.querySelector('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';

    const hexadecimalOptionElement = document.createElement('option');
    hexadecimalOptionElement.value = 'hexadecimal';
    hexadecimalOptionElement.textContent = 'Hexadecimal';
    selectMenuToElement.appendChild(hexadecimalOptionElement);

    const convertors = {
        binary: convertDecimalToBinary,
        hexadecimal: convertDecimalToHexadecimal,
    }

    const convertButtonElement = document.querySelector('button');
    const resultElement = document.getElementById('result');
    convertButtonElement.addEventListener('click', () => {
        const number = Number(numberInputElement.value);

        resultElement.value = convertors[selectMenuToElement.value](number);
    })

    function convertDecimalToBinary(number) {
        return Number(number).toString(2);
    }

    function convertDecimalToHexadecimal(number) {
        return Number(number).toString(16).toUpperCase();
    }
}