function solve(wordsInput, templatesInput) {
    const words = wordsInput.split(", ");
    const templates = templatesInput.split(" ");

    for (let i = 0; i < templates.length; i++) {
        for (const word of words) {
            if (templates[i].includes("*") && templates[i].length == word.length) {
                templates[i] = word;
            }
        }

    }

    console.log(templates.join(" "));
}

function fancySolve(wordsInput, templates) {
    const words = wordsInput.split(", ");

    const matches = templates.matchAll(/\*+/g);
    for (const match of matches) {
        const word = words.find(w => w.length === match[0].length);
        templates = templates.replace(match[0], word);
    }

    console.log(templates);
}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');

fancySolve('great', 'softuni is ***** place for learning new programming languages');
fancySolve('great, learning', 'softuni is ***** place for ******** new programming languages');

