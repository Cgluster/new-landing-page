function formValidation() {
    const email = document.registration.email;

    if (ValidateEmail(email)) {
    }
    return false;
}

function ValidateEmail(email) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailFormat)) {
        alert('Enjoy your book!');
        return true;
    } else {
        alert('Please enter a valid email address.');
        email.focus();
        return false;
    }
}