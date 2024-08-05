function solve(array) {
    let phonebook = {};

    for (const record of array) {
        const [name, phone] = record.split(" ");

        phonebook[name] = phone;
    }

    for (const name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`);
    }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);

    solve(['George 0552554',
        'Peter 087587',
        'George 0453112',
        'Bill 0845344']);