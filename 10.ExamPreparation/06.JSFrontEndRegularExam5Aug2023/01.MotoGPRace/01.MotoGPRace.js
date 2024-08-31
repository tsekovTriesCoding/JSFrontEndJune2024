function solve(input) {
    const ridersCount = input.shift();
    let riders = {};

    for (let i = 0; i < ridersCount; i++) {
        const [name, fuelCapacity, position] = input.shift().split("|");

        riders[name] = { fuelCapacity, position }
    }

    let command = input.shift();

    while (command !== "Finish") {
        const info = command.split(" - ");
        if (command.includes("StopForFuel")) {
            const rider = info[1];
            const minimumFuel = Number(info[2]);
            const changedPosition = Number(info[3]);

            if (riders[rider].fuelCapacity < minimumFuel) {
                riders[rider].position = changedPosition;

                console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
            } else {
                console.log(`${rider} does not need to stop for fuel!`);

            }
        } else if (command.includes("Overtaking")) {
            const rider1 = info[1];
            const rider2 = info[2];

            if (riders[rider1].position < riders[rider2].position) {
                [riders[rider1].position, riders[rider2].position] = [riders[rider2].position, riders[rider1].position];
                console.log(`${rider1} overtook ${rider2}!`);
            }

        } else if (command.includes("EngineFail")) {
            const rider = info[1];
            const lapsLeft = Number(info[2]);

            delete riders[rider];

            console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
        }

        command = input.shift();
    }

    Object.entries(riders)
        .forEach(rider => {
            console.log(`${rider[0]} 
  Final position: ${rider[1].position}`);
        });
}

// solve((["3",

//     "Valentino Rossi|100|1",

//     "Marc Marquez|90|2",

//     "Jorge Lorenzo|80|3",

//     "StopForFuel - Valentino Rossi - 50 - 1",

//     "Overtaking - Marc Marquez - Jorge Lorenzo",

//     "EngineFail - Marc Marquez - 10",

//     "Finish"]));

solve((["4",

    "Valentino Rossi|100|1",

    "Marc Marquez|90|3",

    "Jorge Lorenzo|80|4",

    "Johann Zarco|80|2",

    "StopForFuel - Johann Zarco - 90 - 5",

    "Overtaking - Marc Marquez - Jorge Lorenzo",

    "EngineFail - Marc Marquez - 10",

    "Finish"]));