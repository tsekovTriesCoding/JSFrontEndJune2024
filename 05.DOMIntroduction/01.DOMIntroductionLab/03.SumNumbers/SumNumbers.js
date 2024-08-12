function calc() {
    const firstInputElement = document.getElementById('num1');
    const secondInputElement = document.getElementById('num2');
    const sumElement = document.getElementById('sum');

    const num1 = Number(firstInputElement.value);
    const num2 = Number(secondInputElement.value);

    const sum = num1 + num2;
    sumElement.value = sum;
}
