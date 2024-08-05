function solve(string) {
    const object = JSON.parse(string);

    Object.keys(object).forEach(key => console.log(`${key}: ${object[key]}`));
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');