function solve() {
    const departButtonElement = document.getElementById('depart');
    const arriveButtonElement = document.getElementById('arrive');
    const spanInfoElement = document.querySelector('.info');
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';
    let currentStop = 'depot';
    let nextStop = 'depot';

    function depart() {
        toggleButtons(departButtonElement, arriveButtonElement);
        fetch(`${baseUrl}/${currentStop}`)
            .then((res) => res.json())
            .then((data) => {
                spanInfoElement.textContent = `Next stop ${data.name}`;
                nextStop = data.next;
            }).catch(() => {
                spanInfoElement.textContent = 'Error';
                departButtonElement.setAttribute('disabled', 'true');
                arriveButtonElement.setAttribute('disabled', 'true');
            });
    }

    async function arrive() {
        toggleButtons(arriveButtonElement, departButtonElement);
        fetch(`${baseUrl}/${currentStop}`)
            .then((res) => res.json())
            .then((data) => {
                spanInfoElement.textContent = `Arriving at ${data.name}`;
                currentStop = data.next;
            }).catch(() => {
                spanInfoElement.textContent = 'Error';
                departButtonElement.setAttribute('disabled', 'true');
                arriveButtonElement.setAttribute('disabled', 'true');
            });
    }

    return {
        depart,
        arrive
    };

    function toggleButtons(buttonA, buttonB) {
        buttonA.setAttribute('disabled', 'true');
        buttonB.removeAttribute('disabled');
    }
}

let result = solve();