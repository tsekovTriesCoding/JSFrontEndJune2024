
const loadMealsButton = document.getElementById("load-meals");
const listElement = document.getElementById("list");
const tasksUrl = "http://localhost:3030/jsonstore/tasks";
const addMealButtonElement = document.getElementById("add-meal");
const editMealButton = document.getElementById("edit-meal");
const foodInputElement = document.getElementById("food");
const timeInputElement = document.getElementById("time");
const caloriesInputElement = document.getElementById("calories");

let mealToChangeId;

const loadMeals = async () => {
    const response = await fetch(tasksUrl);
    const data = await response.json();

    listElement.innerHTML = "";

    for (const meal of Object.values(data)) {
        const changeButtonElement = document.createElement('button');
        changeButtonElement.textContent = 'Change';
        changeButtonElement.classList.add('change-meal');

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.classList.add('delete-meal');

        const buttonContainerElement = document.createElement('div');
        buttonContainerElement.id = 'meal-buttons';
        buttonContainerElement.appendChild(changeButtonElement);
        buttonContainerElement.appendChild(deleteButtonElement);

        const foodH2Element = document.createElement('h2');
        foodH2Element.textContent = meal.food;

        const timeH3Element = document.createElement('h3');
        timeH3Element.textContent = meal.time;

        const caloryH3Element = document.createElement('h3');
        caloryH3Element.textContent = meal.calories;

        const mealElement = document.createElement('div');
        mealElement.classList.add('meal');
        mealElement.appendChild(foodH2Element);
        mealElement.appendChild(timeH3Element);
        mealElement.appendChild(caloryH3Element);
        mealElement.appendChild(buttonContainerElement);

        listElement.appendChild(mealElement);

        changeButtonElement.addEventListener('click', () => {

            mealToChangeId = meal._id;

            foodInputElement.value = meal.food;
            timeInputElement.value = meal.time;
            caloriesInputElement.value = meal.calories;

            editMealButton.removeAttribute('disabled');

            addMealButtonElement.setAttribute('disabled', 'disabled');

            mealElement.remove();
        });

        deleteButtonElement.addEventListener('click', async () => {
            await fetch(`${tasksUrl}/${meal._id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json",
                },
            });

            mealElement.remove();
        });
    }
};

loadMealsButton.addEventListener('click', loadMeals);

addMealButtonElement.addEventListener("click", async () => {
    const newMeal = getInputData();

    const response = await fetch(tasksUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(newMeal),
    });

    if (!response.ok) {
        return;
    }

    loadMeals();

    foodInputElement.value = "";
    timeInputElement.value = "";
    caloriesInputElement.value = "";
});

editMealButton.addEventListener("click", async () => {
    const editedMeal = getInputData();

    const response = await fetch(`${tasksUrl}/${mealToChangeId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            _id: mealToChangeId,
            food: editedMeal.food,
            calories: editedMeal.calories,
            time: editedMeal.time,
        })
    });

    if (!response.ok) {
        return;
    }

   loadMeals();

    editMealButton.setAttribute("disabled", "disabled");
    addMealButtonElement.removeAttribute("disabled");

    foodInputElement.value = "";
    timeInputElement.value = "";
    caloriesInputElement.value = "";

    mealToChangeId = null;
});

function getInputData() {
    const food = foodInputElement.value;
    const time = timeInputElement.value;
    const calories = caloriesInputElement.value;
    return { food, time, calories };
}

