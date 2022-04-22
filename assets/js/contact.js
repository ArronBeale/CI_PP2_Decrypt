let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', handleSubmit);

let a = false;
let b = false;
let c = false;
let valid = false;

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

const logoH1 = document.getElementById('logo-h1');
logoH1.addEventListener('click', function () {
    window.location = "index.html";
});

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