function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';
    const sendButtonElement = document.getElementById('submit');
    const authorNameElement = document.querySelector('input[name=author]');
    const messageElement = document.querySelector('input[name=content]');
    const refreshButtonElement = document.getElementById('refresh');
    const messagesTextareaElement = document.getElementById('messages');



    sendButtonElement.addEventListener('click', () => {
        const authorName = authorNameElement.value;
        const message = messageElement.value;

        authorNameElement.value = '';
        messageElement.value = '';

        fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                author: authorName,
                content: message,
            }),
        });
    });

    refreshButtonElement.addEventListener('click', () => {
        let output = [];
        fetch(baseUrl)
            .then((res) => res.json())
            .then((data) => {
                Object.values(data).forEach(comment => {
                    output.push(`${comment.author}: ${comment.content}`) ;
                });

                messagesTextareaElement.textContent = output.join('\n');
            });
    });

}

attachEvents();