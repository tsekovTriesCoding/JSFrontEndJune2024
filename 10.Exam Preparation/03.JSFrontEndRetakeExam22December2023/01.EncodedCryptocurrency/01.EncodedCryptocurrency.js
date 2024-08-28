function solve(input) {
    let encodedMessage = input.shift();

    let command = input.shift();

    while (command !== "Buy") {
        if (command.includes("TakeEven")) {
            encodedMessage = encodedMessage.split('').filter((char, index) => index % 2 === 0).join('');
            console.log(encodedMessage);
        } else if (command.includes("ChangeAll")) {
            const substring = command.split("?")[1];
            const replacement = command.split("?")[2];

            while (encodedMessage.includes(substring)) {
                encodedMessage = encodedMessage.replace(substring, replacement);
            }
            console.log(encodedMessage);
        } else if (command.includes("Reverse")) {
            let substring = command.split("?")[1];

            if (encodedMessage.includes(substring)) {
                encodedMessage = encodedMessage.replace(substring, "");
                substring = substring.split("").reverse().join("");
                encodedMessage += substring;
                console.log(encodedMessage);
            } else {
                console.log("error");
            }
        }


        command = input.shift();
    }

    console.log(`The cryptocurrency is: ${encodedMessage}`);
}

// solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",

//     "TakeEven",

//     "Reverse?!nzahc",

//     "ChangeAll?m?g",

//     "Reverse?adshk",

//     "ChangeAll?z?i",

//     "Buy"]));

solve((["PZDfA2PkAsakhnefZ7aZ",

    "TakeEven",

    "TakeEven",

    "TakeEven",

    "ChangeAll?Z?X",

    "ChangeAll?A?R",

    "Reverse?PRX",

    "Buy"]));