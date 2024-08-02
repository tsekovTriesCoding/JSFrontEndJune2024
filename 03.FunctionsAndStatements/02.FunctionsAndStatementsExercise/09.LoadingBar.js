function solve(number) {

    if (number < 100) {
        let percentSignCount = number.toString().charAt(0);

        const percentSign = "%".repeat(percentSignCount);
        const dots = ".".repeat(10 - percentSignCount);

        console.log(`${number}% [${percentSign}${dots}]`);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
        console.log(`[%%%%%%%%%%]`);
    }
}

solve(30);
solve(50);
solve(100);