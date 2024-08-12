function extract(content) {
    const contentElement = document.getElementById(content);

    const matches = contentElement.textContent.matchAll(/\(([A-z a-z]+)\)/g);

    return Array.from(matches)
        .map(match => match[1])
        .join('; ');
}