function solve(input) {
    let courses = {};

    for (const line of input) {
        if (line.includes(':')) {
            const [courseName, capacity] = line.split(': ');

            if (!courses.hasOwnProperty(courseName)) {
                courses[courseName] = { [capacity]: [] }
            } else {
                let currentCourseCapacity = Number(Object.keys(courses[courseName])[0]);
                let newCourse = { [currentCourseCapacity + Number(capacity)]: Object.values(courses[courseName])[0] }
                courses[courseName] = newCourse;
            }

        } else {
            const [userInfo, otherInfo] = line.split(' with email ');
            const [email, courseName] = otherInfo.split(' joins ');
            const user = userInfo.split('[')[0];
            const userCredits = userInfo.split('[')[1].replace(']', '');

            if (courses.hasOwnProperty(courseName)) {
                let currentCourseCapacity = Number(Object.keys(courses[courseName])[0]);

                if (currentCourseCapacity > 0) {
                    const student = { [userCredits]: user + ', ' + email }
                    Object.values(courses[courseName])[0].push(student);
                    let newCourse = { [currentCourseCapacity - 1]: Object.values(courses[courseName])[0] }
                    courses[courseName] = newCourse;
                };
            }
        }
    }

    Object.entries(courses)
        .sort((c1, c2) => Object.values(c2[1])[0].length - Object.values(c1[1])[0].length)
        .forEach(course => {
            Object.entries(course[1])
                .forEach(c => {
                    console.log(`${course[0]}: ${c[0]} places left`)
                    c[1]
                        .sort((s1, s2) => Object.keys(s2)[0] - Object.keys(s1)[0])
                        .forEach(student => {
                            Object.keys(student)
                                .forEach(credits => console.log(`--- ${credits}: ${student[credits]}`))
                        });
                });
        });
}


// solve(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics',
//     'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics',
//     'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore',
//     'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2',
//     'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore',
//     'user007[20] with email user007@user.com joins JSCore',
//     'user700[29] with email user700@user.com joins JSCore',
//     'user900[88] with email user900@user.com joins JSCore'])

solve(['JavaBasics: 15',

    'user1[26] with email user1@user.com joins JavaBasics', 'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5', 'C#Advanced: 5', 'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1', 'JSCore: 8', 'user23[62] with email user23@user.com joins JSCore']);