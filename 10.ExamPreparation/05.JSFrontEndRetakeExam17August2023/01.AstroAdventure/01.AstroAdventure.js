function solve(input) {
    const astronautsCount = input.shift();

    let team = {};

    for (let i = 0; i < astronautsCount; i++) {
        const astronautInfo = input.shift().split(" ");
        const name = astronautInfo[0];
        const oxygenLevel = Number(astronautInfo[1]);
        const energyReserve = Number(astronautInfo[2]);

        team[name] = { oxygenLevel, energyReserve };
    }

    let command = input.shift();

    while (command !== "End") {
        const astronautName = command.split(" - ")[1];
        const amount = Number(command.split(" - ")[2]);

        if (command.includes("Explore")) {
            if (team[astronautName].energyReserve >= amount) {
                team[astronautName].energyReserve -= amount;

                const energyLeft = team[astronautName].energyReserve;
                console.log(`${astronautName} has successfully explored a new area and now has ${energyLeft} energy!`);
            } else {
                console.log(`${astronautName} does not have enough energy to explore!`);
            }
        } else if (command.includes("Refuel")) {
            const fuelAmountBeforeRefuel = team[astronautName].energyReserve;
            team[astronautName].energyReserve += amount;
            let amountRecovered = amount;

            if (team[astronautName].energyReserve > 200) {
                team[astronautName].energyReserve = 200;
                amountRecovered = 200 - fuelAmountBeforeRefuel;
            }

            console.log(`${astronautName} refueled their energy by ${amountRecovered}!`);
        } else if (command.includes("Breathe")) {
            const oxygenLevelAmountBeforeBreathe = team[astronautName].oxygenLevel;
            team[astronautName].oxygenLevel += amount;
            let amountRecovered = amount;

            if (team[astronautName].oxygenLevel > 100) {
                team[astronautName].oxygenLevel = 100;
                amountRecovered = 100 - oxygenLevelAmountBeforeBreathe;
            }

            console.log(`${astronautName} took a breath and recovered ${amountRecovered} oxygen!`);
        }

        command = input.shift();
    }

    Object.entries(team)
        .forEach(astronaut => {
            console.log(`Astronaut: ${astronaut[0]}, Oxygen: ${astronaut[1].oxygenLevel}, Energy: ${astronaut[1].energyReserve}`);
        });
}

// solve(['3',

//     'John 50 120',

//     'Kate 80 180',

//     'Rob 70 150',

//     'Explore - John - 50',

//     'Refuel - Kate - 30',

//     'Breathe - Rob - 20',

//     'End']);

solve(['4',

    'Alice 60 100',

    'Bob 40 80',

    'Charlie 70 150',

    'Dave 80 180',

    'Explore - Bob - 60',

    'Refuel - Alice - 30',

    'Breathe - Charlie - 50',

    'Refuel - Dave - 40',

    'Explore - Bob - 40',

    'Breathe - Charlie - 30',

    'Explore - Alice - 40',

    'End']);