const baseUrl = "http://localhost:3030/jsonstore/tasks";
const loadCoursesButtonElement = document.getElementById("load-course");
const divListElement = document.getElementById("list");
const courseNameInputElement = document.getElementById("course-name");
const courseTypeInputElement = document.getElementById("course-type");
const descriptionTextAreaElement = document.getElementById("description");
const teacherNameInputElement = document.getElementById("teacher-name");
const addCourseButtonElement = document.getElementById("add-course");
const editCourseButtonElement = document.getElementById("edit-course");

let courseToEditId;

loadCoursesButtonElement.addEventListener("click", loadCourses);

function loadCourses() {
    divListElement.innerHTML = "";

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => Object.values(data).forEach(course => {
            const finishButtonElement = document.createElement("button");
            finishButtonElement.classList.add("finish-btn");
            finishButtonElement.textContent = "Finish Course";
            finishButtonElement.addEventListener("click", deleteCourse);

            const editButtonElement = document.createElement("button");
            editButtonElement.classList.add("edit-btn");
            editButtonElement.textContent = "Edit Course";
            editButtonElement.addEventListener("click", editCourse);

            const h4Element = document.createElement("h4");
            h4Element.textContent = course.description;
            const h3TypeElement = document.createElement("h3");
            h3TypeElement.textContent = course.type;
            const h3TeacherElement = document.createElement("h3");
            h3TeacherElement.textContent = course.teacher;
            const h2TitleElement = document.createElement("h2");
            h2TitleElement.textContent = course.title;

            const divContainerElement = document.createElement("div");
            divContainerElement.classList.add("container");

            divContainerElement.appendChild(h2TitleElement);
            divContainerElement.appendChild(h3TeacherElement);
            divContainerElement.appendChild(h3TypeElement);
            divContainerElement.appendChild(h4Element);
            divContainerElement.appendChild(editButtonElement);
            divContainerElement.appendChild(finishButtonElement);

            divListElement.appendChild(divContainerElement);

            function editCourse() {
                divListElement.removeChild(divContainerElement);

                courseNameInputElement.value = course.title;
                courseTypeInputElement.value = course.type;
                descriptionTextAreaElement.value = course.description;
                teacherNameInputElement.value = course.teacher;

                editCourseButtonElement.removeAttribute("disabled");
                addCourseButtonElement.setAttribute("disabled", "disabled");

                courseToEditId = course._id;
            }

            async function deleteCourse() {
                const response =  await fetch(`${baseUrl}/${course._id}`, {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json"
                    },
                });
        
                divListElement.removeChild(divContainerElement);
            }
        }));
}

addCourseButtonElement.addEventListener("click", addCourse);

async function addCourse(e) {
    e.preventDefault();
    const newCourse = getNewCourse();
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(newCourse),
    });

    if (!response.ok) {
        return;
    }

    loadCourses();
    clearInputFields();
}

editCourseButtonElement.addEventListener("click", doEditCourse);

async function doEditCourse(e) {
    e.preventDefault();

    const editedCourse = getNewCourse();
    const response = await fetch(`${baseUrl}/${courseToEditId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            _id: courseToEditId,
            title: editedCourse.title,
            type: editedCourse.type,
            description: editedCourse.description,
            teacher: editedCourse.teacher,
        }),
    });

    if (!response.ok) {
        return;
    }

    loadCourses();
    editCourseButtonElement.setAttribute("disabled", "disabled");
    addCourseButtonElement.removeAttribute("disabled");

    courseToEditId = null;
}

function getNewCourse() {
    const title = courseNameInputElement.value;
    const type = courseTypeInputElement.value;
    const description = descriptionTextAreaElement.value;
    const teacher = teacherNameInputElement.value;

    return { title, type, description, teacher }
}

function clearInputFields() {
    courseNameInputElement.value = "";
    courseTypeInputElement.value = "";
    descriptionTextAreaElement.value = "";
    teacherNameInputElement.value = "";
}