function solve(firstName, lastName, hairColor) {
    const object = {
        name: firstName,
        lastName,
        hairColor
    };

    const json = JSON.stringify(object);

    console.log(json);
}

solve('George', 'Jones', 'Brown');
solve('Peter', 'Smith','Blond');