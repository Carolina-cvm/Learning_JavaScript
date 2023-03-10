// AULA 42
function addValue(num1, num2){
  return num1 + num2;
}

const firstValue = addValue(5, 5);
const secondValue = addValue(10, 5);

const add = function(num1, num2){
  return num1 + num2;
}

const values = [firstValue, secondValue, add(30, 5)]
console.log(values);
