(function () {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#email');
    let telInput = document.querySelector('#tel');

    function showErrorMessage(input, message) {
        let container = input.parentElement; //The .input-wrapper

        //Remove an existing error
        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }

        //Now add the error if the message is not empty
        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }
    function validateEmail() {
        let value = emailInput.value;

        if (!value) {
            showErrorMessage(emailInput, 'E-mail is a required field.');
            return false;
        }

        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must eneter a valid e-mail address.');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    function validateTel() {
        let value = telInput.value;
        const pattern = /^[0-9]$/;

        if (!value) {
            showErrorMessage(telInput, 'Telephone is a required field.');
            return false;
        }
        if (value.length < 8) {
            showErrorMessage(telInput, 'The telephone number must be at least 8 characters long');
            return false;
        }
        showErrorMessage(telInput, null);
        return true;
    }

    function validateForm() {
        let isValidEmail = validateEmail();
        let isValidTel = validateTel();
        return isValidEmail && isValidTel;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //Don't submit to server
        if (validateForm()) {
            alert('Success!');
        }
    });
    emailInput.addEventListener('input', validateEmail);
    telInput.addEventListener('input', validateTel);
})();