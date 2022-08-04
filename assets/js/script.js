var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var question = "Type Yes or No, would you like to include: ";
  var passwordCriteria = ["Uppercase", "Lowercase", "Numbers", "Special Characters"];
  var selectedCriteria = [];
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var specialCharacters = "!@#$%^&*";
  var charset = "";
  var randomPassword = "";
  var criteriaAnswer = "";
  var passwordLength = 0;

  for (let i = 0; i < passwordCriteria.length; i++) {
    criteriaAnswer = window.prompt(question + passwordCriteria[i]);
    if (criteriaAnswer.toLowerCase() == "yes") {
      selectedCriteria.push(passwordCriteria[i]);
    }
  }

  // For me: passwordLength will output a string which will get casted into a number
  while (8 > passwordLength || passwordLength > 128) {
    passwordLength = Number(window.prompt("How long would you like your password to be? [Must be 8-128 characters long]"));
  }

  for (let i = 0; i < selectedCriteria.length; i++) {
    switch(selectedCriteria[i]) {
      case "Uppercase":
        charset += uppercase;
        break;
      case "Lowercase":
        charset += lowercase;
        break;
      case "Numbers":
        charset += numbers;
        break;
      case "Special Characters":
        charset += specialCharacters;
        break;
    }
  }

  for (let i = 0; i < passwordLength; i++) {
    randomPassword += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return randomPassword
}

generateBtn.addEventListener("click", writePassword);







// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page