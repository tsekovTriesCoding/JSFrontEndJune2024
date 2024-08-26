function lockedProfile() {
    const profilesUrl = 'http://localhost:3030/jsonstore/advanced/profiles';
    const mainElement = document.getElementById('main');

    mainElement.innerHTML = '';

    fetch(profilesUrl)
        .then(res => res.json())
        .then(data => {
            usersCount = 0;
            Object.values(data).forEach(profile => {
                usersCount++;
                const buttonElement = document.createElement('button');
                buttonElement.textContent = 'Show more';
                buttonElement.addEventListener('click', (e) => {
                    const lockedRadioElement = e.target.parentElement.querySelector('[type=radio][value=lock]');
                    const hiddenInfoElement = e.target.parentElement.querySelector('div');

                    if (lockedRadioElement.checked) {
                        return;
                    }

                    if (buttonElement.textContent === 'Show more') {
                        hiddenInfoElement.classList.remove('hiddenInfo');
                        buttonElement.textContent = 'Hide it';
                    } else {
                        buttonElement.textContent = 'Show more';
                        hiddenInfoElement.classList.add('hiddenInfo');
                    }
                });

                const userAgeInputElement = document.createElement('input');
                userAgeInputElement.type = 'email';
                userAgeInputElement.name = `user${usersCount}Age`;
                userAgeInputElement.value = profile.age;
                userAgeInputElement.readOnly = true;
                userAgeInputElement.disabled = true;

                const userAgeLabelElement = document.createElement('label');
                userAgeLabelElement.textContent = 'Age:';

                const userEmailInputElement = document.createElement('input');
                userEmailInputElement.type = 'email';
                userEmailInputElement.name = `user${usersCount}Email`;
                userEmailInputElement.value = profile.email;
                userEmailInputElement.readOnly = true;
                userEmailInputElement.disabled = true;

                const userEmailLabelElement = document.createElement('label');
                userEmailLabelElement.textContent = 'Email:';

                const hrElement = document.createElement('hr');

                const divUsernameElement = document.createElement('div');
                divUsernameElement.classList.add(`user${usersCount}Username`);
                divUsernameElement.classList.add('hiddenInfo');

                divUsernameElement.appendChild(hrElement);
                divUsernameElement.appendChild(userEmailLabelElement);
                divUsernameElement.appendChild(userEmailInputElement);
                divUsernameElement.appendChild(userAgeLabelElement);
                divUsernameElement.appendChild(userAgeInputElement);

                const userUsernameInputElement = document.createElement('input');
                userUsernameInputElement.type = 'text';
                userUsernameInputElement.name = `user${usersCount}Username`;
                userUsernameInputElement.value = profile.username;
                userUsernameInputElement.readOnly = true;
                userUsernameInputElement.disabled = true;

                const userUsernameLabelElement = document.createElement('label');
                userUsernameLabelElement.textContent = 'Username';

                const usernameHrElement = document.createElement('hr');

                const radioInputUnlockElement = document.createElement('input');
                radioInputUnlockElement.type = 'radio';
                radioInputUnlockElement.name = `user${usersCount}Locked`;
                radioInputUnlockElement.value = 'unlock';

                const brElement = document.createElement('br');

                const unlockLabelElement = document.createElement('label');
                unlockLabelElement.textContent = ('Unlock');

                const radioInputLockElement = document.createElement('input');
                radioInputLockElement.type = 'radio';
                radioInputLockElement.name = `user${usersCount}Locked`;
                radioInputLockElement.value = 'lock';
                radioInputLockElement.checked = true;

                const lockLabelElement = document.createElement('label');
                lockLabelElement.textContent = ('Lock');

                const imgElement = document.createElement('img');
                imgElement.src = './iconProfile2.png';
                imgElement.classList.add('userIcon');

                const divProfileElement = document.createElement('div');
                divProfileElement.classList.add('profile');
                divProfileElement.appendChild(imgElement);
                divProfileElement.appendChild(lockLabelElement);
                divProfileElement.appendChild(radioInputLockElement);
                divProfileElement.appendChild(unlockLabelElement);
                divProfileElement.appendChild(radioInputUnlockElement);
                divProfileElement.appendChild(brElement);
                divProfileElement.appendChild(usernameHrElement);
                divProfileElement.appendChild(userUsernameLabelElement);
                divProfileElement.appendChild(userUsernameInputElement);
                divProfileElement.appendChild(divUsernameElement);
                divProfileElement.appendChild(buttonElement);

                mainElement.appendChild(divProfileElement);
            });
        })


}