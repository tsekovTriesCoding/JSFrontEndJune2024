function solve(input) {
    let flights = {};
    let cancelledFlights = {};
    let changedFlightsStatutes = input[1];
    let statusToCheck = input[2][0];

    input[0].map(flight => {
        const flightInfo = flight.split(' ');
        const code = flightInfo.shift();
        const destination = flightInfo.join(' ');
        flights[code] = destination;
    });

    for (const key in flights) {
        for (const flight of changedFlightsStatutes) {
            const currentCode = flight.split(' ')[0];

            if (key === currentCode) {
                cancelledFlights[currentCode] = flights[key];
                delete flights[key];
                break;
            }
        }

    }

    if (statusToCheck === 'Cancelled') {
        Object.keys(cancelledFlights)
            .forEach(flight => console.log(`{ Destination: '${cancelledFlights[flight]}', Status: 'Cancelled' }`));
    } else {
        Object.keys(flights)
            .forEach(flight => console.log(`{ Destination: '${flights[flight]}', Status: 'Ready to fly' }`));
    }

}

// solve([['WN269 Delaware',
//     'FL2269 Oregon',

//     'WN498 Las Vegas',

//     'WN3145 Ohio',

//     'WN612 Alabama',

//     'WN4010 New York',

//     'WN1173 California',

//     'DL2120 Texas',

//     'KL5744 Illinois',

//     'WN678 Pennsylvania'],

// ['DL2120 Cancelled',

//     'WN612 Cancelled',

//     'WN1173 Cancelled',

//     'SK430 Cancelled'],

// ['Cancelled']
// ])

solve([['WN269 Delaware',

    'FL2269 Oregon',

    'WN498 Las Vegas',

    'WN3145 Ohio',

    'WN612 Alabama',

    'WN4010 New York',

    'WN1173 California',

    'DL2120 Texas',

    'KL5744 Illinois',

    'WN678 Pennsylvania'],

['DL2120 Cancelled',
    'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'], ['Ready to fly']])