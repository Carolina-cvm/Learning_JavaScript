// CHALLENGE #1
const firstName = "Maria";
const lastName = "Silva";
let address = "main street";
address = "first street";
console.log(firstName, lastName, address);

// CHALLENGE #2
const street = 'Avenida Rui Barbosa';
const country = 'Brasil';
let fullMailingAddress = street + ' ' + country;
console.log();

// CHALLANGE #3
const score1 = 5;
const score2 = 10;
const score3 = 20;
const totalScore = score1 + score2 + score3;
const averageScore = totalScore / 3;
console.log(totalScore, averageScore);

const plates = 20;
const people = 7;
let remaining = plates % people;
remaining++;
const message = "There are" + remaining + "plates available";
console.log(message);

// CHALLANGE #4
const fruits = ['grape', 'apple', 'strawberry','watermelon', 10];
const firstFruit = fruits[1];
console.log(firstFruit); // retorna apple
fruits[4] = 'jackfruit';
console.log(fruits);
