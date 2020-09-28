// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// variables defined
var input;
var confirmNum;
var confirmSpecChars;
var confirmUpperCase;
var confirmLowerCase;
var options;

// array for the basic alphabet
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// spec char array
specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// number array
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// variable to convert alphabet array into upper case array
upperCase = [];
// function that converts a lettter into an upper case letter
var upperConvert = function (letter) {
  return letter.toUpperCase();
};
// calls the upper case alphabet converter function to convert a letter then map it to the alphabet array
upperAlpha = alphabet.map(upperConvert);
// start of the password generator function
function generatePassword() {
  // asks for password length after button is clicked if not alert is displayed
  input = parseInt(prompt("How long do you want your desired password to be?"));
    if (!input) {
      alert("Need input");
    }
    // makes sure the input in the correct rage of values
    else if (input <9 || input > 128){
      enter = parseInt(prompt("You must chose a value input between 9 and 128"));
    }
    // if input is correct it proceeds with the rest of promots for password customization options
    else {
      confirmNum = confirm("Do you want your generated password to contain numbers?");
      confirmSpecChars = confirm("Do you want your generated password to contain special characters?");
      confirmUpperCase = confirm("Do you want your generated password to contain upper case letters?");
      confirmLowerCase = confirm("Do you want your generated password to contain lower case letters?");
    };
    // all combos of password customization options

    if(!confirmSpecChars && !confirmNum && !confirmUpperCase && !confirmLowerCase){
      options = alert("you need to select an option");
    }

    else if (confirmSpecChars && confirmNum && confirmUpperCase && confirmLowerCase){
      options = specialChars.concat(numbers, alphabet, upperAlpha);
    }

    else if (confirmSpecChars && confirmNum && confirmUpperCase) {
      options = specialChars.concat(numbers, upperAlpha)
    }
    else if (confirmSpecChars && confirmNumber & confirmLowercase) {
      options = specialChars.concat(numbers, alphabet);
    }
    else if (confirmSpecChars && confirmLowercase && confirmUpperCase) {
      options = specialChars.concat(alphabet, upperAlpha);
    }
    else if (confirmNum && confirmLowerCase && confirmUpperCase) {
      options = numbers.concat(alphabet, upperAlpha);
    }
    else if (confirmCharacter && confirmNum) {
      options = specialChars.concat(numbers);
    }
    else if (confirmSpecChars && confirmLowerCase) {
      options = specialChars.concat(alphabet);
    }
    else if (confirmSpecChars && confirmUpperCase) {
      options = specialChars.concat(alphabet);
    }
    else if (confirmLowerCase && confirmNum){
      options = alphabet.concat(numbers);
    }
    else if (confirmLowerCase && confirmUpperCase){
      options = alphabet.concat(upperAlpha);
    }
    else if (confirmNumber && confirmUppercase){
      options = numbers.concat(upperAlpha);
    }
    else if (confirmNumber){
      options = numbers;
    }
    else if (confirmSpecChars){
      options = specialChars;
    }
    else if (confirmLowercase){
      options = alphabet;
    }
    else if (confirmUpperCase){
      options = upperCase.concat(upperAlpha);
    };

// establishes the password array
    var password = [];
// loop that lasts as long as the input length and randomly selects from the options array and the random selections are stored in the selector array. finally the password array recieves inputs from the selector array
    for (var i=0;i<input;i++){
      var selector = options[Math.floor(Math.random()*options.length)];
      password.push(selector);
    }
// joins password array into one string
    var finalPassword = password.join("");
    UserInput(finalPassword);
    return finalPassword;
}
// displays final password
function UserInput(finalPassword) {
  document.getElementById("password").textContent = finalPassword;
}




