// AULA 74
// find
// se tiver mais de um retorna o primeiro que encontrar
const people = [
  { name: 'joao', age: 20, profession: 'developer', id: 1 },
  { name: 'luana', age: 25, profession: 'designer', id: 2 },
  { name: 'luan', age: 21, profession: 'engineer', id: 2 },
  { name: 'julia', age: 23, profession: 'the boss', id: 4 },
];

const person = people.find(function(person) {
  return person.id === 2; // luana
});
console.log(person);

const names = ['maria', 'ana', 'joao', 'lucas'];
console.log(
  names.find(function (name){
  return name === 'ana';
  })
);
