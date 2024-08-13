function generateReport() {
    const thElements = document.querySelectorAll('table thead th')

    const columns = Array.from(thElements)
        .map(thElement => {
            const checkboxElement = thElement.querySelector('input[type=checkbox]');

            return {
                name: thElement.textContent.trim().toLowerCase(),
                active: checkboxElement.checked,
            };
        });

    const trElements = document.querySelectorAll('table tbody tr');

    const reportData = Array.from(trElements)
        .map(trElement => {
            const tdElements = trElement.querySelectorAll('td');

            const result = Array.from(tdElements)
                .reduce((data, tdElement, i) => {
                    if (columns[i].active) {
                        const columnName = columns[i].name;
                        data[columnName] = tdElement.textContent;
                    }

                    return data;
                }, {})

            return result;
        });

    const outputElement = document.getElementById('output');

    outputElement.value = JSON.stringify(reportData, null, 2);
}