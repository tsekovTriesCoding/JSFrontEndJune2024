function sumTable() {
    const productsPrices = document.querySelectorAll('table tr td:last-of-type:not(#sum)');

    let sum = 0;
    for (const price of productsPrices) {
        sum += Number(price.textContent);
    }

    const sumElement = document.getElementById('sum');
    sumElement.textContent = sum;
}