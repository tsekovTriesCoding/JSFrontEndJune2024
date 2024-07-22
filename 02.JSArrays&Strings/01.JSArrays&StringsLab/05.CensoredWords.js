function solve(text, word) {
    let censored = text.replace(word, ('*').repeat(word.length))

    while (censored.includes(word)) {
        censored = censored.replace(word, ('*').repeat(word.length))
    }

    console.log(censored);
}

solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');
solve('Find the hidden word when hidden', 'hidden')