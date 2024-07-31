function solve(input) {
    const username = input[0];
    const isLogged = false;
    let loginAttempts = 0;

    for (let i = 1; i < input.length; i++) {
        loginAttempts++;
        const password = [...input[i]].reverse().join('');
        if (password === username) {
            console.log(`User ${username} logged in.`);
            return;
        } else {
            if (loginAttempts === 4) {
                console.log(`User ${username} blocked!`);
                return;
            }

            console.log(`Incorrect password. Try again.`);
        }
    }
}

solve(['Acer', 'login', 'go', 'let me in', 'recA'])
solve(['momo','omom']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);