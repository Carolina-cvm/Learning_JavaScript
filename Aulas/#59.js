// AULA 59
let nomes = ['maria', 'anna', 'joao', 'pedro', 'juca', 'paçoca'];

console.log(nomes.length); // 6
console.log(nomes[4]); // juca
console.log(nomes[nomes.length - 1]); // paçoca

const sobrenomes = ['silva', 'santos','alves'];
const nomeCompleto = nomes.concat(sobrenomes); // nomes e sobrenomes
console.log(nomeCompleto);
console.log(nomeCompleto.reverse); // sobrenomes e nomes

nomeCompleto.unshift('eduarda'); // adiciona item index 0 do array
console.log(nomeCompleto);

nomeCompleto.shift(); // remove item index 0 do array
console.log(nomeCompleto);

nomeCompleto.push('joana'); // adiciona no final do array
console.log(nomeCompleto); 

nomeCompleto.pop(); // remove item do ultimo index
console.log(nomeCompleto); 
