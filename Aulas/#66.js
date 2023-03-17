// AULA 66
let nome = 'maria';
nome = 'joao';

function calcular(){
  console.log(nome); // joao
  function outrafunção(){
    nome = 'maria clara silva';
    console.log(`oi, este é meu novo nome: ${nome}`); // oi, este é meu novo nome: maria clara silva
  }
  outrafunção();
}
calcular();

if (true){
  console.log(nome); // maria clara silva 
  nome = 'arvore';
}
console.log(`agora meu nome eh ${nome}`); // agora meu nome eh arvore
