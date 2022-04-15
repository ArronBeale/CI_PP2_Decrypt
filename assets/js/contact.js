let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', handleSubmit);

function handleSubmit(event) {
    let contactForm = document.getElementById('contact-form');
    let name = contactForm.elements['name'].value;
    let email = contactForm.elements['email'].value;
    let message = contactForm.elements['message'].value;
    let html = `
    <h2>Hi ${name}!</h2><br>
    <p></p>Thanks for sending me a message!</p><br>
    <p>I will respond to ${email} soon</p><br>
    <p>Your message was: ${message}</p>
    `
    event.preventDefault();
    contactForm.innerHTML = html;
}