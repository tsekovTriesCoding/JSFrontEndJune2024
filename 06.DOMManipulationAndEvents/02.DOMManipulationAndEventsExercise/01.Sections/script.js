function create(words) {
   const divElements = words
      .map(word => {
         const pElement = document.createElement('p');
         pElement.textContent = word;
         pElement.style.display = 'none';

         const divElement = document.createElement('div');
         divElement.appendChild(pElement);

         return divElement;
      });

   divElements.forEach(divElement => {
      divElement.addEventListener('click', () => {
         const pElement = divElement.querySelector('p');
         pElement.style.display = 'block';
      })
   });

   const divElementsFragment = document.createDocumentFragment();
   divElements.forEach(divElement => divElementsFragment.appendChild(divElement));
   const contentElement = document.getElementById('content');
   contentElement.appendChild(divElementsFragment);
}