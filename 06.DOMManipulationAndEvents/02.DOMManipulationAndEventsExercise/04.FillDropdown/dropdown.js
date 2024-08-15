function addItem() {
    const newItemTextElement = document.getElementById('newItemText');
    const newItemValueElement = document.getElementById('newItemValue');
    const menuElement = document.getElementById('menu');

    const optionElement = document.createElement('option');
    optionElement.textContent = newItemTextElement.value;
    optionElement.value = newItemValueElement.value;

    menuElement.appendChild(optionElement);
    newItemTextElement.value = '';
    newItemValueElement.value = '';
}