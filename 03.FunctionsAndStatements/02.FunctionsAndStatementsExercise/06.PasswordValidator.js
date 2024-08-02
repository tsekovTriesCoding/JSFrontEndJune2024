function solve(password) {
    let isValidLength = validateLength(password);
    let isValidContent = validateContent(password);
    let isValidDigitsCount = validateDigitsCount(password);

    if (isValidLength && isValidContent && isValidDigitsCount) {
        console.log("Password is valid");
    } else {
        if (!isValidLength) {
            console.log("Password must be between 6 and 10 characters");
        }

        if (!isValidContent) {
            console.log("Password must consist only of letters and digits");
        }

        if (!isValidDigitsCount) {
            console.log("Password must have at least 2 digits");
        }
    }

    function validateLength(password) {
        return password.length >= 6 && password.length <= 10;
    }
    
    function validateContent(password) {
        for (let i = 0; i < password.length; i++) {
            let currentChar = password.charAt(i);
    
            if (!currentChar.match(/\d/) && !currentChar.match(/[A-Za-z]+/)) {
                return false;
            }
    
        }
    
        return true;
    }
    
    function validateDigitsCount(password) {
        let digitsCount = 0;
        for (let i = 0; i < password.length; i++) {
            let currentChar = password.charAt(i);
            if (currentChar.match(/\d/)) {
                digitsCount++;
            }
        }
    
        if (digitsCount >= 2) {
            return true;
        } else {
            return false;
        }
    
    }
}

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');