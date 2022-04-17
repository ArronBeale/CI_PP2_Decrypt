let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', handleSubmit);

let a = false;
let b = false;
let c = false;
let valid = false;

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

function validateForm() {
    let x = document.forms["contact-form"]["name"].value;
    let y = document.forms["contact-form"]["email"].value;
    let z = document.forms["contact-form"]["message"].value;

    if (x === "") {
        valid = false;
    } else {
        a = true;
    }
    if (y === "") {
        valid = false;
    } else {
        b = true;
    }
    if (z === "") {
        valid = false;
    } else {
        c = true;
    }
}

function handleSubmit(event) {
    let contactForm = document.getElementById('contact-form');
    let name = contactForm.elements['name'].value;
    let email = contactForm.elements['email'].value;
    let message = contactForm.elements['message'].value;
    let html = `
    <h2>Hi ${name}!</h2><br>
    <p></p>Thanks for sending me a message.</p><br>
    <p>I will respond to ${email} soon.</p><br>
    <p>Your message was: ${message}</p>
    `
    validateForm();
    if (a && b && c === true) {
        setTimeout(function () {
            contactForm.innerHTML = html;
        }, 1000);
    }
}