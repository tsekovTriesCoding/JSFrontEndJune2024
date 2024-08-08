function solve(input) {
    let towns = {};

    for (const line of input) {
        const townInfo = line.split(" | ");

        towns[townInfo[0]] = [townInfo[1], townInfo[2]];
    }

    for (const town in towns) {
        const latitude = Number(towns[town][0]).toFixed(2);
        const longitude = Number(towns[town][1]).toFixed(2);
        console.log(`{ town: '${town}', latitude: '${latitude}', longitude: '${longitude}' }`);
    }
}

solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
solve(['Plovdiv | 136.45 | 812.575']);