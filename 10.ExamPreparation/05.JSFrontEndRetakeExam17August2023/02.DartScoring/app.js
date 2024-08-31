window.addEventListener("load", solve);

function solve() {
  const addButtonElement = document.getElementById("add-btn");
  const sureListUlElement = document.getElementById("sure-list");
  const playerInputElement = document.getElementById("player");
  const scoreInputElement = document.getElementById("score");
  const roundInputElement = document.getElementById("round");
  const clearButtonElement = document.querySelector(".btn.clear");

  addButtonElement.addEventListener("click", addElement);

  function addElement() {
    const editButtonElement = document.createElement("button");
    editButtonElement.classList.add("btn");
    editButtonElement.classList.add("edit");
    editButtonElement.textContent = "edit";
    editButtonElement.addEventListener("click", editElement);

    const okButtonElement = document.createElement("button");
    okButtonElement.classList.add("btn");
    okButtonElement.classList.add("ok");
    okButtonElement.textContent = "ok";
    okButtonElement.addEventListener("click", ok);

    const articleElement = document.createElement("article");

    const paragraphPlayerElement = document.createElement("p");
    paragraphPlayerElement.textContent = playerInputElement.value;
    const paragraphScoreElement = document.createElement("p");
    paragraphScoreElement.textContent = `Score: ${scoreInputElement.value}`;
    const paragraphRoundElement = document.createElement("p");
    paragraphRoundElement.textContent = `Round: ${roundInputElement.value}`;

    articleElement.appendChild(paragraphPlayerElement);
    articleElement.appendChild(paragraphScoreElement);
    articleElement.appendChild(paragraphRoundElement);

    const liElement = document.createElement("li");
    liElement.classList.add("dart-item");

    liElement.appendChild(articleElement);
    liElement.appendChild(editButtonElement);
    liElement.appendChild(okButtonElement);

    sureListUlElement.appendChild(liElement);

    addButtonElement.setAttribute("disabled", "disabled");
    clearInputFields();

    function editElement() {
      playerInputElement.value = paragraphPlayerElement.textContent;
      scoreInputElement.value = paragraphScoreElement.textContent.split(": ")[1];
      roundInputElement.value = paragraphRoundElement.textContent.split(": ")[1];

      liElement.remove();
      addButtonElement.removeAttribute("disabled");
    }

    function ok() {
      const scoreboardUlElement = document.getElementById("scoreboard-list");

      liElement.removeChild(editButtonElement);
      liElement.removeChild(okButtonElement);

      scoreboardUlElement.appendChild(liElement);
    }
  }

  clearButtonElement.addEventListener("click", () => {
    location.reload();
  });

  function clearInputFields() {
    playerInputElement.value = "";
    scoreInputElement.value = "";
    roundInputElement.value = "";
  }
}
