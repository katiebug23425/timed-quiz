var allButtons = document.querySelectorAll('.cool');
var allButtons1 = document.querySelectorAll('.cool1');
var allButtons2 = document.querySelectorAll('.cool2');
var allButtons3 = document.querySelectorAll('.cool3');
var allButtons4 = document.querySelectorAll('.cool4');
var startButton = document.querySelector('#startBtn');
var endScreen = document.querySelector('#end');

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