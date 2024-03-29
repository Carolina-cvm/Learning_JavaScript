// AULA 86
// FLOOR arredonda para menos
const number = 4.56789;
const result = Math.floor(number);
console.log(result); // 4

const floor = Math.floor(8.25795);
console.log(floor); // 8

// CEIL arredonda para mais
const ceil = Math.ceil(4.12222);
console.log(ceil); // 5

// SQUARE ROOT
const sqrt = Math.sqrt(25);
console.log(sqrt); // 5

// PI
const pi = Math.PI;
console.log(pi); // 3,14...

// MIN
const min = Math.min(4,5,8,15);
console.log(min); // 4

// MAX
const max = Math.max(4,5,8,15);
console.log(max); // 15

// RANDOM gera número aleatório
const random = Math.random(); // nunca será 1. Ex: 0.1951612
console.log(random);

// número aleatório de 1 a 10
const numRandom = Math.floor(Math.random() * 10 + 1);
console.log(numRandom);
