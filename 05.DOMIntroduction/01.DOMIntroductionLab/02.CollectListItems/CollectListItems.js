function extractText() {
    const items = document.getElementById('items');
    const textAreaElement = document.getElementById('result');

    textAreaElement.value = items.textContent;
}