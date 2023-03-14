// 87
const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const days = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];

const date = new Date();

// MÊS
const month = date.getMonth();
console.log(months[month]); 

// DIA DA SEMANA
const day = date.getDay();
console.log(days[day]); 

// DIA DO MES
const date = date.getDate();
console.log(date); 

// ANO
const year = date.getFullYear();
console.log(year); 

const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()} `;

document.body.innerHTML = sentence;
