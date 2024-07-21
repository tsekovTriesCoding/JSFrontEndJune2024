function solve(age) {
    let output;

    if (age >= 0 && age <= 2) {
        output = "baby";
    } else if (age >= 3 && age <= 13) {
        output = "child";
    } else if (age >= 14 && age <= 19) {
        output = "teenager";
    } else if (age >= 20 && age <= 65) {
        output = "adult";
    } else if (age >= 66) {
        output = "elder";
    } else {
        output = "out of bounds";
    }

    console.log(output);
}

solve(20);
solve(2);
solve(100);
solve(-1);