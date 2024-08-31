const baseUrl = "http://localhost:3030/jsonstore/tasks";
const loadVacationsButtonElement = document.getElementById("load-vacations");
const divListElement = document.getElementById("list");
const addVacationButtonElement = document.getElementById("add-vacation");
const vacationNameInputElement = document.getElementById("name");
const vacationDaysInputElement = document.getElementById("num-days");
const vacationDateInputElement = document.getElementById("from-date");
const editVacationButtonElement = document.getElementById("edit-vacation");

loadVacationsButtonElement.addEventListener("click", loadVacations);

let vacationToChangeId;

function loadVacations() {
    divListElement.innerHTML = "";

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => Object.values(data).forEach(vacation => {

            const doneButtonElement = document.createElement("button");
            doneButtonElement.classList.add("done-btn");
            doneButtonElement.textContent = "Done";
            doneButtonElement.addEventListener("click", deleteVacation);

            const changeButtonElement = document.createElement("button");
            changeButtonElement.classList.add("change-btn");
            changeButtonElement.textContent = "Change";
            changeButtonElement.addEventListener("click", changeVacation);

            const h3DaysElement = document.createElement("h3");
            h3DaysElement.textContent = vacation.days;
            const h3DateElement = document.createElement("h3");
            h3DateElement.textContent = vacation.date;
            const h2NameElement = document.createElement("h2");
            h2NameElement.textContent = vacation.name;

            const divConatinerElement = document.createElement("div");
            divConatinerElement.classList.add("container");

            divConatinerElement.appendChild(h2NameElement);
            divConatinerElement.appendChild(h3DateElement);
            divConatinerElement.appendChild(h3DaysElement)
            divConatinerElement.appendChild(changeButtonElement);
            divConatinerElement.appendChild(doneButtonElement);

            divListElement.appendChild(divConatinerElement);

            function changeVacation() {
                divConatinerElement.remove();
                vacationToChangeId = vacation._id;

                vacationNameInputElement.value = vacation.name;;
                vacationDaysInputElement.value = vacation.days;
                vacationDateInputElement.value = vacation.date;

                editVacationButtonElement.removeAttribute("disabled");
                addVacationButtonElement.setAttribute("disabled", "disabled");
            }

            async function deleteVacation() {
                const response =  await fetch(`${baseUrl}/${vacation._id}`, {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json"
                    },
                });

                divConatinerElement.remove();
            }

        }));


}

addVacationButtonElement.addEventListener("click", addVacation);

async function addVacation(e) {
    e.preventDefault();
    const vacationToAdd = getVacationInfo();

    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(vacationToAdd),
    });

    if (!response.ok) {
        return;
    }

    loadVacations();
    clearInputFields();
}

editVacationButtonElement.addEventListener("click", editVacation);

async function editVacation(e) {
    e.preventDefault();
    const vacationToChange = getVacationInfo();

    const response = await fetch(`${baseUrl}/${vacationToChangeId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            _id: vacationToChangeId,
            name: vacationToChange.name,
            days: vacationToChange.days,
            date: vacationToChange.date,
        })
    });

    if (!response.ok) {
        return;
    }

    loadVacations();
    editVacationButtonElement.setAttribute("disabled", "disabled");
    addVacationButtonElement.removeAttribute("disabled");

    vacationToChangeId = null;
}

function getVacationInfo() {
    const name = vacationNameInputElement.value;
    const days = vacationDaysInputElement.value;
    const date = vacationDateInputElement.value;

    return { name, days, date }
}

function clearInputFields() {
    vacationNameInputElement.value = "";
    vacationDaysInputElement.value = "";
    vacationDateInputElement.value = "";
}
