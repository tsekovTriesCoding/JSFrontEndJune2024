function solve(points) {
    x1 = points[0];
    y1 = points[1];
    x2 = points[2];
    y2 = points[3];

    let isValidDistance = getIsValidDistance(x1, y1, 0, 0);

    if (isValidDistance) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    isValidDistance = getIsValidDistance(x2, y2, 0, 0);

    if (isValidDistance) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    isValidDistance = getIsValidDistance(x1, y1, x2, y2);

    if (isValidDistance) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function getIsValidDistance(x1, y1, x2, y2) {
        const result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return Number.isInteger(result);
    }

}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);