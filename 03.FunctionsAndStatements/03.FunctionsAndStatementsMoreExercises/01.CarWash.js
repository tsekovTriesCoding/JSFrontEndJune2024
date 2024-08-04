function solve(commands) {
    let cleanPerecentage = getCleanPercentage(commands);

    console.log(`The car is ${cleanPerecentage}% clean.`);

    function getCleanPercentage(commands) {
        let cleanPerecentage = 0;

        for (const command of commands) {
            switch (command) {
                case "soap":
                    cleanPerecentage += 10;
                    break;
                case "water":
                    cleanPerecentage *= 1.2;
                    break;
                case "vacuum cleaner":
                    cleanPerecentage *= 1.25;
                    break;
                case "mud":
                    cleanPerecentage *= 0.9;
                    break;
            }
        }

        return cleanPerecentage.toFixed(2);
    }
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);