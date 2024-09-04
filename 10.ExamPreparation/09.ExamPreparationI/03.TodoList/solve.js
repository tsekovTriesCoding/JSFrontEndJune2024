const baseUrl = "http://localhost:3030/jsonstore/tasks"
const loadButton = document.getElementById("load-button");
const titleInput = document.getElementById("title");
const toDoListUl = document.getElementById("todo-list");
const addButton = document.getElementById("add-button");

function attachEvents() {
    loadButton.addEventListener("click", loadAll);
    addButton.addEventListener("click", onAdd);
}

function loadAll(e) {
    if (e) {
        e.preventDefault();
    }

    toDoListUl.innerHTML = "";

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => Object.values(data).forEach(record => {
            const li = document.createElement("li");
            const span = document.createElement("span");
            span.textContent = record.name;
            li.appendChild(span);

            const removeButton = document.createElement("button");
            removeButton.id = record._id;
            removeButton.addEventListener("click", removeTask);
            removeButton.textContent = "Remove";
            li.appendChild(removeButton);

            const editButton = document.createElement("button");
            editButton.id = record._id;
            editButton.addEventListener("click", editTask);
            editButton.textContent = "Edit";
            li.appendChild(editButton);

            toDoListUl.appendChild(li);
        }));
}

async function removeTask(e) {
    const response = await fetch(`${baseUrl}/${e.currentTarget.id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        return;
    }

    loadAll();
}

function editTask(e) {
    const liParentElement = e.target.parentElement;
    const id = e.target.id;
    console.log(id);
    
    const inputName = document.createElement("input");
    inputName.value = e.target.parentElement.querySelector("span").textContent;

    e.target.parentElement.innerHTML = "";
   
    liParentElement.appendChild(inputName);
    const removeButton = document.createElement("button");
    removeButton.id = id;
    removeButton.addEventListener("click", removeTask);
    removeButton.textContent = "Remove";
    liParentElement.appendChild(removeButton);

    const submitButton = document.createElement("button");
    submitButton.id = id;
    submitButton.addEventListener("click", submitTask);
    submitButton.textContent = "Submit";
    liParentElement.appendChild(submitButton);

    e.target.parentElement.appendChild(liParentElement);
}

async function submitTask(e) {
    const id = e.currentTarget.parentElement.querySelector("button").id;
    const name = e.currentTarget.parentElement.querySelector('input').value;

    const response = await fetch(`${baseUrl}/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            _id: id,
            name,
        })
    });

    if (!response.ok) {
        return;
    }

    loadAll();
}

async function onAdd(e) {
    e.preventDefault();

    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ name: titleInput.value })
    });

    if (!response.ok) {
        return;
    }

    loadAll();
}

attachEvents();
