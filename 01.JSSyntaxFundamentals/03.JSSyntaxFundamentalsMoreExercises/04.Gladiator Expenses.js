function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let trashedHelmets = 0;
    let trashedSwords = 0;
    let trashedShields = 0;
    let trashedArmor = 0;

    let secondTimeBrokenShield = 0;
    for (let i = 1; i <= lostFights; i++) {

        if (i % 2 == 0) {
            trashedHelmets++;
        }

        if (i % 3 == 0) {
            trashedSwords++;
        }

        if (i % 6 == 0) {
            trashedShields++;
            secondTimeBrokenShield++;
        }

        if (secondTimeBrokenShield == 2 && trashedShields > 0) {
            trashedArmor++;
            secondTimeBrokenShield = 0;
        }
    }

    let totalCost = (trashedHelmets * helmetPrice) + (trashedSwords * swordPrice) + (trashedShields * shieldPrice) + (trashedArmor * armorPrice);

    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`)
}

solve(7, 2, 3, 4, 5);
solve(23, 12.50, 21.50, 40, 200);