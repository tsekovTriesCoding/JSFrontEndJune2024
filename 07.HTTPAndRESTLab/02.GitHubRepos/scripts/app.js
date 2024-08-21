function loadRepos() {
   const resElement = document.getElementById('res');

   fetch('https://api.github.com/users/testnakov/repos')
      .then((responce) => responce.text())
      .then(text => resElement.textContent = text);
}