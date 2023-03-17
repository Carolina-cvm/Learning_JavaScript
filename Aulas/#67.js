// AULA 67
// variavel criada dentro da função só pode ser acessada dentro da função
function pessoa(){
  const nome = 'Meu nome é luana';
  idade = 'Eu tenho 15 anos';
}
pessoa();
console.log(nome) // nome is not defined
console.log(idade) // Eu tenho 15 anos
