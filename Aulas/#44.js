// AULA 44
const person = {
  nome = 'Maria',
  sobrenome = 'Silva',
  idade = 22,
  profissao = 'medica',
  animais = ['cachorro', 'gato', 'passaro'],
  greeting(){
    console.log('Olá, meu nome é Maria');
  }
}
console.log(person.nome);
console.log(person.idade);
console.log(person.animais[1]);
person.greeting();
