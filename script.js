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
















//THE 5 PROMPTS NEEDED TO CREATE PASSWORD PARAMETERS//
// let length = prompt("Welcome to the password generator. How many characters would you like your password to contain? (type a number between 8-128 and click OK)");

// let specialC = confirm("Would you like special characters in your password? Click OK for yes and Cancel for no")

// let upperCase = confirm("Would you like uppercase letters in your password? Click OK for yes and Cancel for no")

// let lowerCase = confirm("Would you like lowercase letters in your password? Click OK for yes and Cancel for no")

// let numbers = confirm("Would you like numbers in your password? Click OK for yes and Cancel for no")



// const random = Math.floor(Math.random() * upperCase.length);
// console.log(random, upperCase[random]);

// console.log((charCount) * (numbers.length))
// if (okgo2 === "yes"){
  // console.log(specialC)
// }
// if (okgo3 === "yes"){
  // console.log(upperCase)
// }
// if (okgo4 === "yes"){
  // console.log(lowerCase)
// }
// if (okgo5 === "yes"){
  // console.log(numbers)
//