function solve(input) {
    const baristaCount = input.shift();
    let team = {};

    for (let i = 0; i < baristaCount; i++) {
        const [name, shift, coffeeType] = input.shift().split(' ');

        team[name] = {
            shift,
            coffeeType: coffeeType.split(','),
        }
    }

    let command = input.shift();

    while (command !== "Closed") {
        const info = command.split(' / ');
        const realCommand = info.shift();

        const baristaName = info[0];
        const barista = team[baristaName];

        let baristaShift;
        let baristaCoffeeType;
        switch (realCommand) {
            case "Prepare":
                baristaShift = info[1];
                baristaCoffeeType = info[2];

                if (barista.shift === baristaShift && barista.coffeeType.includes(baristaCoffeeType)) {
                    console.log(`${baristaName} has prepared a ${baristaCoffeeType} for you!`);
                } else {
                    console.log(`${baristaName} is not available to prepare a ${baristaCoffeeType}.`);
                }
                break;
            case "Change Shift":
                baristaShift = info[1];
                barista.shift = baristaShift;

                console.log(`${baristaName} has updated his shift to: ${baristaShift}`);
                break;
            case "Learn":
                newCoffeeType = info[1];

                if (barista.coffeeType.includes(newCoffeeType)) {
                    console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
                } else {
                    barista.coffeeType.push(newCoffeeType);
                    console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
                }
                break;

        }

        command = input.shift();
    }

    Object.keys(team).forEach(barista => console.log(`Barista: ${barista}, Shift: ${team[barista].shift}, Drinks: ${team[barista].coffeeType.join(', ')}`));
}

solve([
    '3',

    'Alice day Espresso,Cappuccino',

    'Bob night Latte,Mocha',

    'Carol day Americano,Mocha',

    'Prepare / Alice / day / Espresso',

    'Change Shift / Bob / night',

    'Learn / Carol / Latte',

    'Learn / Bob / Latte',

    'Prepare / Bob / night / Latte',

    'Closed']);