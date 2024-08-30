window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById("add-btn");
    const expenseInputElement = document.getElementById("expense");
    const amountInputElement = document.getElementById("amount");
    const dateInputElement = document.getElementById("date");
    const previewListUlElement = document.getElementById("preview-list");
    const deleteButtonElement = document.querySelector(".btn.delete");

    addButtonElement.addEventListener("click", () => {
        if (expenseInputElement.value == "" ||
            amountInputElement.value == "" ||
            dateInputElement.value == "") {
            return;
          }

        const paragraphDateElement = document.createElement("p");
        paragraphDateElement.textContent = `Date: ${dateInputElement.value}`;
        const dateText = dateInputElement.value;
        const paragraphAmountElement = document.createElement("p");
        paragraphAmountElement.textContent = `Amount: ${amountInputElement.value}$`;
        const amountText = amountInputElement.value;
        const expenseElement = document.createElement("p");
        expenseElement.textContent = `Type: ${expenseInputElement.value}`;
        const expenseText = expenseInputElement.value;

        const articleElement = document.createElement("article");
        articleElement.appendChild(expenseElement);
        articleElement.appendChild(paragraphAmountElement);
        articleElement.appendChild(paragraphDateElement);

        const okButtonElement = document.createElement("button");
        okButtonElement.classList.add("btn");
        okButtonElement.classList.add("ok");
        okButtonElement.textContent = "ok";
        const editButtonElement = document.createElement("button");
        editButtonElement.classList.add("btn");
        editButtonElement.classList.add("edit");
        editButtonElement.textContent = "edit";

        editButtonElement.addEventListener("click", () => {
            expenseInputElement.value = expenseText;
            amountInputElement.value = amountText;
            dateInputElement.value = dateText;

            previewListUlElement.innerHTML = "";
            addButtonElement.disabled = false;
        });

        okButtonElement.addEventListener("click", () => {
            const expensesUlElement = document.getElementById("expenses-list");
            const listFromPreviewElement = previewListUlElement.querySelector(".expense-item");
            listFromPreviewElement.removeChild(divButtonElement);
            console.log(listFromPreviewElement);
            expensesUlElement.appendChild(listFromPreviewElement);

            previewListUlElement.innerHTML = "";
            addButtonElement.disabled = false;
        });

        const divButtonElement = document.createElement("div");
        divButtonElement.classList.add("buttons");
        divButtonElement.appendChild(editButtonElement);
        divButtonElement.appendChild(okButtonElement);

        const liElement = document.createElement("li");
        liElement.classList.add("expense-item");

        liElement.appendChild(articleElement);
        liElement.appendChild(divButtonElement);
        previewListUlElement.appendChild(liElement);

        addButtonElement.disabled = true;
        expenseInputElement.value = "";
        amountInputElement.value = "";
        dateInputElement.value = "";
    });

    deleteButtonElement.addEventListener("click", () => {
       location.reload();
    });
}
