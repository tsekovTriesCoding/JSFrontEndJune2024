function solve(input) {
    const elementsCount = input.shift();
    let assignees = {};

    for (let i = 0; i < elementsCount; i++) {
        const lineInfo = input.shift().split(":");
        const name = lineInfo[0];
        const taskId = lineInfo[1];
        const title = lineInfo[2];
        const status = lineInfo[3];
        const estimatedPoints = Number(lineInfo[4]);

        if (!assignees[name]) {
            assignees[name] = [{
                taskId,
                title,
                status,
                estimatedPoints,
            }];
        } else {
            assignees[name].push({
                taskId,
                title,
                status,
                estimatedPoints,
            });
        }
    }

    while (input.length > 0) {
        const lineInfo = input.shift().split(":");
        const command = lineInfo[0];

        switch (command) {
            case "Add New":
                const name = lineInfo[1];
                const taskId = lineInfo[2];
                const title = lineInfo[3];
                const status = lineInfo[4];
                const estimatedPoints = Number(lineInfo[5]);

                if (assignees[name]) {
                    assignees[name].push({
                        taskId,
                        title,
                        status,
                        estimatedPoints,
                    });
                } else {
                    console.log(`Assignee ${name} does not exist on the board!`);
                }
                break;
            case "Change Status":
                const assignee = lineInfo[1]
                const taskToFindId = lineInfo[2];
                const newStatus = lineInfo[3];
                if (assignees[assignee]) {
                    const taskTochange = assignees[assignee].find(e => e.taskId == taskToFindId);

                    if (taskTochange) {
                        taskTochange.status = newStatus;
                    } else {
                        console.log(`Task with ID ${taskToFindId} does not exist for ${assignee}!`);
                    }
                } else {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                }
                break;
            case "Remove Task":
                const assigneeToCheck = lineInfo[1]
                if (assignees[assigneeToCheck]) {
                    const index = Number(lineInfo[2]);

                    if (index < 0 || index >= assignees[assigneeToCheck].length) {
                        console.log("Index is out of range!");

                    } else {
                        assignees[assigneeToCheck].splice(index, 1);
                    }

                } else {
                    console.log(`Assignee ${assigneeToCheck} does not exist on the board!`);
                }
                break;
        }
    }

    const toDoTasksTotalPoints = Object.values(assignees)
        .reduce((sum, record) => {
            for (const rec of record) {
                if (rec.status === "ToDo") {
                    sum += rec.estimatedPoints;
                }
            }
            return sum;
        }, 0);

    console.log(`ToDo: ${toDoTasksTotalPoints}pts`);


    const inProgressTotalPoints = Object.values(assignees)
        .reduce((sum, record) => {
            for (const rec of record) {
                if (rec.status === "In Progress") {
                    sum += rec.estimatedPoints;
                }
            }
            return sum;
        }, 0);

    console.log(`In Progress: ${inProgressTotalPoints}pts`);

    const codeReviewTotalpoints = Object.values(assignees)
        .reduce((sum, record) => {
            for (const rec of record) {
                if (rec.status === "Code Review") {
                    sum += rec.estimatedPoints;
                }
            }
            return sum;
        }, 0);

    console.log(`Code Review: ${codeReviewTotalpoints}pts`);

    const doneTotalpoints = Object.values(assignees)
        .reduce((sum, record) => {
            for (const rec of record) {
                if (rec.status === "Done") {
                    sum += rec.estimatedPoints;
                }
            }
            return sum;
        }, 0);

    console.log(`Done Points: ${doneTotalpoints}pts`);

    doneTotalpoints >= toDoTasksTotalPoints + inProgressTotalPoints + codeReviewTotalpoints ?
        console.log("Sprint was successful!") : console.log("Sprint was unsuccessful...");
}

// solve(['5',

//     'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',

//     'Mariya:BOP-1210:Fix Major Bug:In Progress:3',

//     'Peter:BOP-1211:POC:Code Review:5',

//     'Georgi:BOP-1212:Investigation Task:Done:2',

//     'Mariya:BOP-1213:New Account Page:In Progress:13',

//     'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',

//     'Change Status:Peter:BOP-1290:ToDo',

//     'Remove Task:Mariya:1',

//     'Remove Task:Joro:1',
// ]);

solve([

    '4',

    'Kiril:BOP-1213:Fix Typo:Done:1',

    'Peter:BOP-1214:New Products Page:In Progress:2',

    'Mariya:BOP-1215:Setup Routing:ToDo:8',

    'Georgi:BOP-1216:Add Business Card:Code Review:3',

    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',

    'Change Status:Georgi:BOP-1216:Done',

    'Change Status:Will:BOP-1212:In Progress',

    'Remove Task:Georgi:3',

    'Change Status:Mariya:BOP-1215:Done',

]);