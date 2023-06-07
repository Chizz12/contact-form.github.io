const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
    }).then(() => {
        window.location.href = 'file:///E:/Reality/contact-form-master/thankyou.html';

    }).catch((e) => alert('error occured'));

});