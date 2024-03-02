let testQuestions = [
{ prompt: 'Which of the following is a primitive data type?', 
options: [
    'NAN',
    'boolean',
    'symbol',
    'BigInt',
],
answer: 'boolean',
    },


{prompt: 'Which of the following git commands create a new file?',
options: [
    'mkdir',
    'ls',
    'touch',
    'push',
],
answer: 'touch',
 },


{prompt: 'Which of the following is a library aimed at CSS?',
options: [
    'JavaScript',
    'Bootstrap',
    'jQuery',
    'querySelector',
],
answer: 'Bootstrap',
},

{prompt: 'Which of the following is defined as the whitespace around the content inside of the border?',
options: [
    'padding',
    'margin',
    'spacing',
    'border',
],
answer: 'padding',
},

{prompt: 'Which of the following logical operators indicates OR?',
options: [
    '&&',
    '===',
    '<=',
    '||'
],
answer: '||'
},
];

//Get Elements from DOM

let testQuestionsEL = document.getElementById('#testQuestions');

let timeEl = document.getElementById('#time');

let optionsEl = document.getElementById('#choices');

let beginBtnEl = document.getElementById('#start-btn');

let nameEL = document.getElementById('#initials');

let btnSubmitEL = document.getElementById('#submitScore');


function startQuiz() {
timeId = setInterval(
  1000  
);

}