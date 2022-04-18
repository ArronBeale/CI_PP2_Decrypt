/* this adds event listeners to all the btn class and gives them 
their specific funtion as soon as the DOM finishes loading.
*/
document.addEventListener('DOMContentLoaded', function () {

    let buttons = document.getElementsByClassName('btn');
    for (let button of buttons) {

        button.addEventListener('click', function () {

            if (this.getAttribute('data-type') === 'play') {
                startGame();
            }
            if (this.getAttribute('data-type') === 'stop') {
                stopGame();
            }
            if (this.getAttribute('data-type') === 'easy') {
                easyMode();
            }
            if (this.getAttribute('data-type') === 'medium') {
                mediumMode();
            }
            if (this.getAttribute('data-type') === 'hard') {
                hardMode();
            }
        });
    }

});

// these are the five most common five letter words according to google that will be used in the game.
let words = [
    'which', 'their', 'there', 'would', 'other', 'these', 'about', 'first', 'could', 'after', 'those', 'where', 'being',
    'under', 'years', 'great', 'state', 'world', 'three', 'found', 'might', 'still', 'right', 'place', 'every', 'power', 'since',
    'given', 'never', 'order', 'water', 'small', 'shall', 'large', 'point', 'again', 'often', 'among', 'house', 'women', 'group',
    'think', 'human', 'later', 'until', 'whole', 'early', 'means', 'above'
];

// these are the letters and symbols to generate a random "encrypted word" for the game.
let alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
    'x', 'y', 'z', '&', '*', '#', '%', '£', '!', '@', '?'
];

const submitBtn = document.getElementById('submit-btn');
const playBtn = document.getElementById('fa-play');
const stopBtn = document.getElementById('fa-stop');
const easyBtn = document.getElementById('btn-easy');
const mediumBtn = document.getElementById('btn-medium');
const hardBtn = document.getElementById('btn-hard');

const letterBoxes = document.getElementsByClassName('letter-box');
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
const guessInput = document.getElementById('guess-input');

/* modals for welcome screen on page load and rules screen toggle */
const modalBtn = document.querySelector('.modal-btn');
const modalBackdrop = document.querySelector('.backdrop');
modalBtn.addEventListener('click', function () {
    modalBackdrop.classList.add('backdrop-inactive');
})

// buttons to control the welcome screen and rules screen
const modalBtn2 = document.querySelector('.modal-btn2');
const modalBtn3 = document.querySelector('.modal-btn3');
const modalBackdrop2 = document.querySelector('.backdrop2');

modalBtn2.addEventListener('click', function () {
    modalBackdrop2.classList.add('backdrop2-active');
})

modalBtn3.addEventListener('click', function () {
    modalBackdrop2.classList.add('backdrop2-inactive');
})

let score = 0;
let attempts;
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
let correctLetters = [];
let wrongLetters = [];
let guess = '';
let wordPlace = null;
let easy = false;
let medium = true;
let hard = false;

let song = document.getElementById('audio');
let playing = false;

let musicOffBtn = document.getElementById('btn-music-off');
musicOffBtn.addEventListener('click', function () {
    song.play();
    
    playing = false;
    if (song.volume === 0) {
        song.volume = 1;
        musicOffBtn.style.color = 'white';
    } else if (song.volume === 1) {
        song.volume = 0;
        musicOffBtn.style.color = '#55D435';
    }
}) 

const logoH1 = document.getElementById('logo-h1');
logoH1.addEventListener('click', function () {
    window.location = "index.html";
})

/* easy mode will give player 10 attempts */
function easyMode() {

    easy = true;
    medium = false;
    hard = false;
    attempts = 10;
    attemptsBox.innerHTML = attempts;
    easyBtn.style.fontWeight = "bold";
    mediumBtn.style.fontWeight = "";
    hardBtn.style.fontWeight = "";
    easyBtn.style.textDecoration = "underline";
    mediumBtn.style.textDecoration = "none";
    hardBtn.style.textDecoration = "none";
    document.getElementById('guess-input').focus();
}

/* medium mode will give player 8 attempts */
function mediumMode() {

    medium = true;
    easy = false;
    hard = false;
    attempts = 8;
    attemptsBox.innerHTML = attempts;
    easyBtn.style.fontWeight = "";
    mediumBtn.style.fontWeight = "bold";
    hardBtn.style.fontWeight = "";
    mediumBtn.style.textDecoration = "underline";
    easyBtn.style.textDecoration = "none";
    hardBtn.style.textDecoration = "none";
    document.getElementById('guess-input').focus();
}

