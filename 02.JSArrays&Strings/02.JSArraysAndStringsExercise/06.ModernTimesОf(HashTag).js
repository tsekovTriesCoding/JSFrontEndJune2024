function solve(input) {
    const pattern = /#(?<word>[A-Za-z]+)/g;

    const matches = input.matchAll(pattern);
    for (const match of matches) {

        console.log(match.groups.word);
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');