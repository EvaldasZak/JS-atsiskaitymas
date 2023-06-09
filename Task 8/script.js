/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


class Calculator {
    sum(num1, num2) {
      return num1 + num2;
    }
    
    subtraction(num1, num2) {
      return num1 - num2;
    }
    
    multiplication(num1, num2) {
      return num1 * num2;
    }
    
    division(num1, num2) {
      return num1 / num2;
    }
  }

const myCalculator = new Calculator();

console.log(myCalculator.sum(2, 3));
console.log(myCalculator.subtraction(5, 3));
console.log(myCalculator.multiplication(4, 6));
console.log(myCalculator.division(10, 2));