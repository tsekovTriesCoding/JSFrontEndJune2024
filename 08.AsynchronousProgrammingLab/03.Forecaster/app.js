function attachEvents() {
    const locationElement = document.getElementById('location');
    const getWeatherButtonElement = document.getElementById('submit');
    const forecastElement = document.getElementById('forecast');
    const currentElement = document.getElementById('current');
    const upcomingElement = document.getElementById('upcoming');

    const weatherSymbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°',
    }

    getWeatherButtonElement.addEventListener('click', () => {
        forecastElement.style.display = "block";

        fetch('http://localhost:3030/jsonstore/forecaster/locations')
            .then((res) => res.json())
            .then((data) => {
                const location = data.find(element => element.name === locationElement.value);
                const code = location.code;

                return Promise.all([
                    fetch('http://localhost:3030/jsonstore/forecaster/today/' + code),
                    fetch('http://localhost:3030/jsonstore/forecaster/upcoming/' + code),

                ]);
            })
            .then((responses) => Promise.all(responses.map(res => res.json())))
            .then(([today, upcoming]) => {
                todayForecast(today);
                upcomingForecast(upcoming);
            })
            .catch(() => {
                const pElement = document.createElement('p');
                pElement.textContent = 'Error';
                forecastElement.appendChild(pElement);
            });
    });


    function upcomingForecast(upcoming) {
        const divForecastInfoElement = document.createElement('div');
        divForecastInfoElement.classList.add('forecast-info');

        upcoming.forecast.forEach(forecast => {
            const currCondition = forecast.condition;
            const lowTemp = forecast.low;
            const highTemp = forecast.high;

            const spanConditionElement = document.createElement('span');
            spanConditionElement.classList.add('forecast-data');
            spanConditionElement.textContent = currCondition;

            const spanTempElement = document.createElement('span');
            spanTempElement.classList.add('forecast-data');
            spanTempElement.textContent = `${lowTemp}${weatherSymbols['Degrees']}/${highTemp}${weatherSymbols['Degrees']}`;

            const weatherSymbolElement = document.createElement('span');
            weatherSymbolElement.classList.add('symbol');
            weatherSymbolElement.textContent = weatherSymbols[currCondition];

            const spanUpcomingElement = document.createElement('span');
            spanUpcomingElement.classList.add('upcoming');
            spanUpcomingElement.appendChild(weatherSymbolElement);
            spanUpcomingElement.appendChild(spanTempElement);
            spanUpcomingElement.appendChild(spanConditionElement);

            divForecastInfoElement.appendChild(spanUpcomingElement);
        });

        upcomingElement.appendChild(divForecastInfoElement);
    }

    function todayForecast(today) {
        const locationName = today.name;
        const lowTemp = today.forecast.low;
        const highTemp = today.forecast.high;
        const currCondition = today.forecast.condition;


        const spanTempElement = document.createElement('span');
        spanTempElement.classList.add('forecast-data');
        spanTempElement.textContent = `${lowTemp}${weatherSymbols['Degrees']}/${highTemp}${weatherSymbols['Degrees']}`;

        const spanLocationElement = document.createElement('span');
        spanLocationElement.classList.add('forecast-data');
        spanLocationElement.textContent = locationName;

        const spanConditionElement = document.createElement('span');
        spanConditionElement.classList.add('forecast-data');
        spanConditionElement.textContent = currCondition;

        const weatherSymbolElement = document.createElement('span');
        weatherSymbolElement.classList.add('condition');
        weatherSymbolElement.classList.add('symbol');
        weatherSymbolElement.textContent = weatherSymbols[currCondition];

        const spanContainerElement = document.createElement('span');
        spanContainerElement.classList.add('condition');
        spanContainerElement.appendChild(spanLocationElement);
        spanContainerElement.appendChild(spanTempElement);
        spanContainerElement.appendChild(spanConditionElement);

        const divElement = document.createElement('div');
        divElement.classList.add('forecasts');


        divElement.appendChild(weatherSymbolElement);
        divElement.appendChild(spanContainerElement);

        currentElement.appendChild(divElement);
    }
}

attachEvents();