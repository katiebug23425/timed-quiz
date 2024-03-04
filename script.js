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

var correct1 = document.getElementById('booleanBtn');
var correct2 = document.getElementById('touchBtn');
var correct3 = document.getElementById('bootstrapBtn');
var correct4 = document.getElementById('paddingBtn');
var correct5 = document.getElementById('orBtn');

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
        clearInterval(timerDisplay);
    });
});

//start timer


let count = 30; 
let timerDisplay;
let userScore = 0;

startButton.addEventListener('click', function() {
    timerDisplay = setInterval(updateTimerDisplay, 1000);
});

function updateUserScore() {
    userScore = userScore + 10;
    document.getElementById('finalScore').textContent = 'Your Score Total is: ' + userScore;
};

function endUpdateUserScore(){
    userScore.valueOf;
    document.getElementById('finalScore').textContent = 'Your Score Total is: ' + userScore;
};

//check if answers are correct or wrong

let displayMessage = 'That is incorrect!'

function handleClick() {
    alert(displayMessage)
    count = count -10;
    updateTimer();};

incorrect1.addEventListener('click', handleClick);
incorrect2.addEventListener('click', handleClick);
incorrect3.addEventListener('click', handleClick);

correct1.addEventListener('click', updateUserScore);

incorrect4.addEventListener('click', handleClick);
incorrect5.addEventListener('click', handleClick);
incorrect6.addEventListener('click', handleClick);

correct2.addEventListener('click', updateUserScore);

incorrect7.addEventListener('click', handleClick);
incorrect8.addEventListener('click', handleClick);
incorrect9.addEventListener('click', handleClick);

correct3.addEventListener('click', updateUserScore);

incorrect10.addEventListener('click', handleClick);
incorrect11.addEventListener('click', handleClick);
incorrect12.addEventListener('click', handleClick);

correct4.addEventListener('click', updateUserScore);

incorrect13.addEventListener('click', handleClick);
incorrect14.addEventListener('click', handleClick);
incorrect15.addEventListener('click', handleClick);

correct5.addEventListener('click', updateUserScore);

//update timer

function updateTimer() {
    if (count <= 0) {
        clearInterval(timerDisplay);
        document.getElementById('time').textContent = 'Time Left: 0';
        endScreen.classList.remove('hide');
        screen6.classList.add('hide');
       endUpdateUserScore();
    } else {
        document.getElementById('time').textContent = 'Time Left: ' + count;
    }
};

    function updateTimerDisplay() {
        if (count === 0) {
            clearInterval(timerDisplay);
        } else {
            count--;
            document.getElementById('time').textContent = 'Time Left: ' + count;
        }
    };

    function getScores() {
        let scoredName = JSON.parse(localStorage.getItem("name")) || [];
        var getName = document.getElementById('initials').value;
        console.log(getName);
        
        const namedScore = {
          initials: getName,
          score: userScore
        };
        
        scoredName.push(namedScore);
        localStorage.setItem('name', JSON.stringify(scoredName));
      
        const orderedList = document.getElementById('highscoreList');
        orderedList.innerHTML = ''; // Clear the list before re-populating
      
        scoredName.forEach((name, index) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${index + 1}. ${name.initials} - ${name.score}`;
          orderedList.appendChild(listItem);
        });
      }
      
      const scoreBtn = document.getElementById('submitScore');
      scoreBtn.addEventListener('click', getScores);