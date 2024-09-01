window.addEventListener("load", solve);

function solve() {
    const publishButtonElement = document.getElementById("publish-btn");
    const reviewListUlElement = document.getElementById("review-list");
    const titleInputElement = document.getElementById("task-title");
    const categoryInputElement = document.getElementById("task-category");
    const contentTextareaElement = document.getElementById("task-content");

    publishButtonElement.addEventListener("click", publish);

    let title;
    let category;
    let content;

    function publish(e) {
        e.preventDefault();

        if (titleInputElement.value == "" || categoryInputElement.value == "" || contentTextareaElement.value == "") {
            return;
        }

        const postButtonElement = document.createElement("button");
        postButtonElement.classList.add("action-btn");
        postButtonElement.classList.add("post");
        postButtonElement.textContent = "Post";
        postButtonElement.addEventListener("click", postElement);

        const editButtonElement = document.createElement("button");
        editButtonElement.classList.add("action-btn");
        editButtonElement.classList.add("edit");
        editButtonElement.textContent = "Edit";
        editButtonElement.addEventListener("click", editElement);

        const articleElement = document.createElement("artcile");

        const h4Element = document.createElement("h4");
        h4Element.textContent = titleInputElement.value;
        title = titleInputElement.value;
        const paragraphCategoryElement = document.createElement("p");
        paragraphCategoryElement.textContent = `Category: ${categoryInputElement.value}`;
        category = categoryInputElement.value;
        const paragraphContentElement = document.createElement("p");
        paragraphContentElement.textContent = `Content: ${contentTextareaElement.value}`;
        content = contentTextareaElement.value;

        articleElement.appendChild(h4Element);
        articleElement.appendChild(paragraphCategoryElement);
        articleElement.appendChild(paragraphContentElement);

        const liElement = document.createElement("li");
        liElement.classList.add("rpost");

        liElement.appendChild(articleElement);
        liElement.appendChild(editButtonElement);
        liElement.appendChild(postButtonElement);

        reviewListUlElement.appendChild(liElement);

        clearInputFields();
    }

    function postElement(e) {
        e.preventDefault();

        const publishedListUlElement = document.getElementById("published-list");
        const rpostElement = e.target.parentElement;
        const editButton = rpostElement.querySelector(".action-btn.edit");
        const postButton = rpostElement.querySelector(".action-btn.post");

        rpostElement.removeChild(editButton);
        rpostElement.removeChild(postButton);

        publishedListUlElement.appendChild(rpostElement);
    }

    function editElement(e) {
        const rpostElement = e.target.parentElement;

        titleInputElement.value = title;
        categoryInputElement.value = category;
        contentTextareaElement.value = content;

        rpostElement.remove();
    }

    function clearInputFields() {
        titleInputElement.value = "";
        categoryInputElement.value = "";
        contentTextareaElement.value = "";
    }
}



