window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById("add-btn");
    const taskListUlElement = document.getElementById("task-list");
    const placeInputElement = document.getElementById("place");
    const actionInputElement = document.getElementById("action");
    const personInputElement = document.getElementById("person");
    const doneListUlElement = document.getElementById("done-list");

    addButtonElement.addEventListener("click", addTask);

    function addTask() {
        const divButtonsElement = document.createElement("div");

        const editButtonElement = document.createElement("button");
        editButtonElement.classList.add("edit")
        editButtonElement.textContent = "Edit";
        editButtonElement.addEventListener("click", editTask);

        const doneButtonElement = document.createElement("button");
        doneButtonElement.classList.add("done");
        doneButtonElement.textContent = "Done";
        doneButtonElement.addEventListener("click", taskDone);

        divButtonsElement.appendChild(editButtonElement);
        divButtonsElement.appendChild(doneButtonElement);

        const articleElement = document.createElement("article");

        const paragraphPlaceElement = document.createElement("p");
        paragraphPlaceElement.textContent = `Place:${placeInputElement.value}`;
        const place = placeInputElement.value;
        const paragraphActionElement = document.createElement("p");
        paragraphActionElement.textContent = `Action:${actionInputElement.value}`;
        const action = actionInputElement.value;
        const paragraphPersonElement = document.createElement("p");
        paragraphPersonElement.textContent = `Person:${personInputElement.value}`;
        const person = personInputElement.value;

        articleElement.appendChild(paragraphPlaceElement);
        articleElement.appendChild(paragraphActionElement);
        articleElement.appendChild(paragraphPersonElement);

        const liElement = document.createElement("li");
        liElement.classList.add("clean-task");

        liElement.appendChild(articleElement);
        liElement.appendChild(divButtonsElement);

        taskListUlElement.appendChild(liElement);

        clearInputFields();

        function editTask() {
            placeInputElement.value = place;
            actionInputElement.value = action;
            personInputElement.value = person;

            liElement.remove();
        }

        function taskDone() {
            const deleteButtonElement = document.createElement("button");
            deleteButtonElement.classList.add("delete");
            deleteButtonElement.textContent = "Delete";
            deleteButtonElement.addEventListener("click", deleteTask);

            const doneListLiElement = document.createElement("li");
            doneListLiElement.appendChild(articleElement);
            doneListLiElement.appendChild(deleteButtonElement);

            doneListUlElement.appendChild(doneListLiElement);

            liElement.remove();

            function deleteTask() {
                doneListLiElement.remove();
            }
        }
    }

    function clearInputFields() {
        placeInputElement.value = "";
        actionInputElement.value = "";
        personInputElement.value = "";
    }
}