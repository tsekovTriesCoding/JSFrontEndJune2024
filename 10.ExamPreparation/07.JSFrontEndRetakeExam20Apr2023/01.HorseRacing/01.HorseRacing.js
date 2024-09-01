function solve(input) {
    const horses = input.shift().split("|");

    let line = input.shift();

    while (line !== "Finish") {
        const lineInfo = line.split(" ");
        const command = lineInfo.shift();

        switch (command) {
            case "Retake":
                const overtakingHorse = lineInfo.shift();
                const overtakenHorse = lineInfo.shift();

                const overtakingHorseIndex = horses.indexOf(overtakingHorse);
                const overtakenHorseIndex = horses.indexOf(overtakenHorse);

                if (overtakingHorseIndex < overtakenHorseIndex) {
                    horses[overtakingHorseIndex] = overtakenHorse;
                    horses[overtakenHorseIndex] = overtakingHorse;

                    console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
                }
                break;
            case "Trouble":
                const troubledHorseName = lineInfo.shift();
                const troubledHorseIndex = horses.indexOf(troubledHorseName);

                if (troubledHorseIndex > 0) {
                    const prevHorse = horses[troubledHorseIndex - 1];
                    horses[troubledHorseIndex - 1] = troubledHorseName;
                    horses[troubledHorseIndex] = prevHorse;

                    console.log(`Trouble for ${troubledHorseName} - drops one position.`);
                }
                break;
            case "Rage":
                const horseName = lineInfo.shift();
                const horseIndex = horses.indexOf(horseName);

                horses.splice(horseIndex, 1);
                horses.splice(horseIndex + 2, 0, horseName);

                console.log(`${horseName} rages 2 positions ahead.`);
                break;
            case "Miracle":
                const lastHorse = horses.shift();
                horses.push(lastHorse);

                console.log(`What a miracle - ${lastHorse} becomes first.`);
                break;
        }

        line = input.shift();
    }

    console.log(horses.join("->"));
    console.log(`The winner is: ${horses[horses.length - 1]}`);
}

// solve((['Bella|Alexia|Sugar',

//     'Retake Alexia Sugar',

//     'Rage Bella',

//     'Trouble Bella',

//     'Finish']));

solve((['Onyx|Domino|Sugar|Fiona',

    'Trouble Onyx',

    'Retake Onyx Sugar',

    'Rage Domino',

    'Miracle',

    'Finish']));

// solve((['Fancy|Lilly',

//     'Retake Lilly Fancy',

//     'Trouble Lilly',

//     'Trouble Lilly',

//     'Finish',

//     'Rage Lilly']));