function validateForm() {

    const dateFromInput = document.getElementById('dateFrom');


    const errorDateFrom = document.getElementById('errorDateFrom');


    resetErrors([dateFromInput], [errorDateFrom], errorsSummary);

    let valid = true;


    if (!checkRequired(dateFromInput.value)) {
        valid = false;
        dateFromInput.classList.add("error-input");
        errorDateFrom.innerText = "This field is required";
    }



    if (!valid) {
        errorsSummary.innerText = "There are errors on the form";
    }

    return valid;
}