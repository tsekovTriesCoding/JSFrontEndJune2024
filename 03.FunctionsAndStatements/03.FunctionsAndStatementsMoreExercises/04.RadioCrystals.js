function solve(numbers) {
    let targetThickness = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        let chunkThickness = numbers[i];
        let cutOperationsCount = 0;
        let lapOperationsCount = 0;
        let grindOperationsCount = 0;
        let etchOperationsCount = 0;
        let xRayOperationsCount = 0;

        console.log(`Processing chunk ${chunkThickness} microns`);

        ({ chunkThickness, cutOperationsCount } = doChunkOperation(chunkThickness, cutOperationsCount));

        if (cutOperationsCount > 0) {
            console.log(`Cut x${cutOperationsCount}`);
            console.log("Transporting and washing");
        }

        ({ chunkThickness, lapOperationsCount } = doLapOperation(chunkThickness, lapOperationsCount));

        if (lapOperationsCount > 0) {
            console.log(`Lap x${lapOperationsCount}`);
            console.log("Transporting and washing");
        }

        ({ chunkThickness, grindOperationsCount } = doGrindOperation(chunkThickness, grindOperationsCount));

        if (grindOperationsCount > 0) {
            console.log(`Grind x${grindOperationsCount}`);
            console.log("Transporting and washing");
        }

        ({ chunkThickness, etchOperationsCount } = doEtchOperation(chunkThickness, etchOperationsCount));

        if (etchOperationsCount > 0) {
            console.log(`Etch x${etchOperationsCount}`);
            console.log("Transporting and washing");
        }

        ({ chunkThickness, xRayOperationsCount } = doXRayOperation(chunkThickness, xRayOperationsCount));

        if (xRayOperationsCount == 1) {
            console.log(`X-ray x${xRayOperationsCount}`);
        }

        if (chunkThickness === targetThickness) {
            console.log(`Finished crystal ${targetThickness} microns`)
        }
    }

    function doXRayOperation(chunkThickness, xRayOperationsCount) {
        if (chunkThickness < targetThickness && xRayOperationsCount < 1) {
            chunkThickness++;
            xRayOperationsCount++;
        }
        return { chunkThickness, xRayOperationsCount };
    }

    function doEtchOperation(chunkThickness, etchOperationsCount) {
        while (chunkThickness - 2 >= targetThickness - 1) {
            chunkThickness -= 2;
            etchOperationsCount++;
            chunkThickness = Math.floor(chunkThickness);
        }
        return { chunkThickness, etchOperationsCount };
    }

    function doGrindOperation(chunkThickness, grindOperationsCount) {
        while (chunkThickness - 20 >= targetThickness) {
            chunkThickness -= 20;
            grindOperationsCount++;
            chunkThickness = Math.floor(chunkThickness);
        }
        return { chunkThickness, grindOperationsCount };
    }

    function doLapOperation(chunkThickness, lapOperationsCount) {
        while (chunkThickness * 0.8 >= targetThickness) {
            chunkThickness *= 0.8;
            lapOperationsCount++;
            chunkThickness = Math.floor(chunkThickness);
        }
        return { chunkThickness, lapOperationsCount };
    }

    function doChunkOperation(chunkThickness, cutOperationsCount) {
        while (chunkThickness / 4 >= targetThickness) {
            chunkThickness /= 4;
            cutOperationsCount++;
            chunkThickness = Math.floor(chunkThickness);
        }
        return { chunkThickness, cutOperationsCount };
    }
}

solve([1375, 50000]);
solve([1000, 4000, 8100]);