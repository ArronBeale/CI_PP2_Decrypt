document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByClassName('btn');
    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {

            }
            if (this.getAttribute('data-type') === 'play') {
                startGame();
            }
            if (this.getAttribute('data-type') === 'stop') {
                stopGame();
            }
        });
    }

});

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
const boxArray = [box1, box2, box3, box4, box5];
const usedLetters = [];
const scoreBox = document.querySelector('#score');
const attemptsBox = document.querySelector('#attempts');
const usedLettersBox = document.getElementById('used-letters-box');
const answerBox = document.getElementById('answer-box');
let score = 0;
let attempts = 5;
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
let correctLetters = [];
let wrongLetters = [];
let guess = '';
let wordPlace = null;
let isCorrect;


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

form.addEventListener('keyup', function (event) {
    event.preventDefault();
    document.getElementById('guess-input').focus();
    letterSpace();
    checkLetter();
    form.reset();


    if (answerArray.includes(guess)) {
        console.log('match');
        isCorrect = true;


    } else {
        console.log('not a match');

    }
    if (wordPlace === word) {
        winGame();
    }
});

/* I had to google a code example for the below function from a hangman game for placing an underscore that would then 
allow it to change to the correct letter, the underscores then act as a hint when letters begin to fill them.*/

/** this sets placeholders for when the correct letter is guessed it will change to show the correct letter
 * and it's position in the word.
 */
function letterSpace() {
    wordPlace = word.split('').map(letter => (correctLetters.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('answer').innerHTML = wordPlace;
}


/** Starts the game. Player can use it to cycle new games and refresh the word to guess, 
 * resets the score to 0 and attempts to 5.
 * Focuses on the input so the player can immediatly start entering 
 * guesses without fist clicking on it.
 */
function startGame() {
    document.getElementById('guess-input').value = '';
    document.getElementById('guess-input').focus();
    document.getElementById("guess-input").disabled = false;
    word = words[Math.floor(Math.random() * words.length)];
    attempts = 5;
    scoreBox.innerHTML = score;
    attemptsBox.innerHTML = attempts;
    wrongLetters = [];
    usedLettersBox.innerHTML = '';

    answerArray = [];
    letterSpace();

    for (let i = 0; i < words.length; i++) {
        correctLetters[i] = '';
    }

    for (let i = 0; i < 5; i++) {
        answerArray.push(word[i]);
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

/** this function will stop the game and reset the score to 0 and reset the attempts to 5.
 * It will change the text in the letter boxes to say ended.
 */
function stopGame() {
    document.getElementById('guess-input').value = '';
    document.getElementById('guess-input').focus();
    document.getElementById("answer").innerHTML = '';
    document.getElementById("guess-input").disabled = true;

    score = 0;
    attempts = 5;
    scoreBox.innerHTML = score;
    attemptsBox.innerHTML = attempts;
    wrongLetters = [];
    usedLettersBox.innerHTML = '';
    letterSpace();
    box1.innerHTML = 'E';
    box2.innerHTML = 'N';
    box3.innerHTML = 'D';
    box4.innerHTML = 'E';
    box5.innerHTML = 'D';
}

function winGame() {

    if ((wordPlace === word)) {
        box1.innerHTML = '*';
        box2.innerHTML = 'W';
        box3.innerHTML = 'I';
        box4.innerHTML = 'N';
        box5.innerHTML = '!';
        document.getElementById("guess-input").disabled = true;
        usedLettersBox.innerHTML = '';
        scoreBox.innerHTML = score += 1;
        startGame();
    }
}




/** this function will activate once lose conditions are met, it
 * will then cause the lose screen to display to the player.
 */
function loseGame() {
    box1.innerHTML = 'L';
    box2.innerHTML = 'O';
    box3.innerHTML = 'S';
    box4.innerHTML = 'E';
    box5.innerHTML = '!';
    document.getElementById("guess-input").disabled = true;
    usedLettersBox.innerHTML = '';
}

function countDown() {

}

/** this function activates on keyup of the players input
 * and then determines if the players guess is correct or incorrect.
 * It then places letter into the word display or used letters
 */
function checkLetter() {
    document.onkeyup = function (event) {
        guess = event.key.toLowerCase();
        let found = false;
        for (i = 0; i < word.length; i++) {
            if (guess === word[i] && score < 5) {
                correctLetters[i] = guess;
                
                letterSpace();
                return;
            }
        }
        if (found) return;
        if (wrongLetters.indexOf(guess) < 0 && attempts > 0) {
            wrongLetters.push(guess);
            document.getElementById("used-letters-box").innerHTML = wrongLetters.join('');
            attemptsBox.innerHTML = attempts -= 1;
        }
        if (attempts == 0 && score < 5) {
            loseGame();
        }
    };
}

letterSpace();