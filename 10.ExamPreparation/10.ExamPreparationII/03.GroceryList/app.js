const baseUrl = "http://localhost:3030/jsonstore/grocery";
const loadProductsButton = document.getElementById("load-product");
const tBodyElement = document.getElementById("tbody");
const addProductButton = document.getElementById("add-product");
const nameInput = document.getElementById("product");
const countInput = document.getElementById("count");
const priceInput = document.getElementById("price");
const mainUpdateButton = document.getElementById("update-product");

loadProductsButton.addEventListener("click", loadProducts);

function loadProducts(e) {
    tBodyElement.innerHTML = "";

    if (e) {
        e.preventDefault();
    }

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => Object.values(data).forEach(product => {
            const tdButton = document.createElement("td");
            tdButton.classList.add("btn");

            const updateButton = document.createElement("button");
            updateButton.classList.add("update");
            updateButton.textContent = "Update";
            updateButton.addEventListener("click", updateProduct);

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", deleteProduct);

            tdButton.appendChild(updateButton);
            tdButton.appendChild(deleteButton);

            const trElement = document.createElement("tr");
            trElement.id = product._id;
            const tdName = document.createElement("td");
            tdName.classList.add("name");
            tdName.textContent = product.product;
            const tdCount = document.createElement("td");
            tdCount.classList.add("count");
            tdCount.textContent = product.count;
            const tdPrice = document.createElement("td");
            tdPrice.classList.add("price");
            tdPrice.textContent = product.price;

            trElement.appendChild(tdName);
            trElement.appendChild(tdCount);
            trElement.appendChild(tdPrice);
            trElement.appendChild(tdButton);

            tBodyElement.appendChild(trElement);
        }));
}

addProductButton.addEventListener("click", addProduct);

async function addProduct(e) {
    e.preventDefault();
    const newProduct = getProductInfo();

    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newProduct)
    });

    if (!response.ok) {
        return;
    }

    loadProducts();
}

async function deleteProduct(e) {
    const trElement = e.target.parentElement.parentElement;
    const productId = trElement.id;

    const response = await fetch(`${baseUrl}/${productId}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
    });

    trElement.remove();
    loadProducts();
}

let productToChangeId;
function updateProduct(e) {
    mainUpdateButton.removeAttribute("disabled");

    const trElement = e.target.parentElement.parentElement;
    productToChangeId = trElement.id;

    const name = trElement.querySelector(".name").textContent;
    const count = trElement.querySelector(".count").textContent;
    const price = trElement.querySelector(".price").textContent;

    nameInput.value = name;
    countInput.value = count;
    priceInput.value = price;

    mainUpdateButton.addEventListener("click", realUpdate);
}

async function realUpdate() {
    const response = await fetch(`${baseUrl}/${productToChangeId}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            product: nameInput.value,
            count: countInput.value,
            price: priceInput.value,
        })
    });

    if (!response.ok) {
        return;
    }

    loadProducts();
    mainUpdateButton.setAttribute("disabled", "disabled");
    productToChangeId = null;
}

function getProductInfo() {
    const product = nameInput.value;
    const count = countInput.value;
    const price = priceInput.value;

    return { product, count, price }
}