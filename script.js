// Contact Form Validation and Feedback
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields');
    } else {
        alert(`Thank you, ${name}! Your message has been sent.`);
    }

    document.getElementById('contactForm').reset();
});
