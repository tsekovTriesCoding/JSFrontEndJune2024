function solve(speed, area) {
    let speedLimit;
    switch (area) {
        case "motorway":
            speedLimit = 130;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "city":
            speedLimit = 50;
            break;
        case "residential":
            speedLimit = 20;
            break;
    }

    let speedDifference = speed - speedLimit;

    let result;
    if (speedDifference <= 0) {
        result = `Driving ${speed} km/h in a ${speedLimit} zone`;
    } else {
        let status;
        if (speedDifference <= 20) {
            status = "speeding";
        } else if (speedDifference <= 40) {
            status = "excessive speeding"
        } else {
            status = "reckless driving"
        }

        result = `The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
    }

    console.log(result);
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');