/* hard mode will give player 5 attempts */
function hardMode() {

    hard = true;
    easy = false;
    medium = false;
    attempts = 5;
    attemptsBox.innerHTML = attempts;
    easyBtn.style.fontWeight = "";
    mediumBtn.style.fontWeight = "";
    hardBtn.style.fontWeight = "bold";
    hardBtn.style.textDecoration = "underline";
    mediumBtn.style.textDecoration = "none";
    easyBtn.style.textDecoration = "none";
    document.getElementById('guess-input').focus();
}

function checkMode() {

    if (easy === true) {
        easyMode();
    }
    if (medium === true) {
        mediumMode();
    }
    if (hard === true) {
        hardMode();
    }
}

/* this adds input event listener to handle what functions
to call when it receives an input
*/
guessInput.addEventListener('input', () => {
    letterSpace();
    checkLetter();
    guessInput.focus();
    setTimeout(function () {
        checkLetter();
    }, 1500);
})

/* this event listener calls functions once the user 
keys up after a guess. it is needed to reset the form after input.
*/
guessInput.addEventListener('keyup', function (event) {
    event.preventDefault();
    document.getElementById('guess-input').focus();
    checkWin();
    form.reset();

    if (answerArray.includes(guess)) {
        console.log('match');
    } else {
        console.log('not a match');
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
    wrongLetters = [];
    usedLettersBox.innerHTML = '';
    document.getElementById('guess-input').focus();
    answerArray = [];

    checkMode();
    letterSpace();
    generateRandomletters()

    for (let i = 0; i < words.length; i++) {
        correctLetters[i] = '';
    }

    for (let i = 0; i < 5; i++) {
        answerArray.push(word[i]);
    }

    setTimeout(function () {
        letterSpace();
        generateRandomletters();
        setTimeout(function () {
            generateRandomletters();
        }, 200);
    }, 200);


}

function generateRandomletters() {

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

/* this function will check if the win condition has been met */
function checkWin() {
    if (wordPlace.includes(word)) {
        winGame();
    }
}

/** this function is for when a player guesses the word correctly, it displays win in the letter box
 * and increases their score and clears the used letters displayed for the next round
 */
function winGame() {

    box1.innerHTML = '*';
    box2.innerHTML = 'W';
    box3.innerHTML = 'I';
    box4.innerHTML = 'N';
    box5.innerHTML = '*';
    document.getElementById("guess-input").disabled = true;
    usedLettersBox.innerHTML = '';
    scoreBox.innerHTML = score += 1;

    setTimeout(function () {
        startGame();
    }, 1000);
    setTimeout(function () {
        startGame();
    }, 1000);

}

/** this function will activate once lose conditions are met, it
 * will then cause the lose screen to display to the player.
 */
function loseGame() {
    score = 0;
    scoreBox.innerHTML = score;
    box1.innerHTML = 'L';
    box2.innerHTML = 'O';
    box3.innerHTML = 'S';
    box4.innerHTML = 'E';
    box5.innerHTML = '!';
    document.getElementById("guess-input").disabled = true;
    usedLettersBox.innerHTML = '';

    /* startGame is ran twice to fix a bug that carries a previous correct letter
    to a new game */
    setTimeout(function () {
        startGame();
    }, 1000);
    setTimeout(function () {
        startGame();
    }, 1000);
}

/** this function activates on keyup of the players input
 * and then determines if the players guess is correct or incorrect.
 * It then places letter into the word display or used letters
 */
function checkLetter() {

    document.onkeyup = function (event) {
        guess = event.key.toLowerCase();
        let found = false;
        for (let i = 0; i < word.length; i++) {
            if (guess === word[i]) {
                correctLetters[i] = guess;

                letterSpace();
                if (wordPlace === word) {
                    winGame();
                }
                return;
            }
        }
        if (found) return;
        if (wrongLetters.indexOf(guess) < 0 && attempts > 0) {
            wrongLetters.push(guess);
            document.getElementById("used-letters-box").innerHTML = wrongLetters.join('');
            attemptsBox.innerHTML = attempts -= 1;
        }
        if (attempts == 0) {
            loseGame();
        }

    };
}

letterSpace();