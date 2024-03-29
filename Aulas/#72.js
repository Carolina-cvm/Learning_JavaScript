// AULA 72
//Map
const people = [
  {name: 'ana', age: 20, profession: 'developer' },
  {name: 'maria', age: 24, profession: 'designer' },
  {name: 'julia', age: 22, profession: 'engineer' },
];

const ages = people.map(function (person){
  return person.age; // 20, 24, 22
});

const newPeople = people.map(function (person){
  return{
    firstName: person.name.toUpperCase(),
    agePerson: person.age,
     // firstName = "ANA", agePerson = 20 firstName = "MARIA", agePerson = 24 firstName = "JULIA, agePerson = 22
  };
});

const names = people.map(function (person){
  return `<h1>${person.name}</h1>`
  // <h1>ana</h1> ....
});
