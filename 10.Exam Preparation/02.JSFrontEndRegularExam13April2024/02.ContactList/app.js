window.addEventListener("load", solve);

function solve() {
  const addButtonElement = document.getElementById("add-btn");
  const nameInputElement = document.getElementById("name");
  const phoneInputElement = document.getElementById("phone");
  const categorySelectElement = document.getElementById("category");
  const checkListUlElement = document.getElementById("check-list");
  const contactListUlElement = document.getElementById("contact-list");

  let name;
  let phone;
  let category;

  addButtonElement.addEventListener("click", addContact);

  function addContact() {
    if (nameInputElement.value == "" || phoneInputElement.value == "" || categorySelectElement.value == "") {
      return;
    }
    const divButtonsElement = document.createElement("div");
    divButtonsElement.classList.add("buttons");

    const editButtonElement = document.createElement("button");
    editButtonElement.classList.add("edit-btn");
    const saveButtonElement = document.createElement("button");
    saveButtonElement.classList.add("save-btn");

    divButtonsElement.appendChild(editButtonElement);
    divButtonsElement.appendChild(saveButtonElement);

    const articleElement = document.createElement("article");

    const paragraphNameElement = document.createElement("p");
    paragraphNameElement.textContent = `name:${nameInputElement.value}`;
    name = nameInputElement.value;
    const paragraphPhoneElement = document.createElement("p");
    paragraphPhoneElement.textContent = `phone:${phoneInputElement.value}`;
    phone = phoneInputElement.value;
    const paragraphCategoryElement = document.createElement("p");
    paragraphCategoryElement.textContent = `category:${(categorySelectElement.options[categorySelectElement.selectedIndex].textContent).toLowerCase()}`;
    category = (categorySelectElement.options[categorySelectElement.selectedIndex].textContent);

    articleElement.appendChild(paragraphNameElement);
    articleElement.appendChild(paragraphPhoneElement);
    articleElement.appendChild(paragraphCategoryElement);

    const liElement = document.createElement("li");
    liElement.appendChild(articleElement);
    liElement.appendChild(divButtonsElement);

    checkListUlElement.appendChild(liElement);
    clearInputFields();

    editButtonElement.addEventListener("click", editContact);

    function editContact() {
      nameInputElement.value = name;
      phoneInputElement.value = phone;
      const options = Array.from(categorySelectElement.options);
      const optionToSelect = options.find(item => item.textContent === category);
      optionToSelect.selected = true;

      liElement.remove();
    }

    saveButtonElement.addEventListener("click", saveContact);

    function saveContact() {
      const savedliElement = document.createElement("li");
      savedliElement.appendChild(articleElement);

      const deleteButtonElement = document.createElement("button");
      deleteButtonElement.classList.add("del-btn");

      deleteButtonElement.addEventListener("click", () => {
        savedliElement.remove();
      });
      savedliElement.appendChild(deleteButtonElement);

      contactListUlElement.appendChild(savedliElement)

      liElement.remove();
    };
  }

  function clearInputFields() {
    nameInputElement.value = "";
    phoneInputElement.value = "";
    categorySelectElement.value = "";
  }
}
