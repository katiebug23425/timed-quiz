var allButtons = document.querySelectorAll('.cool')
var startButton = document.querySelector('#startBtn');

var screen1 = document.querySelector('#startScreen');
var screen2 = document.querySelector('#firstQuestion');
var screen3 = document.querySelector('#secondQuestion');
var screen4 = document.querySelector('#thirdQuestion');
var screen5 = document.querySelector('#fourthQuestion');
var screen6 = document.querySelector('#lastQuestion');

startButton.addEventListener('click', function() {
    screen1.classList.add('hide');
    screen2.classList.remove('hide');
});