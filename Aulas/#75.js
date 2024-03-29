// AULA 75
// reduce
// always return the first parameter acc, total

const people = [
  { name: 'joao', age: 20, profession: 'developer', salary: 200 },
  { name: 'maria', age: 25, profession: 'designer', salary: 350 },
  { name: 'luan', age: 24, profession: 'engineer', salary: 580 },
  { name: 'julia', age: 23, profession: 'the boss', salary: 620 },
];
const total = people.reduce(function(acc, currItem){
  console.log(`total: ${acc}`);
  console.log(`current money: ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 0);

console.log(total);
