function solve(input) {
    let classes = {};

    for (const student of input) {
        const studentInfo = student.split(', ');
        const name = studentInfo[0].split(': ')[1];
        const grade = studentInfo[1].split(': ')[1];
        const avgScore = Number(studentInfo[2].split(': ')[1]);

        if (avgScore < 3) {
            continue;
        }

        if (classes.hasOwnProperty(grade)) {
            classes[grade].push({ name, avgScore });
        } else {
            classes[grade] = [{ name, avgScore }];
        }
    }

    Object.keys(classes)
        .forEach(cl => {
            const studentsNames = classes[cl]
                .map(student => student.name)
                .join(', ');

            const avgAnnualScoreOfClass = (classes[cl].reduce(
                (accumulator, currentValue) => accumulator + currentValue.avgScore,
                0,
            ) / classes[cl].length).toFixed(2);


            console.log(`${Number(cl) + 1} Grade
List of students: ${studentsNames}
Average annual score from last year: ${avgAnnualScoreOfClass}\n`);;
        });
}

// solve(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);

solve([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',

    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',

    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',

    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',

    'Student name: John, Grade: 9, Graduated with an average score: 2.90',

    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',

    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]);