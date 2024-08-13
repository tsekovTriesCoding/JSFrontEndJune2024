function search() {
   const townsListElement = document.getElementById('towns');
   const searchWord = document.getElementById("searchText").value;

   let matchCount = 0;
   Array.from(townsListElement.children)
      .forEach(town => {
         if (town.textContent.toLowerCase().includes(searchWord.toLowerCase())) {
            town.style.textDecoration = 'underline';
            town.style.fontWeight = 'bold';
            matchCount++;
         }
      });

   const resultElement = document.getElementById('result');
   resultElement.textContent = `${matchCount} matches found`;

}
