// AULA 94
// id = #
// class = .
const result = document.querySelector('#result');
result.style.backgroundColor = 'purple';

const list = document.querySelectorAll('.special');
list.forEach(function (item){
  item.style.color = 'yellow';
});
