function clientValidateForm() {
    const firstNameInput = document.getElementById('clientFirstName');
    const lastNameInput = document.getElementById('clientLastName');
    const emailInput = document.getElementById('clientEmail');

    const errorFirstName = document.getElementById('errorClientFirstName');
    const errorLastName = document.getElementById('errorClientLastName');
    const errorEmail = document.getElementById('errorClientEmail');
    const errorsSummary = document.getElementById('errorsSummaryClient');

    resetErrors([firstNameInput, lastNameInput, emailInput], [errorFirstName, errorLastName, errorEmail], errorsSummary);

    let valid = true;

    if (!checkRequired(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "This field is required";
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 60)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "This field must contain 2-60 characters";
    }

    if (!checkRequired(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "This field is required";
    } else if (!checkTextLengthRange(lastNameInput.value, 2, 60)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "This field must contain 2-60 characters";
    }

    if (!checkRequired(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "This field is required";
    } else if (!checkTextLengthRange(emailInput.value, 5, 60)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "This field must contain 5-60 characters";
    } else if (!checkEmail(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Invalid e-mail address";
    }

    if (!valid) {
        errorsSummary.innerText = "There are errors on the form";
    }

    return valid;
}