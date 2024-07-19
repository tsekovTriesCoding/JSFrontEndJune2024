function solve(countOfPeople, groupType, dayOfWeek) {
    let cost = 0;

    switch (groupType) {
        case "Students":
            if (dayOfWeek == "Friday") {
                cost = 8.45;
            } else if (dayOfWeek == "Saturday") {
                cost = 9.80;
            } else {
                cost = 10.46;
            }

            if (countOfPeople >= 30) {
                cost *= 0.85;
            }
            break;
        case "Business":
            if (dayOfWeek == "Friday") {
                cost = 10.90;
            } else if (dayOfWeek == "Saturday") {
                cost = 15.60;
            } else {
                cost = 16;
            }

            if (countOfPeople >= 100) {
                countOfPeople -= 10;
            }
            break;
        case "Regular":
            if (dayOfWeek == "Friday") {
                cost = 15;
            } else if (dayOfWeek == "Saturday") {
                cost = 20;
            } else {
                cost = 22.50;
            }

            if (countOfPeople >= 10 && countOfPeople <= 20) {
                cost *= 0.95;
            }
            break;
    }

    let totalCost = cost * countOfPeople;

    console.log(`Total price: ${totalCost.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");