function solve(input) {
    let leaderWithArmy = {};

    for (const line of input) {

        if (line.endsWith('arrives')) {
            const leaderInfo = line.split(' arrives');
            const leaderName = leaderInfo[0];
            leaderWithArmy[leaderName] = {
                armiesName: {},
                totalArmyCount: 0
            };
        } else if (line.includes(':')) {
            const info = line.split(': ');
            const leaderName = info[0];

            if (leaderWithArmy.hasOwnProperty(leaderName)) {
                const armyName = info[1].split(', ')[0];
                const armyCount = Number(info[1].split(', ')[1]);

                leaderWithArmy[leaderName].armiesName[armyName] = armyCount;
                leaderWithArmy[leaderName].totalArmyCount += armyCount;
            }
        } else if (line.includes('+')) {
            const armyInfo = line.split(' + ');
            const armyNameToFind = armyInfo[0];
            const armyCountToAdd = Number(armyInfo[1]);

            Object.keys(leaderWithArmy).forEach(leader => {
                for (let army in leaderWithArmy[leader]) {
                    if (leaderWithArmy[leader][army].hasOwnProperty(armyNameToFind)) {
                        leaderWithArmy[leader].armiesName[armyNameToFind] += armyCountToAdd;
                        leaderWithArmy[leader].totalArmyCount += armyCountToAdd;
                    }
                }
            });
        } else if (line.endsWith('defeated')) {
            const leaderInfo = line.split(' defeated');
            const leaderName = leaderInfo[0];

            delete leaderWithArmy[leaderName];
        }
    }

    Object.entries(leaderWithArmy)
        .sort((l1, l2) => l2[1].totalArmyCount - l1[1].totalArmyCount)
        .forEach(leader => {
            console.log(`${leader[0]}: ${leader[1].totalArmyCount}`);
            Object.values(leader[1]).forEach(armyInfo =>
                Object.entries(armyInfo)
                    .sort((a1, a2) => a2[1] - a1[1])
                    .forEach(a =>
                        console.log(`>>> ${a[0]} - ${a[1]}`)
                    )
            );
        });
}

solve(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000', 'Juard + 1350',
    'Britox + 4500', 'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'])

solve(['Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423'])