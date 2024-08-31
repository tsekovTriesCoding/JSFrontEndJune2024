window.addEventListener("load", solve);

function solve() {
  const nextButtonElement = document.getElementById("next-btn");
  const previewListUlElement = document.getElementById("preview-list");
  const studentInputElement = document.getElementById("student");
  const universityInputElement = document.getElementById("university");
  const scoreInputElement = document.getElementById("score");

  nextButtonElement.addEventListener("click", next);

  let student;
  let university;
  let score;

  function next() {

    if (studentInputElement.value == "" ||
      universityInputElement.value == "" ||
      scoreInputElement.value == "") {
      return;
    }

    const editButtonElement = document.createElement("button");
    editButtonElement.classList.add("action-btn");
    editButtonElement.classList.add("edit");
    editButtonElement.textContent = "edit";
    editButtonElement.addEventListener("click", editStudentInfo);

    const applyButtonElement = document.createElement("button");
    applyButtonElement.classList.add("action-btn");
    applyButtonElement.classList.add("apply");
    applyButtonElement.textContent = "apply";
    applyButtonElement.addEventListener("click", applyStudent);

    const articleElement = document.createElement("article");

    const h4StudentElement = document.createElement("h4");
    h4StudentElement.textContent = studentInputElement.value;
    student = studentInputElement.value;
    const paragraphUniversityElement = document.createElement("p");
    paragraphUniversityElement.textContent = `University: ${universityInputElement.value}`;
    university = universityInputElement.value;
    const paragraphScoreElement = document.createElement("p");
    paragraphScoreElement.textContent = `Score: ${scoreInputElement.value}`;
    score = scoreInputElement.value;

    articleElement.appendChild(h4StudentElement);
    articleElement.appendChild(paragraphUniversityElement);
    articleElement.appendChild(paragraphScoreElement);

    const liElement = document.createElement("li");
    liElement.classList.add("application");

    liElement.appendChild(articleElement);
    liElement.appendChild(editButtonElement);
    liElement.appendChild(applyButtonElement);

    previewListUlElement.appendChild(liElement);

    nextButtonElement.setAttribute("disabled", "disabled");
    clearInputFields();

    function editStudentInfo() {
      studentInputElement.value = student;
      universityInputElement.value = university;
      scoreInputElement.value = score;

      liElement.remove();
      nextButtonElement.removeAttribute("disabled");
    }

    function applyStudent() {
      const candidatesListUlElement = document.getElementById("candidates-list");

      liElement.removeChild(editButtonElement);
      liElement.removeChild(applyButtonElement);

      candidatesListUlElement.appendChild(liElement);
      nextButtonElement.removeAttribute("disabled")
    }
  }

  function clearInputFields() {
    studentInputElement.value = "";
    universityInputElement.value = "";
    scoreInputElement.value = "";
  }
}
