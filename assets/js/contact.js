let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', handleSubmit);

let a = false;
let b = false;
let c = false;
let valid = false;

function validateForm() {
    let x = document.getElementById('name').value;
    let y = document.getElementById('email').value;
    let z = document.getElementById('message').value;

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

/** the below code handles the contact form and validates it
 * to ensure all fields are filled before submission
 */
function handleSubmit(event) {
    let contactForm = document.getElementById('contact-form');
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let html = `
    <h2>Hi ${name}!</h2><br>
    <p></p>Thanks for sending me a message.</p><br>
    <p>I will respond to ${email} soon.</p><br>
    <p>Your message was: ${message}</p>
    `;
    validateForm();
    if (a && b && c === true) {
        setTimeout(function () {
            contactForm.innerHTML = html;
        }, 1000);
    }
}