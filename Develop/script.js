// Assignment Code
var generateBtn = document.querySelector("#generate");

// Trying to figure out how to reset the password when user hits the generate button thing
var resetBtn = document.createElement("button")
var divButton = document.createElement("div")
divButton.append(resetBtn)
resetBtn.textContent = "Reset Password Generator"
resetBtn.style.fontSize = "20px"
var footer = document.querySelector(".card-footer")
footer.append(divButton)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  chars = "";
}

// Reset the password generator
function reset() {
  var passwordText = document.querySelector("#password");
  passwordText.value = ""

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to reset button
resetBtn.addEventListener("click", reset)

// Strings of the characters the user can choose to include their password
var alphabetLower = "abcdefghijklmnopqrstuvwxyz"
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "0123456789"
var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-="
var chars = "";

// Add alphabetLower characters to the chars string if user presses OK
function option1 (x) {
  if (x===true) {
    chars = chars.concat(alphabetLower)
  }
}

// Add alphabetUpper characters to the chars string if user presses OK
function option2 (x) {
  if (x===true) {
    chars = chars.concat(alphabetUpper)
  }
}

// Add num characters to the chars string if user presses OK
function option3 (x) {
  if (x===true) {
    chars = chars.concat(num)
  }
}

// Add special characters to the chars string if user presses OK
function option4 (x) {
  if (x===true) {
    chars = chars.concat(special)
  }
}

// Generate a random password based on the users input
function generatePassword() {

  var passwordLength = prompt("How long would you like your password to be?  Please enter a number between 8 - 128.");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 - 128.")
  }

  else if (passwordLength >= 8 || passwordLength <= 128) {

    var lowercase = confirm("Would you like your password to include lowercase characters?");
    option1(lowercase)
    console.log(chars)
    
    var uppercase = confirm("Would you like your password to include uppercase characters?");
    option2(uppercase)
    console.log(chars)

    var numbers = confirm("Would you like your password to include numbers?");
    option3(numbers)
    console.log(chars)

    var specialCharacters = confirm("Would you like your password to include special characters?")
    option4(specialCharacters)
    console.log(chars)

 
      for (i=1; i<=passwordLength; i++) {
        var c = Math.floor(Math.random()*chars.length + 1);
        password += chars.charAt(c)
      }
      return password;
      }

    }

