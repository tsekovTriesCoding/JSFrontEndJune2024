function solve(input) {
    let heroes = [];

    for (const line of input) {
        const heroInfo = line.split(" / ");

        const hero = {
            name: heroInfo[0],
            level: Number(heroInfo[1]),
            items: heroInfo[2],
        }

        heroes.push(hero);
    }

    heroes.sort((h1, h2) => h1.level - h2.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
])