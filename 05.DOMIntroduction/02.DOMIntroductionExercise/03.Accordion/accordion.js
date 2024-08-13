function toggle() {
    const buttonElement = document.querySelector('.head span.button');
    const extraTextElement = document.getElementById('extra');

    const currentButtonText = buttonElement.textContent;

    if (currentButtonText === "More") {
        extraTextElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        extraTextElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }

}