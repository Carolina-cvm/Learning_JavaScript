// CHALLENGE #8
function fullname(firstName, lastName){
  const result = `${firstName} ${lastName}`;
  // const result = firstName + lastName;
  return result.toUpperCase();
}

console.log(fullname('maria', 'gomes')); // MARIA GOMES

function fullname({firstName, lastName}){
  const result = `${firstName} ${lastName}`;
  return result.toUpperCase();
}

console.log(fullname({lastName: 'santos', firstName: 'joao'})); // JOAO SILVA
