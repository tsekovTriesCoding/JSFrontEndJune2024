function deleteByEmail() {
    const trElements = document.querySelectorAll('table tbody tr');
    const inputElement = document.querySelector('input[type=text]');
    const resultElement = document.getElementById('result');

    const matchTrElement = Array.from(trElements)
        .find(trElement => trElement.children[1].textContent.includes(inputElement.value));

    if (matchTrElement) {
        matchTrElement.remove();
        resultElement.textContent = 'Deleted';
    } else {
        resultElement.textContent = '"Not found.';
    }

    inputElement.value = '';
}