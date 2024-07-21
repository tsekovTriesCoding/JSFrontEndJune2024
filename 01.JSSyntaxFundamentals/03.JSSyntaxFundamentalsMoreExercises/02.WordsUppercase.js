function solve(input) {
    let words = input.split(/[\W\s]+/).filter(Boolean);

    let ouptut = "";
    for (let i = 0; i < words.length - 1; i++) {
        let currentWord = words[i].toUpperCase();
        ouptut += currentWord + ', ';
    }

    ouptut += words[words.length - 1].toUpperCase();

    console.log(ouptut);
}

solve('Hi, how are you?');
solve('hello');