function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const ulElement = document.getElementById('commits');

    fetch('https://api.github.com/repos/' + username + `/` + repo + '/commits')
        .then((response) => response.json())
        .then((commits) => {
            console.log(commits);
            if (commits.hasOwnProperty('status')) {
                throw ({
                    status: commits.status,
                    message: commits.message,
                });
            }
            commits.forEach(commit => {
                const liElement = document.createElement('li');
                liElement.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
                ulElement.appendChild(liElement);
            });
        }).catch((err) => {
            console.log(err);
            const liElement = document.createElement('li');
            liElement.textContent = `Error: ${err.status} (${err.message})`;
            ulElement.appendChild(liElement);
        });
}