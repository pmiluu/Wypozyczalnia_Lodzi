function validateForm() {
    const boatNameInput = document.getElementById('boatName');
    const seatsInput = document.getElementById('seats');
    const yearInput = document.getElementById('year');
    const priceInput = document.getElementById('price');

    const errorBoatName = document.getElementById('errorBoatName');
    const errorSeats = document.getElementById('errorSeats');
    const errorYear = document.getElementById('errorYear');
    const errorPrice = document.getElementById('errorPrice');

    resetErrors([boatNameInput, seatsInput, yearInput, priceInput], [errorBoatName, errorSeats, errorYear, errorPrice], errorsSummary);

    let valid = true;

    if (!checkRequired(boatNameInput.value)) {
        valid = false;
        boatNameInput.classList.add("error-input");
        errorBoatName.innerText = "This field is required";
    } else if (!checkTextLengthRange(boatNameInput.value, 2, 60)) {
        valid = false;
        boatNameInput.classList.add("error-input");
        errorBoatName.innerText = "This field must contain 2-60 characters";
    }

    if (!checkRequired(seatsInput.value)) {
        valid = false;
        seatsInput.classList.add("error-input");
        errorSeats.innerText = "This field is required";
    } else if (!checkNumberRange(seatsInput.value, 1, 100)) {
        valid = false;
        seatsInput.classList.add("error-input");
        errorSeats.innerText = "Maximum number of seats is 100";
    }

    if (!checkRequired(yearInput.value)) {
        valid = false;
        yearInput.classList.add("error-input");
        errorYear.innerText = "This field is required";
    }

    if (!checkRequired(priceInput.value)) {
        valid = false;
        priceInput.classList.add("error-input");
        errorPrice.innerText = "This field is required";
    }

    if (!valid) {
        errorsSummary.innerText = "There are errors on the form";
    }

    return valid;
}