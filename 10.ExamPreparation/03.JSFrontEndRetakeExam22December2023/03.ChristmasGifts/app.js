const baseUrl = "http://localhost:3030/jsonstore/gifts";
const loadPresentsButtonElement = document.getElementById("load-presents");
const givListElement = document.getElementById("gift-list");
const addPresentButtonElement = document.getElementById("add-present");
const editPresentButtonElement = document.getElementById("edit-present");
const giftInputElement = document.getElementById("gift");
const forInputElement = document.getElementById("for");
const priceInputElement = document.getElementById("price");


loadPresentsButtonElement.addEventListener("click", loadPresents);
let presentToChangeId;

function loadPresents() {
    givListElement.innerHTML = "";

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            Object.values(data)
                .forEach(gift => {
                    const divButtonsContainerElement = document.createElement("div");
                    divButtonsContainerElement.classList.add("buttons-container");

                    const changeButtonElement = document.createElement("button");
                    changeButtonElement.classList.add("change-btn");
                    changeButtonElement.textContent = "Change";

                    const deleteButtonElement = document.createElement("button");
                    deleteButtonElement.classList.add("delete-btn");
                    deleteButtonElement.textContent = "Delete";

                    divButtonsContainerElement.appendChild(changeButtonElement);
                    divButtonsContainerElement.appendChild(deleteButtonElement);

                    const divContentElement = document.createElement("div");
                    divContentElement.classList.add("content");

                    const paragraphGiftElement = document.createElement("p");
                    paragraphGiftElement.textContent = gift.gift;
                    const paragraphForElement = document.createElement("p");
                    paragraphForElement.textContent = gift.for;
                    const paragraphPriceElement = document.createElement("p");
                    paragraphPriceElement.textContent = gift.price;

                    divContentElement.appendChild(paragraphGiftElement);
                    divContentElement.appendChild(paragraphForElement);
                    divContentElement.appendChild(paragraphPriceElement);

                    const giftSockDivElement = document.createElement("div");
                    giftSockDivElement.classList.add("gift-sock");

                    giftSockDivElement.appendChild(divContentElement);
                    giftSockDivElement.appendChild(divButtonsContainerElement);

                    givListElement.appendChild(giftSockDivElement);

                    changeButtonElement.addEventListener("click", changePresent);

                    async function changePresent() {
                        giftSockDivElement.remove();
                        giftInputElement.value = gift.gift;
                        forInputElement.value = gift.for;
                        priceInputElement.value = gift.price;

                        editPresentButtonElement.removeAttribute("disabled");
                        addPresentButtonElement.setAttribute("disabled", "disabled");

                        presentToChangeId = gift._id;
                    }

                    deleteButtonElement.addEventListener("click", deletePresent);

                    async function deletePresent() {
                        await fetch(`${baseUrl}/${gift._id}`, {
                            method: 'DELETE',
                            headers: {
                                "content-type": "application/json",
                            },
                        })

                        giftSockDivElement.remove();
                    }

                });

            editPresentButtonElement.setAttribute("disabled", "disabled");
        });
}

addPresentButtonElement.addEventListener("click", addPresent);

async function addPresent() {
    const newPresent = getPresentInfo();
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(newPresent),
    });

    if (!response.ok) {
        return;
    }

    loadPresents();
    clearInputFields();
}

editPresentButtonElement.addEventListener("click", editPresent);

async function editPresent() {
    const newPresent = getPresentInfo();
    const response = await fetch(`${baseUrl}/${presentToChangeId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            _id: presentToChangeId,
            gift: newPresent.gift,
            for: newPresent.for,
            price: newPresent.price,
        })
    });

    if (!response.ok) {
        return;
    }

    loadPresents();
    editPresentButtonElement.setAttribute("disabled", "disabled");
    addPresentButtonElement.removeAttribute("disabled");

    presentToChangeId = null;
}

function getPresentInfo() {
    const gift = giftInputElement.value;
    const forWhom = forInputElement.value;
    const price = priceInputElement.value;

    return { gift, for: forWhom, price };
}

function clearInputFields() {
    giftInputElement.value = "";
    forInputElement.value = "";
    priceInputElement.value = "";
}