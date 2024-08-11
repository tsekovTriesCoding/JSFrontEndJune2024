function solve(input) {
    let garage = {};

    for (const line of input) {
        const info = line.split(' - ');
        const garageNumber = info[0];

        if (!garage.hasOwnProperty(garageNumber)) {
            garage[garageNumber] = [];
        }

        const carInfo = info[1].split(', ');

        let car = {};

        for (const info of carInfo) {
            const key = info.split(': ')[0];
            const value = info.split(': ')[1];
            car[key] = value;
        }
        garage[garageNumber].push(car);
    }

    Object.keys(garage)
        .forEach(currentGarage => {
            console.log(`Garage № ${currentGarage}`);
            garage[currentGarage].forEach(car => {
                const result = Object.keys(car)
                    .map(key => key + ' - ' + car[key])
                    .join(', ');
                console.log(`--- ${result}`)
            });
        })
}

// solve(['1 - color: blue, fuel type: diesel',
//     '1 - color: red, manufacture: Audi',
//     '2 - fuel type: petrol',
//     '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

solve(['1 - color: green, fuel type: petrol', 
    '1 - color: dark red, manufacture: WV', 
    '2 - fuel type: diesel', 
    '3 - color: dark blue, fuel type: petrol']);