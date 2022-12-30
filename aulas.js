//AULA 23
let fruta = "morango";
document.write(fruta);
alert('Olá mundo');
console.log('Olá pessoas');

let nome, sobrenome, idade;
nome = "maria";
sobrenome = "silva";
idade = "dezoito anos";

//AULA 24
var valor = 5; // adiciona
let name = "ana"; // substitui
const doce = "chocolate"; // cannot reassign
console.log(valor);
console.log(name);
console.log(fruta);

//AULA 30
const foreName = 'Maria';
const surName = 'da Silva';
let fullName = foreName + ' ' + surName;
console.log('O nome dela é:' + fullName);

//AULA 32
const number = 27;
const number2 = 35;

const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);

//AULA 33
let number = 40;
number += 5; // number = 45
number -= 10; // number = 35
number++; // number = 36
number--; // number = 35
number--; // number = 34
console.log(number);

//AULA 35
let number1 = '10';
let number2 = '5';
const result = number1 - number2;
console.log(result) // 5
const result2 = number1 + number2;
console.log(result) // '105'

// AULA 36
// string
const text = 'some text here';
console.log(typeof text); // retorna que é uma string
// number
const number = 15;
console.log(typeof number); // retorna que é um number
// boolean
const value1 = true;
const value2 = false;
console.log(typeof value1, typeof value2); // retorna que é um boolean
// null
const result = null;
console.log(typeof result); // retorna que é um object
// undefined
let dogname;
console.log(typeof dogname); // retorna undefined

// AULA 37
// array: 0 index based
const friends = ['ana','joao','juca','maria', 10];
console.log(friends);
console.log(friends[2]); // retorna juca
friends[2] = 'hanna';
console.log(friends[2]); // retorna hanna

// AULA 39
function hello(){ // declare
  console.log('hey people');
}
hello() // invoke

//AULA 40
function greet(name){
  console.log('Hello' + name + 'How are you?');
}
greet('Ana');
// or
const ana = 'ana';
greet(ana);

