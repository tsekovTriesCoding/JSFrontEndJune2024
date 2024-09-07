window.addEventListener("load", solve);

function solve() {
  const addButton = document.getElementById("add-btn");
  const nameInput = document.getElementById("name");
  const timeInput = document.getElementById("time");
  const descriptionTextarea = document.getElementById("description");
  const previewListUl = document.getElementById("preview-list");
  const archiveListUl = document.getElementById("archive-list");

  addButton.addEventListener("click", ondAddClick);

  function ondAddClick() {
    if (nameInput.value == "" || timeInput.value == "" || descriptionTextarea.value == "") {
      return;
    }

    const article = document.createElement("article");
    const paragraphName = document.createElement("p");
    paragraphName.textContent = nameInput.value;
    const paragraphTime = document.createElement("p");
    paragraphTime.textContent = timeInput.value;
    const paragraphDescription = document.createElement("p");
    paragraphDescription.textContent = descriptionTextarea.value;

    article.appendChild(paragraphName);
    article.appendChild(paragraphTime);
    article.appendChild(paragraphDescription);

    const divButtons = document.createElement("div");
    divButtons.classList.add("buttons");
    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", onEditClick);

    const nextButton = document.createElement("button");
    nextButton.classList.add("next-btn");
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", onNextClick);

    divButtons.appendChild(editButton);
    divButtons.appendChild(nextButton);

    const li = document.createElement("li");
    li.appendChild(article);
    li.appendChild(divButtons);

    previewListUl.appendChild(li);

    clearInputFields();
    addButton.setAttribute("disabled", "disabled");
  }

  function onEditClick(e) {
    const liElement = e.target.parentElement.parentElement;
    const name = liElement.querySelector("article>p:first-child").textContent;
    const time = liElement.querySelector("article>p:nth-child(2)").textContent;
    const description = liElement.querySelector("article>p:nth-child(3)").textContent;

    nameInput.value = name;
    timeInput.value = time;
    descriptionTextarea.value = description;

    liElement.remove();
    addButton.removeAttribute("disabled");
  }

  function onNextClick(e) {
    const liElement = e.target.parentElement.parentElement;
    let divButtons = liElement.querySelector(".buttons");

    divButtons.remove();

    const archiveButton = document.createElement("button");
    archiveButton.classList.add("archive-btn");
    archiveButton.textContent = "Archive";
    archiveButton.addEventListener("click", onArchiveClick);

    liElement.appendChild(archiveButton);
    archiveListUl.appendChild(liElement);

    function onArchiveClick() {
      liElement.remove();
      addButton.removeAttribute("disabled");
    }
  }

  function clearInputFields() {
    nameInput.value = "";
    timeInput.value = "";
    descriptionTextarea.value = "";
  }
}