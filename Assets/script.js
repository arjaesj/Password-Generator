// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersChar = "1234567890";
var specialChar = "!@#$%^&*(){}[]+_-=";
var passChar = "";

// Parword length user input
var passLength = prompt("Please enter the length of your password from 8 - 128.");

if (passLength >= 8 && passLength <= 128) {
    console.log(passLength);
} else {
    prompt("Your password needs to be 8 up to 128 characters to continue.");
}


// Password lower case inclusion user input
var passLowerCase = confirm("Do you want your password to include LOWER CASE characters?");
for (var i = 0; i < passLength; i++) {
    if (passLowerCase === true) {
        passChar = passChar + lowerCaseChar.charAt(Math.floor(Math.random() * Math.floor(lowerCaseChar.length - 1)));
    }
}
console.log(passChar);

// Password upper case inclusion user input
var passUpperCase = confirm("Do you want your password to include UPPER CASE characters?");

if (passUpperCase === true) {
    for (var i = 0; i < passLength; i++) {
        var passCharUp = lowerCaseChar.concat(upperCaseChar);
        passChar = passChar + passCharUp.charAt(Math.floor(Math.random() * Math.floor(passCharUp.length - 1)));
    }
}
console.log(passChar);

// Password numbers inclusion user input
var passNumbers = confirm("Do you want your password to include NUMBER characters?");

if (passNumbers === true) {
    for (var i = 0; i < passLength; i++) {
        var passCharNum = passCharUp.concat(numbersChar);
        passChar = passChar + passCharNum.charAt(Math.floor(Math.random() * Math.floor(passCharNum.length)));
    }
}
console.log(passChar);

// Password special characters inclusion user input
var passSpecialChar = confirm("Do you want your password to include SPECIAL characters?")

if (passSpecialChar === true) {
    for (var i = 0; i < passLength; i++) {
        var passCharSpecial = passCharNum.concat(specialChar);
        passChar = passChar + passCharSpecial.charAt(Math.floor(Math.random() * Math.floor(passCharSpecial.length)));
    }
}
console.log(passChar);


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);