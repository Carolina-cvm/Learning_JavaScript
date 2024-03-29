// ARRAY CHALLENGE
const students = [
  {
    id:1,
    name:'ana',
    score: 85,
    favoriteSubject:'art'
  },
  {
    id:2,
    name:'lucas',
    score: 75,
    favoriteSubject:'math'
  },
  {
    id:3,
    name:'julia',
    score: 85,
    favoriteSubject:'art'
  },
  {
    id:4,
    name:'joao',
    score: 65,
    favoriteSubject:'geo'
  },
  {
    id:5,
    name:'maria',
    score: 75,
    favoriteSubject:'math'
  },
];

// MAP
const updatedStudents = students.map(function (student){
  student.role = 'student';
  return student;
})
console.log(updatedStudents);

// FILTER
const highScores = students.filter(function (student){
  onlyScores = student.score >= 80;
  return onlyScores;
  // if (student.score >= 80){
  // return student;
  //}
  // if (student.score >= 80) return student;
  // return student.score >= 80;
});
console.log(highScores);

// FIND
const specificId = students.find(function(student) {
  return student.id === 3;
});
console.log(specificId);

// REDUCE
const averageScore = students.reduce(function(acc, currItem) {
  console.log(`total: ${acc}`);
  console.log(`current score: ${currItem.score}`);
  acc += currItem.score;
  divide = acc % students.length;
  return acc, divide;
}, 0);
console.log(averageScore);

const survey = students.reduce(function (survey, student){
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]){
    survey[favSubject] = survey[favSubject] + 1;
  } else{
    survey[favSubject] = 1;
  }
  return survey;
}, {});
console.log(survey); // art: 2; math: 2; geo: 1;
