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


{prompt: 'Which of thre following git commands create a new file?',
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

//Get DOM Elements

let testQuestionsEL = document.querySelector('#testQuestions');

let timeEl = document.querySelector('#time');