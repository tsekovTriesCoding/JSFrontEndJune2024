function attachEvents() {
  const baseURL = 'http://localhost:3030/jsonstore/collections/students';
  const tbodyElement = document.querySelector('#results tbody');
  const submitButtonElement = document.getElementById('submit');
  const firstNameInputElement = document.querySelector('input[type=text][name=firstName');
  const lastNameInputElement = document.querySelector('input[type=text][name=lastName');
  const facultyNumberInputElement = document.querySelector('input[type=text][name=facultyNumber');
  const gradeInputElement = document.querySelector('input[type=text][name=grade');

  submitButtonElement.addEventListener('click', () => {
    fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        firstName: firstNameInputElement.value,
        lastName: lastNameInputElement.value,
        facultyNumber: facultyNumberInputElement.value,
        grade: gradeInputElement.value,
      }),
    })
      .then(res => res.json())
      .then(data => {
        const newStudent = createStudentElement(data);
        tbodyElement.appendChild(newStudent);
      });
  });

  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      Object.values(data).forEach(student => {
        const studentElement = createStudentElement(student);
        tbodyElement.appendChild(studentElement);
      });
    });

  function createStudentElement(student) {
    const trElement = document.createElement('tr');

    const createTdElement = value => {
      const tdElement = document.createElement('td');
      tdElement.textContent = value;

      return tdElement;
    }

    const tdFirstNameElement = createTdElement(student.firstName);
    trElement.appendChild(tdFirstNameElement);

    const tdLastNameElement = createTdElement(student.lastName);
    trElement.appendChild(tdLastNameElement);

    const tdFacultyNumberElement = createTdElement(student.facultyNumber);
    trElement.appendChild(tdFacultyNumberElement);

    const tdGradeElement = createTdElement(student.grade);
    trElement.appendChild(tdGradeElement);

    return trElement;
  }

}

attachEvents();