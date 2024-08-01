function solve(string, count) {
    const repeatedString = getRepeatedString(string, count);

    console.log(repeatedString);

    function getRepeatedString(string, count) {
        return string.repeat(count);
    }
}

solve("abc", 3);
solve("String", 2);