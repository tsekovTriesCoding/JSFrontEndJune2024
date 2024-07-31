function solve(minedGold) {
    let bitcoinsCount = 0;
    let money = 0;
    let dayOfFirstBoughtBitcoin = -1;
    for (let i = 0; i < minedGold.length; i++) {
        let gramsOfGold = minedGold[i];

        if ((i + 1) % 3 == 0) {
            gramsOfGold *= 0.7;
        }

        money += gramsOfGold * 67.51;

        while (money >= 11949.16) {
            bitcoinsCount++;
            money -= 11949.16;

            if (dayOfFirstBoughtBitcoin == -1) {
                dayOfFirstBoughtBitcoin = i + 1;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsCount}`);

    if (bitcoinsCount > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBoughtBitcoin}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

solve([100, 200, 300]);
solve([50, 100]);
solve([3124.15, 504.212, 2511.124]);