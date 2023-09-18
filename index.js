
// Write your code here
const num1 = 31;
const num2 = 2;

const multiply = num1 * num2;

console.log(multiply);


 function randomIntegerGreaterThanZero() {
    return Math.floor(Math.random() * 100) + 1; 
  }
  
  const random = randomIntegerGreaterThanZero();

  
  const num3 = 20;
const num4 = 16;
const mod = num3 % num4;


function findMaxNumber(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }
  
  const setOfNumbers = [10, 5, 20, 15, 8];
  const max = findMaxNumber(setOfNumbers);
  

  