// AULA 69
function morning(name){
  return `Good morning ${name}`;
}

function afternoon(name){
  return `Good afternoon ${name}`;
}

function greet(name,callbackFunction){
  const myName = 'ana';
  console.log(`${callbackFunction(name)}, my name is ${myName}`);
}

greet('maria', morning);
greet('joao', afternoon);
