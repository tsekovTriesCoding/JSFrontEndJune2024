window.addEventListener('load', solve);

function solve() {
    const labelToIconMap = {
        'Feature': '⊡',
        'Low Priority Bug': '☉',
        'High Priority Bug': '⚠',
    };
    const labelNameToClassMap = {
        'Feature': 'feature',
        'Low Priority Bug': 'low-priority',
        'High Priority Bug': 'high-priority',
    };

    const createTaskButtonElement = document.getElementById("create-task-btn");
    const taskSectionElement = document.getElementById("tasks-section");
    const taskTitleInputElement = document.getElementById("title");
    const descriptionTextareaElement = document.getElementById("description");
    const labelSelectElement = document.getElementById("label");
    const pointsInputElement = document.getElementById("points");
    const assigneeInputElement = document.getElementById("assignee");
    const totalSprintPointsElement = document.getElementById("total-sprint-points");
    const deleteTaskButtonElement = document.getElementById("delete-task-btn");
    const taskIdElement = document.getElementById("task-id");

    createTaskButtonElement.addEventListener("click", createTask);
    let taskCount = 0;
    let totalPoints = 0;
    let taskFeature;

    function createTask(e) {
        e.preventDefault();
        
        if (taskTitleInputElement.value == "" || descriptionTextareaElement.value == ""
            || labelSelectElement.value == "" || pointsInputElement.value == "" || assigneeInputElement.value == ""
        ) {
            return;
        }

        taskCount++;

        const deleteButtonElement = document.createElement("button");
        deleteButtonElement.textContent = "Delete";
        deleteButtonElement.addEventListener("click", editTask);

        const taskCardActionsElement = document.createElement("div");
        taskCardActionsElement.classList.add("task-card-actions");
        taskCardActionsElement.appendChild(deleteButtonElement);

        const articleTaskElement = document.createElement("article");
        articleTaskElement.classList.add("task-card");
        articleTaskElement.id = `task-${taskCount}`;

        const taskCardAssigneeElement = document.createElement("div");
        taskCardAssigneeElement.classList.add("task-card-assignee");
        taskCardAssigneeElement.textContent = `Assigned to: ${assigneeInputElement.value}`;

        const taskCardPointsElement = document.createElement("div");
        taskCardPointsElement.classList.add("task-card-points");
        taskCardPointsElement.textContent = `Estimated at ${pointsInputElement.value}pts`;
        totalPoints += Number(pointsInputElement.value);

        const taskCardDescriptionElement = document.createElement("p");
        taskCardDescriptionElement.classList.add("task-card-description");
        taskCardDescriptionElement.textContent = descriptionTextareaElement.value;

        const taskCardTitleElement = document.createElement("h3");
        taskCardTitleElement.classList.add("task-card-title");
        taskCardTitleElement.textContent = taskTitleInputElement.value;

        const taskFeatureElement = document.createElement("div");
        taskFeatureElement.classList.add("task-card-label");
        taskFeatureElement.textContent = labelSelectElement.options[labelSelectElement.selectedIndex].value + " " + 
        labelToIconMap[labelSelectElement.options[labelSelectElement.selectedIndex].value];
        taskFeatureElement.classList.add(labelNameToClassMap[labelSelectElement.options[labelSelectElement.selectedIndex].value]);
        taskFeature = labelSelectElement.options[labelSelectElement.selectedIndex].value;

        articleTaskElement.appendChild(taskFeatureElement);
        articleTaskElement.appendChild(taskCardTitleElement);
        articleTaskElement.appendChild(taskCardDescriptionElement);
        articleTaskElement.appendChild(taskCardPointsElement);
        articleTaskElement.appendChild(taskCardAssigneeElement);
        articleTaskElement.appendChild(taskCardActionsElement);

        taskSectionElement.appendChild(articleTaskElement);

        totalSprintPointsElement.textContent = `Total Points ${totalPoints}pts`;

        clearInputFields();

        function editTask() {
            taskTitleInputElement.value = taskCardTitleElement.textContent;
            descriptionTextareaElement.value = taskCardDescriptionElement.textContent;
            labelSelectElement.value = taskFeature;
            pointsInputElement.value = taskCardPointsElement.textContent.replace(/(?!-)\D/g, '');
            assigneeInputElement.value = taskCardAssigneeElement.textContent.replace("Assigned to: ", "");

            deleteTaskButtonElement.removeAttribute("disabled");
            createTaskButtonElement.setAttribute("disabled", "disabled");
            disableInputFields();

            taskIdElement.value = articleTaskElement.id;
        }
    }

    deleteTaskButtonElement.addEventListener("click", deleteTask);

    function deleteTask() {
        const taskToDelete = taskSectionElement.querySelector(`#${taskIdElement.value}`);
        const pointsToSubtract = taskToDelete.querySelector(".task-card-points").textContent.replace(/(?!-)\D/g, '');

        taskToDelete.remove();
        clearInputFields();
        createTaskButtonElement.removeAttribute("disabled");
        deleteTaskButtonElement.setAttribute("disabled", "disabled");

        totalPoints -= pointsToSubtract;

        totalSprintPointsElement.textContent = `Total Points ${totalPoints}pts`;
        taskFeature - null;
        enableInputFields();
    }

    function clearInputFields() {
        taskTitleInputElement.value = "";
        descriptionTextareaElement.value = "";
        labelSelectElement.value = "";
        pointsInputElement.value = "";
        assigneeInputElement.value = "";
    }

    function disableInputFields() {
        taskTitleInputElement.setAttribute("disabled", "disabled");
        descriptionTextareaElement.setAttribute("disabled", "disabled");
        labelSelectElement.setAttribute("disabled", "disabled");
        pointsInputElement.setAttribute("disabled", "disabled");
        assigneeInputElement.setAttribute("disabled", "disabled");
    }

    function enableInputFields() {
        taskTitleInputElement.removeAttribute("disabled");
        descriptionTextareaElement.removeAttribute("disabled");
        labelSelectElement.removeAttribute("disabled");
        pointsInputElement.removeAttribute("disabled");
        assigneeInputElement.removeAttribute("disabled");
    }
}