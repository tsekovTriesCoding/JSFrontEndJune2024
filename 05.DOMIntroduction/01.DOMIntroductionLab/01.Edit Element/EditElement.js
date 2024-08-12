function editElement(element, match, replacer) {
    // element.textContent = element.textContent.replaceAll(match, replacer);

    while (element.textContent.includes(match)) {
        element.textContent = element.textContent.replace(match, replacer);
    }
}