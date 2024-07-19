function solve(number, ...operations) {

    for (let i = 0; i < operations.length; i++) {
        let currentOperation = operations[i];

        if (currentOperation == "chop") {
            number /= 2;
        } else if (currentOperation == "dice") {
            number = Math.sqrt(number);
        } else if (currentOperation == "spice") {
            number += 1;
        }
        else if (currentOperation == "bake") {
            number *= 3;
        }
        else if (currentOperation == "fillet") {
            number = number - 0.2 * number;
        }

        console.log(number);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');