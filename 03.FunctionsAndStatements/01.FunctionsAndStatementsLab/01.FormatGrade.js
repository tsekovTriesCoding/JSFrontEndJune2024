function solve(grade) {
    const formattedGrade = formatGrade(grade);
    grade = grade.toFixed(2);

    if (grade < 3) {
        grade = 2;
    }

    console.log(`${formattedGrade} (${grade})`);

    function formatGrade(grade) {
        if (grade < 3) {
            return 'Fail';
        } else if (grade < 3.5) {
            return 'Poor';
        } else if (grade < 4.5) {
            return 'Good';
        } else if (grade < 5.5) {
            return 'Very good';
        } else {
            return 'Excellent';
        }
    }
}



solve(3.33);
solve(4.50);
solve(2.99);