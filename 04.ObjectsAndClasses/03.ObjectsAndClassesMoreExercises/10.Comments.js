function solve(input) {
    let articles = {};
    let users = [];

    for (const line of input) {
        if (line.startsWith('user')) {
            const user = line.split('user ')[1];
            users.push(user);
        } else if (line.startsWith('article')) {
            const article = line.split('article ')[1];

            articles[article] = [];
        } else if (line.includes('posts on')) {
            const info = line.split(': ');
            const [username, article] = info[0].split(' posts on ');
            const [commentTitle, commentContent] = info[1].split(', ');

            if (users.includes(username) && articles.hasOwnProperty(article)) {
                let user = { [username]: `--- From user ${username}: ${commentTitle} - ${commentContent}` };

                articles[article].push(user);
            }
        }
    }

    Object.entries(articles)
        .sort((a1, a2) => a2[1].length - a1[1].length)
        .forEach(article => {
            console.log(`Comments on ${article[0]}`);

            article[1]
                .sort((u1, u2) => Object.keys(u1)[0].localeCompare(Object.keys(u2)[0]))
                .forEach(comment => {
                    Object.values(comment).forEach(c => console.log(c));
                })
        })
}

solve(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books', 'article Movies',
    'article Shopping', 'user someUser',
    'user uSeR4', 'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much']);

// solve(['user Mark',
//     'Mark posts on someArticle: NoTitle, stupidComment',
//     'article Bobby',
//     'article Steven',
//     'user Liam', 'user Henry',
//     'Mark posts on Bobby: Is, I do really like them',
//     'Mark posts on Steven: title, Run',
//     'someUser posts on Movies: Like']);