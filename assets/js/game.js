document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByClassName('btn');
    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                
            } 
            if (this.getAttribute('data-type') === 'play') {
                startGame();
            } 
            if (this.getAttribute('data-type') === 'stop') {
                stopGame();
                alert('stop');
            }
        })
    }
    document.getElementById('guess-input').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            checkLetter();
        }
    })
})

const letterBoxes = document.getElementsByClassName('letter-box');
const submitBtn = document.getElementById('submit-btn');
const playBtn = document.getElementById('fa-play');
const stopBtn = document.getElementById('fa-stop');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const form = document.querySelector('#form');
const usedLetters = [];
const scoreBox = document.querySelector('#score');
const attemptsBox = document.querySelector('#attempts');

let score = 0;
let attempts = 5;
let guessedLetter = document.getElementById('guess-input');;
let word = '';
let attemptsLeft = 5;
let answerArray = [];
let correctArray = [];
let guess = document.getElementById('guess-input').value;
let isCorrect = '';
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

function startGame() {
    document.getElementById('guess-input').value = '';
    document.getElementById('guess-input').focus();
    score = 0;
    attempts = 5;
    scoreBox.innerHTML = score;
    attemptsBox.innerHTML = attempts;
    correctArray = [];

    let randomWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('test').innerHTML = randomWord;
    answerArray = [];
    
    for (let i = 0; i < 5; i++) {
        answerArray.push(randomWord[i]);
    }

    let randomLetter1 = alphabet[Math.floor(Math.random() * alphabet.length)];
    box1.innerHTML = randomLetter1;
    let randomLetter2 = alphabet[Math.floor(Math.random() * alphabet.length)];
    box2.innerHTML = randomLetter2;
    let randomLetter3 = alphabet[Math.floor(Math.random() * alphabet.length)];
    box3.innerHTML = randomLetter3;
    let randomLetter4 = alphabet[Math.floor(Math.random() * alphabet.length)];
    box4.innerHTML = randomLetter4;
    let randomLetter5 = alphabet[Math.floor(Math.random() * alphabet.length)];
    box5.innerHTML = randomLetter5;

}

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        document.getElementById('guess-input').focus();

        let letter = document.getElementById('guess-input').value;
        isCorrect = ''
        form.reset();

        if (answerArray.includes(letter)) {
            console.log('match');
            isCorrect = true;
            scoreBox.innerHTML = score +=1;
            correctArray.push(letter);
        } else {
            console.log('not a match');
            isCorrect = false;
            attemptsBox.innerHTML = attempts -=1;
        }
        usedLetters.push(letter);
        document.getElementById('used-letters-box').innerHTML += letter;
    });

function randomNumber() {
    number = Math.floor(Math.random() * 49);
}

function generatedAnswer() {
    
    
}

function countDown() {

}





function checkLetter() {
    let letter = document.getElementById('guess-input');
    
}



