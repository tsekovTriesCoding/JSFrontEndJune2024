function loadRepos() {
	const usernameInputElement = document.getElementById('username');
	const reposListElement = document.getElementById('repos');

	reposListElement.textContent = '';
	const username = usernameInputElement.value;

	fetch('https://api.github.com/users/' + username + '/repos')
		.then((response) => response.json())
		.then((repos) => {
			if (repos.hasOwnProperty('status')) {
                throw ({
                    status: repos.status,
                    message: repos.message,
                });
            }
			repos.forEach(repo => {
				const aElement = document.createElement('a');
				aElement.href = repo.html_url;
				aElement.textContent = repo.full_name;

				const liElement = document.createElement('li');
				liElement.appendChild(aElement);
				reposListElement.appendChild(liElement);
			});
		})
		.catch((err) => {
			const liElement = document.createElement('li');
			liElement.textContent = `${err.status} "${err.message}"`;
			reposListElement.appendChild(liElement);
		});
}