window.addEventListener('load', solve);

function solve() {
    const addButton = document.getElementById("add-btn");
    const allHitsContainerDiv = document.querySelector(".all-hits-container");
    const genreInput = document.getElementById("genre");
    const nameInput = document.getElementById("name");
    const authorInput = document.getElementById("author");
    const dateInput = document.getElementById("date");
    const likesCountElement = document.querySelector(".likes>p");
    const savedContainerDiv = document.querySelector(".saved-container");

    let totalLikes = 0;
    addButton.addEventListener("click", addSong);

    function addSong(e) {
        if (genreInput.value == "" || nameInput.value == "" ||
            authorInput.value == "" || dateInput.value == "") {
            return;
        }
        
        e.preventDefault();

        const hitsInfoDiv = document.createElement("div");
        hitsInfoDiv.classList.add("hits-info");

        const imgElement = document.createElement("img");
        imgElement.src = "./static/img/img.png";
        const h2Genre = document.createElement("h2");
        h2Genre.textContent = `Genre: ${genreInput.value}`;
        const h2Name = document.createElement("h2");
        h2Name.textContent = `Name: ${nameInput.value}`;
        const h2Author = document.createElement("h2");
        h2Author.textContent = `Author: ${authorInput.value}`;
        const h3Date = document.createElement("h3");
        h3Date.textContent = `Date: ${dateInput.value}`;

        const saveSongButton = document.createElement("button");
        saveSongButton.classList.add("save-btn");
        saveSongButton.textContent = "Save song";
        saveSongButton.addEventListener("click", saveSong);
        const likeSongButton = document.createElement("button");
        likeSongButton.classList.add("like-btn");
        likeSongButton.textContent = "Like song";
        likeSongButton.addEventListener("click", likeSong);
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteSong);

        hitsInfoDiv.appendChild(imgElement);
        hitsInfoDiv.appendChild(h2Genre);
        hitsInfoDiv.appendChild(h2Name);
        hitsInfoDiv.appendChild(h2Author);
        hitsInfoDiv.appendChild(h3Date);
        hitsInfoDiv.appendChild(saveSongButton);
        hitsInfoDiv.appendChild(likeSongButton);
        hitsInfoDiv.appendChild(deleteButton);

        allHitsContainerDiv.appendChild(hitsInfoDiv);
        clearInputFields();
    }

    function likeSong(e) {
        totalLikes++;
        likesCountElement.textContent = `Total Likes: ${totalLikes}`;

        e.target.setAttribute("disabled", "disabled");
    }

    function saveSong(e) {
        let hitsInfoToMove = e.target.parentElement;
        const saveSongButton = hitsInfoToMove.querySelector(".save-btn");
        const likeSongButton = hitsInfoToMove.querySelector(".like-btn");
        hitsInfoToMove.removeChild(saveSongButton);
        hitsInfoToMove.removeChild(likeSongButton);

        savedContainerDiv.appendChild(hitsInfoToMove);
    }

    function deleteSong(e) {
        let songToDelete = e.target.parentElement;
        songToDelete.remove();
    }

    function clearInputFields() {
        genreInput.value = "";
        nameInput.value = "";
        authorInput.value = "";
        dateInput.value = "";
    }
}