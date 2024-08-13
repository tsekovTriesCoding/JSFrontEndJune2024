function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const inputTextAreaElement = document.querySelector('#inputs textarea');
      let inputInfo = JSON.parse(inputTextAreaElement.value);

      let restaurants = {};
      for (const restaurantInfo of inputInfo) {
         const [restaurantName, employeesInfo] = restaurantInfo.split(' - ');

         if (!restaurants.hasOwnProperty(restaurantName)) {
            restaurants[restaurantName] = {};
         }

         const employees = employeesInfo.split(', ');

         for (const employee of employees) {
            const [employeeName, salary] = employee.split(' ');
            restaurants[restaurantName][employeeName] = salary;
         }
      }

      const bestRestaurant = Object.entries(restaurants)
         .sort((r1, r2) => (Object.values(r2[1]).map(salary => Number(salary)).reduce(
            (accumulator, currentValue) => accumulator + Number(currentValue),)) / Object.values(r2[1]).length -
            (Object.values(r1[1]).map(salary => Number(salary)).reduce(
               (accumulator, currentValue) => accumulator + Number(currentValue),)) / Object.values(r1[1]).length)[0];

      const avgSalary = Object.values(bestRestaurant[1])
         .map(salary => Number(salary))
         .reduce((accumulator, currentValue) => accumulator + currentValue,) / Object.values(bestRestaurant[1]).length;

      const bestSalary = Object.values(bestRestaurant[1])
         .map(salary => Number(salary))
         .sort((s1, s2) => s2 - s1)[0];

      const bestRestaurantOutput = `Name: ${bestRestaurant[0]} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      const workersOutput = Object.entries(bestRestaurant[1])
         .sort((w1, w2) => Number(w2[1]) - Number(w1[1]))
         .map(worker => `Name: ${worker[0]} With Salary: ${Number(worker[1])}`)
         .join(' ');

      const bestRestaurantElement = document.querySelector('#bestRestaurant p');
      bestRestaurantElement.textContent = bestRestaurantOutput;

      const workersElement = document.querySelector('#workers p');
      workersElement.textContent = workersOutput;
   }
}