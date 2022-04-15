let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', handleSubmit);

let valid = false;

function validateForm() {
    let x = document.forms["contact-form"]["name"].value;
    let y = document.forms["contact-form"]["email"].value;
    let z = document.forms["contact-form"]["message"].value;
    if (x == "") {
        valid = false;
    } else {
        valid = true;
    }
    if (y == "") {
        valid = false;
    } else {
        valid = true;
    }
    if (z == "") {
        valid = false;
    } else {
        valid = true;
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
    if (valid ==true) {setTimeout(function () {
        contactForm.innerHTML = html;
    }, 1000);}
}