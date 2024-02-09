function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var error = false;

    if (username.trim() == '') {
        setErrorFor('username', 'Username is required');
        error = true;
    } else {
        setSuccessFor('username');
    }

    if (email.trim() == '') {
        setErrorFor('email', 'Email is required');
        error = true;
    } else {
        var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!emailRegex.test(email.toLowerCase())) {
            setErrorFor('email', 'Please enter a valid email address in the format abc@gmail.com');
            error = true;
        } else {
            setSuccessFor('email');
        }
    }

    if (password.trim() == '') {
        setErrorFor('password', 'Password is required');
        error = true;
    } else {
        setSuccessFor('password');
    }

    if (confirmPassword.trim() == '') {
        setErrorFor('confirmPassword', 'Confirm Password is required');
        error = true;
    } else if (confirmPassword !== password) {
        setErrorFor('confirmPassword', 'Passwords do not match');
        error = true;
    } else {
        setSuccessFor('confirmPassword');
    }

    return !error;
}

function setErrorFor(inputId, message) {
    var input = document.getElementById(inputId);
    var errorDiv = input.nextElementSibling;

    errorDiv.innerText = message;
    input.classList.add('error-border');
}

function setSuccessFor(inputId) {
    var input = document.getElementById(inputId);
    var errorDiv = input.nextElementSibling;

    input.classList.remove('error-border');
    errorDiv.innerText = '';
}
