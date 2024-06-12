// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()


//Form Validation
document.querySelector('[submit]').addEventListener('click' , () => {
    let fullName = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let message = document.querySelector('#message').value;

    if (fullName ==  null || fullName == ""){
        nameError = "This field is necessary.";
        document.getElementById("name_error").innerHTML = nameError;
        return false;
    }

    else if(email == null || email == ""){
        emailError = "This field is necessary.";
        document.getElementById("email_error").innerHTML = emailError;
        return false;
    }

    else if(phone == null || phone == ""){
        phoneError = "This field is necessary.";
        document.getElementById("phone_error").innerHTML = phoneError;
        return false;
    }

    else if(message== null || message == ""){
        messageError = "This field is necessary.";
        document.getElementById("message_error").innerHTML = messageError;
        return false;
    }

    else{
        document.getElementById("name_error").innerHTML = "";
        document.getElementById("email_error").innerHTML = "";
        document.getElementById("phone_error").innerHTML = "";
        document.getElementById("message_error").innerHTML = "";
    }
})