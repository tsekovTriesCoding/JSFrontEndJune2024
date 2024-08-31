const baseUrl = "http://localhost:3030/jsonstore/tasks";
const loadHistoryButtonElement = document.getElementById("load-history");
const divListElement = document.getElementById("list");
const addWeatherButtonElement = document.getElementById("add-weather")
const editWeatherButtonElement = document.getElementById("edit-weather");
const locationInputElement = document.getElementById("location");
const temperatureInputElement = document.getElementById("temperature");
const dateInputElement = document.getElementById("date");

loadHistoryButtonElement.addEventListener("click", loadHistory);

let weatherToEditId;

function loadHistory() {
    divListElement.innerHTML = "";

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            Object.values(data)
                .forEach(weather => {
                    const divButtonsContainerElement = document.createElement("div");
                    divButtonsContainerElement.classList.add("buttons-container");

                    const changeButtonElement = document.createElement("button");
                    changeButtonElement.classList.add("change-btn");
                    changeButtonElement.textContent = "Change";
                    changeButtonElement.addEventListener("click", changeWeather);

                    const deleteButtonElement = document.createElement("button");
                    deleteButtonElement.classList.add("delete-btn");
                    deleteButtonElement.textContent = "Delete";
                    deleteButtonElement.addEventListener("click", deleteWeather);

                    divButtonsContainerElement.appendChild(changeButtonElement);
                    divButtonsContainerElement.appendChild(deleteButtonElement);

                    const divAllContainerElement = document.createElement("div");
                    divAllContainerElement.classList.add("container");

                    const h2LocationElement = document.createElement("h2");
                    h2LocationElement.textContent = weather.location;
                    const h3DateElement = document.createElement("h3");
                    h3DateElement.textContent = weather.date;
                    const h3TemperatureElement = document.createElement("h3");
                    h3TemperatureElement.id = "celsius";
                    h3TemperatureElement.textContent = weather.temperature;

                    divAllContainerElement.appendChild(h2LocationElement);
                    divAllContainerElement.appendChild(h3DateElement);
                    divAllContainerElement.appendChild(h3TemperatureElement);
                    divAllContainerElement.appendChild(divButtonsContainerElement);

                    divListElement.appendChild(divAllContainerElement);

                    function changeWeather() {
                        locationInputElement.value = weather.location;
                        temperatureInputElement.value = weather.temperature;
                        dateInputElement.value = weather.date;

                        editWeatherButtonElement.disabled = false;
                        addWeatherButtonElement.setAttribute("disabled", "disabled");

                        weatherToEditId = weather._id;
                    }

                    async function deleteWeather() {
                        await fetch(`${baseUrl}/${weather._id}`, {
                            method: "DELETE",
                            headers: {
                                "content-type": "application/json"
                            },
                        });

                        divAllContainerElement.remove();
                    }
                });
        });
}

addWeatherButtonElement.addEventListener("click", addWeather);

async function addWeather() {
    const weatherToAdd = getWeatherInfo();
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(weatherToAdd),
    });

    if (!response.ok) {
        return
    }

    loadHistory();
    clearInputFields();
}

editWeatherButtonElement.addEventListener("click", editWeather);

async function editWeather() {
    const editedWeather = getWeatherInfo();
    const response = await fetch(`${baseUrl}/${weatherToEditId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            _id: weatherToEditId,
            location: editedWeather.location,
            temperature: editedWeather.temperature,
            date: editedWeather.date,
        })
    });

    if (!response.ok) {
        return;
    }

    loadHistory();
    editWeatherButtonElement.disabled = true;
    addWeatherButtonElement.removeAttribute("disabled");
    weatherToEditId = null;
}



function getWeatherInfo() {
    const location = locationInputElement.value;
    const temperature = temperatureInputElement.value;
    const date = dateInputElement.value;

    return { location, temperature, date }
}

function clearInputFields() {
    locationInputElement.value = "";
    temperatureInputElement.value = "";
    dateInputElement.value = "";
}