function subtract() {
    const firstNumElement = document.getElementById('firstNumber');
    const secondNumElement = document.getElementById('secondNumber');
    const resultElement = document.getElementById('result');

    resultElement.textContent = Number(firstNumElement.value) - Number(secondNumElement.value);
}