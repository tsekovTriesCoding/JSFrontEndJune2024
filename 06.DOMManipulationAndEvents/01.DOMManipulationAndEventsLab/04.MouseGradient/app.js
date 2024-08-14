function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (event) => {
        const currentWidth = event.offsetX;
        const totalElementWidth = event.target.clientWidth;

        const progress = Math.floor((currentWidth / totalElementWidth) * 100);

        resultElement.textContent = `${progress}%`;
    })
}