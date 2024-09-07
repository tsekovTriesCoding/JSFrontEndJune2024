function solve(input) {
    const numberOfHeroes = input.shift();
    let heroes = {};

    for (let i = 0; i < numberOfHeroes; i++) {
        const [name, superpower, energy] = input.shift().split("-");

        if (energy > 100) {
            energy = 100;
        }

        heroes[name] = { superpower, energy: Number(energy) };
    }

    let command = input.shift();

    while (command !== "Evil Defeated!") {
        if (command.includes("Use Power")) {
            let [, name, superpowerToPerform, energyRequired] = command.split(" * ");
            trainingEnergy = Number(energyRequired);

            if (heroes[name].superpower.includes(superpowerToPerform) && heroes[name].energy >= energyRequired) {
                heroes[name].energy -= energyRequired;

                console.log(`${name} has used ${superpowerToPerform} and now has ${heroes[name].energy} energy!`);
            } else {
                console.log(`${name} is unable to use ${superpowerToPerform} or lacks energy!`);

            }
        } else if (command.includes("Train")) {
            let [, name, trainingEnergy] = command.split(" * ");
            trainingEnergy = Number(trainingEnergy);

            if (heroes[name].energy < 100) {
                let gainedEnergy = trainingEnergy;
                const energyBeforeTraining = heroes[name].energy;
                heroes[name].energy += trainingEnergy;

                if (heroes[name].energy > 100) {
                    heroes[name].energy = 100;
                    gainedEnergy = 100 - energyBeforeTraining;
                }

                console.log(`${name} has trained and gained ${gainedEnergy} energy!`);
            } else {
                console.log(`${name} is already at full energy!`);
            }
        } else if (command.includes("Learn")) {
            let [, name, newSuperpower] = command.split(" * ");

            if (heroes[name].superpower.includes(newSuperpower)) {
                console.log(`${name} already knows ${newSuperpower}.`);
            } else {
                heroes[name].superpower += `,${newSuperpower}`;
                console.log(`${name} has learned ${newSuperpower}!`);
            }
        }

        command = input.shift();
    }

    Object.entries(heroes).forEach(entry => {
        const superpowers = entry[1].superpower.split(",");

        console.log(`Superhero: ${entry[0]}
- Superpowers: ${superpowers.join(", ")}
- Energy: ${entry[1].energy}`);
    });
}



// solve(([
//     "3",

//     "Iron Man-Repulsor Beams,Flight-80",

//     "Thor-Lightning Strike,Hammer Throw-10",

//     "Hulk-Super Strength-60",

//     "Use Power * Iron Man * Flight * 30",

//     "Train * Thor * 20",

//     "Train * Hulk * 50",

//     "Learn * Hulk * Thunderclap",

//     "Use Power * Hulk * Thunderclap * 70",

//     "Evil Defeated!"

// ]));

// solve(([ 

//         "2", 

//         "Iron Man-Repulsor Beams,Flight-20", 

//         "Thor-Lightning Strike,Hammer Throw-100", 

//         "Train * Thor * 20", 

//         "Use Power * Iron Man * Repulsor Beams * 30", 

//         "Evil Defeated!" 

//     ]) );

solve(([
    "2",

    "Iron Man-Repulsor Beams,Flight-100",

    "Thor-Lightning Strike,Hammer Throw-50",

    "Train * Thor * 20",

    "Learn * Thor * Hammer Throw",

    "Use Power * Iron Man * Repulsor Beams * 30",

    "Evil Defeated!"
]));
