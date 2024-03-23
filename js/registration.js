document.addEventListener("DOMContentLoaded", function () {
    var registerButton = document.querySelector("#registerButton");
    var captchaInput = document.getElementsByName('captcha')[0];
    var captchaText = document.getElementById('captchaText');

    registerButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        if (validateAndSubmitForm()) {
           document.getElementById("yourFormId").submit();
        }
        else {
            return false;
        }
    });

    function validateAndSubmitForm() {
        var email = document.getElementsByName('Email')[0].value;
        var candidateName = document.getElementsByName('candidateName')[0].value;
        var mobile = document.getElementsByName('mobile')[0].value;
        var state = document.getElementsByName('state')[0].value;
        var city = document.getElementsByName('city')[0].value;
        var enteredCaptcha = captchaInput.value.trim().toLowerCase();
        var expectedCaptcha = captchaText.innerText.trim().toLowerCase();
        expectedCaptcha = expectedCaptcha.replace(/\s/g, ''); 
        var checkbox = document.getElementById('checkbox');

        if (candidateName.trim() === '') {
            alert('Please enter the candidate name');
            return false;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return false;
        }
        if (!validateMobile(mobile)) {
            alert('Please enter a valid mobile number');
            return false;
        }
        if (state === 'select') {
            alert('Please select a state');
            return false;
        }
        if (city.trim() === '') {
            alert('Please enter the city');
            return false;
        }
        if (enteredCaptcha !== expectedCaptcha) {
            alert('Captcha verification failed');
            refreshCaptcha();
            return false;
        }
        if (!checkbox.checked) {
            alert('Please agree to the terms and conditions');
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    function validateMobile(mobile) {
        var mobileRegex = /^[0-9]{10}$/;
        return mobileRegex.test(mobile);
    }
    function generateRandomCaptcha() {
        var possibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var possibleNums = "0123456789";
        var captcha = "";
        for (var i = 0; i < 3; i++) {
            captcha += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
            captcha +="  ";
            captcha += possibleNums.charAt(Math.floor(Math.random() * possibleNums.length));
            captcha +="  ";
        }
        return captcha;
    }
    function refreshCaptcha() {
        var newCaptcha = generateRandomCaptcha();
        captchaText.innerText = newCaptcha;
    }
    // Initial captcha generation
    refreshCaptcha();
});