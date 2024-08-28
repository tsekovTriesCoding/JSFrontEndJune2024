const baseUrl = "http://localhost:3030/jsonstore/games";
const loadGamesButtonElement = document.getElementById("load-games");
const divGamesListElement = document.getElementById("games-list");
const editGameButtonElement = document.getElementById("edit-game");
const addGameButton = document.getElementById("add-game");
const gameNameInputElement = document.getElementById("g-name");
const typeInputElement = document.getElementById("type");
const playersInputElement = document.getElementById("players");

let gameId;

loadGamesButtonElement.addEventListener("click", loadGames);

function loadGames() {
    divGamesListElement.innerHTML = "";
    editGameButtonElement.setAttribute("disabled", "disabled");

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            Object.values(data)
                .forEach(game => {
                    const divButtonsContainer = document.createElement("div");
                    divButtonsContainer.classList.add("buttons-container");

                    const changeButtonElement = document.createElement("button");
                    changeButtonElement.classList.add("change-btn");
                    changeButtonElement.textContent = "Change";
                    changeButtonElement.addEventListener("click", changeGame);

                    const deleteButtonElement = document.createElement("button");
                    deleteButtonElement.classList.add("delete-btn");
                    deleteButtonElement.textContent = "Delete";

                    function changeGame() {
                        gameNameInputElement.value = game.name;
                        playersInputElement.value = game.players;
                        typeInputElement.value = game.type;

                        editGameButtonElement.removeAttribute("disabled");
                        addGameButton.setAttribute("disabled", "disabled");

                        gameId = game._id;
                    }
                    divButtonsContainer.appendChild(changeButtonElement);
                    divButtonsContainer.appendChild(deleteButtonElement);

                    const divContentElement = document.createElement("div");
                    divContentElement.classList.add("content");

                    const paragraphNameElement = document.createElement("p");
                    paragraphNameElement.textContent = game.name;
                    const paragraphPlayersElement = document.createElement("p");
                    paragraphPlayersElement.textContent = game.players;
                    const paragraphTypeElement = document.createElement("p");
                    paragraphTypeElement.textContent = game.type;

                    divContentElement.appendChild(paragraphNameElement);
                    divContentElement.appendChild(paragraphPlayersElement);
                    divContentElement.appendChild(paragraphTypeElement);

                    const divBoardGameElement = document.createElement("div");
                    divBoardGameElement.classList.add("board-game");
                    divBoardGameElement.appendChild(divContentElement);
                    divBoardGameElement.appendChild(divButtonsContainer);

                    divGamesListElement.appendChild(divBoardGameElement);

                    deleteButtonElement.addEventListener("click", deleteGame);

                    async function deleteGame() {
                        await fetch(`${baseUrl}/${game._id}`, {
                            method: 'DELETE',
                            headers: {
                                "content-type": "application/json",
                            },
                        });

                        divBoardGameElement.remove();
                    }
                });
        });
}

addGameButton.addEventListener("click", addGame);

async function addGame() {
    const newGame = getGameInfo();
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(newGame),
    });

    if (!response.ok) {
        return;
    }

    loadGames();
    clearInputFields();
}

editGameButtonElement.addEventListener("click", editGame);

async function editGame() {
    const editedGame = getGameInfo();
    const response = await fetch(`${baseUrl}/${gameId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            _id: gameId,
            name: editedGame.name,
            type: editedGame.type,
            players: editedGame.players,
        })
    });

    if (!response.ok) {
        return;
    }

    loadGames();
    editGameButtonElement.setAttribute("disabled", "disabled");
    addGameButton.removeAttribute("disabled");
    clearInputFields();
    gameId = null;
}

function getGameInfo() {
    const name = gameNameInputElement.value;
    const players = playersInputElement.value;
    const type = typeInputElement.value;
    return { name, players, type };
}

function clearInputFields() {
    gameNameInputElement.value = "";
    playersInputElement.value = "";
    typeInputElement.value = "";
}