function lockedProfile() {
    const buttonShowMoreElements = document.querySelectorAll('button');

    buttonShowMoreElements.forEach(buttonElement => {
        buttonElement.addEventListener('click', (e) => {
            const lockedRadioElement = e.target.parentElement.querySelector('[type=radio][value=lock]');
            const hiddenInfoElement = e.target.parentElement.querySelector('div');

            if (lockedRadioElement.checked) {
                return;
            }

            if (buttonElement.textContent === 'Show more') {
                hiddenInfoElement.style.display = 'block';
                buttonElement.textContent = 'Hide it';
            } else {
                buttonElement.textContent = 'Show more';
                hiddenInfoElement.style.display = 'none';
            }

        });
    });

}