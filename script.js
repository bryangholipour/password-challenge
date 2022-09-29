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

//encompassing all possible characters into a variable set creates one pool of possibilities to draw from
//could not figure out how to add double quotes into specialC group without causing an error
var allChar ={
  specialC: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
  numbers: "9876543210",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
}


function finalProd() {
  var okGo = "";

//THE 5 PROMPTS NEEDED TO CREATE PASSWORD PARAMETERS//
// let length = prompt("Welcome to the password generator. How many characters would you like your password to contain? (type a number between 8-128 and click OK)");

// let specialC = confirm("Would you like special characters in your password? Click OK for yes and Cancel for no")

// let upperCase = confirm("Would you like uppercase letters in your password? Click OK for yes and Cancel for no")

// let lowerCase = confirm("Would you like lowercase letters in your password? Click OK for yes and Cancel for no")

// let numbers = confirm("Would you like numbers in your password? Click OK for yes and Cancel for no")


  //assign length value to what the user inputs
  //prompt function for text input box 
  let length = prompt("Welcome to the password generator. How many characters would you like your password to contain? (type a number between 8-128 and click OK)");
  if(length < 8 || length > 128){
  //This deploys an additional message (alert variety) when value entered is outside of the required range. Have not figured out how to restart the loop when this happens
    alert("You must choose a value between 8-128! Please Refresh the page to start over")
   } 
  //confirm function for "OK or Cancel" options (no text input box)
  let numbers = confirm("Would you like numbers in your password? Click OK for yes and Cancel for no");
  if(numbers === true) {
    okGo = (okGo + allChar.numbers);
  };
  
  let upperCase = confirm("Would you like uppercase letters in your password? Click OK for yes and Cancel for no");
  if(upperCase === true) {
    okGo = (okGo + allChar.upperCase);
  };
 // each true return is adding that set of characters to the available pool to for the generator to draw from
 let specialC = confirm("Would you like special characters in your password? Click OK for yes and Cancel for no");
  if(specialC === true) {
    okGo = (okGo + allChar.specialC);
  };
  let lowerCase = confirm("Would you like lowercase letters in your password? Click OK for yes and Cancel for no");
  if(lowerCase === true) {
    okGo = (okGo + allChar.lowerCase);
  };

// const random = Math.floor(Math.random() * upperCase.length);
// console.log(random, upperCase[random]);

// console.log((charCount) * (numbers.length))
// if (lowerCase === true){
  // console.log(specialC)
// }
// if (upperCase === true){
  // console.log(upperCase)
// }
// if (specialC === true){
  // console.log(lowerCase)
// }
// if (numbers === true){
  // console.log(numbers)
//


  let password = "";
  for (let i = 0; i < length; i++) {
    //Use Math.floor/ Math.random function to generate random elements from arrays chosen by user
    password = (password + okGo[Math.floor(Math.random() * okGo.length)])
  }
  return password;
}

//result is printed to log, still need to get this result to print to HTML
// console.log(finalProd());
//Instead of console.log, putting the "finalProd" into an alert displays the generated password outside of the console and within view of the user
window.alert("✅here is your password✅: " + finalProd());







