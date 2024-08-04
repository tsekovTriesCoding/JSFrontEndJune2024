function solve(number) {
    const helix = ["AT", "CG", "TT", "AG", "GG"];

    let starsCount = 2;

    let dnaIndex = 0;
    let normalFlow = true;

    while (number > 0) {
        if (dnaIndex == 5) {
            dnaIndex = 0;
        }

        if (starsCount < 0) {
            starsCount = 1
        } else if (starsCount > 2) {
            starsCount = 1;
            normalFlow = true;
        }
        if (starsCount == 2) {
            console.log("*".repeat(starsCount) + helix[dnaIndex] + "*".repeat(starsCount));
        } else if (starsCount == 1) {
            let letters = helix[dnaIndex].split("");
            console.log("*" + letters[0] + "--" + letters[1] + "*");
        } else {
            let letters = helix[dnaIndex].split("");
            console.log(letters[0] + "----" + letters[1]);
            normalFlow = false;
        }

        if (normalFlow) {
            starsCount--;
        } else {
            starsCount++;
        }

        dnaIndex++;

        number--;
    }
}

solve(4);
solve(10);