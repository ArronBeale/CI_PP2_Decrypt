document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByClassName('btn');
    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                checkAnswer();
                alert('guess');
            } 
            if (this.getAttribute('data-type') === 'play') {
                startGame();
                alert('play');
            } 
            if (this.getAttribute('data-type') === 'stop') {
                stopGame();
                alert('stop');
            }
        })
    }
    document.getElementById('guess-input').addEventListener('keydown', function(eevent) {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    })
})

const letters = document.getElementsByClassName('letter-box');
const guessBox = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const attemptsLeft = document.getElementById('attempts-left');
const playBtn = document.getElementById('fa-play');
const stopBtn = document.getElementById('fa-stop');


let guessedLetters = [];
let word = '';

let words = [
    'which',
    'their',
    'there',
    'would',
    'other',
    'these',
    'about',
    'first',
    'could',
    'after',
    'those',
    'where',
    'being',
    'under',
    'years',
    'great',
    'state',
    'world',
    'three',
    'found',
    'might',
    'still',
    'right',
    'place',
    'every',
    'power',
    'since',
    'given',
    'never',
    'order',
    'water',
    'small',
    'shall',
    'large',
    'point',
    'again',
    'often',
    'among',
    'house',
    'women',
    'group',
    'think',
    'human',
    'later',
    'until',
    'whole',
    'early',
    'means',
    'above'
];

let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v', 
    'w',
    'x',
    'y',
    'z'
];

const form = document.querySelector('#form')
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const letter = event.target.letter-InputDeviceInfo.value;
        form.reset();
    });

function randomNumber() {
    number = Math.floor(Math.random());
}

function generatedAnswer() {
    
    
}

function countDown() {

}

function startGame() {
    document.getElementById('guess-input').value = '';
    document.getElementById('guess-input').focus();

    var randomWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('test').innerHTML = randomWord;
}

function checkAnswer() {
    let userAnswer = document.getElementById('guess-input').value;
    let generatedAnswer = randomWord.split();
    let isCorrect = generatedAnswer.contains(userAnswer);
} if (isCorrect) {
    alert('correct');
}

function stopGame() {

}

function easyMode() {

}

function easyModeCountdown() {

}

function mediumMode() {
    
}

function mediumModeCountDown() {
    
}

function hardMode() {
    
}

function hardModeCountDown() {
    
}