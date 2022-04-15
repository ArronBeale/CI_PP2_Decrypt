const submitBtn = document.getElementById('submit');
const contactForm = document.getElementById('contact-form');
let name = document.getElementById('user-name');

submitBtn.addEventListener('click', handleSubmit );

function handleSubmit(event) {
    event.preventDefault();
    contactForm.submit();
    contactForm.reset();
    contactForm.innerHTML= `<h2>Thank you for getting in contact ${name}!</h2>`
}