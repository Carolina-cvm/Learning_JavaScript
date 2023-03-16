// AULA 56
let text = ' Peter Jordan';
let result = text.length;
console.log(result);

console.log(text.length); // 13
console.log(text.toLowerCase); // perter jordan
console.log(text.toUpperCase); // PETER JORDAN
console.log(text.charAt(0)); // 
console.log(text.charAt(text.length - 1)); // n
console.log(text.indexOf('e')); // 2
console.log(text); // Peter Jordan
console.log(text.trim()); //Peter Jordan
console.log(text.trim().toLowerCase().startsWith('peter')); // true
console.log(text.includes('eter')); // true
console.log(text.slice(0, 2)); // P
console.log(text.slice(-3)); // dan
