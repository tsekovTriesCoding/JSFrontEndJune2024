function colorize() {
    const evenRowElements = document.querySelectorAll('table tr:nth-child(even)');

    evenRowElements.forEach(element => element.style.backgroundColor = 'teal');
}