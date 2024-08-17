function attachEventsListeners() {
    const inputFieldElement = document.getElementById('inputDistance');
    const inputUnitElements = document.getElementById('inputUnits');
    const convertButtonElement = document.getElementById('convert');
    const outputFieldElement = document.getElementById('outputDistance');
    const outputUnitElements = document.getElementById('outputUnits');

    const convereters = {
        Millimeters(millimeters) {
            return millimeters;
        },
        Centimeters(millimeters) {
            return millimeters / 10;
        },
        Meters(millimeters) {
            return millimeters / 1000;
        },
        Kilometers(millimeters) {
            return millimeters/ 1000000;
        },
        Miles(millimeters) {
            return millimeters / 1609344;
        },
        Yards(millimeters) {
            return millimeters / 914.4;
        },
        Feet(millimeters) {
            return millimeters / 304.8;
        },
        Inches(millimeters) {
            return millimeters / 25.4;
        },
    }

    convertButtonElement.addEventListener('click', (e) => {
        const inputUnit = inputUnitElements.options[inputUnitElements.selectedIndex].textContent;
        const outputUnit = outputUnitElements.options[outputUnitElements.selectedIndex].textContent;

        const inputValue = toMillimeters(inputUnit, inputFieldElement.value);
        const output = convereters[outputUnit](inputValue);
        outputFieldElement.value = output;
    });

    function toMillimeters(unit, value) {
        switch (unit) {
            case 'Millimeters':
                return value;
            case 'Centimeters':
                return value * 10;
            case 'Meters':
                return value * 1000;
            case 'Kilometers':
                return value * 1000000;
            case 'Miles':
                return value * 1609344;
            case 'Yards':
                return value * 914.4;
            case 'Feet':
                return value * 304.8;
            case 'Inches':
                return value * 25.4;
        }
    }
}