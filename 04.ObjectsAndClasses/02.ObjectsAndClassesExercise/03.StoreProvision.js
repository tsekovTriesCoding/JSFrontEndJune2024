function solve(arr1, arr2) {
    let products = {};
    for (let i = 0; i < arr1.length; i += 2) {
        const name = arr1[i];
        const quantity = Number(arr1[i + 1]);

        products[name] = quantity;
    }

    for (let i = 0; i < arr2.length; i += 2) {
        const name = arr2[i];
        const quantity = Number(arr2[i + 1]);

        if (products.hasOwnProperty(name)) {
            products[name] += Number(quantity);
        } else {
            products[name] = quantity;
        }
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product]}`);
    }
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);

solve(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);