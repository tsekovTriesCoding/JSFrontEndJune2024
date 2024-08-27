function solve(input) {
    let mysteriousSpell = input.shift();

    let command = input.shift();
    let tokens;
    while (command !== "End") {
        if (command.includes("!")) {
            tokens = command.split("!");
            command = tokens[0];
        }

        switch (command) {
            case "RemoveEven":
                mysteriousSpell = mysteriousSpell.split('').filter((char, index) => index % 2 === 0).join('');
                console.log(mysteriousSpell);
                break;
            case "TakePart":
                const fromIndex = Number(tokens[1]);
                const toIndex = Number(tokens[2]);

                mysteriousSpell = mysteriousSpell.substring(fromIndex, toIndex);

                console.log(mysteriousSpell);
                break; 5
            case "Reverse":
                let subString = tokens[1];

                if (mysteriousSpell.includes(subString)) {
                    mysteriousSpell = mysteriousSpell.replace(subString, "");

                    subString = subString.split("").reverse().join("");

                    mysteriousSpell += subString;

                    console.log(mysteriousSpell);
                } else {
                    console.log("Error");
                }
                break;
        }

        command = input.shift();
    }

    console.log(`The concealed spell is: ${mysteriousSpell}`);
}

solve((["asAsl2adkda2mdaczsa",

    "RemoveEven",

    "TakePart!1!9",

    "Reverse!maz",

    "End"]));

solve((["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",

    "TakePart!31!42",

    "RemoveEven",

    "Reverse!anim",

    "Reverse!sad",

    "End"]));