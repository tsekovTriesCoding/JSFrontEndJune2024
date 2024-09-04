function solve(input) {
    const numberOfPieces = input.shift();

    let pieces = {};

    for (let i = 0; i < numberOfPieces; i++) {
        const [piece, composer, key] = input.shift().split("|");

        pieces[piece] = {
            composer,
            key
        }
    }

    let command = input.shift();

    while (command !== "Stop") {
        const info = command.split("|");

        if (command.includes("Add")) {
            const [piece, composer, key] = [info[1], info[2], info[3]];
            if (pieces[piece]) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = {
                    composer,
                    key,
                }

                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command.includes("Remove")) {
            const pieceToRemove = info[1];

            if (pieces[pieceToRemove]) {
                delete pieces[pieceToRemove];

                console.log(`Successfully removed ${pieceToRemove}!`);
            } else {
                console.log(`Invalid operation! ${pieceToRemove} does not exist in the collection.`);

            }
        } else if (command.includes("ChangeKey")) {
            const [piece, newKey] = [info[1], info[2]];

            if (pieces[piece]) {
                pieces[piece].key = newKey;

                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        command = input.shift();
    }

    Object.keys(pieces)
        .forEach(piece => {
            const [composer, key] = [pieces[piece].composer, pieces[piece].key];

            console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
        });
}

// solve(['3',

//     'Fur Elise|Beethoven|A Minor',

//     'Moonlight Sonata|Beethoven|C# Minor',

//     'Clair de Lune|Debussy|C# Minor',

//     'Add|Sonata No.2|Chopin|B Minor',

//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',

//     'Add|Fur Elise|Beethoven|C# Minor',

//     'Remove|Clair de Lune',

//     'ChangeKey|Moonlight Sonata|C# Major',

//     'Stop'
// ]);

solve(['4',
    'Eine kleine Nachtmusik|Mozart|G Major',

    'La Campanella|Liszt|G# Minor',

    'The Marriage of Figaro|Mozart|G Major',

    'Hungarian Dance No.5|Brahms|G Minor',

    'Add|Spring|Vivaldi|E Major',

    'Remove|The Marriage of Figaro',

    'Remove|Turkish March',

    'ChangeKey|Spring|C Major',

    'Add|Nocturne|Chopin|C# Minor',

    'Stop']);