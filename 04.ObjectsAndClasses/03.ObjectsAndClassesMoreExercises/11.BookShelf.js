function solve(input) {
    let shelfs = {};

    for (const line of input) {
        if (line.includes('->')) {
            const [id, shelfGenre] = line.split(' -> ');

            if (!shelfs.hasOwnProperty(id)) {
                shelfs[id] = { [shelfGenre]: [] };
            }

        } else {
            const [bookInfo, genre] = line.split(', ');

            Object.entries(shelfs)
                .forEach(shelf => {
                    if (shelf[1].hasOwnProperty(genre)) {
                        shelf[1][genre].push(bookInfo);
                    }
                })
        }
    }

    Object.keys(shelfs)
        .sort((a, b) => Object.entries(shelfs[b])[0][1].length - Object.entries(shelfs[a])[0][1].length)
        .forEach(id => {
            console.log(`${id} ${Object.keys(shelfs[id])}: ${Object.values(shelfs[id])[0].length}`);
            Object.values(shelfs[id]).forEach(values => {
                values.forEach(v => {  console.log(`--> ${v}`); });
            });
        });
}

// solve(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery',
//     '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery',
//     'Hurting Secrets: Dustin Bolt, action',
//     'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance',
//     'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi',
//     'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])

    solve(['1 -> mystery', '2 -> sci-fi',

        'Child of Silver: Bruce Rich, mystery',
        
        'Lions and Rats: Gabe Roads, history',
        
        'Effect of the Void: Shay B, romance',
        
        'Losing Dreams: Gail Starr, sci-fi',
        
        'Name of Earth: Jo Bell, sci-fi']);