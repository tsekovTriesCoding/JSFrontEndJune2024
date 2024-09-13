const baseUrl = "http://localhost:3030/jsonstore/tasks";
const loadBoardButtonElement = document.getElementById("load-board-btn");
const toDoSection = document.getElementById("todo-section");
const inProgressSection = document.getElementById("in-progress-section");
const codeReviewSection = document.getElementById("code-review-section");
const doneSection = document.getElementById("done-section");
const addTaskButton = document.getElementById("create-task-btn");
const titleInput = document.getElementById("title");
const descriptionTextarea = document.getElementById("description");
const taskLists = document.querySelectorAll(".task-list");

function attachEvents() {
    loadBoardButtonElement.addEventListener("click", loadBoard);
    addTaskButton.addEventListener("click", addTask);
}

function loadBoard() {
    Array.from(taskLists).forEach(e => e.innerHTML = "");

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => Object.values(data).forEach(task => {
            const liElement = document.createElement("li");
            liElement.classList.add("task");
            const h3Element = document.createElement("h3");
            h3Element.textContent = task.title;

            const descriptionParagraph = document.createElement("p");
            descriptionParagraph.textContent = task.description;

            const moveToButton = document.createElement("button");
            moveToButton.addEventListener("click", moveTask);

            liElement.appendChild(h3Element);
            liElement.appendChild(descriptionParagraph);

            if (task.status === "ToDo") {
                moveToButton.textContent = "Move to In Progress";
                liElement.appendChild(moveToButton);
                toDoSection.querySelector(".task-list").appendChild(liElement);
            } else if (task.status === "In Progress") {
                moveToButton.textContent = "Move to Code Review";
                liElement.appendChild(moveToButton);
                inProgressSection.querySelector(".task-list").appendChild(liElement);
            } else if (task.status === "Code Review") {
                moveToButton.textContent = "Move to Done";
                liElement.appendChild(moveToButton);
                codeReviewSection.querySelector(".task-list").appendChild(liElement);
            } else if (task.status === "Done") {
                moveToButton.textContent = "Close";
                liElement.appendChild(moveToButton);
                doneSection.querySelector(".task-list").appendChild(liElement);
            }

            async function moveTask() {
                let currentTaskStatus = task.status;

                if (currentTaskStatus === "Done") {
                    const response = await fetch(`${baseUrl}/${task._id}`, {
                        method: "DELETE",
                    });

                    if (!response.ok) {
                        return;
                    }
                } else {
                    switch (currentTaskStatus) {
                        case "ToDo":
                            task.status = "In Progress"
                            break;
                        case "In Progress":
                            task.status = "Code Review"
                            break;
                        case "Code Review":
                            task.status = "Done"
                            break;
                    }

                    const response = await fetch(`${baseUrl}/${task._id}`, {
                        method: "PATCH",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(task),
                    });

                    if (!response.ok) {
                        return;
                    }
                }

                loadBoard();
            }
        }));
}

async function addTask() {
    const newTask = getTaskInfo();
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newTask)
    });

    if (!response.ok) {
        return;
    }

    loadBoard();
    clearInputFields();
}

function getTaskInfo() {
    const title = titleInput.value;
    const description = descriptionTextarea.value;
    const status = "ToDo";

    return { title, description, status }
}

function clearInputFields() {
    titleInput.value = "";
    descriptionTextarea.value = "";
}

attachEvents();