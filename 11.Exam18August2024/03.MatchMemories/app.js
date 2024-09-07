const baseUrl = "http://localhost:3030/jsonstore/matches";
const loadMatchesButton = document.getElementById("load-matches");
const listUl = document.getElementById("list");
const addMatchButton = document.getElementById("add-match");
const hostInput = document.getElementById("host");
const scoreInput = document.getElementById("score");
const guestInput = document.getElementById("guest");
const editMatchButton = document.getElementById("edit-match");

loadMatchesButton.addEventListener("click", loadMatches);

function loadMatches(e) {
    listUl.innerHTML = "";

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => Object.values(data).forEach(match => {
            const divInfo = document.createElement("div")
            divInfo.classList.add("info");

            const paragraphHost = document.createElement("p");
            paragraphHost.textContent = match.host;
            const paragraphScore = document.createElement("p");
            paragraphScore.textContent = match.score;
            const paragraphGuest = document.createElement("p");
            paragraphGuest.textContent = match.guest;

            divInfo.appendChild(paragraphHost);
            divInfo.appendChild(paragraphScore);
            divInfo.appendChild(paragraphGuest);

            const divButtonWrapper = document.createElement("div");
            divButtonWrapper.classList.add("btn-wrapper");
            const changeButton = document.createElement("button");
            changeButton.classList.add("change-btn");
            changeButton.textContent = "Change";
            changeButton.addEventListener("click", onChangeClick);

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-btn");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", deleteMatch);

            divButtonWrapper.appendChild(changeButton);
            divButtonWrapper.appendChild(deleteButton);

            const matchLi = document.createElement("li");
            matchLi.classList.add("match");
            matchLi.id = match._id;
            matchLi.appendChild(divInfo);
            matchLi.appendChild(divButtonWrapper);

            listUl.appendChild(matchLi);
        }));
}

addMatchButton.addEventListener("click", addMatch);

editMatchButton.addEventListener("click", onEditClick);

async function addMatch(e) {
    const newMatch = getMatchInfo();

    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application.json"
        },
        body: JSON.stringify(newMatch)
    });

    if (!response.ok) {
        return;
    }

    loadMatches();
    clearInputFields();
}

let matchtoChangeId;
function onChangeClick(e) {
    const liElement = e.target.parentElement.parentElement;
    const host = liElement.querySelector(".info>p:first-child").textContent;
    const score = liElement.querySelector(".info>p:nth-child(2)").textContent;
    const guest = liElement.querySelector(".info>p:nth-child(3)").textContent;

    hostInput.value = host;
    scoreInput.value = score
    guestInput.value = guest;
    matchtoChangeId = liElement.id;

    editMatchButton.removeAttribute("disabled");
    addMatchButton.setAttribute("disabled", "disabled");
}

async function onEditClick(e) {
    const changedMatch = getMatchInfo();

    const response = await fetch(`${baseUrl}/${matchtoChangeId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            _id: matchtoChangeId,
            host: changedMatch.host,
            score: changedMatch.score,
            guest: changedMatch.guest,
        })
    });

    if (!response.ok) {
        return;
    }

    loadMatches();
    editMatchButton.setAttribute("disabled", "disabled");
    addMatchButton.removeAttribute("disabled");

    matchtoChangeId = null;
}

let matchtoDeleteId;
async function deleteMatch(e) {
    const liElement = e.target.parentElement.parentElement;
    matchtoDeleteId = liElement.id;

    const response = await fetch(`${baseUrl}/${matchtoDeleteId}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        }
    });

    if (!response.ok) {
        return;
    }

    matchtoDeleteId = null;
    loadMatches();
}

function getMatchInfo() {
    const host = hostInput.value;
    const score = scoreInput.value;
    const guest = guestInput.value;

    return { host, score, guest };
}

function clearInputFields() {
    hostInput.value = "";
    scoreInput.value = "";
    guestInput.value = "";
}
