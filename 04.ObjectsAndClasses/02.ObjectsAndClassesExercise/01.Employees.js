function solve(input) {
    const employees = {};
    for (const name of input) {
        employees[name] = name.length;
    }

    for (const employee in employees) {
        console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`);
    }
}

solve(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

solve(['Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);