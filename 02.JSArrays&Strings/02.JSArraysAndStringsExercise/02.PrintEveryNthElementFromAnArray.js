function solve(array, n) {
    let nthStepArray = [];
    for (let i = 0; i < array.length; i += n) {
        nthStepArray.push(array[i]);
    }

    return nthStepArray;
}

solve(['5', '20', '31', '4', '20'], 2);
solve(['dsa', 'asd', 'test', 'tset'], 2);
solve(['1', '2', '3', '4', '5'], 6);