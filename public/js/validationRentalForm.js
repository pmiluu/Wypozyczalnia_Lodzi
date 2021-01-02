function rentalValidateForm() {

    const clientEmailInput = document.getElementById('rentalClientEmail');
    const boatInput = document.getElementById('rentalBoat');
    const dateFromInput = document.getElementById('rentalDateFrom');
    const dateToInput = document.getElementById('rentalDateTo');

    const errorClientEmail = document.getElementById('errorRentalClientEmail');
    const errorBoat = document.getElementById('errorRentalBoat');
    const errorDateFrom = document.getElementById('errorRentalDateFrom');
    const errorDateTo = document.getElementById('errorRentalDateTo');
    const errorsSummary = document.getElementById('errorsSummaryRental');

    resetErrors([clientEmailInput, boatInput, dateFromInput, dateToInput], [errorClientEmail, errorBoat, errorDateFrom, errorDateTo], errorsSummary);

    let valid = true;

    if (!checkRequired(clientEmailInput.value)) {
        valid = false;
        clientEmailInput.classList.add("error-input");
        errorClientEmail.innerText = "This field is required";
    }

    if (!checkRequired(boatInput.value)) {
        valid = false;
        boatInput.classList.add("error-input");
        errorBoat.innerText = "This field is required";
    }

    if (!checkRequired(dateFromInput.value)) {
        valid = false;
        dateFromInput.classList.add("error-input");
        errorDateFrom.innerText = "This field is required";
    }

    if (!checkRequired(dateToInput.value)) {
        valid = false;
        dateToInput.classList.add("error-input");
        errorDateTo.innerText = "This field is required";
    }
    if (!checkDate(dateFromInput.value, dateToInput.value)) {
        valid = false;
        dateToInput.classList.add("error-input");
        errorDateTo.innerText = "Date from is later than date to";
    }



    if (!valid) {
        errorsSummary.innerText = "There are errors on the form";
    }

    return valid;
}

