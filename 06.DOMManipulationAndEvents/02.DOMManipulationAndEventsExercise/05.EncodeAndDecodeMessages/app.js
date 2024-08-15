function encodeAndDecodeMessages() {
    const encodeButtonElement = document.querySelector('button:first-of-type');
    const decodeButtonElement = document.querySelectorAll('button')[1];

    let encodedMessage = '';
    encodeButtonElement.addEventListener('click', (e) => {
        const textareaElement = encodeButtonElement.parentElement.querySelector('textarea');

        encodedMessage = encodeMessage(textareaElement.value);
        textareaElement.value = '';
        decodeButtonElement.parentElement.querySelector('textarea').value = encodedMessage;
    });

    decodeButtonElement.addEventListener('click', () => {
        const textareaElement = decodeButtonElement.parentElement.querySelector('textarea');
        textareaElement.value = decodeMessage(encodedMessage);
    });

    function encodeMessage(message) {
        let charCodes = [];
        for (let i = 0; i < message.length; i++) {
            charCodes.push(message.charCodeAt(i) + 1);
        }

        return String.fromCharCode(...charCodes)
    }

    function decodeMessage(message) {
        let charCodes = [];
        for (let i = 0; i < message.length; i++) {
            charCodes.push(message.charCodeAt(i) - 1);
        }

        return String.fromCharCode(...charCodes)
    }
}