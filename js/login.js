document.addEventListener("DOMContentLoaded", function () {
    var loginButton = document.querySelector("#loginButton");

    // Add event listener for click event
    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission

        if (validateAndSubmitForm()) {
           document.getElementById("yourFormId").submit();
        }
        else {
            return false;
        }
    });

    // Function to validate and submit form
    function validateAndSubmitForm() {
        // Add your form validation logic here
        var email = document.querySelector('input[name="Email"]').value;
        var password = document.querySelector('input[name="Password"]').value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return false;
        }
        if (password.trim() === '') {
            alert('Please enter your password');
            return false;
        }
        // If all validations pass, you can submit the form or perform additional actions here
        return true;
    }

    // Function to validate email using regex
    function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
