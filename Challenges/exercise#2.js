// EXERCISE #2
const gas = [130, 115, 110, 125];
const food = [10, 40, 50];

function calculateTotal(meuArray){
  let total = 0;
  for (let i = 0; i < meuArray.length; i++){
    total += meuArray[i];
  }
  if (total > 100){
    console.log('Voce está gastando demais');
    return total;
  }else{
    console.log('Voce está economizando!');
    return total;
  }
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([100, 2000, 850, 45]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
})
