function solve(input) {
    const wordsToChekFor = input[0];

    let words = {};

    for (const word of wordsToChekFor.split(" ")) {
        words[word] = 0;
    }

    for (let i = 1; i < input.length; i++) {
        const currentString = input[i];

        if (words.hasOwnProperty(currentString)) {
            words[currentString]++;
        }

    }

    Object.entries(words).sort((a, b) => b[1] - a[1])
        .forEach(([word, occurrence]) => console.log(`${word} - ${occurrence}`));
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);

solve([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']);