function solve(startingYield) {
    let = remainingYield = startingYield;
    let days = 0;
    let spiceCollected = 0;

    while (remainingYield >= 100) {
        days++;
        spiceCollected += remainingYield;

        if (spiceCollected >= 26) {
            spiceCollected -= 26;
        }

        remainingYield -= 10;
    }

    if (spiceCollected >= 26) {
        spiceCollected -= 26;
    }

    console.log(days);
    console.log(spiceCollected);
}

solve(111);
solve(450);