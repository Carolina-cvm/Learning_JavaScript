// AULA 104
// REPLACECHILD

const result = document.querySelector('#result');
const first = document.querySelector('.red');

//create empty element
const bodyDiv = document.createElement('div');

//create text node
const text = document.createTextNode('body div simples');
bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv, result);

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.insertBefore(heading, first);

const smallHeading = document.createElement('h6');
const smallText = document.createTextNode('eu sou uma heading pequena');

smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);
