window.addEventListener("load", solve);

function solve() {
  const publishButton = document.getElementById("form-btn");
  const previewListUl = document.getElementById("preview-list");
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const ageInput = document.getElementById("age");
  const storyTitleInput = document.getElementById("story-title");
  const genreSelect = document.getElementById("genre");
  const storyTextaera = document.getElementById("story");

  publishButton.addEventListener("click", publishStory);

  function publishStory(e) {
    e.preventDefault();
    
    if (firstNameInput.value == "" || lastNameInput.value == "" ||
      ageInput.value == "" || storyTitleInput.valu == "" || genreSelect.value == "" ||
      storyTextaera.value == "") {
      return;
    }

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete Story"
    deleteButton.addEventListener("click", deleteStory);
    deleteButton.removeAttribute("disabled", "disabled");
    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit Story"
    editButton.addEventListener("click", editStory);
    editButton.removeAttribute("disabled", "disabled");
    const saveButton = document.createElement("button");
    saveButton.classList.add("save-btn");
    saveButton.textContent = "Save Story";
    saveButton.addEventListener("click", saveStory);
    saveButton.removeAttribute("disabled", "disabled");

    function saveStory() {
      const mainDiv = document.getElementById("main");
      mainDiv.innerHTML = "";

      const h1 = document.createElement("h1");
      h1.textContent = "Your scary story is saved!";

      mainDiv.appendChild(h1);
    }

    const article = document.createElement("article");
    const paragraphStory = document.createElement("p");
    paragraphStory.textContent = storyTextaera.value;

    const paragraphGenre = document.createElement("p");
    paragraphGenre.textContent = `Genre: ${genreSelect.options[genreSelect.selectedIndex].textContent}`;

    const paragraphTitle = document.createElement("p");
    paragraphTitle.textContent = `Title: ${storyTitleInput.value}`;

    const paragraphAge = document.createElement("p");
    paragraphAge.textContent = `Age: ${ageInput.value}`;

    const h4Name = document.createElement("h4");
    h4Name.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

    article.appendChild(h4Name);
    article.appendChild(paragraphAge);
    article.appendChild(paragraphTitle);
    article.appendChild(paragraphGenre);
    article.appendChild(paragraphStory);

    const liElement = document.createElement("li");
    liElement.classList.add("story-info");

    liElement.appendChild(article);
    liElement.appendChild(saveButton);
    liElement.appendChild(editButton);
    liElement.appendChild(deleteButton);

    previewListUl.appendChild(liElement);

    clearInputFields();
    publishButton.setAttribute("disabled", "disabled");

    function editStory() {
      fillInputFields();
      saveButton.setAttribute("disabled", "disabled");
      editButton.setAttribute("disabled", "disabled");
      deleteButton.setAttribute("disabled", "disabled");
      publishButton.removeAttribute("disabled");
      liElement.remove();
    }

    function deleteStory() {
      liElement.remove();
      publishButton.removeAttribute("disabled");
    }

    function fillInputFields() {
      firstNameInput.value = h4Name.textContent.split(" ")[0];
      lastNameInput.value = h4Name.textContent.split(" ")[1];
      ageInput.value = paragraphAge.textContent.replace("Age: ", "");
      storyTitleInput.value = paragraphTitle.textContent.replace("Title: ", "");
      genreSelect.value = paragraphGenre.textContent.replace("Genre: ", "");
      storyTextaera.value = paragraphStory.textContent;
    }
  }

  function clearInputFields() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    storyTitleInput.value = "";
    genreSelect.value = "";
    storyTextaera.value = "";
  }
}
