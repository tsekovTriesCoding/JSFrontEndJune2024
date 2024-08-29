window.addEventListener("load", solve);

function solve() {
  const adoptButtonElement = document.getElementById("adopt-btn");
  const typeInputElement = document.getElementById("type");
  const ageInputElement = document.getElementById("age");
  const genderInputElement = document.getElementById("gender");
  const adoptionInfoUlElement = document.getElementById("adoption-info");

  adoptButtonElement.addEventListener("click", addPet);

  function addPet(e) {
    e.preventDefault();

    if (
      ageInputElement.value == "" ||
      typeInputElement.value == "" ||
      genderInputElement.value == ""
    ) {
      return;
    }

    const divButtonsElement = document.createElement("div");
    divButtonsElement.classList.add("buttons");

    const editButtonElement = document.createElement("button");
    editButtonElement.classList.add("edit-btn");
    editButtonElement.textContent = "Edit";

    editButtonElement.addEventListener("click", editInfo)

    const doneButtonElement = document.createElement("button");
    doneButtonElement.classList.add("done-btn");
    doneButtonElement.textContent = "Done";

    doneButtonElement.addEventListener("click", done)

    divButtonsElement.appendChild(editButtonElement);
    divButtonsElement.appendChild(doneButtonElement);

    const articleElement = document.createElement("article");
    const paragraphTypeElement = document.createElement("p");
    paragraphTypeElement.textContent = `Pet:${typeInputElement.value}`;
    const type = typeInputElement.value;
    articleElement.appendChild(paragraphTypeElement);

    const paragraphGenderElement = document.createElement("p");
    paragraphGenderElement.textContent = `Gender:${genderInputElement.value}`;
    const gender = genderInputElement.value;
    articleElement.appendChild(paragraphGenderElement);

    const paragraphAgeElement = document.createElement("p");
    paragraphAgeElement.textContent = `Age:${ageInputElement.value}`;
    const age = ageInputElement.value;
    articleElement.appendChild(paragraphAgeElement);

    const liElement = document.createElement("li");
    liElement.appendChild(articleElement);
    liElement.appendChild(divButtonsElement);

    adoptionInfoUlElement.appendChild(liElement);

    typeInputElement.value = "";
    ageInputElement.value = "";
    genderInputElement.value = "";

    function editInfo() {
      typeInputElement.value = type;
      ageInputElement.value = age;
      genderInputElement.value = gender;

      adoptionInfoUlElement.removeChild(liElement);
    }

    function done() {
      const adoptedListUlElement = document.getElementById("adopted-list");
      const clearButtonElement = document.createElement("button");
      clearButtonElement.classList.add("clear-btn");
      clearButtonElement.textContent = "Clear";

      clearButtonElement.addEventListener("click", clear)

      const adoptedLiElement = document.createElement("li");
      adoptedLiElement.appendChild(articleElement);
      adoptedLiElement.appendChild(clearButtonElement);

      adoptedListUlElement.appendChild(adoptedLiElement);

      adoptionInfoUlElement.removeChild(liElement);

      function clear() {
        adoptedListUlElement.removeChild(adoptedLiElement);
      }
    }
  }
}
