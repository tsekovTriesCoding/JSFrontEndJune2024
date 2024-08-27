function solve(input) {
    const numberOfCharacters = input.shift();
    let posse = {};

    for (let i = 0; i < numberOfCharacters; i++) {
        const currentHeroInfo = input.shift();

        const [heroName, hp, bullets] = currentHeroInfo.split(" ");

        if (hp > 100) {
            hp = 100;
        }

        posse[heroName] = {
            hp,
            bullets,
        }
    }

    let command = input.shift();

    while (command !== "Ride Off Into Sunset") {
        const lineInfo = command.split(" - ");
        const currentCommand = lineInfo[0];
        const heroName = lineInfo[1];

        const currentCharacter = posse[heroName];

        switch (currentCommand) {
            case "FireShot":
                let target = lineInfo[2];
                if (currentCharacter.bullets > 0) {
                    currentCharacter.bullets--;

                    console.log(`${heroName} has successfully hit ${target} and now has ${currentCharacter.bullets} bullets!`);
                } else {
                    console.log(`${heroName} doesn't have enough bullets to shoot at ${target}!`);
                }
                break;
            case "TakeHit":
                const damage = lineInfo[2];
                const attacker = lineInfo[3];

                currentCharacter.hp -= damage;

                if (currentCharacter.hp > 0) {
                    console.log(`${heroName} took a hit for ${damage} HP from ${attacker} and now has ${currentCharacter.hp} HP!`);
                } else {
                    console.log(`${heroName} was gunned down by ${attacker}!`);
                }
                break;
            case "Reload":
                if (currentCharacter.bullets < 6) {
                    const loadedBullets = 6 - currentCharacter.bullets;
                    currentCharacter.bullets = 6;
                    console.log(`${heroName} reloaded ${loadedBullets} bullets!`);
                } else {
                    console.log(`${heroName}'s pistol is fully loaded!`);
                }
                break;
            case "PatchUp":
                const amount = Number(lineInfo[2]);
                if (currentCharacter.hp < 100) {
                    currentCharacter.hp += amount;

                    if (currentCharacter.hp > 100) {
                        currentCharacter.hp = 100;
                    }

                    console.log(`${heroName} patched up and recovered ${amount} HP!`);
                } else {
                    console.log(`${heroName} is in full health!`);
                }
                break;
        }

        command = input.shift();
    }

    Object.entries(posse)
        .filter(character => character[1].hp > 0)
        .forEach(character => {
            console.log(`${character[0]} 
  HP: ${character[1].hp} 
  Bullets: ${character[1].bullets}`);
        });
}

// solve((["2",

//     "Gus 100 0",

//     "Walt 100 6",

//     "FireShot - Gus - Bandit",

//     "TakeHit - Gus - 100 - Bandit",

//     "Reload - Walt",

//     "Ride Off Into Sunset"]));

// solve((["2",

//     "Jesse 100 4",

//     "Walt 100 5",

//     "FireShot - Jesse - Bandit",

//     "TakeHit - Walt - 30 - Bandit",

//     "PatchUp - Walt - 20",

//     "Reload - Jesse",

//     "Ride Off Into Sunset"]));

solve((["2",

    "Gus 100 4",

    "Walt 100 5",

    "FireShot - Gus - Bandit",

    "TakeHit - Walt - 100 - Bandit",

    "Reload - Gus",

    "Ride Off Into Sunset"]));