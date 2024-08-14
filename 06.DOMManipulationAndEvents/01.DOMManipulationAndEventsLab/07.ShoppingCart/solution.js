function solve() {
   const addProductsButtonElements = document.querySelectorAll('button.add-product');
   const textareaElement = document.querySelector('textarea');
   const checkoutButtonElement = document.querySelector('button.checkout');

   let totalPrice = 0;
   let productsList = new Set();

   for (const buttonElement of addProductsButtonElements) {
      // const productElement = buttonElement.closest('.product');
      const productElement = buttonElement.parentElement.parentElement;

      buttonElement.addEventListener('click', () => {
         const productTitle = productElement.querySelector('.product-title').textContent;
         const productPrice = Number(productElement.querySelector('.product-line-price').textContent);
         totalPrice += productPrice;
         productsList.add(productTitle);

         textareaElement.textContent += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`
      });
   }

   checkoutButtonElement.addEventListener('click', (event) => {
      Array.from(addProductsButtonElements).forEach(addButtonElement => addButtonElement.setAttribute('disabled', 'disabled'));
      event.target.setAttribute('disabled', 'disabled');
      textareaElement.textContent += `You bought ${[...productsList].join(', ')} for ${totalPrice.toFixed(2)}.`
   });
}