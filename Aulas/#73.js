// AULA 73
// filter
const people = [
  {name: 'ana', age: 24, profession: 'developer' },
  {name: 'maria', age: 30, profession: 'designer' },
  {name: 'julia', age: 22, profession: 'engineer' },
];

const youngPeople = people.filter(function (person){
  return person.age <= 25; // ana, julia
});

const profession = people.filter(function (person){
  return person.profession === 'designer'; // maria
});
