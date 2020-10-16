// Assignment Code
var generateBtn = document.querySelector("#generate");

// Reset the password
function reset() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password
  password = ""

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  chars = "";
  reset()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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

    if (lowercase === false && uppercase ===false && numbers === false && specialCharacters === false) {
      alert("You must select at least one character type for a password to be generated.")
    }
 
      for (i=1; i<=passwordLength; i++) {
        var c = Math.floor(Math.random()*chars.length + 1);
        password += chars.charAt(c)
      }
      return password;
      }
  
    }

