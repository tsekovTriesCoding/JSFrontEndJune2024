const baseUrl = "http://localhost:3030/jsonstore/records";
const loadRecordsButtonElement = document.getElementById("load-records");
const listUlElement = document.getElementById("list");
const addRecordButtonElement = document.getElementById("add-record");
const nameInputElement = document.getElementById("p-name");
const stepsInputElement = document.getElementById("steps");
const caloriesInputElement = document.getElementById("calories");
const editRecordButtonElement = document.getElementById("edit-record");

let recordToChangeId;

loadRecordsButtonElement.addEventListener("click", loadRecords);

function loadRecords() {
    listUlElement.innerHTML = "";

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(record => {
                const divButtonsWrapperElement = document.createElement("div");
                divButtonsWrapperElement.classList.add("btn-wrapper");

                const changeButtonElement = document.createElement("button");
                changeButtonElement.classList.add("change-btn");
                changeButtonElement.textContent = "Change";
                changeButtonElement.addEventListener("click", changeRecord);

                function changeRecord() {
                    nameInputElement.value = paragraphNameElement.textContent;
                    stepsInputElement.value = paragraphStepsElement.textContent;
                    caloriesInputElement.value = paragraphCaloriesElement.textContent;

                    editRecordButtonElement.removeAttribute("disabled");
                    addRecordButtonElement.setAttribute("disabled", "disabled");

                    recordToChangeId = record._id;
                }

                const deleteButtonElement = document.createElement("button");
                deleteButtonElement.classList.add("delete-btn");
                deleteButtonElement.textContent = "Delete";
                
                divButtonsWrapperElement.appendChild(changeButtonElement);
                divButtonsWrapperElement.appendChild(deleteButtonElement);

                const divInfoElement = document.createElement("div");
                divInfoElement.classList.add("info");

                const paragraphNameElement = document.createElement("p");
                paragraphNameElement.textContent = record.name;
                const paragraphStepsElement = document.createElement("p");
                paragraphStepsElement.textContent = record.steps;
                const paragraphCaloriesElement = document.createElement("p");
                paragraphCaloriesElement.textContent = record.calories;

                divInfoElement.appendChild(paragraphNameElement);
                divInfoElement.appendChild(paragraphStepsElement);
                divInfoElement.appendChild(paragraphCaloriesElement);

                const liElement = document.createElement("li");
                liElement.classList.add("record");
                liElement.appendChild(divInfoElement);
                liElement.appendChild(divButtonsWrapperElement);

                listUlElement.appendChild(liElement);

                deleteButtonElement.addEventListener("click", deleteRecord);

                async function deleteRecord() {
                    await fetch(`${baseUrl}/${record._id}`, {
                        method: 'DELETE',
                        headers: {
                            "content-type": "application/json",
                        },
                    });

                    liElement.remove();
                }
            });
            
        });
}

addRecordButtonElement.addEventListener("click", addRecord);

async function addRecord() {
    const newPlayer = getPlayerInfo();
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(newPlayer),
    });

    if (!response.ok) {
        return;
    }

    loadRecords();

    nameInputElement.value = "";
    stepsInputElement.value = "";
    caloriesInputElement.value = "";
}

function getPlayerInfo() {
    const name = nameInputElement.value;
    const steps = stepsInputElement.value;
    const calories = caloriesInputElement.value;
    return { name, steps, calories };
}

editRecordButtonElement.addEventListener("click", editRecord);

async function editRecord() {
    const editedPlayer = getPlayerInfo();
    const response = await fetch(`${baseUrl}/${recordToChangeId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            _id: recordToChangeId,
            name: editedPlayer.name,
            steps: editedPlayer.steps,
            calories: editedPlayer.calories,
        })
    });

    if (!response.ok) {
        return;
    }

    loadRecords();
    editRecordButtonElement.setAttribute("disabled", "disabled");
    addRecordButtonElement.removeAttribute("disabled");

    recordToChangeId = null;
}

