// Assignment Code, locates the element in HTML
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button, adds this method to HTML element, calls the writePassword functio defined above
generateBtn.addEventListener("click", writePassword);

var options = ["special", "alphabetUpper", "alphabetLower", "numbers"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]
var alphabetLower = ["a", "b", "c"]
var numbers = ["0", "1", "2"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

 function randomSelector () {
  var selectCategory = options[Math.floor(Math.random() * 4)]

    if (selectCategory === "special") {
       return special[Math.floor(Math.random() * 5) + 1]
    }

    else if (selectCategory ==="alphabetUpper")  {
      return alphabetUpper[Math.floor(Math.random() * 10) + 1]
    }

    else if (selectCategory ==="alphabetLower") {
      return alphabetLower[Math.floor(Math.random() * 2) + 1]
    }

    else {
      return numbers[Math.floor(Math.random() * 2) + 1]
    }
  
}

// Password prompts
function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be?  Please enter a number between 8 - 128.");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 - 128.")
  }

  else if (passwordLength >= 8 || passwordLength <= 128) {

    var lowercase = confirm("Would you like your password to include lowercase characters?");

    var uppercase = confirm("Would you like your password to include uppercase characters?");

    var numbers = confirm("Would you like your password to include numbers?");

    var specialCharacters = confirm("Would you like your password to include special characters?")

    for (i=0; i<=passwordLength; i++) {
    // alert("Let's make a password!")
    var userPassword = [i]
  
  
    if (lowercase === true && uppercase == true && numbers === true && specialCharacters === true) {
      userPassword.push(randomSelector())
      console.log(userPassword)
      }
    }
    return (userPassword)
  }
}





