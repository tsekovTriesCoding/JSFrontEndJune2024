function solve(product, quantity) {
    const totalPrice = getTotalPrice(product, quantity);

    console.log(totalPrice.toFixed(2));
    function getTotalPrice(product, quantity) {
        switch (product) {
            case 'coffee':
                return 1.5 * quantity;
            case 'water':
                return 1 * quantity;
            case 'coke':
                return 1.4 * quantity;
            case 'snacks':
                return 2 * quantity;
        }
    }
}

solve("water", 5);
solve("coffee", 2);