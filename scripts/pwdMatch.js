var password = document.getElementById("password"), 
confirmPwd = document.getElementById("confirmPwd");

function validatePassword() {
    if(password.value != confirmPwd.value) {
        confirmPwd.setCustomValidity("Passwords Dot't Match");
    } else {
        confirmPwd.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirmPwd.onkeyup = validatePassword;