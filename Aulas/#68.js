// AULA 68
// js usa a variavel local, se não achar procura a variavel global

const globalNumber = 5;
function add(num1, num2){
  const result = num1 + num2 + globalNumber;
  return result;
}
console.log(add(3,4)); // 12


const globalNumber2 = 5; // global
function add2(num1, num2){
  const globalNumber2 = 20; // local
  const result = num1 + num2 + globalNumber2;
  return result;
}
console.log(add2(3,4)); // 27
