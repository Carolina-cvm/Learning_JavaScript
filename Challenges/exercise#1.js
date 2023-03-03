// EXERCISE #1
const nomes = ['ana', 'maria', 'joao'];
const sobrenome = 'dos santos';
let meuArray = [];

for(let i = 0; i < nomes.length; i++){
  console.log(i); // 0
  console.log(nomes[i]); // ana
  meuArray.push(`${nomes[i]} ${sobrenome}`); // ana dos santos 
  console.log(meuArray); // ana dos santos 
}
console.log(meuArray); // 'ana dos santos' 'maria dos santos' 'joao dos santos'
