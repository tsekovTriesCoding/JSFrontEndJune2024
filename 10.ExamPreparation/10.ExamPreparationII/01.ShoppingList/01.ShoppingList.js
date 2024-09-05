function solve(input) {
    let initilaListOfGroceries = input.shift().split("!");

    let command = input.shift();

    while (command !== "Go Shopping!") {
        const lineInfo = command.split(" ");
        const item = lineInfo[1];

        if (command.includes("Urgent")) {
            if (!initilaListOfGroceries.includes(item)) {
                initilaListOfGroceries.unshift(item);
            }
        } else if (command.includes("Unnecessary")) {
            if (initilaListOfGroceries.includes(item)) {
                initilaListOfGroceries = initilaListOfGroceries.filter(i => i !== item);
            }
        } else if (command.includes("Correct ")) {
            const newItem = lineInfo[2];

            if (initilaListOfGroceries.includes(item)) {
                const indexOfOldItem = initilaListOfGroceries.indexOf(item);
                initilaListOfGroceries.splice(indexOfOldItem, 1, newItem);
            }
        } else if (command.includes("Rearrange ")) {
            if (initilaListOfGroceries.includes(item)) {
                const indexOfItem = initilaListOfGroceries.indexOf(item);
                initilaListOfGroceries.splice(indexOfItem, 1);
                initilaListOfGroceries.push(item);
            }
        }

        command = input.shift();
    }

    console.log(initilaListOfGroceries.join(", "));
}

solve((["Tomatoes!Potatoes!Bread",

    "Unnecessary Milk",

    "Urgent Tomatoes",

    "Go Shopping!"]));

solve(["Milk!Pepper!Salt!Water!Banana",

    "Urgent Salt",

    "Unnecessary Grapes",

    "Correct Pepper Onion", "Rearrange Grapes",

    "Correct Tomatoes Potatoes",

    "Go Shopping!"]);