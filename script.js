//get dom elements
var allButtons = document.querySelectorAll('.cool');
var allButtons1 = document.querySelectorAll('.cool1');
var allButtons2 = document.querySelectorAll('.cool2');
var allButtons3 = document.querySelectorAll('.cool3');
var allButtons4 = document.querySelectorAll('.cool4');
var startButton = document.querySelector('#startBtn');
var endScreen = document.querySelector('#end');

var incorrect1 = document.getElementById('nanBtn');
var incorrect2 = document.getElementById('symbolBtn');
var incorrect3 = document.getElementById('bigIntBtn');
var incorrect4 = document.getElementById('mkdirBtn');
var incorrect5 = document.getElementById('lsBtn');
var incorrect6 = document.getElementById('pushBtn');
var incorrect7 = document.getElementById('javascriptBtn');
var incorrect8 = document.getElementById('jqueryBtn');
var incorrect9 = document.getElementById('queryselectorBtn');
var incorrect10 = document.getElementById('marginBtn');
var incorrect11 = document.getElementById('spacingBtn');
var incorrect12 = document.getElementById('borderBtn');
var incorrect13 = document.getElementById('andBtn');
var incorrect14 = document.getElementById('equalBtn');
var incorrect15 = document.getElementById('plusminusBtn');

var screen1 = document.querySelector('#startScreen');
var screen2 = document.querySelector('#firstQuestion');
var screen3 = document.querySelector('#secondQuestion');
var screen4 = document.querySelector('#thirdQuestion');
var screen5 = document.querySelector('#fourthQuestion');
var screen6 = document.querySelector('#lastQuestion');

//start quiz questions

startButton.addEventListener('click', function() {
    screen1.classList.add('hide');
    screen2.classList.remove('hide');
});

allButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        screen2.classList.add('hide');
        screen3.classList.remove('hide');
    });
});

allButtons1.forEach(function(button) {
    button.addEventListener('click', function() {
        screen3.classList.add('hide');
        screen4.classList.remove('hide');
    });
});

allButtons2.forEach(function(button) {
    button.addEventListener('click', function() {
        screen4.classList.add('hide');
        screen5.classList.remove('hide');
    });
});

allButtons3.forEach(function(button) {
    button.addEventListener('click', function() {
        screen5.classList.add('hide');
        screen6.classList.remove('hide');
    });
});

allButtons4.forEach(function(button) {
    button.addEventListener('click', function() {
        screen6.classList.add('hide');
        endScreen.classList.remove('hide');
    });
});

//start timer


let count = 20; 
let timerDisplay;

startButton.addEventListener('click', function() {
    timerDisplay = setInterval(() => {
        if (count === 0) {
            clearInterval(timerDisplay);
        } else {
            count--;
            document.getElementById('time').textContent = 'Time Left: ' + count;
        }
    }, 1000);
});

//check if answers are correct or wrong

let displayMessage = 'That is incorrect! The right answer is Boolean'

function handleClick() {
    alert(displayMessage)};
incorrect1.addEventListener('click', handleClick);
incorrect2.addEventListener('click', handleClick);
incorrect3.addEventListener('click', handleClick);

let secondMessage = 'That is incorrect! The right answer is Touch'

function handleClick1() {
    alert(secondMessage)};
incorrect4.addEventListener('click', handleClick1);
incorrect5.addEventListener('click', handleClick1);
incorrect6.addEventListener('click', handleClick1);

let thirdMessage = 'That is incorrect! The right answer is Bootstrap'

function handleClick2() {
    alert(thirdMessage)};
incorrect7.addEventListener('click', handleClick2);
incorrect8.addEventListener('click', handleClick2);
incorrect9.addEventListener('click', handleClick2);

let fourthMessage = 'That is incorrect! The right answer is Padding'

function handleClick3() {
    alert(fourthMessage)};
incorrect10.addEventListener('click', handleClick3);
incorrect11.addEventListener('click', handleClick3);
incorrect12.addEventListener('click', handleClick3);

let fifthMessage = 'That is incorrect! The right answer is ||'

function handleClick4() {
    alert(fifthMessage)};
incorrect13.addEventListener('click', handleClick4);
incorrect14.addEventListener('click', handleClick4);
incorrect15.addEventListener('click', handleClick4);


