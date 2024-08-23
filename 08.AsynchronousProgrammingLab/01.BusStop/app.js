function getInfo() {
    const stopIdElement = document.getElementById('stopId');
    const stopNameElement = document.getElementById('stopName');
    const busesUlElement = document.getElementById('buses');
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';

    busesUlElement.textContent = '';

    fetch(`${baseUrl}/${stopIdElement.value}`)
        .then((response) => response.json())
        .then((data) => {
            stopNameElement.textContent = data.name;

            for (const busId in data.buses) {
                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`;
                busesUlElement.appendChild(liElement);
            }
        }).catch(() => {
            stopNameElement.textContent = 'Error';
        });
}