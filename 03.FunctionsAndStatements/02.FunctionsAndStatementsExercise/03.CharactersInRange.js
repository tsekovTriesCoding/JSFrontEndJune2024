function solve(char1, char2) {
    let result = getCharsBetween(char1, char2);

    console.log(result);

    function getCharsBetween(char1, char2) {
        let char1ASCII = char1.charCodeAt(0);
        let char2ASCII = char2.charCodeAt(0);
    
        let result = "";
        if (char1ASCII < char2ASCII) {
            for (let i = char1ASCII + 1; i < char2ASCII; i++) {
                result += String.fromCharCode(i) + " ";
            }
        } else {
            for (let i = char2ASCII + 1; i < char1ASCII; i++) {
                result += String.fromCharCode(i) + " ";
            }
        }
    
        return result;
    }
}

solve('a', 'd');
solve('#', ':');
solve('C', '#');