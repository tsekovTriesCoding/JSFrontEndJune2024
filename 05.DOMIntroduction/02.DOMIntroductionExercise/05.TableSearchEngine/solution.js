function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const trElements = document.querySelectorAll('table.container tbody tr');
      const searchStringElement = document.getElementById('searchField');
      const searchString = searchStringElement.value;

      searchStringElement.value = '';

      for (const trElement of trElements) {
         const tdElements = trElement.querySelectorAll('td');
         let isSelected = false;

         trElement.classList.remove('select');

         for (const tdElement of tdElements) {
            if (tdElement.textContent.toLocaleLowerCase().includes(searchString.toLowerCase())) {
               isSelected = true;
               break;
            }
         }

         if (isSelected) {
            trElement.classList.add('select');
         }
      }
   }
}