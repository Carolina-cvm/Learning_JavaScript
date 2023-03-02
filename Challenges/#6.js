// CHALLANGE #6
const car = {
  make = 'toyota',
  model = 'corolla',
  year = 2018,
  colors = ['preto', 'branco', 'cinza'],
  hybrid = false,
  drive(){
    console.log('Dirigir o carro');
  },
  stop(){
    console.log('Parar o carro');
  }
}
console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();
