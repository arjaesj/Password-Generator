// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersChar = "1234567890";
var specialChar = "!@#$%^&*(){}[]+_-=";
var passCriteria = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {

    // Parword length user input
    var passLength = prompt("Please enter the length of your password from 8 - 128.");

    // If user cancels, functions stops and user alerted.
    if (passLength === null) {
        alert("Password Generator Cancelled. Goodbye!");

        // If user enters criteria correctly, function continues.
    } else if (passLength >= 8 && passLength <= 128) {

        // Password lower case inclusion user input
        var passLowerCase = confirm("Do you want your password to include LOWER CASE characters?");

        if (passLowerCase === true) {
            passCriteria += lowerCaseChar;
        }
        console.log(passCriteria);

        // Password upper case inclusion user input
        var passUpperCase = confirm("Do you want your password to include UPPER CASE characters?");

        if (passUpperCase === true) {
            passCriteria += upperCaseChar;
        }
        console.log(passCriteria);

        // Password numbers inclusion user input
        var passNumbers = confirm("Do you want your password to include NUMBER characters?");

        if (passNumbers === true) {
            passCriteria += numbersChar;
        }
        console.log(passCriteria);

        // Password special characters inclusion user input
        var passSpecialChar = confirm("Do you want your password to include SPECIAL characters?")

        if (passSpecialChar === true) {
            passCriteria += specialChar;
        }
        console.log(passCriteria);

        // If user inputs outside the specified criteria, user will be alerted to try again.
    } else {
        alert("Your password needs to be 8 up to 128 characters. Please try again.");
    }

    //User confirmed Password Criteria will then be randomized to be used as a final Password.
    var randomChar = "";

    function randomPass() {
        randomChar += passCriteria[Math.floor(Math.random() * passCriteria.length)];
    }
    var password = generatePassword();

    function generatePassword() {
        for (var i = 0; i < passLength; i++) {
            randomPass();
        }
        return (randomChar);
    }

    // Write password to the #password input
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}