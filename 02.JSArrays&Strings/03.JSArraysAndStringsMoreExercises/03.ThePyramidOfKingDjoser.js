function solve(base, increment) {
    let stoneRequired = 0;
    let marbleRequired = 0;
    let lapisLazuliRequired = 0;
    let goldRequired = 0;
    let steps = 0;

    while (base - 2 > 0) {
        steps++;
        let currentLayerStone = ((base - 2) ** 2) * increment;
        stoneRequired += currentLayerStone;

        if (steps % 5 === 0) {
            let currentLayerLapisLazuli = ((4 * base) - 4) * increment;
            lapisLazuliRequired += currentLayerLapisLazuli;
        } else {
            let currentLayerMarble = ((4 * base) - 4) * increment;
            marbleRequired += currentLayerMarble;
        }
        
        base -= 2;
    }

    goldRequired = (base ** 2) * increment;
    steps++;
    const totalHeight = Math.floor(steps * increment);

    console.log(`Stone required: ${Math.ceil(stoneRequired)}`);
    console.log(`Marble required: ${Math.ceil(marbleRequired)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired)}`);
    console.log(`Gold required: ${Math.ceil(goldRequired)}`);
    console.log(`Final pyramid height: ${totalHeight}`);
}

solve(11, 1);
solve(11, 0.75);
solve(12, 1);
solve(23, 0.5);