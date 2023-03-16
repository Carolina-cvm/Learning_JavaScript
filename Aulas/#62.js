// AULA 62
const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`); // 1
console.log(`the second value is ${number2}`); // 7

let person = {nome: 'lucas'};
let person2 = {...person};
person2.nome = 'maria';
console.log(`the first name is ${person.nome}`); // lucas
console.log(`the second name is ${person2.nome}`); // maria
