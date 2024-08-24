function attachEvents() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments';

    const buttonLoadPostsElement = document.getElementById('btnLoadPosts');
    const selectPostsElement = document.getElementById('posts');
    const buttonViewPostsElement = document.getElementById('btnViewPost');
    const postTitleElement = document.getElementById('post-title');
    const ulPostCommentsElement = document.getElementById('post-comments');
    const pPostBodyElement = document.getElementById('post-body');

    let allPosts = {};

    buttonLoadPostsElement.addEventListener('click', () => {
        fetch(postsURL)
            .then((res) => res.json())
            .then((data) => {
                allPosts = data;
                Object.entries(data).forEach(entry => {
                    const optionElement = document.createElement('option');
                    optionElement.value = entry[0];
                    optionElement.textContent = entry[1].title;

                    selectPostsElement.appendChild(optionElement);
                });
            });
    });

    buttonViewPostsElement.addEventListener('click', () => {
        const postTitle = selectPostsElement.options[selectPostsElement.selectedIndex].textContent;
        postTitleElement.textContent = postTitle;

        const selectedPostElementId = selectPostsElement.value;
        pPostBodyElement.textContent = allPosts[selectedPostElementId].body;
        
        fetch(commentsURL)
            .then((res) => res.json())
            .then((data) => {
                ulPostCommentsElement.innerHTML = '';
                Object.entries(data)
                    .filter(entry => entry[1].postId === selectedPostElementId)
                    .forEach(entry => {
                        const liElement = document.createElement('li');
                        liElement.id = entry[0];
                        liElement.textContent = entry[1].text;

                        ulPostCommentsElement.appendChild(liElement);
                    });
            });
    });
}

attachEvents();