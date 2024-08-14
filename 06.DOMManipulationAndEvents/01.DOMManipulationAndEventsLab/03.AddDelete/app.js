function addItem() {
    const itemsListelement = document.getElementById('items');
    const newItemInputElement = document.getElementById('newItemText');

    const newItemElement = document.createElement('li');
    newItemElement.textContent = newItemInputElement.value;
    newItemInputElement.value = '';

    const deleteElement = document.createElement('a');
    deleteElement.textContent = '[Delete]';
    deleteElement.href = '#';

    deleteElement.addEventListener('click', () => {
        newItemElement.remove();
    });

    newItemElement.appendChild(deleteElement);
    itemsListelement.appendChild(newItemElement);
}