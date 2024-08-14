function addItem() {
    const listElement = document.getElementById('items');
    const inputElement = document.getElementById('newItemText');

    const newItemElement = document.createElement('li');
    newItemElement.textContent = inputElement.value;

    listElement.appendChild(newItemElement);
    inputElement.value = '';
}