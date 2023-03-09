// AULA 97
// class .
const first = document.querySelector('.first');
const second = (first.nextSibling.nextSibling.style.color = 'red');
console.log(second);

// id #
const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);
console.log(last.nextSibling.nextSibling);
