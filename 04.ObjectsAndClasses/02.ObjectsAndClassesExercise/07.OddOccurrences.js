function solve(input) {
    let words = {};

    for (const word of input.split(" ")) {
        if (!words.hasOwnProperty(word.toLowerCase())) {
            words[word.toLowerCase()] = 1;
        } else {
            words[word.toLowerCase()]++;
        }
    }

    let result = [];
    Object.entries(words)
        .filter(word => word[1] % 2 !== 0)
        .forEach(word => result.push(word[0]));

        console.log(result.join(" "));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');