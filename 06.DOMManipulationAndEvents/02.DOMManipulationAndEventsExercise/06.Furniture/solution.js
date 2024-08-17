function solve() {
  const generateButtonElement = document.querySelector('button');
  const tbodyElement = document.querySelector('.table tbody');
  const buyButtonElement = document.querySelector('#exercise button:nth-of-type(2)');
  const outputTextAreaElement = document.querySelector('textarea:last-of-type');

  generateButtonElement.addEventListener('click', () => {
    const furnitures = JSON.parse(generateButtonElement.parentElement.querySelector('textarea').value);
    for (const furniture of furnitures) {
      const tdImgElement = document.createElement('td');
      const imgElement = document.createElement('img');
      imgElement.src = furniture.img;
      tdImgElement.appendChild(imgElement);

      const tdNameElement = document.createElement('td');
      const pNameElement = document.createElement('p');
      pNameElement.textContent = furniture.name;
      tdNameElement.appendChild(pNameElement);

      const tdPriceElement = document.createElement('td');
      const pPriceElement = document.createElement('p');
      pPriceElement.textContent = furniture.price;
      tdPriceElement.appendChild(pPriceElement);

      const tdFactorElement = document.createElement('td');
      const pFactorElement = document.createElement('p');
      pFactorElement.textContent = furniture.decFactor;
      tdFactorElement.appendChild(pFactorElement);

      const tdCheckboxElement = document.createElement('td');
      const checkboxElement = document.createElement('input');
      checkboxElement.type = 'checkbox';
      tdCheckboxElement.appendChild(checkboxElement);

      const trElement = document.createElement('tr');
      trElement.appendChild(tdImgElement);
      trElement.appendChild(tdNameElement);
      trElement.appendChild(tdPriceElement);
      trElement.appendChild(tdFactorElement);
      trElement.appendChild(tdCheckboxElement);

      tbodyElement.appendChild(trElement);
    }
  });


  buyButtonElement.addEventListener('click', () => {
    let totalPrice = 0;
    let totalDecFactor = 0;
    const boughtFurnitures = [];

    Array.from(tbodyElement.children)
      .forEach(trElement => {
        const checkboxElement = trElement.querySelector('input[type=checkbox]');

        if (checkboxElement.checked) {
          const name = trElement.children.item(1).textContent;
          const furniturePrice = Number(trElement.children.item(2).textContent);
          const decFactor = Number(trElement.children.item(3).textContent);

          totalPrice += furniturePrice;
          totalDecFactor += decFactor;
          boughtFurnitures.push(name);
        }
      });

    const avgDecFactor = totalDecFactor / boughtFurnitures.length;

    outputTextAreaElement.textContent += `Bought furniture: ${boughtFurnitures.join(', ')}\n`;
    outputTextAreaElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`
    outputTextAreaElement.textContent += `Average decoration factor: ${avgDecFactor}`;
  });
}