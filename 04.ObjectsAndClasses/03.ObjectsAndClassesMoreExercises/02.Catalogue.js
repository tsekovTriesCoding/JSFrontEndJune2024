function solve(input) {
    let products = {};

    for (const product of input) {
        const name = product.split(" : ")[0];
        const price = Number(product.split(" : ")[1]);

        products[name] = price;
    }

    let groups = new Set();

    Object.keys(products)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(key => {
            groups.add(key.charAt(0))
        });

    for (const group of groups) {
        console.log(group);
        Object.entries(products)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .forEach(([name, price]) => {
                if (group === name.charAt(0)) {
                    console.log(`  ${name}: ${price}`);
                }
            });
    }
}

solve([
    'Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10'
])

solve([
    'Omlet : 5.4',
    
    'Shirt : 15',
    
    'Cake : 59'
    ])